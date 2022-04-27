import useMobile from '../../hooks/useMobile';
import {Image} from '@shopify/hydrogen';

import * as styles from './LencolDuvetBanner.module.scss';

import BannerLencolDuvet from '../../assets/banner_lencol_duvet.png';
import BannerLencolDuvetMobile from '../../assets/banner_lencol_duvet_mobile.png';

export default function LencolDuvetBanner() {
  const {isMobile} = useMobile();

  return (
    <div className={styles.LencolDuvetBannerContainer}>
      <h1 className={styles.LencolDuvetBannerTitle}>
        LENÇOL <span className={styles.OtherColor}>&</span> DUVET
      </h1>
      <Image
        src={isMobile ? BannerLencolDuvetMobile : BannerLencolDuvet}
        width={isMobile ? 429 : 1920}
        height={isMobile ? 333 : 995}
        className={styles.LencolDuvetBannerImage}
      />
    </div>
  );
}
