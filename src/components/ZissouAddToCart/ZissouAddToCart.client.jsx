import {useCallback, useMemo} from 'react';
import {useProduct, useCart, AddToCartButton} from '@shopify/hydrogen/client';

import useBuyTogether from '../../hooks/useBuyTogether';
import useZissouProduct from '../../hooks/useZissouProduct';

import useMobile from '../../hooks/useMobile';

import * as styles from './ZissouAddToCart.module.scss';

function ZissouAddToCart({
  text = 'Adicionar ao carrinho',
  className,
  EntregaFutura5OFF,
  EntregaFutura10OFF,
  Date,
  ...rest
}) {
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
    let lines = [
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

    if (EntregaFutura5OFF) {
      lines[0].attributes = [
        {
          key: 'EntregaFutura5OFF',
          value: 'EntregaFutura5OFF',
        },
      ];
    } else if (EntregaFutura10OFF) {
      lines[0].attributes = [
        {
          key: 'EntregaFutura10OFF',
          value: 'EntregaFutura10OFF',
        },
      ];
    } else if (Date) {
      lines[0].attributes = [
        {
          key: 'Date',
          value: Date,
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
  }, [
    selectedVariant?.id,
    customBag,
    EntregaFutura5OFF,
    EntregaFutura10OFF,
    Date,
    buyTogetherItems,
    linesAdd,
    customBagText,
  ]);

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
