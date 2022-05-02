import useMobile from '../../hooks/useMobile';
import {Image} from '@shopify/hydrogen';

import * as styles from './CombosBanner.module.scss';

import Banner from '../../assets/combos_banner.png';
import BannerMobile from '../../assets/combos_banner_mobile.png';

export default function CombosBanner() {
  const {isMobile} = useMobile();

  return (
    <div className={styles.CombosContainer}>
      <div className={styles.CombosContainerText}>
        <strong className={styles.CombosTitle}>
          Chegou a hora {isMobile ? <br /> : null} de ter seu Zissou!
        </strong>
        <span className={styles.CombosSubtitle}>
          Leve para casa as
          <strong className={styles.CombosBolder}> últimas unidades</strong> dos
          colchões <br /> da Geração 2021 com até X% off!
        </span>
      </div>
      <Image
        src={isMobile ? BannerMobile : Banner}
        width={isMobile ? 390 : 1920}
        height={isMobile ? 500 : 733}
      />
    </div>
  );
}
