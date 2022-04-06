import {useCart} from '@shopify/hydrogen/client';

import * as styles from '../Header/header.module.scss';

import CartIcon from './CartIcon';

/**
 * A client component that specifies the icon to use if a cart contains merchandise
 */
export default function CartIconWithItems() {
  const {totalQuantity} = useCart();

  return (
    <>
      <div className="relative">
        <CartIcon />

        <div className={styles.cartIconWithItemsBadge}>
          {totalQuantity > 0 ? totalQuantity : 0}
        </div>
      </div>
      <span className="sr-only">Cart, {totalQuantity} items</span>
    </>
  );
}
