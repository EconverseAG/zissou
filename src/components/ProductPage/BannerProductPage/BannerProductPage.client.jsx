import {Image} from '@shopify/hydrogen';

import * as styles from './BannerProductPage.module.scss';

export default function BannerProductPage({product, src}) {
  const {title} = product;

  return (
    <div className={styles.BannerProductPageContainer}>
      <strong className={styles.BannerProductPageTitle}>{title}</strong>
      <Image
        src={src}
        width="1980"
        height="1280"
        className={styles.BannerProductPageImage}
      />
    </div>
  );
}
