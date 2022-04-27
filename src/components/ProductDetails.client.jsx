import {useEffect, useState} from 'react';

import {flattenConnection, ProductProvider} from '@shopify/hydrogen/client';
import Colchao from './Product/Colchao.client';
import Base from './Product/Base.client';
import Travesseiro from './Product/Travesseiro.client';
import Lencol from './Product/Lencol.client';
import Duvet from './Product/Duvet.client';
import {ZissouProductProvider} from '../hooks/useZissouProduct';

export default function ProductDetails({product}) {
  const initialVariant = flattenConnection(product.variants)[0];
  const {title} = product;

  const [isColchao, setIsColchao] = useState(false);
  const [isBase, setIsBase] = useState(false);
  const [isTravesseiro, setIsTravesseiro] = useState(false);
  const [isLencol, setIsLencol] = useState(false);
  const [isDuvet, setIsDuvet] = useState(false);

  useEffect(() => {
    if (title.includes('Colchão')) {
      setIsColchao(true);
    } else if (title.includes('Base')) {
      setIsBase(true);
    } else if (title.includes('Travesseiro')) {
      setIsTravesseiro(true);
    } else if (title.includes('Lençol')) {
      setIsLencol(true);
    } else if (title.includes('Duvet')) {
      setIsDuvet(true);
    }
  }, [title]);

  return (
    <>
      <ProductProvider data={product} initialVariantId={initialVariant.id}>
        <ZissouProductProvider>
          {isColchao ? (
            <Colchao title={title} product={product} />
          ) : isBase ? (
            <Base />
          ) : isTravesseiro ? (
            <Travesseiro />
          ) : isLencol ? (
            <Lencol />
          ) : isDuvet ? (
            <Duvet />
          ) : null}
        </ZissouProductProvider>
      </ProductProvider>
    </>
  );
}
