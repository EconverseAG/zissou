import {useMemo} from 'react';
import {useProduct, AddToCartButton} from '@shopify/hydrogen/client';

import useMobile from '../../hooks/useMobile';

import * as styles from './ZissouAddToCart.module.scss';

function ZissouAddToCart({...rest}) {
  const {selectedVariant} = useProduct();
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
      {isOutOfStock ? 'Indisponível' : 'Adicionar ao carrinho'}
    </AddToCartButton>
  );
}

export default ZissouAddToCart;
