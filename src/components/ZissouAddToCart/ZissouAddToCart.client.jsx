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
  // date,
  ...rest
}) {
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

    // Lógica para entrega futura - Compra fechada direto pelo botão (Compre com 5% de desconto ou Compre com 10% de desconto) (5% ou 10%)
    if (EntregaFutura5OFF && !coralIsHybrid && isCoral) {
      let coral5Filtered = coral5.variants.edges.filter((item) => {
        return item.node.title == selectedVariant.title;
      });

      lines = [
        {
          merchandiseId: coral5Filtered[0].node.id,
        },
      ];
    } else if (EntregaFutura10OFF && !coralIsHybrid && isCoral) {
      let coral10Filtered = coral10.variants.edges.filter((item) => {
        return item.node.title == selectedVariant.title;
      });

      lines = [
        {
          merchandiseId: coral10Filtered[0].node.id,
        },
      ];
    }

    if (EntregaFutura5OFF && coralIsHybrid && isCoral) {
      let coral5HybridFiltered = coral5Hybrid.variants.edges.filter((item) => {
        return item.node.title == selectedVariant.title;
      });

      lines = [
        {
          merchandiseId: coral5HybridFiltered[0].node.id,
        },
      ];
    } else if (EntregaFutura10OFF && coralIsHybrid && isCoral) {
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

    if (EntregaFutura5OFF && isColchao && !isCoral) {
      let blue5Filtered = blue5.variants.edges.filter((item) => {
        return item.node.title == selectedVariant.title;
      });

      lines = [
        {
          merchandiseId: blue5Filtered[0].node.id,
        },
      ];
    } else if (EntregaFutura10OFF && isColchao && !isCoral) {
      let blue10Filtered = blue10.variants.edges.filter((item) => {
        return item.node.title == selectedVariant.title;
      });

      lines = [
        {
          merchandiseId: blue10Filtered[0].node.id,
        },
      ];
    }

    // Lógica para entrega futura - Simulação de oferta
    // if (!!date && !coralIsHybrid && isCoral) {
    //   const hoje = new Date();

    //   //compara se a data é maior que um mês e menor que dois meses
    //   if (
    //     hoje.getTime() <
    //       new Date(date).getTime() + 2592000000 &&
    //     hoje.getTime() > new Date(date).getTime()
    //   ) {

    //   if (isCoral) {
    //     console.log('>>> date: ', date);
    //   }
    // }

    buyTogetherItems?.forEach((item) => {
      if (!item.selectedVariant?.id) return;

      lines.push({
        merchandiseId: item.selectedVariant.id,
      });
    });

    linesAdd(lines);
  }, [
    selectedVariant?.id,
    selectedVariant.title,
    customBag,
    EntregaFutura5OFF,
    coralIsHybrid,
    isCoral,
    EntregaFutura10OFF,
    isColchao,
    // date,
    buyTogetherItems,
    linesAdd,
    customBagText,
    coral5,
    coral10,
    coral5Hybrid,
    coral10Hybrid,
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
