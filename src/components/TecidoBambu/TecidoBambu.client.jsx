import useMobile from '../../hooks/useMobile';
import {Image} from '@shopify/hydrogen';

import * as styles from './TecidoBambu.module.scss';

import TecidoBambuImage from '../../assets/tecido_bambu.png';
import TecidoBambuImageMobile from '../../assets/tecido_bambu_mobile.png';

export default function TecidoBambu() {
  const {isMobile} = useMobile();

  return (
    <div className={styles.TecidoBambuContainer}>
      <div className={styles.TecidoBambuLeft}>
        <span className={styles.TecidoBambuLeftTitle}>
          O tecido de bambu do seu{' '}
          <strong className={styles.OtherColor}>Lençol & Duvet</strong> em uma
          escala de espinhos de cactos até pétalas de rosas
        </span>
      </div>
      <div className={styles.TecidoBambuRight}>
        <Image
          src={isMobile ? TecidoBambuImageMobile : TecidoBambuImage}
          width={isMobile ? 392 : 1051}
          height={isMobile ? 159 : 323}
        />
      </div>
    </div>
  );
}
