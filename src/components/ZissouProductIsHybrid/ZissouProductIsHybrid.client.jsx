import {useState, useEffect, useCallback} from 'react';
import {
  useProduct,
  useMoney,
  flattenConnection,
  Image,
} from '@shopify/hydrogen/client';
import useMobile from '../../hooks/useMobile';
import useZissouProduct from '../../hooks/useZissouProduct';

import * as styles from './ZissouProductIsHybrid.module.scss';
import parseUrl from '../../helpers/parseUrl';

const HybridColchao = parseUrl('hybrid-colchao.gif');

export default function ZissouProductIsHybrid() {
  const [oldProduct, setOldProduct] = useState();
  const [priceDifference, setPriceDifference] = useState({
    amount: 0,
    currencyCode: 'BRL',
  });

  const product = useProduct();
  const {
    coralIsHybrid,
    setCoralIsHybrid,
    isSpark,
    coralHybrid,
    sparkHybrid,
    coral,
    spark,
  } = useZissouProduct();

  const {isMobile} = useMobile();
  const hybridPriceAddition = useMoney(priceDifference);

  const getProductEquivalentVariant = useCallback(
    ({variants}) => {
      variants = flattenConnection(variants);

      const determineSearchTerm = () => {
        const currentVariant = product?.selectedVariant?.title.toLowerCase();

        if (!currentVariant) return '';

        if (currentVariant.includes('solteiro espeical'))
          return 'solteiro especial';
        if (currentVariant.includes('solteiro')) return 'solteiro';
        if (currentVariant.includes('casal')) return 'casal';
        if (currentVariant.includes('king br')) return 'king br';
        if (currentVariant.includes('king')) return 'king';
        if (currentVariant.includes('queen')) return 'queen';
      };

      const searchTerm = determineSearchTerm();

      return (
        variants?.find(({title}) => title.toLowerCase().includes(searchTerm)) ||
        variants[0]
      );
    },
    [product],
  );

  useEffect(() => {
    if (product?.selectedVariant?.id === oldProduct?.selectedVariant?.id)
      return;

    const hybridPrice = getProductEquivalentVariant(
      isSpark ? sparkHybrid : coralHybrid,
    )?.priceV2?.amount;

    const normalPrice = getProductEquivalentVariant(isSpark ? spark : coral)
      ?.priceV2?.amount;

    const difference = {
      ...product?.selectedVariant?.priceV2,
      amount: Number(normalPrice) - Number(hybridPrice),
    };

    setPriceDifference(difference);
    setOldProduct(product);
  }, [
    coral,
    coralHybrid,
    getProductEquivalentVariant,
    isSpark,
    oldProduct,
    priceDifference.amount,
    product,
    spark,
    sparkHybrid,
  ]);

  return (
    <div
      className={`${styles.ZissouProductIsHybridContainer} ${
        isSpark ? styles.spark : ''
      }`}
    >
      <strong className={styles.IsHybridTitle}>
        ADICIONAR SUPORTE H??BRIDO (ESPUMA + MOLAS)
      </strong>
      <div
        className={styles.toggleWrapper}
        style={{
          borderRadius: coralIsHybrid ? '33px 33px 0px 0px' : '33px',
          height: isMobile && coralIsHybrid ? '70px' : null,
          opacity: coralIsHybrid ? 1 : 0.5,
        }}
      >
        <div className={styles.container}>
          <label className={styles.switch} htmlFor="checkbox">
            <input
              type="checkbox"
              id="checkbox"
              onChange={() => setCoralIsHybrid(!coralIsHybrid)}
            />
            <div className={`${styles.slider} ${styles.round}`}></div>
          </label>
        </div>
        <span className={styles.toggleWrapperTitle}>
          Suporte H??brido {isMobile && <br />} (espuma + molas)
          {coralIsHybrid && <br />}
          {coralIsHybrid ? (
            <strong className={styles.Bigger}>
              + {hybridPriceAddition?.localizedString.replace('-', '')}
            </strong>
          ) : (
            ''
          )}
        </span>
      </div>
      {coralIsHybrid && (
        <div
          className={styles.selectedHybrid}
          style={{borderRadius: coralIsHybrid && '0px 0px 33px 33px'}}
        >
          <div className={styles.selectedHybridLeft}>
            <span className={styles.LeftText}>
              Substitui????o do suporte de espuma de alta resili??ncia por{' '}
              <strong className={styles.Bolder}>
                suporte h??brido com molas Leggett & Platt ensacadas
                individualmente
              </strong>
            </span>
            <br />
            <span className={styles.LeftText}>
              ??? 5 cm a mais de altura, com total de {isSpark ? 25 : 30}cm
            </span>
            <br />
            <span className={styles.LeftText}>
              ??? Bounce com maior adaptabilidade ??s curvas do corpo
            </span>
            <br />
            <span className={styles.LeftText}>
              ??? Melhor circula????o interna de ar
            </span>
          </div>
          <div className={styles.selectedHybridRight}>
            <Image
              className={styles.video}
              src={HybridColchao}
              width={isMobile ? 170 : 106}
              height={isMobile ? 264 : 177}
            />
          </div>
        </div>
      )}
    </div>
  );
}
