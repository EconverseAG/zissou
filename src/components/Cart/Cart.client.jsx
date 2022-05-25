import {useEffect, useState} from 'react';

import {
  CartEstimatedCost,
  CartLineImage,
  CartLinePrice,
  CartLineProductTitle,
  CartLineQuantity,
  CartLineQuantityAdjustButton,
  CartLines,
  Image,
  useCart,
  useCartLine,
} from '@shopify/hydrogen/client';
import {Dialog} from '@headlessui/react';

import {useCartUI} from './CartUIProvider.client';

import CartEmpyGif from '../../assets/CartEmptyIcon.gif';

import TruckIcon from '../../assets/TruckIcon.png';

import * as styles from './Cart.module.scss';
import Slider from 'react-slick/lib/slider';
import {CheckoutButton} from "@cartpanda/hydrogen-checkout-button";
import shopifyConfig from '../../../shopify.config';

export default function Cart() {
  const {isCartOpen, closeCart} = useCartUI();
  const {totalQuantity} = useCart();

  return (
    <>
      <Dialog open={isCartOpen} onClose={closeCart}>
        <Dialog.Overlay className={styles.cartOverlay} />
        <div className={styles.cartContainer}>
          {totalQuantity === 0 ? (
            <CartEmpty />
          ) : (
            <>
              <CartHeader />
              <CartItems />
              <CartFooter />
            </>
          )}
        </div>
      </Dialog>
    </>
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
    <div className={styles.cartItems}>
      <CartLines>
        <LineInCart />
      </CartLines>
      <CartShelf />
    </div>
  );
}

function LineInCart() {
  const {merchandise, attributes} = useCartLine();
  const [dateEncomenda, setDateEncomenda] = useState('');
  const [customizacao, setCustomizacao] = useState('');
  const date = new Date();
  const plus1Month = new Date(date.setMonth(date.getMonth() + 1));
  const plus2Months = new Date(date.setMonth(date.getMonth() + 2));

  useEffect(() => {
    if (attributes.length) {
      const attributeDateFiltered = attributes.filter((attribute) => {
        return (
          attribute.key === 'Encomenda' ||
          attribute.key === 'EntregaFutura10OFF' ||
          attribute.key === 'EntregaFutura5OFF' ||
          attribute.key === 'DateCustom5OFF' ||
          attribute.key === 'DateCustom10OFF' ||
          attribute.key === 'DateCustom'
        );
      });

      if (attributeDateFiltered.length > 0) {
        setDateEncomenda(attributeDateFiltered[0].value);
      }

      const attributeCustomFiltered = attributes.filter((attribute) => {
        return attribute.key === 'Customização';
      });

      if (attributeCustomFiltered.length > 0) {
        setCustomizacao(attributeCustomFiltered[0].value);
      }
    }
  }, [attributes]);

  return (
    <div className={styles.cartItem}>
      <div className={styles.cartItemTop}>
        <CartLineImage options={{width: '76', height: '48', crop: 'center'}} />
        <div className={styles.cartItemTopRight}>
          <CartLineProductTitle
            className={styles.cartItemTopRightProductName}
          />
          <ul className={styles.cartItemTopRightSpecs}>
            {merchandise.selectedOptions.map(({value}) => (
              <div key={value} className={styles.Props}>
                <IconSize />
                <li className={styles.cartItemTopRightSpecsList}>{value}</li>
              </div>
            ))}
            {dateEncomenda && dateEncomenda.includes('-') ? (
              <div className={styles.Props}>
                <Image src={TruckIcon} width="16" height="11" />
                <li className={styles.cartItemTopRightSpecsList}>
                  entrega próxima de{' '}
                  {dateEncomenda.split('-')[2] +
                    '/' +
                    dateEncomenda.split('-')[1] +
                    '/' +
                    dateEncomenda.split('-')[0]}
                </li>
              </div>
            ) : dateEncomenda.includes('EntregaFutura5OFF') ? (
              <>
                <div className={styles.Props}>
                  <Image src={TruckIcon} width="16" height="11" />
                  <li className={styles.cartItemTopRightSpecsList}>
                    entrega próxima de{' '}
                    {date.getUTCDate() +
                      '/' +
                      (plus1Month.getUTCMonth() + 1) +
                      '/' +
                      date.getFullYear()}
                  </li>
                </div>
                <div className={styles.Props}>
                  <Label />
                  <li
                    className={styles.cartItemTopRightSpecsList}
                    style={{color: '#F48580', fontFamily: 'ZonaProBold'}}
                  >
                    5% OFF
                  </li>
                </div>
              </>
            ) : dateEncomenda.includes('EntregaFutura10OFF') ? (
              <>
                <div className={styles.Props}>
                  <Image src={TruckIcon} width="16" height="11" />
                  <li className={styles.cartItemTopRightSpecsList}>
                    entrega próxima de{' '}
                    {date.getUTCDate() +
                      '/' +
                      plus2Months.getUTCMonth() +
                      '/' +
                      date.getFullYear()}
                  </li>
                </div>
                <div className={styles.Props}>
                  <Label />
                  <li
                    className={styles.cartItemTopRightSpecsList}
                    style={{color: '#F48580', fontFamily: 'ZonaProBold'}}
                  >
                    10% OFF
                  </li>
                </div>
              </>
            ) : dateEncomenda.length ? (
              <div className={styles.Props}>
                <Image src={TruckIcon} width="16" height="11" />
                <li className={styles.cartItemTopRightSpecsList}>
                  entrega próxima de {dateEncomenda}
                </li>
              </div>
            ) : customizacao ? (
              <div className={styles.Props}>
                <li
                  className={styles.cartItemTopRightSpecsList}
                  style={{margin: 0, fontFamily: 'ZonaProBlack'}}
                >
                  Personalizado: {customizacao}
                </li>
              </div>
            ) : null}
          </ul>
        </div>
        <CartLineQuantityAdjustButton adjust="remove" className={styles.Remove}>
          X
        </CartLineQuantityAdjustButton>
      </div>
      <div className={styles.cartItemBottom}>
        <CartItemQuantity />
        {dateEncomenda.includes('EntregaFutura5OFF') ? (
          <div className={styles.PriceCartLine}>
            <CartLinePrice className={styles.OldPrice} />
            <span className={styles.cartItemBottomPrice}>
              {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(merchandise.priceV2.amount * 0.95)}
            </span>
          </div>
        ) : dateEncomenda.includes('EntregaFutura10OFF') ? (
          <div className={styles.PriceCartLine}>
            <CartLinePrice className={styles.OldPrice} />
            <span className={styles.cartItemBottomPrice}>
              {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(merchandise.priceV2.amount * 0.9)}
            </span>
          </div>
        ) : (
          <div className={styles.PriceCartLine}>
            <CartLinePrice className={styles.cartItemBottomPrice} />
          </div>
        )}
      </div>
    </div>
  );
}

