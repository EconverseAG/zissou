import {useEffect, useState} from 'react';

import {
  CartLineImage,
  CartLinePrice,
  CartLineProductTitle,
  CartLineQuantity,
  CartLineQuantityAdjustButton,
  CartLines,
  Image,
  useCart,
  useCartLine,
  AddToCartButton,
} from '@shopify/hydrogen/client';
import {Dialog} from '@headlessui/react';

import {useCartUI} from './CartUIProvider.client';

import CartEmpyGif from '../../assets/CartEmptyIcon.gif';

import TruckIcon from '../../assets/TruckIcon.png';

import * as styles from './Cart.module.scss';
import Slider from 'react-slick/lib/slider';
import {CheckoutButton} from '@cartpanda/hydrogen-checkout-button';
import shopifyConfig from '../../../shopify.config';
import TotalMinicartPrices from '../../helpers/handleMinicartPrice';

import TravesseiroLavavel from '../../assets/travesseiro-lavavel.png';
import LencolBranco from '../../assets/lencol_zissou.png';
import LencolCinza from '../../assets/lencol_cinza.png';
import DuvetBranco from '../../assets/duvet_branco.png';
import DuvetCinza from '../../assets/duvet_cinza.png';
import BaseZissou from '../../assets/base_zissou.png';

