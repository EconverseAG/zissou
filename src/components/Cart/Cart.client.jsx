/* eslint-disable react-hooks/exhaustive-deps */
import {useCallback, useEffect, useState} from 'react';

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

import parseUrl from '../../helpers/parseUrl';
const CartEmpyGif = parseUrl('CartEmptyIcon.gif');

import * as styles from './Cart.module.scss';
import Slider from 'react-slick/lib/slider';
import {CheckoutButton} from '@cartpanda/hydrogen-checkout-button';
import shopifyConfig from '../../../shopify.config';
import TotalMinicartPrices from '../../helpers/handleMinicartPrice';

const TruckIcon = parseUrl('TruckIcon.png');
const TravesseiroLavavel = parseUrl('travesseiro-lavavel.png');
const TravesseiroImage = parseUrl('travesseiro-normal.webp');
const LencolBranco = parseUrl('lencol_zissou.png');
const LencolCinza = parseUrl('lencol_cinza.png');
const DuvetBranco = parseUrl('duvet_branco.png');
const DuvetCinza = parseUrl('duvet_cinza.png');
const BaseZissou = parseUrl('base_zissou.png');

export default function Cart({products}) {
  const {isCartOpen, closeCart} = useCartUI();
  const {totalQuantity, lines} = useCart();
  const {estimatedCost} = useCart();

  const totalCartPrice = +estimatedCost?.totalAmount?.amount;

  const [totalLine, setTotalLine] = useState();

  useEffect(() => {
    setTotalLine(TotalMinicartPrices(lines, totalQuantity, totalCartPrice));
  }, [lines, totalCartPrice, totalQuantity]);

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
              <CartItems products={products} />
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
        frete gr??tis
      </strong>
    </header>
  );
}

function CartItems({products}) {
  return (
    <div className={styles.cartItems}>
      <CartLines>
        <LineInCart />
      </CartLines>
      <CartShelf products={products} />
    </div>
  );
}

