import useMobile from '../../hooks/useMobile';
import {Image} from '@shopify/hydrogen';

import * as styles from './TecidoBambu.module.scss';
import parseUrl from '../../helpers/parseUrl';

const TecidoBambuImage = parseUrl('tecido_bambu.png');
const TecidoBambuImageMobile = parseUrl('tecido_bambu_mobile.png');

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
          width={isMobile ? 392 : 800}
          height={isMobile ? 159 : 246}
        />
      </div>
    </div>
  );
}
