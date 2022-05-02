import {useCallback, useEffect, useMemo} from 'react';
import {useProduct, useCart} from '@shopify/hydrogen/client';

import useMobile from '../../hooks/useMobile';

import * as styles from './ZissouAddToCart.module.scss';

function ZissouAddToCart({text = 'Adicionar ao carrinho', ...rest}) {
  const product = useProduct();
  const {linesAdd, status} = useCart();
  const {isMobile} = useMobile();

  const isOutOfStock = useMemo(
    () => !product.selectedVariant.availableForSale,
    [product.selectedVariant],
  );

  const addToCart = useCallback(() => {
    const lines = [
      {
        merchandiseId: product?.selectedVariant?.id,
      },
    ];

    linesAdd(lines);
  }, [product, linesAdd]);

  useEffect(() => {
    console.log('>>> status', status);
  }, [status]);

  return (
    <button
      className={`${styles.addToCartButton} ${isMobile ? styles.mobile : ''} ${
        rest.className || ''
      }`}
      disabled={isOutOfStock}
      onClick={addToCart}
    >
      {isOutOfStock ? 'Indisponível' : text}
    </button>
  );
}

export default ZissouAddToCart;
