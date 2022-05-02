import {useCallback, useMemo} from 'react';
import {useProduct, useCart} from '@shopify/hydrogen/client';

import useBuyTogether from '../../hooks/useBuyTogether';

import useMobile from '../../hooks/useMobile';

import * as styles from './ZissouAddToCart.module.scss';

function ZissouAddToCart({text = 'Adicionar ao carrinho', className, ...rest}) {
  const {selectedVariant} = useProduct();
  const {buyTogetherItems} = useBuyTogether();
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

    buyTogetherItems?.forEach((item) => {
      if (!item.selectedVariant?.id) return;

      lines.push({
        merchandiseId: item.selectedVariant.id,
      });
    });

    linesAdd(lines);
  }, [selectedVariant, linesAdd, buyTogetherItems]);

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
