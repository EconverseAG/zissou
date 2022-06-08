import {Image, useProduct} from '@shopify/hydrogen/client';

import * as styles from './BannerProductPage.module.scss';

export default function BannerProductPage({title, src}) {
  const {title: productName} = useProduct();

  return (
    <div className={styles.BannerProductPageContainer}>
      <strong className={styles.BannerProductPageTitle}>
        {title ??
          productName.split(' +')[0].split('Original')[0] ??
          productName}
      </strong>
      <Image
        src={src}
        width="1980"
        height="1280"
        className={styles.BannerProductPageImage}
      />
    </div>
  );
}
