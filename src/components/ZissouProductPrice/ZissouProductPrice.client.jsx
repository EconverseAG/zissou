import {ProductPrice, useMoney, useProduct} from '@shopify/hydrogen/client';
import {useMemo} from 'react';

import useMobile from '../../hooks/useMobile';

import * as styles from './ZissouProductPrice.module.scss';

function ZissouProductPrice({...rest}) {
  const {selectedVariant} = useProduct();
  const {isMobile} = useMobile();

  const rawInstallmentPrice = useMemo(() => {
    const price = {...selectedVariant.priceV2};

    price.amount = String(Number(price.amount) / 10.0);

    return price;
  }, [selectedVariant]);

  const installment = useMoney(rawInstallmentPrice);

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
          Em até <strong>10X</strong>
          <br /> de <strong>{installment.localizedString}</strong>
        </span>
      </div>
      <div className={styles.disclaimer}>
        <p>Pagamento à vista com 5% de desconto</p>
      </div>
    </div>
  );
}

export default ZissouProductPrice;
