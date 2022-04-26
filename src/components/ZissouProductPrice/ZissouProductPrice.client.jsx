import {ProductPrice, useProduct} from '@shopify/hydrogen/client';

import * as styles from './ZissouProductPrice.module.scss';

function ZissouProductPrice() {
  const {selectedVariant} = useProduct();

  return (
    <>
      <span className={styles.listPrice}>
        De{' '}
        <ProductPrice
          className={styles.listPriceValue}
          priceType="compareAt"
          variantId={selectedVariant.id}
          as="strong"
        />{' '}
        Por
      </span>
      <div className={styles.bestPrice}>
        <ProductPrice
          className={styles.bestPriceValue}
          variantId={selectedVariant.id}
        />
        <span className={styles.bestPriceInfo}>
          À vista <small>(5% de desconto)</small>
        </span>
      </div>
    </>
  );
}

export default ZissouProductPrice;
