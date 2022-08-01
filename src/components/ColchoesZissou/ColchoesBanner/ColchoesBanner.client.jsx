import * as styles from './ColchoesBanner.module.scss';

import parseUrl from '../../../helpers/parseUrl';

const ColchoesBannerVideo =
  'https://cdn.shopify.com/videos/c/o/v/3a322304c5a745bd9d1ed2de738eab34.mp4';
const ColchoesBannerVideoMobile =
  'https://cdn.shopify.com/videos/c/o/v/3bf10aa2981f493aa5ff1446ec3d6eac.mp4';
const ColchoesBannerThumbMobile = parseUrl('colchoes_banner_thumb_mobile.jpeg');

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
