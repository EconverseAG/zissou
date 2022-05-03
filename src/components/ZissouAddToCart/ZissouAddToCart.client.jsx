import {useCallback, useMemo} from 'react';
import {useProduct, useCart, AddToCartButton} from '@shopify/hydrogen/client';

import useBuyTogether from '../../hooks/useBuyTogether';
import useZissouProduct from '../../hooks/useZissouProduct';

import useMobile from '../../hooks/useMobile';

import * as styles from './ZissouAddToCart.module.scss';

function ZissouAddToCart({text = 'Adicionar ao carrinho', className, ...rest}) {
  const {selectedVariant} = useProduct();
  const {customBagText, customBag} = useZissouProduct();
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

    if (customBag) {
      lines[0].attributes = [
        {
          key: 'Customização',
          value: customBagText,
        },
      ];
    }

    buyTogetherItems?.forEach((item) => {
      if (!item.selectedVariant?.id) return;

      lines.push({
        merchandiseId: item.selectedVariant.id,
      });
    });

    linesAdd(lines);
  }, [selectedVariant, linesAdd, buyTogetherItems, customBag, customBagText]);

  return (
    <AddToCartButton
      className={`${styles.addToCartButton} ${isMobile ? styles.mobile : ''} ${
        className || ''
      }`}
      disabled={isOutOfStock}
      onClickCapture={addToCart}
      {...rest}
    >
      {isOutOfStock ? 'Indisponível' : text}
    </AddToCartButton>
  );
}

export default ZissouAddToCart;
