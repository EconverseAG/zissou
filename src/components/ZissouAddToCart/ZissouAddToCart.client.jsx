import {useCallback, useMemo} from 'react';
import {useProduct, useCart} from '@shopify/hydrogen/client';

import useMobile from '../../hooks/useMobile';

import * as styles from './ZissouAddToCart.module.scss';

function ZissouAddToCart({text = 'Adicionar ao carrinho', className, ...rest}) {
  const product = useProduct();
  const {linesAdd} = useCart();
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

  return (
    <button
      className={`${styles.addToCartButton} ${isMobile ? styles.mobile : ''} ${
        className || ''
      }`}
      disabled={isOutOfStock}
      onClick={addToCart}
      {...rest}
    >
      {isOutOfStock ? 'Indisponível' : text}
    </button>
  );
}

export default ZissouAddToCart;
