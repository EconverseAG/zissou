import {useCallback, useMemo} from 'react';
import {useProduct, useCart} from '@shopify/hydrogen/client';

import useMobile from '../../hooks/useMobile';

import * as styles from './ZissouAddToCart.module.scss';

function ZissouAddToCart({text = 'Adicionar ao carrinho', className, ...rest}) {
  const {selectedVariant} = useProduct();
  const {linesAdd} = useCart();
  const {isMobile} = useMobile();

  const isOutOfStock = useMemo(
    () => !selectedVariant.availableForSale,
    [selectedVariant],
  );

  const addToCart = useCallback(() => {
    const lines = [
      {
        merchandiseId: selectedVariant?.id,
      },
    ];

    linesAdd(lines);
  }, [selectedVariant, linesAdd]);

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
