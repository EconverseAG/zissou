import {ProductPrice, useProduct} from '@shopify/hydrogen/client';
import useMobile from '../../hooks/useMobile';

import * as styles from './ZissouProductPrice.module.scss';

function ZissouProductPrice({...rest}) {
  const {selectedVariant} = useProduct();
  const {isMobile} = useMobile();

  return (
    <div
      className={`${styles.wrapper} ${isMobile ? styles.mobile : ''} ${
        rest.className || ''
      } `}
    >
      {selectedVariant?.compareAtPriceV2 &&
        selectedVariant?.compareAtPriceV2?.amount !==
          selectedVariant?.priceV2?.amount && (
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
        )}
      <div className={styles.bestPrice}>
        <ProductPrice
          className={styles.bestPriceValue}
          variantId={selectedVariant.id}
        />
        <span className={styles.bestPriceInfo}>
          À vista <small>(5% de desconto)</small>
        </span>
      </div>
    </div>
  );
}

export default ZissouProductPrice;
