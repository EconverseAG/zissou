import {useEffect, useCallback} from 'react';
import {Image, useProduct} from '@shopify/hydrogen/client';

import BagCustomization from '../BagCustomization';

import useZissouProduct from '../../hooks/useZissouProduct';
import useMobile from '../../hooks/useMobile';

import * as styles from './TravesseiroSpecialOptions.module.scss';

import TravesseiroLavavel from '../../assets/travesseiro-lavavel.png';

function TravesseiroSpecialOptions({className, ...rest}) {
  const {washable, customBag, setCustomBag, setWashable} = useZissouProduct();
  const {options, setSelectedOption} = useProduct();

  const {isMobile} = useMobile();

  const toggleWashable = useCallback(
    (e) => {
      e.preventDefault();

      setWashable(!washable);
    },
    [washable, setWashable],
  );

  const toggleBagCustomization = useCallback(
    (e) => {
      e.preventDefault();

      const currentCustomBag = !customBag;

      setCustomBag(currentCustomBag);
    },
    [customBag, setCustomBag],
  );

  useEffect(() => {
    setSelectedOption(options[0].name, options[0].values[customBag ? 1 : 0]);
  }, [washable, customBag, setSelectedOption, options]);

  return (
    <div
      className={`${styles.wrapper} ${isMobile ? styles.mobile : ''} ${
        className || ''
      }`}
      {...rest}
    >
      <span>Complemente do seu jeito:</span>
      <fieldset className={styles.selection}>
        <div className={styles.selectionOption}>
          <button
            className={styles.selectionOptionControl}
            onClick={toggleWashable}
          >
            <input
              type="checkbox"
              id="travesseiro-washable"
              name="travesseiro-special-options"
              checked={washable}
              readOnly
            />
            <span className={styles.selectionOptionControlCheckbox}></span>
            <label
              className={styles.selectionOptionControlLabel}
              htmlFor="travesseiro-washable"
            >
              <span>Opção lavável</span>
              {washable && <strong>+ R$100,00</strong>}
            </label>
          </button>
          {washable && (
            <div className={styles.selectionOptionContent}>
              <Image src={TravesseiroLavavel} width={280} height={91} />
              <p>Chegou a hora do banho :)</p>
              <br />
              <p>
                Com essa opção a Capa do seu Travesseiro Zissou ganha uma nova
                função: ela pode ser lavada!
              </p>
              <br />
              <p>
                Para isso, os compartimentos internos agora possuem zíperes o
                que possibilita a remoção dos enchimentos de fibra siliconizada
                permitindo a lavagem da capa.
              </p>
              <br />
              <small>
                *Os enchimentos de fibra e as camadas não devem ser lavadas para
                garantir que não sejam danificados (confira as infos sobre
                lavagem)
              </small>
            </div>
          )}
        </div>
        <div className={styles.selectionOption}>
          <button
            className={styles.selectionOptionControl}
            onClick={toggleBagCustomization}
          >
            <input
              type="checkbox"
              id="travesseiro-customization"
              name="travesseiro-special-options"
              checked={customBag}
              readOnly
            />
            <span className={styles.selectionOptionControlCheckbox}></span>
            <label
              className={styles.selectionOptionControlLabel}
              htmlFor="travesseiro-customization"
            >
              <span>Customização na bag</span>
              {customBag && <strong>+ R$50,00</strong>}
            </label>
          </button>
          {customBag && (
            <div className={styles.selectionOptionContent}>
              <BagCustomization />
            </div>
          )}
        </div>
      </fieldset>
    </div>
  );
}

export default TravesseiroSpecialOptions;
