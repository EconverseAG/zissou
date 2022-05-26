import {useCallback, useEffect, useMemo, useState} from 'react';
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
  is5OFF,
  is10OFF,
  ...rest
}) {
  const {selectedVariant} = useProduct();
  const {customBagText, customBag} = useZissouProduct();
  const {buyTogetherItems} = useBuyTogether();
  const {linesAdd} = useCart();
  const {isMobile} = useMobile();

  const [hasRestockDate, setHasRestockDate] = useState(false);

  const isOutOfStock = useMemo(
    () => !selectedVariant.availableForSale,
    [selectedVariant],
  );

  useEffect(() => {
    let restockDate = selectedVariant.metafields.edges.filter((item) => {
      return item.node.key === 'data_de_restoque';
    });

    if (restockDate.length > 0) {
      setHasRestockDate(true);
    } else {
      setHasRestockDate(false);
    }
  }, [selectedVariant]);

  const addToCart = useCallback(() => {
    let lines = [
      {
        merchandiseId: selectedVariant?.id,
      },
    ];

    let restockDate = selectedVariant.metafields.edges.filter((item) => {
      return item.node.key === 'data_de_restoque';
    });

    if (restockDate.length > 0) {
      lines[0].attributes = [
        {
          key: 'Encomenda',
          value: restockDate[0].node.value,
        },
      ];
    }

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
          key: is5OFF
            ? 'DateCustom5OFF'
            : is10OFF
            ? 'DateCustom10OFF'
            : 'DateCustom',
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
    selectedVariant,
    customBag,
    EntregaFutura5OFF,
    EntregaFutura10OFF,
    Date,
    buyTogetherItems,
    linesAdd,
    customBagText,
    is5OFF,
    is10OFF,
  ]);

  return (
    <AddToCartButton
      className={`${styles.addToCartButton} ${isMobile ? styles.mobile : ''} ${
        className || ''
      }`}
      onClickCapture={addToCart}
      disabled={isOutOfStock}
      {...rest}
    >
      {isOutOfStock
        ? 'Indisponível'
        : hasRestockDate
        ? 'Encomendar agora'
        : text}
    </AddToCartButton>
  );
}

export default ZissouAddToCart;
