import * as styles from './ColchoesBanner.module.scss';
import ColchoesBannerVideo from '../../../assets/colchoes_banner.mp4';
import ColchoesBannerVideoMobile from '../../../assets/colchoes_banner_mobile.mp4';
import useMobile from '../../../hooks/useMobile';

export default function ColchoesBanner() {
  const {isMobile} = useMobile();

  return (
    <div className={styles.ColchoesBannerContainer}>
      <video
        className={styles.video}
        src={isMobile ? ColchoesBannerVideoMobile : ColchoesBannerVideo}
        autoPlay
        loop
        muted
        controls
      />
    </div>
  );
}
