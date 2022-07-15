import {useCallback, useMemo} from 'react';
import {useProduct, useCart} from '@shopify/hydrogen/client';

import useBuyTogether from '../../hooks/useBuyTogether';
import useZissouProduct from '../../hooks/useZissouProduct';

import useMobile from '../../hooks/useMobile';

import * as styles from './ZissouAddToCart.module.scss';

function ZissouAddToCart({
  text = 'Adicionar ao carrinho',
  className,
  Date,
  is5OFF,
  is10OFF,
  scrollToProductSection,
  ...rest
}) {
  const {selectedVariant} = useProduct();
  const {customBagText, customBag} = useZissouProduct();
  const {buyTogetherItems} = useBuyTogether();
  const {isMobile} = useMobile();

  const cart = useCart();

  console.log(selectedVariant.id);

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

    let restockDate = selectedVariant.metafields.edges.filter((item) => {
      return item.node.key === 'data_de_restoque';
    });

    if (restockDate.length > 0) {
      lines[0].attributes = [
        {
          key: 'Encomenda',
          value:
            restockDate[0].node.value.split('-')[2] +
            '/' +
            restockDate[0].node.value.split('-')[1] +
            '/' +
            restockDate[0].node.value.split('-')[0],
        },
      ];
    }

    if (customBag) {
      lines[0].attributes = [
        {
          key: 'Personalização',
          value: customBagText,
        },
      ];
    }

    if (Date) {
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

    if (!cart.id) {
      setTimeout(() => {
        cart.cartCreate({lines});
      }, 1000);
    } else {
      cart.linesAdd(lines);
    }
  }, [
    selectedVariant?.id,
    selectedVariant.metafields.edges,
    customBag,
    Date,
    buyTogetherItems,
    cart,
    customBagText,
    is5OFF,
    is10OFF,
  ]);

  const handleScrollToProductSection = useCallback(() => {
    // scroll to id #product-section
    const element = document.getElementById('product-section');
    element.scrollIntoView({behavior: 'smooth'});
  }, []);

  return (
    <button
      className={`${styles.addToCartButton} ${isMobile ? styles.mobile : ''} ${
        className || ''
      }`}
      onClickCapture={
        scrollToProductSection ? handleScrollToProductSection : addToCart
      }
      disabled={isOutOfStock}
      {...rest}
    >
      {isOutOfStock ? 'Indisponível' : text}
    </button>
  );
}

export default ZissouAddToCart;
