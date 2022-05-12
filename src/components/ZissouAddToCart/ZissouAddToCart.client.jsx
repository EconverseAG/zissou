import {useCallback, useMemo} from 'react';
import {useProduct, useCart, AddToCartButton} from '@shopify/hydrogen/client';

import useBuyTogether from '../../hooks/useBuyTogether';
import useZissouProduct from '../../hooks/useZissouProduct';

import useMobile from '../../hooks/useMobile';

import * as styles from './ZissouAddToCart.module.scss';

function ZissouAddToCart({text = 'Adicionar ao carrinho', className, ...rest}) {
  const {selectedVariant} = useProduct();
  const {
    customBagText,
    customBag,
    coral5,
    coral10,
    blue5,
    blue10,
    coral5Hybrid,
    coral10Hybrid,
    coralIsHybrid,
    isCoral,
    isColchao,
  } = useZissouProduct();
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

    // Lógica para entrega futura
    if (
      text.includes('Compre com 5% de desconto') &&
      !coralIsHybrid &&
      isCoral
    ) {
      let coral5Filtered = coral5.variants.edges.filter((item) => {
        return item.node.title == selectedVariant.title;
      });

      lines = [
        {
          merchandiseId: coral5Filtered[0].node.id,
        },
      ];
    } else if (
      text.includes('Compre com 10% de desconto') &&
      !coralIsHybrid &&
      isCoral
    ) {
      let coral10Filtered = coral10.variants.edges.filter((item) => {
        return item.node.title == selectedVariant.title;
      });

      lines = [
        {
          merchandiseId: coral10Filtered[0].node.id,
        },
      ];
    }

    if (
      text.includes('Compre com 5% de desconto') &&
      coralIsHybrid &&
      isCoral
    ) {
      let coral5HybridFiltered = coral5Hybrid.variants.edges.filter((item) => {
        return item.node.title == selectedVariant.title;
      });

      lines = [
        {
          merchandiseId: coral5HybridFiltered[0].node.id,
        },
      ];
    } else if (
      text.includes('Compre com 10% de desconto') &&
      coralIsHybrid &&
      isCoral
    ) {
      let coral10HybridFiltered = coral10Hybrid.variants.edges.filter(
        (item) => {
          return item.node.title == selectedVariant.title;
        },
      );

      lines = [
        {
          merchandiseId: coral10HybridFiltered[0].node.id,
        },
      ];
    }

    if (text.includes('Compre com 5% de desconto') && isColchao && !isCoral) {
      let blue5Filtered = blue5.variants.edges.filter((item) => {
        return item.node.title == selectedVariant.title;
      });

      lines = [
        {
          merchandiseId: blue5Filtered[0].node.id,
        },
      ];
    } else if (
      text.includes('Compre com 10% de desconto') &&
      isColchao &&
      !isCoral
    ) {
      let blue10Filtered = blue10.variants.edges.filter((item) => {
        return item.node.title == selectedVariant.title;
      });

      lines = [
        {
          merchandiseId: blue10Filtered[0].node.id,
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
    selectedVariant,
    linesAdd,
    buyTogetherItems,
    customBag,
    customBagText,
    coral5,
    text,
    coral10,
    coral5Hybrid,
    coral10Hybrid,
    coralIsHybrid,
    isCoral,
    isColchao,
    blue5,
    blue10,
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
