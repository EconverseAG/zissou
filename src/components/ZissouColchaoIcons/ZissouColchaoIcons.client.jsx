import {Image, useProduct} from '@shopify/hydrogen/client';
import useZissouProduct from '../../hooks/useZissouProduct';
import useMobile from '../../hooks/useMobile';
import parseUrl from '../../helpers/parseUrl';

const IconeGarantiaCoral = parseUrl('icone_garantia.png');
const IconeGarantiaBlue = parseUrl('icone_garantia_blue.png');
const IconeGarantiaSpark = parseUrl('icone_garantia_spark.svg');
const IconeEntregaCoral = parseUrl('icone_entrega.png');
const IconeEntregaSpark = parseUrl('icone_entrega_spark.svg');
const IconeEntregaBlue = parseUrl('icone_entrega_prime.png');
const IconeFreteCoral = parseUrl('icone_frete.png');
const IconeFreteBlue = parseUrl('icone_frete_blue.png');
const IconeFreteSpark = parseUrl('icone_frete_spark.svg');
const Icone100DiasCoral = parseUrl('icone_100_dias.png');
const Icone100DiasBlue = parseUrl('icone_100_dias_blue.png');
const Icone100DiasSpark = parseUrl('icone_100_dias_spark.svg');

import * as styles from './ZissouColchaoIcons.module.scss';

export default function ZissouColchaoIcons() {
  const {title} = useProduct();
  const {isCoral, isSpark} = useZissouProduct();
  const {isMobile} = useMobile();

  return (
    <div className={styles.Icons}>
      {isSpark && (
        <div className={styles.Icon}>
          <Image
            src={IconeEntregaSpark}
            width={isMobile ? 33 : 47}
            height={isMobile ? 37 : 53}
            loading={'lazy'}
          />
          <strong
            className={`${styles.IconTitle} ${isCoral && styles.CoralColor}`}
          >
            Entrega <br /> expressa
          </strong>
        </div>
      )}
      <div className={styles.Icon}>
        <Image
          src={
            title.includes('Coral')
              ? IconeGarantiaCoral
              : isSpark
              ? IconeGarantiaSpark
              : IconeGarantiaBlue
          }
          width={isMobile ? 40 : 62}
          height={isMobile ? 28 : 43}
          loading={'lazy'}
        />
        <strong
          className={`${styles.IconTitle} ${isCoral && styles.CoralColor}`}
        >
          10 anos de <br /> garantia
        </strong>
      </div>
      {!isSpark && (
        <div className={styles.Icon}>
          <Image
            src={title.includes('Coral') ? IconeEntregaCoral : IconeEntregaBlue}
            width={isMobile ? 30 : 54}
            height={isMobile ? 33 : 59}
            loading={'lazy'}
          />
          {title.includes('Coral') ? (
            <strong
              className={`${styles.IconTitle} ${isCoral && styles.CoralColor}`}
            >
              entrega <br /> expressa
            </strong>
          ) : (
            <strong
              className={`${styles.IconTitle} ${isCoral && styles.CoralColor}`}
            >
              entrega <br /> prime
            </strong>
          )}
        </div>
      )}
      <div className={styles.Icon}>
        <Image
          src={
            title.includes('Coral')
              ? IconeFreteCoral
              : isSpark
              ? IconeFreteSpark
              : IconeFreteBlue
          }
          width={isMobile ? 38 : 58}
          height={isMobile ? 26 : 40}
          loading={'lazy'}
        />
        <strong
          className={`${styles.IconTitle} ${isCoral && styles.CoralColor}`}
        >
          frete <br /> grátis
        </strong>
      </div>
      <div className={styles.Icon}>
        <Image
          src={
            title.includes('Coral')
              ? Icone100DiasCoral
              : isSpark
              ? Icone100DiasSpark
              : Icone100DiasBlue
          }
          width={isMobile ? 27 : 42}
          height={isMobile ? 24 : 37}
          loading={'lazy'}
        />
        <strong
          className={`${styles.IconTitle} ${isCoral && styles.CoralColor}`}
        >
          100 dias <br /> de teste
        </strong>
      </div>
    </div>
  );
}
