import {useCart} from '@shopify/hydrogen/client';

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

        <div
          className={`bg-coral-400 text-xs rounded-full leading-none text-white absolute bottom-3 right-1 flex items-center justify-center transform translate-y-1/2 transition-all ${
            totalQuantity > 0 ? 'h-4 w-4 top-0' : 'h-4 w-4 top-0'
          }`}
          aria-hidden
        >
          {totalQuantity > 0 ? totalQuantity : 0}
        </div>
      </div>
      <span className="sr-only">Cart, {totalQuantity} items</span>
    </>
  );
}
