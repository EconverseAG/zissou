import {Image} from '@shopify/hydrogen';

import * as styles from './GostinhoZissou.module.scss';

import LogoBreton from '../../../assets/logo_Breton.webp';
import LogoOrnare from '../../../assets/logo_Ornare.webp';
import LogoRiachuelo from '../../../assets/logo-Riachuelo.webp';
import LogoTrama from '../../../assets/logo-Trama.webp';
import LogoWentz from '../../../assets/logo-Wentz.webp';
import LogoWooding from '../../../assets/logo-Wooding.webp';
import useMobile from '../../../hooks/useMobile';

export default function GostinhoZissou() {
  const {isMobile} = useMobile();

  return (
    <div className={styles.GostinhoZissouContainer}>
      <div className={styles.GostinhoZissouLeft}>
        <strong className={styles.GostinhoZissouLeftTitle}>
          Mais um gostinho de Zissou
        </strong>
        <span className={styles.GostinhoZissouLeftSubtitle}>
          A Zissou conquistou o coração dos
          <br />
          mais sofisticados espaços
          <br />
          de decoração e design
        </span>
      </div>
      <div className={styles.GostinhoZissouRight}>
        <Image
          src={LogoBreton}
          width={isMobile ? '87' : '145'}
          height={isMobile ? '31' : '52'}
        />
        <Image
          src={LogoOrnare}
          width={isMobile ? '100' : '130'}
          height={isMobile ? '49' : '60'}
        />
        <Image
          src={LogoRiachuelo}
          width={isMobile ? '85' : '90'}
          height={isMobile ? '28' : '30'}
        />
        <Image
          src={LogoTrama}
          width={isMobile ? '80' : '100'}
          height={isMobile ? '17' : '21'}
        />
        <Image
          src={LogoWentz}
          width={isMobile ? '70' : '100'}
          height={isMobile ? '27' : '39'}
        />
        <Image
          src={LogoWooding}
          width={isMobile ? '90' : '145'}
          height={isMobile ? '15' : '24'}
        />
      </div>
    </div>
  );
}
