import {useEffect, useState} from 'react';

import Colchao from './Product/Colchao.client';
import Base from './Product/Base.client';
import Travesseiro from './Product/Travesseiro.client';
import Lencol from './Product/Lencol.client';
import Duvet from './Product/Duvet.client';
import {ZissouProductProvider} from '../hooks/useZissouProduct';
import {useRouteParams} from '@shopify/hydrogen/client';
import Toca from './Product/Toca.client';

export default function ProductDetails({
  product,
  travesseiro,
  travesseiroWashable,
  duvetFilling,
  grayDuvet,
  grayDuvetCover,
  whiteDuvetCover,
  grayLencol,
  whiteLencol,
  base,
  coralHybrid,
  sparkHybrid,
  coral,
  spark,
}) {
  const {handle} = useRouteParams();

  const [isColchao, setIsColchao] = useState(false);
  const [isBase, setIsBase] = useState(false);
  const [isTravesseiro, setIsTravesseiro] = useState(false);
  const [isLencol, setIsLencol] = useState(false);
  const [isDuvet, setIsDuvet] = useState(false);
  const [isToca, setIsToca] = useState(false);

  function resetStates() {
    setIsColchao(false);
    setIsBase(false);
    setIsTravesseiro(false);
    setIsLencol(false);
    setIsDuvet(false);
    setIsToca(false);
  }

  useEffect(() => {
    let products = [];
    product.variants.edges.map((variant, index) => {
      products.push({
        list_position: index,
        product_title: product.title,
        product_id: window.atob(product.id).split('Product/')[1],
        variant_title: variant.node.title,
        variant_id: window.atob(variant.node.id).split('Variant/')[1],
        sku: variant.node.sku,
        quantity: 1,
        id: window.atob(variant.node.id).split('Variant/')[1],
        price: variant.node.priceV2.amount,
        vendor: 'Zissou',
      });
    });

    window.dataLayer.push({
      event: 'product_page_view',
      data: {
        items: products,
        source: 'product_page',
      },
    });
  });

  useEffect(() => {
    resetStates();
    switch (handle) {
      case 'colchao-zissou-coral-original':
        setIsColchao(true);
        break;
      case 'colchao-zissou-blue':
        setIsColchao(true);
        break;
      case 'colchao-zissou-spark':
        setIsColchao(true);
        break;
      case 'duvet-enchimento-zissou':
        setIsDuvet(true);
        break;
      case 'jogo-de-lencol-zissou':
        setIsLencol(true);
        break;
      case 'base-zissou':
        setIsBase(true);
        break;
      case 'travesseiro-zissou':
        setIsTravesseiro(true);
        break;
      case 'toca-zissou':
        setIsToca(true);
        break;
    }
  }, [handle]);

  return (
    <>
      <ZissouProductProvider
        baseProduct={product}
        travesseiro={travesseiro}
        travesseiroWashable={travesseiroWashable}
        duvetFilling={duvetFilling}
        grayDuvet={grayDuvet}
        grayDuvetCover={grayDuvetCover}
        whiteDuvetCover={whiteDuvetCover}
        grayLencol={grayLencol}
        whiteLencol={whiteLencol}
        base={base}
        coralHybrid={coralHybrid}
        sparkHybrid={sparkHybrid}
        coral={coral}
        spark={spark}
        isColchao={isColchao}
        isBase={isBase}
        isDuvet={isDuvet}
        isLencol={isLencol}
        isTravesseiro={isTravesseiro}
        isToca={isToca}
      >
        {isColchao ? (
          <Colchao />
        ) : isBase ? (
          <Base />
        ) : isTravesseiro ? (
          <Travesseiro />
        ) : isLencol ? (
          <Lencol />
        ) : isDuvet ? (
          <Duvet />
        ) : isToca ? (
          <Toca />
        ) : null}
      </ZissouProductProvider>
    </>
  );
}
