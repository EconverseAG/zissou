import * as styles from './ColchoesBanner.module.scss';

import ColchoesBannerVideo from '../../../assets/colchoes_banner.mp4';
import ColchoesBannerVideoMobile from '../../../assets/colchoes_banner_mobile.mp4';
import ColchoesBannerThumbMobile from '../../../assets/colchoes_banner_thumb_mobile.jpeg';

import useMobile from '../../../hooks/useMobile';

export default function ColchoesBanner() {
  const {isMobile} = useMobile();

  return !isMobile ? (
    <div className={styles.ColchoesBannerContainer}>
      <video
        className={styles.video}
        src={ColchoesBannerVideo}
        autoPlay
        loop
        muted
      />
    </div>
  ) : (
    <div className={styles.ColchoesBannerContainer}>
      <video
        className={styles.video}
        src={ColchoesBannerVideoMobile}
        // autoPlay
        loop
        muted
        controls
        poster={ColchoesBannerThumbMobile}
      />
    </div>
  );
}
