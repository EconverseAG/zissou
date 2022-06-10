import useMobile from '../../hooks/useMobile';
import {Image, Link} from '@shopify/hydrogen';

import Lencol from '../../assets/lencol_zissou.png';
import Duvet from '../../assets/duvet_zissou.png';

import * as styles from './LencolOrDuvet.module.scss';

export default function LencolOrDuvet() {
  const {isMobile} = useMobile();

  return (
    <div className={styles.LencolOrDuvetContainer}>
      <div className={styles.LencolOrDuvetLeft}>
        <Image
          src={Lencol}
          width={isMobile ? 260 : 400}
          height={isMobile ? 193 : 297}
        />
        <Link to="/products/jogo-de-lencol-zissou" className={styles.LinkCTA}>
          Lençol Zissou
        </Link>
      </div>
      <div className={styles.LencolOrDuvetRight}>
        <Image
          src={Duvet}
          width={isMobile ? 260 : 400}
          height={isMobile ? 193 : 297}
        />
        <Link to="/products/duvet-enchimento-zissou" className={styles.LinkCTA}>
          Duvet Zissou
        </Link>
      </div>
    </div>
  );
}
