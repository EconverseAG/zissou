import {useState, useEffect, useCallback} from 'react';
import {
  Image,
  useProduct,
  useMoney,
  flattenConnection,
} from '@shopify/hydrogen/client';

import BagCustomization from '../BagCustomization';

import useZissouProduct from '../../hooks/useZissouProduct';
import useMobile from '../../hooks/useMobile';

import * as styles from './TravesseiroSpecialOptions.module.scss';
import parseUrl from '../../helpers/parseUrl';

const TravesseiroLavavel = parseUrl('travesseiro-lavavel.png');

function TravesseiroSpecialOptions({className, ...rest}) {
  const [washablePriceDifference, setWashablePriceDifference] = useState({
    amount: 0,
    currencyCode: 'BRL',
  });
  const [customizationPriceDifference, setCustomizationPriceDifference] =
    useState({
      amount: 0,
      currencyCode: 'BRL',
    });

  const {
    washable,
    customBag,
    setCustomBag,
    setWashable,
    travesseiroWashable,
    travesseiro,
  } = useZissouProduct();
  const {options, selectedOptions, setSelectedOption} = useProduct();

  const product = useProduct();
  const {isMobile} = useMobile();

  const washablePriceAddition = useMoney(washablePriceDifference);
  const customizationPriceAddition = useMoney(customizationPriceDifference);

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
    const optionToSelect = options[0].values[customBag ? 1 : 0];

    if (optionToSelect === selectedOptions.Tipo) return;

    setSelectedOption(options[0].name, options[0].values[customBag ? 1 : 0]);
  }, [washable, customBag, setSelectedOption, options, selectedOptions]);

  useEffect(() => {
    if (
      washablePriceDifference?.amount + customizationPriceDifference?.amount !==
      0
    )
      return;

    const washablePrice = flattenConnection(travesseiroWashable.variants)[0]
      ?.priceV2?.amount;
    const normalPrice = flattenConnection(travesseiro.variants)[0]?.priceV2
      ?.amount;
    const customPrice = flattenConnection(travesseiro.variants)[1]?.priceV2
      ?.amount;

    const washableDifference = {
      ...product?.selectedVariant?.priceV2,
      amount: Number(normalPrice) - Number(washablePrice),
    };
    const customDifference = {
      ...product?.selectedVariant?.priceV2,
      amount: Number(normalPrice) - Number(customPrice),
    };

    setWashablePriceDifference(washableDifference);
    setCustomizationPriceDifference(customDifference);
  }, [
    customizationPriceDifference,
    product,
    travesseiro,
    travesseiroWashable,
    washablePriceDifference,
  ]);

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
              {washable && (
                <strong>
                  + {washablePriceAddition?.localizedString?.replace('-', '')}
                </strong>
              )}
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
              {customBag && (
                <strong>
                  +{' '}
                  {customizationPriceAddition?.localizedString?.replace(
                    '-',
                    '',
                  )}
                </strong>
              )}
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
