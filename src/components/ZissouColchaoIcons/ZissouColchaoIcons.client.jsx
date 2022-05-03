import {Image, useProduct} from '@shopify/hydrogen/client';
import useZissouProduct from '../../hooks/useZissouProduct';
import useMobile from '../../hooks/useMobile';

import IconeGarantiaCoral from '../../assets/icone_garantia.png';
import IconeGarantiaBlue from '../../assets/icone_garantia_blue.png';
import IconeEntregaCoral from '../../assets/icone_entrega.png';
import IconeEntregaBlue from '../../assets/icone_entrega_prime.png';
import IconeFreteCoral from '../../assets/icone_frete.png';
import IconeFreteBlue from '../../assets/icone_frete_blue.png';
import Icone100DiasCoral from '../../assets/icone_100_dias.png';
import Icone100DiasBlue from '../../assets/icone_100_dias_blue.png';

import * as styles from './ZissouColchaoIcons.module.scss';

export default function ZissouColchaoIcons() {
  const {title} = useProduct();
  const {isCoral} = useZissouProduct();
  const {isMobile} = useMobile();

  return (
    <div className={styles.Icons}>
      <div className={styles.Icon}>
        <Image
          src={title.includes('Coral') ? IconeGarantiaCoral : IconeGarantiaBlue}
          width={isMobile ? 40 : 62}
          height={isMobile ? 28 : 43}
        />
        <strong
          className={`${styles.IconTitle} ${isCoral && styles.CoralColor}`}
        >
          10 anos de <br /> garantia
        </strong>
      </div>
      <div className={styles.Icon}>
        <Image
          src={title.includes('Coral') ? IconeEntregaCoral : IconeEntregaBlue}
          width={isMobile ? 30 : 54}
          height={isMobile ? 33 : 59}
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
      <div className={styles.Icon}>
        <Image
          src={title.includes('Coral') ? IconeFreteCoral : IconeFreteBlue}
          width={isMobile ? 38 : 58}
          height={isMobile ? 26 : 40}
        />
        <strong
          className={`${styles.IconTitle} ${isCoral && styles.CoralColor}`}
        >
          frete <br /> grátis
        </strong>
      </div>
      <div className={styles.Icon}>
        <Image
          src={title.includes('Coral') ? Icone100DiasCoral : Icone100DiasBlue}
          width={isMobile ? 27 : 42}
          height={isMobile ? 24 : 37}
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