function CartItemQuantity() {
  return (
    <div className={styles.cartItemBottomQuantity}>
      <CartLineQuantityAdjustButton
        adjust="decrease"
        aria-label="Decrease quantity"
      >
        <MinusQuantity />
      </CartLineQuantityAdjustButton>
      <CartLineQuantity
        as="div"
        className={styles.cartItemBottomQuantityValue}
      />
      <CartLineQuantityAdjustButton
        adjust="increase"
        aria-label="Increase quantity"
      >
        <PlusQuantity />
      </CartLineQuantityAdjustButton>
    </div>
  );
}

function CartShelf() {
  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
  };

  return (
    <div className={styles.cartShelfContainer}>
      <span className={styles.cartShelfTitle}>
        COMPLETE SUA{' '}
        <p className={styles.cartShelfTitleOtherColor}>EXPERIÊNCIA DE SONO</p>
        <br />
        QUANTO MAIS PRODUTOS, MAIS VOCÊ{' '}
        <p className={styles.cartShelfTitleOtherColor}>ECONOMIZA</p>
      </span>
      <div className={styles.cartShelfSlider}>
        <Slider {...settings}>
          <div className={styles.slideItem}>
            <span>Lençol Zissou</span>
            <Image
              src="https://cdn.shopify.com/s/files/1/1526/6199/products/FOTO1-HD_copy.jpg?v=1569801700"
              width="45"
              height="30"
            />
            <button>Adicionar</button>
          </div>
          <div className={styles.slideItem}>
            <span>Lençol Zissou</span>
            <Image
              src="https://cdn.shopify.com/s/files/1/1526/6199/products/FOTO1-HD_copy.jpg?v=1569801700"
              width="45"
              height="30"
            />
            <button>Adicionar</button>
          </div>
          <div className={styles.slideItem}>
            <span>Lençol Zissou</span>
            <Image
              src="https://cdn.shopify.com/s/files/1/1526/6199/products/FOTO1-HD_copy.jpg?v=1569801700"
              width="45"
              height="30"
            />
            <button>Adicionar</button>
          </div>
          <div className={styles.slideItem}>
            <span>Lençol Zissou</span>
            <Image
              src="https://cdn.shopify.com/s/files/1/1526/6199/products/FOTO1-HD_copy.jpg?v=1569801700"
              width="45"
              height="30"
            />
            <button>Adicionar</button>
          </div>
          <div className={styles.slideItem}>
            <span>Lençol Zissou</span>
            <Image
              src="https://cdn.shopify.com/s/files/1/1526/6199/products/FOTO1-HD_copy.jpg?v=1569801700"
              width="45"
              height="30"
            />
            <button>Adicionar</button>
          </div>
          <div className={styles.slideItem}>
            <span>Lençol Zissou</span>
            <Image
              src="https://cdn.shopify.com/s/files/1/1526/6199/products/FOTO1-HD_copy.jpg?v=1569801700"
              width="45"
              height="30"
            />
            <button>Adicionar</button>
          </div>
        </Slider>
      </div>
    </div>
  );
}

