import * as styles from './ColchoesBanner.module.scss';
import ColchoesBannerVideo from '../../../assets/colchoes_banner.mp4';

export default function ColchoesBanner() {
  return (
    <div className={styles.ColchoesBannerContainer}>
      <video
        className={styles.video}
        src={ColchoesBannerVideo}
        autoPlay
        loop
        muted
      />
    </div>
  );
}
