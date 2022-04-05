import {
  useCart,
  CartCheckoutButton,
  Link,
  CartLines,
  CartLineImage,
  CartLineProductTitle,
  CartLineQuantityAdjustButton,
  CartLinePrice,
  CartLineQuantity,
  CartEstimatedCost,
  useCartLine,
} from '@shopify/hydrogen/client';
import {Dialog} from '@headlessui/react';

import {useCartUI} from './CartUIProvider.client';
import {BUTTON_PRIMARY_CLASSES} from '../Button.client';

import * as styles from './Cart.module.scss';

export default function Cart() {
  const {isCartOpen, closeCart} = useCartUI();
  const {totalQuantity} = useCart();

  return (
    <div>
      {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions */}
      <div
        className={`z-20 fixed top-0 bottom-0 left-0 right-0 bg-black transition-opacity duration-400 ${
          isCartOpen ? 'opacity-20' : 'opacity-0 pointer-events-none'
        }`}
        onClick={isCartOpen ? closeCart : null}
      />
      <Dialog open={isCartOpen} onClose={closeCart}>
        <Dialog.Overlay className={styles.cartOverlay} />
        <div className={styles.cartContainer}>
          <CartHeader />
          {totalQuantity === 0 ? (
            <CartEmpty />
          ) : (
            <>
              <CartItems />
              <CartFooter />
            </>
          )}
        </div>
      </Dialog>
    </div>
  );
}

function CartHeader() {
  return (
    <header className={styles.cartHeader}>
      <strong className={styles.cartHeaderTitle}>
        100 dias de teste<span className={styles.cartHeaderOtherColor}>,</span>{' '}
        pronta entrega <span className={styles.cartHeaderOtherColor}>e</span>{' '}
        frete grátis
      </strong>
    </header>
  );
}

function CartItems() {
  return (
    <div className={styles.cartItems} role="table" aria-label="Shopping cart">
      <div role="row" className="sr-only">
        <div role="columnheader">Product image</div>
        <div role="columnheader">Product details</div>
        <div role="columnheader">Price</div>
      </div>
      <CartLines>
        <LineInCart />
      </CartLines>
    </div>
  );
}

function LineInCart() {
  const {merchandise} = useCartLine();
  return (
    <div
      role="row"
      className="flex py-7 border-b last:border-b-0 border-gray-300 text-gray-900"
    >
      <div role="cell" className="flex-shrink-0 mr-7">
        <Link to={`/products/${merchandise.product.handle}`}>
          <CartLineImage
            className="bg-white border border-black border-opacity-5 rounded-xl "
            options={{width: 98, height: 98, crop: 'center'}}
          />
        </Link>
      </div>
      <div
        role="cell"
        className="flex flex-col w-full justify-between items-start flex-grow-1 mr-4"
      >
        <Link
          to={`/products/${merchandise.product.handle}`}
          className="hover:underline"
        >
          <CartLineProductTitle className="text-lg font-medium" />
        </Link>
        <ul className="text-xs space-y-1">
          {merchandise.selectedOptions.map(({name, value}) => (
            <li key={name}>
              {name}: {value}
            </li>
          ))}
        </ul>
        <CartItemQuantity />
      </div>
      <div role="cell" className="flex flex-col justify-between items-end">
        <CartLineQuantityAdjustButton
          adjust="remove"
          aria-label="Remove from cart"
          className="disabled:pointer-events-all disabled:cursor-wait"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </CartLineQuantityAdjustButton>
        <CartLinePrice className="text-lg" />
      </div>
    </div>
  );
}

function CartItemQuantity() {
  return (
    <div className="flex border rounded border-gray-300 items-center overflow-auto mt-2">
      <CartLineQuantityAdjustButton
        adjust="decrease"
        aria-label="Decrease quantity"
        className="p-2 disabled:pointer-events-all disabled:cursor-wait"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 text-gray-400"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </CartLineQuantityAdjustButton>
      <CartLineQuantity
        as="div"
        className="p-2 text-gray-900 text-xs text-center"
      />
      <CartLineQuantityAdjustButton
        adjust="increase"
        aria-label="Increase quantity"
        className="p-2 text-gray-400 disabled:pointer-events-all disabled:cursor-wait"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
            clipRule="evenodd"
          />
        </svg>
      </CartLineQuantityAdjustButton>
    </div>
  );
}

function CartFooter() {
  const {discountCodes, estimatedCost} = useCart();
  console.log('>>> ~ CartFooter ~ useCart', useCart());

  let subtotal = +estimatedCost.subtotalAmount.amount;
  let total = +estimatedCost.totalAmount.amount;

  return (
    <footer className={styles.cartFooter}>
      <div>
        <div className={styles.cartSubtotal}>
          <span className={styles.cartSubtotalTitle}>SUBTOTAL</span>
          <CartEstimatedCost
            amountType="subtotal"
            className={styles.cartSubtotalPrice}
            style={{textDecoration: total > subtotal ? 'line-through' : 'none'}}
          />
        </div>
        {discountCodes ? (
          <div className={styles.cartDiscount}>
            <span className={styles.cartDiscountTitle}>
              <Label />
              SEU DESCONTO:
            </span>
            <span className={styles.cartDiscountPrice}>Free</span>
          </div>
        ) : null}
        <div className={styles.cartTotal}>
          <span className={styles.cartTotalTitle}>TOTAL</span>
          <div>
            <CartEstimatedCost
              amountType="total"
              className={styles.cartTotalPrice}
            />
            <span className={styles.cartTotalInstallments}>
              EM ATÉ 10X SEM JUROS
            </span>
          </div>
        </div>
      </div>
      <CartCheckoutButton className={styles.cartCheckout}>
        FINALIZAR COMPRA
      </CartCheckoutButton>
    </footer>
  );
}

function CartEmpty() {
  const {closeCart} = useCartUI();
  return (
    <div className="p-7 flex flex-col">
      <p className="mb-4 text-lg text-gray-500 text-center">
        Your cart is empty
      </p>
      <button
        type="button"
        onClick={closeCart}
        className={BUTTON_PRIMARY_CLASSES}
      >
        Continue Shopping
      </button>
    </div>
  );
}

function Label() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={16}
      height={16}
      viewBox="0 0 436.38 436.38"
      className={styles.cartDiscountLabel}
    >
      <g transform="matrix(1,0,0,1,0,1.4210854715202004e-13)">
        <g xmlns="http://www.w3.org/2000/svg">
          <g>
            <path
              d="M340.38,23.224H206.396c-8.48,0-16.624,3.376-22.624,9.376L9.372,206.968c-12.496,12.496-12.496,32.752,0,45.264    l133.984,133.984c12.496,12.496,32.752,12.496,45.248,0l174.4-174.368c6-6.016,9.376-14.16,9.376-22.656V55.224    C372.38,37.544,358.06,23.224,340.38,23.224z M284.38,135.224c-13.248,0-24-10.752-24-24s10.752-24,24-24s24,10.752,24,24    S297.628,135.224,284.38,135.224z"
              fill="#f48580"
              data-original="#000000"
            />
          </g>
        </g>
        <g xmlns="http://www.w3.org/2000/svg">
          <g>
            <path
              d="M404.38,55.224l-0.016,148.944c0,7.376-2.928,14.464-8.16,19.68L218.988,401.064l2.72,2.72    c12.496,12.496,32.752,12.496,45.248,0l160.032-160c6.016-6,9.392-14.144,9.392-22.624V87.224    C436.38,69.544,422.06,55.224,404.38,55.224z"
              fill="#f48580"
              data-original="#000000"
            />
          </g>
        </g>
      </g>
    </svg>
  );
}
