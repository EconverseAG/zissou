import {useProduct} from '@shopify/hydrogen/client';

import * as styles from './ZissouProductTitle.module.scss';

function ZissouProductTitle({productTitle, color}) {
  const {selectedVariant} = useProduct();

  return (
    <div className={styles.ZissouProductTitleContainer}>
      <h1 className={styles.productTitle}>{productTitle}</h1>
      <strong className={styles.productOption} style={{color}}>
        {selectedVariant.title}
      </strong>
    </div>
  );
}

export default ZissouProductTitle;