function CartFooter() {
  const {discountCodes, estimatedCost} = useCart();

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
            <span className={styles.cartDiscountPrice}></span>
          </div>
        ) : null}
        <div className={styles.cartTotal}>
          <span className={styles.cartTotalTitle}>TOTAL</span>
          <div className={styles.cartTotalPrices}>
            <div className={styles.cartTotalPrice}>
              {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(total)}
            </div>
            <span className={styles.cartTotalDiscount}>
              EM ATÉ 10X SEM JUROS
            </span>
            <span className={styles.cartTotalInstallments}>
              OU{' '}
              <strong>
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(total * 0.95)}{' '}
              </strong>
              À VISTA
            </span>
          </div>
        </div>
      </div>
      <CheckoutButton className={styles.cartCheckout} items={lines} config={shopifyConfig}>
        FINALIZAR COMPRA (CartPanda)
      </CheckoutButton>
    </footer>
  );
}

function CartEmpty() {
  const {closeCart} = useCartUI();
  return (
    <div className={styles.cartEmptyContainer}>
      <button className={styles.cartEmptyCloseCart} onClick={closeCart}>
        FECHAR
      </button>
      <Image src={CartEmpyGif} width="100" height="100" />
      <div className={styles.cartEmptyContainerContent}>
        <strong className={styles.cartEmptyContainerContentTitle}>OPS,</strong>
        <span className={styles.cartEmptyContainerContentSubtitle}>
          SEU CARRINHO ESTÁ VAZIO.
        </span>
        <p className={styles.cartEmptyContainerContentText}>
          DESCUBRA OS PRODUTOS ZISSOU E REDEFINA A SUA RELAÇÃO COM O SONO
        </p>
      </div>
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

function IconSize() {
  return (
    <svg width={16} viewBox="0 0 16 7" xmlns="http://www.w3.org/2000/svg">
      <g fill="none" fillRule="evenodd" className="Symbols">
        <g fill="#425264" fillRule="nonzero" className="LineItem">
          <g className="CartItem-Inner">
            <g className="CartItemContent">
              <g className="Size">
                <g className="Ruler">
                  <path
                    d="M15.037 0c.532 0 .963.421.963.941V6.06c0 .52-.43.941-.962.941H.962A.952.952 0 0 1 0 6.059V.94C0 .421.43 0 .962 0h14.075ZM15 6V1h-1.366v1.804h-.798V1h-.947v2.906h-.798V1h-.947v1.804h-.798V1H8.4v2.906h-.8V1h-.947v1.782h-.798V1H4.91v2.883h-.8V1h-.947v1.782h-.798V1H1v5h14Z"
                    className="Shape"
                  />
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

function MinusQuantity() {
  return (
    <svg
      width="20px"
      height="20px"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <g
        id="Symbols"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <g id="LineItem" transform="translate(-72.000000, -30.000000)">
          <g id="CartItem-Inner" transform="translate(12.000000, 9.000000)">
            <g id="CartItemContent" transform="translate(60.000000, 1.000000)">
              <g id="qtySelector" transform="translate(1.000000, 17.000000)">
                <g id="btn-qty--" transform="translate(0.000000, 4.000000)">
                  <rect
                    id="MinusIcon"
                    fill="#f48580"
                    x={3}
                    y={8}
                    width={12}
                    height={2}
                  />
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}

function PlusQuantity() {
  return (
    <svg
      width="20px"
      height="20px"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <g
        id="Symbols"
        stroke="none"
        strokeWidth={1}
        fill="none"
        fillRule="evenodd"
      >
        <g id="LineItem" transform="translate(-118.000000, -30.000000)">
          <g id="CartItem-Inner" transform="translate(12.000000, 9.000000)">
            <g id="CartItemContent" transform="translate(60.000000, 1.000000)">
              <g id="qtySelector" transform="translate(1.000000, 17.000000)">
                <g id="btn-qty-+" transform="translate(46.000000, 4.000000)">
                  <path
                    d="M10,3 L10,8 L15,8 L15,10 L10,10 L10,15 L8,15 L8,10 L3,10 L3,8 L8,8 L8,3 L10,3 Z"
                    id="PlusIcon"
                    fill="#f48580"
                  />
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}
