import {useProduct} from '@shopify/hydrogen/client';

import * as styles from './ZissouProductTitle.module.scss';

function ZissouProductTitle({productTitle, color, isHybrid}) {
  const {selectedVariant} = useProduct();

  return (
    <div className={styles.ZissouProductTitleContainer}>
      <h1 className={styles.productTitle}>
        {productTitle}
        {isHybrid && <span> HÍBRIDO</span>}
      </h1>
      <strong className={styles.productOption} style={{color}}>
        {selectedVariant.title}
      </strong>
    </div>
  );
}

export default ZissouProductTitle;
