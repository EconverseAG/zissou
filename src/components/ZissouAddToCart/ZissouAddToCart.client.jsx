import {useMemo} from 'react';
import {AddToCartButton} from '@shopify/hydrogen/client';

import useZissouProduct from '../../hooks/useZissouProduct';

import useMobile from '../../hooks/useMobile';

import * as styles from './ZissouAddToCart.module.scss';

function ZissouAddToCart({text = 'Adicionar ao carrinho', ...rest}) {
  const {selectedVariant} = useZissouProduct();
  const {isMobile} = useMobile();

  const isOutOfStock = useMemo(
    () => !selectedVariant.availableForSale,
    [selectedVariant],
  );

  return (
    <AddToCartButton
      className={`${styles.addToCartButton} ${isMobile ? styles.mobile : ''} ${
        rest.className || ''
      }`}
      disabled={isOutOfStock}
    >
      {isOutOfStock ? 'Indisponível' : text}
    </AddToCartButton>
  );
}

export default ZissouAddToCart;