export default function Cart({
  base,
  whiteLencol,
  grayLencol,
  whiteDuvetCover,
  grayDuvetCover,
  travesseiroWashable,
}) {
  const {isCartOpen, closeCart} = useCartUI();
  const {totalQuantity, lines} = useCart();

  const [totalLine, setTotalLine] = useState();

  useEffect(() => {
    setTotalLine(TotalMinicartPrices(lines, totalQuantity));
  }, [lines, totalQuantity]);

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
              <CartItems
                totalLine={totalLine}
                base={base}
                whiteLencol={whiteLencol}
                grayLencol={grayLencol}
                whiteDuvetCover={whiteDuvetCover}
                grayDuvetCover={grayDuvetCover}
                travesseiroWashable={travesseiroWashable}
              />
              <CartFooter totalLine={totalLine} />
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

function CartItems({
  base,
  whiteLencol,
  grayLencol,
  whiteDuvetCover,
  grayDuvetCover,
  travesseiroWashable,
}) {
  return (
    <div className={styles.cartItems}>
      <CartLines>
        <LineInCart />
      </CartLines>
      <CartShelf
        base={base}
        whiteLencol={whiteLencol}
        grayLencol={grayLencol}
        whiteDuvetCover={whiteDuvetCover}
        grayDuvetCover={grayDuvetCover}
        travesseiroWashable={travesseiroWashable}
      />
    </div>
  );
}

function LineInCart() {
  const {merchandise, attributes} = useCartLine();
  const [dateEncomenda, setDateEncomenda] = useState('');
  const [dateEncomendaKey, setDateEncomendaKey] = useState('');
  const [customizacao, setCustomizacao] = useState('');
  const date = new Date();
  const plus1Month = new Date(date.setMonth(date.getMonth() + 1));
  const plus2Months = new Date(date.setMonth(date.getMonth() + 2));

  const cart = useCartLine();
  const totalCart = useCart();
  const totalCartPrice = +totalCart.estimatedCost.totalAmount.amount;
  const productPriceInfo = TotalMinicartPrices(
    [cart],
    totalCart.totalQuantity,
    totalCartPrice,
  );

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
        setDateEncomendaKey(attributeDateFiltered[0].key);
      }

      const attributeCustomFiltered = attributes.filter((attribute) => {
        return attribute.key === 'Personalização';
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
            {customizacao && (
              <div className={styles.Props}>
                <li
                  className={styles.cartItemTopRightSpecsList}
                  style={{margin: 0, fontFamily: 'ZonaProBlack'}}
                >
                  Personalizado: {customizacao}
                </li>
              </div>
            )}
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
            ) : dateEncomendaKey.includes('EntregaFutura5OFF') ||
              dateEncomendaKey.includes('EntregaFutura10OFF') ? (
              <>
                <div className={styles.Props}>
                  <Image src={TruckIcon} width="16" height="11" />
                  <li className={styles.cartItemTopRightSpecsList}>
                    entrega próxima de{' '}
                    {dateEncomendaKey.includes('EntregaFutura5OFF')
                      ? date.getUTCDate() +
                        '/' +
                        (plus1Month.getUTCMonth() + 1) +
                        '/' +
                        date.getFullYear()
                      : date.getUTCDate() +
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
                    {productPriceInfo[0].discount > 0
                      ? Math.ceil(productPriceInfo[0].discount * 100)
                      : dateEncomendaKey.replace(/(\D)+/g, '')}
                    % OFF
                  </li>
                </div>
              </>
            ) : dateEncomendaKey.length ? (
              <>
                <div className={styles.Props}>
                  <Image src={TruckIcon} width="16" height="11" />
                  <li className={styles.cartItemTopRightSpecsList}>
                    entrega próxima de {dateEncomenda}
                  </li>
                </div>
                <div className={styles.Props}>
                  <Label />
                  <li
                    className={styles.cartItemTopRightSpecsList}
                    style={{color: '#F48580', fontFamily: 'ZonaProBold'}}
                  >
                    {productPriceInfo[0].discount > 0
                      ? Math.ceil(productPriceInfo[0].discount * 100)
                      : dateEncomendaKey.replace(/(\D)+/g, '')}
                  </li>
                </div>
              </>
            ) : totalCart.totalQuantity >= 2 ? (
              <div className={styles.Props}>
                <Label />
                <li
                  className={styles.cartItemTopRightSpecsList}
                  style={{color: '#F48580', fontFamily: 'ZonaProBold'}}
                >
                  {Math.ceil(productPriceInfo[0].discount * 100)}% OFF
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
        <div className={styles.PriceCartLine}>
          {productPriceInfo[0].hasDiscount || dateEncomendaKey ? (
            <>
              <CartLinePrice className={styles.OldPrice} />
              <span className={styles.cartItemBottomPrice}>
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(productPriceInfo[0].price)}
              </span>
            </>
          ) : (
            <CartLinePrice className={styles.cartItemBottomPrice} />
          )}
        </div>
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

function CartShelf({
  base,
  whiteLencol,
  grayLencol,
  whiteDuvetCover,
  grayDuvetCover,
  travesseiroWashable,
}) {
  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
  };
  const [showBase, setShowBase] = useState(false);
  const {lines} = useCart();

  const [baseFiltered, setBaseFiltered] = useState();
  const [whiteLencolFiltered, setWhiteLencolFiltered] = useState();
  const [grayLencolFiltered, setGrayLencolFiltered] = useState();
  const [whiteDuvetCoverFiltered, setWhiteDuvetCoverFiltered] = useState();
  const [grayDuvetCoverFiltered, setGrayDuvetCoverFiltered] = useState();
  const [travesseiroWashableFiltered, setTravesseiroWashableFiltered] =
    useState();

  useEffect(() => {
    lines.map((item) => {
      let itemOption = item.merchandise.selectedOptions[0].value;
      if (itemOption.includes('King') && !itemOption.includes('King BR')) {
        setBaseFiltered(
          base.variants.edges.filter((item) => {
            return item.node.title
              .toLowerCase()
              .includes(itemOption.split(' (')[0].toLowerCase());
          })[1],
        );

        setWhiteLencolFiltered(
          whiteLencol.variants.edges.filter((item) => {
            return item.node.title
              .toLowerCase()
              .includes(itemOption.split(' (')[0].toLowerCase());
          })[1],
        );

        setGrayLencolFiltered(
          grayLencol.variants.edges.filter((item) => {
            return item.node.title
              .toLowerCase()
              .includes(itemOption.split(' (')[0].toLowerCase());
          })[1],
        );
      } else {
        setBaseFiltered(
          base.variants.edges.filter((item) => {
            return item.node.title
              .toLowerCase()
              .includes(itemOption.split(' (')[0].toLowerCase());
          })[0],
        );

        setWhiteLencolFiltered(
          whiteLencol.variants.edges.filter((item) => {
            return item.node.title
              .toLowerCase()
              .includes(itemOption.split(' (')[0].toLowerCase());
          })[0],
        );

        setGrayLencolFiltered(
          grayLencol.variants.edges.filter((item) => {
            return item.node.title
              .toLowerCase()
              .includes(itemOption.split(' (')[0].toLowerCase());
          })[0],
        );
      }

      setWhiteDuvetCoverFiltered(
        whiteDuvetCover.variants.edges.filter((item) => {
          return item.node.title
            .toLowerCase()
            .includes(itemOption.split(' (')[0].toLowerCase());
        })[0],
      );

      setGrayDuvetCoverFiltered(
        grayDuvetCover.variants.edges.filter((item) => {
          return item.node.title
            .toLowerCase()
            .includes(itemOption.split(' (')[0].toLowerCase());
        })[0],
      );

      setTravesseiroWashableFiltered(
        travesseiroWashable.variants.edges.filter((item) => {
          return item.node.title
            .toLowerCase()
            .includes(itemOption.split(' (')[0].toLowerCase());
        })[0],
      );

      if (item.merchandise.product.title.includes('Colchão')) {
        setShowBase(true);
      }
    });
  }, [
    base,
    grayDuvetCover,
    grayLencol,
    lines,
    travesseiroWashable,
    whiteDuvetCover,
    whiteLencol,
  ]);

  const removeItem = (e) => {
    const item = e.currentTarget.parentNode.parentNode.parentNode;
    item.remove();
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
          {showBase && (
            <div className={styles.slideItem}>
              <span>Base</span>
              <Image src={BaseZissou} width="60" height="40" />
              <AddToCartButton
                variantId={baseFiltered?.node.id}
                onClickCapture={removeItem}
              >
                Adicionar
              </AddToCartButton>
            </div>
          )}
          <div className={styles.slideItem}>
            <span>Travesseiro Lavável</span>
            <Image src={TravesseiroLavavel} width="75" height="24" />
            <AddToCartButton
              variantId={
                travesseiroWashableFiltered?.node.id ||
                travesseiroWashable.variants.edges[0].node.id
              }
              onClickCapture={removeItem}
            >
              Adicionar
            </AddToCartButton>
          </div>
          <div className={styles.slideItem}>
            <span>Travesseiro</span>
            <Image src={TravesseiroLavavel} width="75" height="24" />
            <AddToCartButton
              variantId={
                travesseiroWashableFiltered?.node.id ||
                travesseiroWashable.variants.edges[0].node.id
              }
              onClickCapture={removeItem}
            >
              Adicionar
            </AddToCartButton>
          </div>
          <div className={styles.slideItem}>
            <span>Lençol Branco</span>
            <Image src={LencolBranco} width="60" height="45" />
            <AddToCartButton
              variantId={whiteLencolFiltered?.node.id}
              onClickCapture={removeItem}
            >
              Adicionar
            </AddToCartButton>
          </div>
          <div className={styles.slideItem}>
            <span>Lençol Cinza</span>
            <Image src={LencolCinza} width="45" height="30" />
            <AddToCartButton
              variantId={grayLencolFiltered?.node.id}
              onClickCapture={removeItem}
            >
              Adicionar
            </AddToCartButton>
          </div>
          <div className={styles.slideItem}>
            <span>Duvet Branco</span>
            <Image src={DuvetBranco} width="79" height="33" />
            <AddToCartButton
              variantId={whiteDuvetCoverFiltered?.node.id}
              onClickCapture={removeItem}
            >
              Adicionar
            </AddToCartButton>
          </div>
          <div className={styles.slideItem}>
            <span>Duvet Cinza</span>
            <Image src={DuvetCinza} width="79" height="33" />
            <AddToCartButton
              variantId={grayDuvetCoverFiltered?.node.id}
              onClickCapture={removeItem}
            >
              Adicionar
            </AddToCartButton>
          </div>
        </Slider>
      </div>
    </div>
  );
}

function CartFooter({totalLine}) {
  const cart = useCart();
  const {estimatedCost} = cart;

  const totalCart = +estimatedCost.totalAmount.amount;

  let TOTAL_LINE = Array.isArray(totalLine) ? totalLine : [totalLine];

  const totalLinePrice = TOTAL_LINE.reduce((a, b) => a + b.price, 0);

  return (
    <footer className={styles.cartFooter}>
      <div>
        <div className={styles.cartSubtotal}>
          <span className={styles.cartSubtotalTitle}>SUBTOTAL</span>
          <strong
            className={styles.cartSubtotalPrice}
            style={{
              textDecoration:
                totalCart > totalLinePrice ? 'line-through' : 'none',
            }}
          >
            {new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(totalCart)}
          </strong>
        </div>
        {totalCart > totalLinePrice ? (
          <div className={styles.cartDiscount}>
            <span className={styles.cartDiscountTitle}>
              <Label />
              SEU DESCONTO:
            </span>
            <span className={styles.cartDiscountPrice}>
              {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(totalCart - totalLinePrice)}
            </span>
          </div>
        ) : null}
        <div className={styles.cartTotal}>
          <span className={styles.cartTotalTitle}>TOTAL</span>
          <div className={styles.cartTotalPrices}>
            <div className={styles.cartTotalPrice}>
              {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(totalLinePrice)}
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
                }).format(totalLinePrice * 0.95)}{' '}
              </strong>
              À VISTA
            </span>
          </div>
        </div>
      </div>
      <CheckoutButton
        className={styles.cartCheckout}
        cart={cart}
        config={shopifyConfig}
      >
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
