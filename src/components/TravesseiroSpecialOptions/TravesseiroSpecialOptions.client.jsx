import {useState, useCallback} from 'react';
import {Image} from '@shopify/hydrogen';

import useMobile from '../../hooks/useMobile';

import * as styles from './TravesseiroSpecialOptions.module.scss';

import TravesseiroLavavel from '../../assets/travesseiro-lavavel.png';

function TravesseiroSpecialOptions({className, ...rest}) {
  const [washableSelected, setWashableSelected] = useState(false);
  const [customBagSelected, setCustomBagSelected] = useState(false);

  const {isMobile} = useMobile();

  const toggleWashable = useCallback(
    (e) => {
      e.preventDefault();

      setWashableSelected(!washableSelected);
    },
    [washableSelected],
  );

  const toggleBagCustomization = useCallback(
    (e) => {
      e.preventDefault();

      setCustomBagSelected(!customBagSelected);
    },
    [customBagSelected],
  );

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
              checked={washableSelected}
            />
            <span className={styles.selectionOptionControlCheckbox}></span>
            <label
              className={styles.selectionOptionControlLabel}
              htmlFor="travesseiro-washable"
            >
              <span>Opção lavável</span>
              {washableSelected && <strong>+ R$100,00</strong>}
            </label>
          </button>
          {washableSelected && (
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
              checked={customBagSelected}
            />
            <span className={styles.selectionOptionControlCheckbox}></span>
            <label
              className={styles.selectionOptionControlLabel}
              htmlFor="travesseiro-customization"
            >
              <span>Customização na bag</span>
              {customBagSelected && <strong>+ R$50,00</strong>}
            </label>
          </button>
          {customBagSelected && (
            <div className={styles.selectionOptionContent}>customização</div>
          )}
        </div>
      </fieldset>
    </div>
  );
}

export default TravesseiroSpecialOptions;
