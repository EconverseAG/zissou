import {Image, useProduct} from '@shopify/hydrogen/client';

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

  return (
    <div className={styles.Icons}>
      <div className={styles.Icon}>
        <Image
          src={title.includes('Coral') ? IconeGarantiaCoral : IconeGarantiaBlue}
          width={62}
          height={43}
        />
        <strong className={`${styles.IconTitle} ${styles.CoralColor}`}>
          10 anos de <br /> garantia
        </strong>
      </div>
      <div className={styles.Icon}>
        <Image
          src={title.includes('Coral') ? IconeEntregaCoral : IconeEntregaBlue}
          width={54}
          height={59}
        />
        {title.includes('Coral') ? (
          <strong className={`${styles.IconTitle} ${styles.CoralColor}`}>
            entrega <br /> expressa
          </strong>
        ) : (
          <strong className={`${styles.IconTitle} ${styles.CoralColor}`}>
            entrega <br /> prime
          </strong>
        )}
      </div>
      <div className={styles.Icon}>
        <Image
          src={title.includes('Coral') ? IconeFreteCoral : IconeFreteBlue}
          width={58}
          height={40}
        />
        <strong className={`${styles.IconTitle} ${styles.CoralColor}`}>
          frete <br /> grátis
        </strong>
      </div>
      <div className={styles.Icon}>
        <Image
          src={title.includes('Coral') ? Icone100DiasCoral : Icone100DiasBlue}
          width={42}
          height={37}
        />
        <strong className={`${styles.IconTitle} ${styles.CoralColor}`}>
          100 dias <br /> de teste
        </strong>
      </div>
    </div>
  );
}
