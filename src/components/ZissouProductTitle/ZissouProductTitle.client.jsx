import {useProduct} from '@shopify/hydrogen/client';
import useZissouProduct from '../../hooks/useZissouProduct';

import * as styles from './ZissouProductTitle.module.scss';

function ZissouProductTitle({productTitle, color}) {
  const {selectedVariant} = useProduct();
  const {coralIsHybrid, isSpark} = useZissouProduct();

  return (
    <div className={styles.ZissouProductTitleContainer}>
      <h1 className={styles.productTitle}>
        {productTitle}
        {coralIsHybrid && (
          <span className={isSpark ? styles.spark : ''}> HÍBRIDO</span>
        )}
      </h1>
      <strong className={styles.productOption} style={{color}}>
        {selectedVariant.title}
      </strong>
    </div>
  );
}

export default ZissouProductTitle;