function LineInCart() {
  const {merchandise, attributes} = useCartLine();
  const [dateEncomenda, setDateEncomenda] = useState('');
  const [dateEncomendaKey, setDateEncomendaKey] = useState('');
  const [customizacao, setCustomizacao] = useState('');

  useEffect(() => {
    if (attributes.length) {
      const attributeDateFiltered = attributes.filter((attribute) => {
        return (
          attribute.key === 'Encomenda' ||
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
        return attribute.key === 'Personaliza????o';
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
            {dateEncomendaKey.length ? (
              <>
                <div className={styles.Props}>
                  <Image src={TruckIcon} width="16" height="11" />
                  <li className={styles.cartItemTopRightSpecsList}>
                    entrega pr??xima de {dateEncomenda}
                  </li>
                </div>
              </>
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
          <CartLinePrice className={styles.cartItemBottomPrice} />
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

function CartShelf(props) {
  const [base, setBase] = useState('');
  const [whiteLencol, setWhiteLencol] = useState('');
  const [grayLencol, setGrayLencol] = useState('');
  const [whiteDuvet, setWhiteDuvet] = useState('');
  const [grayDuvet, setGrayDuvet] = useState('');

  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
  };

  const {lines} = useCart();

  const products = [
    {
      title: 'Base Solteiro',
      id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC80MTMzMDc5NzA4NDg2Ng==',
      metafields:
        props.products.base.data.product.variants.edges[0].node.metafields,
    },
    {
      title: 'Base Solteiro Especial',
      id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC80MTMzMDc5NzExNzYzNA==',
      metafields:
        props.products.base.data.product.variants.edges[1].node.metafields,
    },
    {
      title: 'Base Casal',
      id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC80MTMzMDc5NzE1MDQwMg==',
      metafields:
        props.products.base.data.product.variants.edges[2].node.metafields,
    },
    {
      title: 'Base Queen',
      id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC80MTMzMDc5NzE4MzE3MA==',
      metafields:
        props.products.base.data.product.variants.edges[3].node.metafields,
    },
    {
      title: 'Base King BR',
      id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC80MTMzMDc5NzIxNTkzOA==',
      metafields:
        props.products.base.data.product.variants.edges[4].node.metafields,
    },
    {
      title: 'Base King',
      id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC80MTMzMDc5NzI0ODcwNg==',
      metafields:
        props.products.base.data.product.variants.edges[5].node.metafields,
    },
    {
      title: 'Len??ol Branco Solteiro',
      id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8xOTU1ODE2MzU0NjE4NQ==',
      metafields:
        props.products.whiteLencol.data.product.variants.edges[0].node
          .metafields,
    },
    {
      title: 'Len??ol Branco Solteiro Especial',
      id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8xOTU1ODE5NzcyMzIwOQ==',
      metafields:
        props.products.whiteLencol.data.product.variants.edges[1].node
          .metafields,
    },
    {
      title: 'Len??ol Branco Casal',
      id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8xOTU1ODE5Nzc1NTk3Nw==',
      metafields:
        props.products.whiteLencol.data.product.variants.edges[2].node
          .metafields,
    },
    {
      title: 'Len??ol Branco Queen',
      id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8xOTU1ODE5Nzc4ODc0NQ==',
      metafields:
        props.products.whiteLencol.data.product.variants.edges[3].node
          .metafields,
    },
    {
      title: 'Len??ol Branco King BR',
      id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8xOTU1ODE5NzgyMTUxMw==',
      metafields:
        props.products.whiteLencol.data.product.variants.edges[4].node
          .metafields,
    },
    {
      title: 'Len??ol Branco King',
      id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8xOTU1ODE5Nzg1NDI4MQ==',
      metafields:
        props.products.whiteLencol.data.product.variants.edges[5].node
          .metafields,
    },
    {
      title: 'Len??ol Cinza Solteiro',
      id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC80MTQ4MjU4MTk2NzA0Mg==',
      metafields:
        props.products.grayLencol.data.product.variants.edges[0].node
          .metafields,
    },
    {
      title: 'Len??ol Cinza Solteiro Especial',
      id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC80MTQ4MjU4MTk5OTgxMA==',
      metafields:
        props.products.grayLencol.data.product.variants.edges[1].node
          .metafields,
    },
    {
      title: 'Len??ol Cinza Casal',
      id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC80MTQ4MjU4MjAzMjU3OA==',
      metafields:
        props.products.grayLencol.data.product.variants.edges[2].node
          .metafields,
    },
    {
      title: 'Len??ol Cinza Queen',
      id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC80MTQ4MjU4MjA2NTM0Ng==',
      metafields:
        props.products.grayLencol.data.product.variants.edges[3].node
          .metafields,
    },
    {
      title: 'Len??ol Cinza King BR',
      id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC80MTQ4MjU4MjA5ODExNA==',
      metafields:
        props.products.grayLencol.data.product.variants.edges[4].node
          .metafields,
    },
    {
      title: 'Len??ol Cinza King',
      id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC80MTQ4MjU4MjEzMDg4Mg==',
      metafields:
        props.products.grayLencol.data.product.variants.edges[5].node
          .metafields,
    },
    {
      title: 'Duvet Branco Solteiro',
      id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zMTcwOTk4MTQ0MjEyMQ==',
      metafields:
        props.products.whiteDuvet.data.product.variants.edges[0].node
          .metafields,
    },
    {
      title: 'Duvet Branco Casal Queen',
      id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zMTcwOTk4MTQ3NDg4OQ==',
      metafields:
        props.products.whiteDuvet.data.product.variants.edges[1].node
          .metafields,
    },
    {
      title: 'Duvet Branco King King BR',
      id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zMTcwOTk4MTUwNzY1Nw==',
      metafields:
        props.products.whiteDuvet.data.product.variants.edges[2].node
          .metafields,
    },
    {
      title: 'Duvet Cinza Solteiro',
      id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC80MTQ4MjU4ODk3OTM5NA==',
      metafields:
        props.products.grayDuvet.data.product.variants.edges[0].node.metafields,
    },
    {
      title: 'Duvet Cinza Casal Queen',
      id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC80MTQ4MjU4OTAxMjE2Mg==',
      metafields:
        props.products.grayDuvet.data.product.variants.edges[1].node.metafields,
    },
    {
      title: 'Duvet Cinza King King BR',
      id: 'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC80MTQ4MjU4OTA0NDkzMA==',
      metafields:
        props.products.grayDuvet.data.product.variants.edges[2].node.metafields,
    },
  ];

  let productFiltered = products
    .sort((a, b) =>
      a.title.length > b.title.length
        ? 1
        : a.title.length < b.title.length
        ? -1
        : 0,
    )
    .filter((product) => {
      return product.title.includes(
        lines[0].merchandise.selectedOptions[0].value.split(' (')[0],
      );
    });

  const [showBase, setShowBase] = useState(false);

  const removeItem = (e) => {
    const item = e.currentTarget.parentNode.parentNode.parentNode;
    item.remove();
  };

  useEffect(() => {
    lines.map((line) => {
      if (line.merchandise.product.title.includes('Colch??o')) {
        setShowBase(true);
      }
    });

    let baseFiltered = productFiltered.filter((product) => {
      return product.title.includes('Base');
    });

    if (baseFiltered.length > 0) {
      setBase(baseFiltered[0]?.id);
    } else {
      setBase(
        products.filter((product) => {
          return product.title.includes('Base Solteiro');
        })[0]?.id,
      );
    }

    let whiteLencolFiltered = productFiltered.filter((product) => {
      return product.title.includes('Len??ol Branco');
    });

    if (whiteLencolFiltered.length > 0) {
      setWhiteLencol(whiteLencolFiltered[0]);
    } else {
      setWhiteLencol(
        products.filter((product) => {
          return product.title.includes('Len??ol Branco Solteiro');
        })[0],
      );
    }

    let grayLencolFiltered = productFiltered.filter((product) => {
      return product.title.includes('Len??ol Cinza');
    });

    if (grayLencolFiltered.length > 0) {
      setGrayLencol(grayLencolFiltered[0]);
    } else {
      setGrayLencol(
        products.filter((product) => {
          return product.title.includes('Len??ol Cinza Solteiro');
        })[0],
      );
    }

    let whiteDuvetFiltered = productFiltered.filter((product) => {
      return product.title.includes('Duvet Branco');
    });

    if (whiteDuvetFiltered.length > 0) {
      setWhiteDuvet(whiteDuvetFiltered[0]?.id);
    } else {
      setWhiteDuvet(
        products.filter((product) => {
          return product.title.includes('Duvet Branco Solteiro');
        })[0]?.id,
      );
    }

    let grayDuvetFiltered = productFiltered.filter((product) => {
      return product.title.includes('Duvet Cinza');
    });

    if (grayDuvetFiltered.length > 0) {
      setGrayDuvet(grayDuvetFiltered[0]?.id);
    } else {
      setGrayDuvet(
        products.filter((product) => {
          return product.title.includes('Duvet Cinza Solteiro');
        })[0]?.id,
      );
    }
  }, [lines, productFiltered, products]);

  const filterProductByMetafield = useCallback((product) => {
    return product.metafields?.edges?.find(({node}) => {
      return node.key === 'data_de_restoque';
    });
  }, []);

  return (
    <div className={styles.cartShelfContainer}>
      <span className={styles.cartShelfTitle}>
        COMPLETE SUA{' '}
        <p className={styles.cartShelfTitleOtherColor}>EXPERI??NCIA DE SONO</p>
        <br />
        QUANTO MAIS PRODUTOS, MAIS VOC??{' '}
        <p className={styles.cartShelfTitleOtherColor}>ECONOMIZA</p>
      </span>
      <div className={styles.cartShelfSlider}>
        <Slider {...settings}>
          {showBase && (
            <div className={styles.slideItem}>
              <span>Base</span>
              <Image src={BaseZissou} width="60" height="40" />
              <AddToCartButton
                variantId={base}
                attributes={
                  filterProductByMetafield(base) && [
                    {
                      key: 'Encomenda',
                      value: filterProductByMetafield(whiteLencol)?.node.value,
                    },
                  ]
                }
                onClickCapture={removeItem}
              >
                Adicionar
              </AddToCartButton>
            </div>
          )}
          <div className={styles.slideItem}>
            <span>Travesseiro Lav??vel</span>
            <Image src={TravesseiroLavavel} width="75" height="24" />
            <AddToCartButton
              variantId={
                'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC80MjA3Njk2MzQwNjAxOA=='
              }
              attributes={
                filterProductByMetafield(
                  props.products.travesseiroWashable.data.product.variants
                    .edges[0].node.metafields,
                ) && [
                  {
                    key: 'Encomenda',
                    value: filterProductByMetafield(
                      props.products.travesseiroWashable.data.product.variants
                        .edges[0].node.metafields,
                    )?.node.value,
                  },
                ]
              }
              onClickCapture={removeItem}
            >
              Adicionar
            </AddToCartButton>
          </div>
          <div className={styles.slideItem}>
            <span>Travesseiro</span>
            <Image src={TravesseiroImage} width="75" height="24" />
            <AddToCartButton
              variantId={
                'Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC80MjA3Njk2MzI3NDk0Ng=='
              }
              attributes={
                filterProductByMetafield(
                  props.products.travesseiro.data.product.variants.edges[0].node
                    .metafields,
                ) && [
                  {
                    key: 'Encomenda',
                    value: filterProductByMetafield(
                      props.products.travesseiro.data.product.variants.edges[0]
                        .node.metafields,
                    )?.node.value,
                  },
                ]
              }
              onClickCapture={removeItem}
            >
              Adicionar
            </AddToCartButton>
          </div>
          <div className={styles.slideItem}>
            <span>Len??ol Branco</span>
            <Image src={LencolBranco} width="60" height="45" />
            <AddToCartButton
              variantId={whiteLencol.id}
              attributes={
                filterProductByMetafield(whiteLencol) && [
                  {
                    key: 'Encomenda',
                    value: filterProductByMetafield(whiteLencol)?.node.value,
                  },
                ]
              }
              onClickCapture={removeItem}
            >
              Adicionar
            </AddToCartButton>
          </div>
          <div className={styles.slideItem}>
            <span>Len??ol Cinza</span>
            <Image src={LencolCinza} width="45" height="30" />
            <AddToCartButton
              variantId={grayLencol.id}
              attributes={
                filterProductByMetafield(grayLencol) && [
                  {
                    key: 'Encomenda',
                    value: filterProductByMetafield(whiteLencol)?.node.value,
                  },
                ]
              }
              onClickCapture={removeItem}
            >
              Adicionar
            </AddToCartButton>
          </div>
          <div className={styles.slideItem}>
            <span>Duvet Branco</span>
            <Image src={DuvetBranco} width="79" height="33" />
            <AddToCartButton
              variantId={whiteDuvet}
              attributes={
                filterProductByMetafield(whiteDuvet) && [
                  {
                    key: 'Encomenda',
                    value: filterProductByMetafield(whiteLencol)?.node.value,
                  },
                ]
              }
              onClickCapture={removeItem}
            >
              Adicionar
            </AddToCartButton>
          </div>
          <div className={styles.slideItem}>
            <span>Duvet Cinza</span>
            <Image src={DuvetCinza} width="79" height="33" />
            <AddToCartButton
              variantId={grayDuvet}
              attributes={
                filterProductByMetafield(grayDuvet) && [
                  {
                    key: 'Encomenda',
                    value: filterProductByMetafield(whiteLencol)?.node.value,
                  },
                ]
              }
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
              EM AT?? 10X SEM JUROS
            </span>
            <span className={styles.cartTotalInstallments}>
              OU{' '}
              <strong>
                {new Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(totalLinePrice * 0.95)}{' '}
              </strong>
              ?? VISTA
            </span>
          </div>
        </div>
      </div>
      <CheckoutButton
        className={styles.cartCheckout}
        cart={cart}
        config={shopifyConfig}
      >
        FINALIZAR COMPRA
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
          SEU CARRINHO EST?? VAZIO.
        </span>
        <p className={styles.cartEmptyContainerContentText}>
          DESCUBRA OS PRODUTOS ZISSOU E REDEFINA A SUA RELA????O COM O SONO
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
