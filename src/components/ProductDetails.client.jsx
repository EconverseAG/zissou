import {useEffect, useState} from 'react';

import Colchao from './Product/Colchao.client';
import Base from './Product/Base.client';
import Travesseiro from './Product/Travesseiro.client';
import Lencol from './Product/Lencol.client';
import Duvet from './Product/Duvet.client';
import {ZissouProductProvider} from '../hooks/useZissouProduct';
import {useRouteParams} from '@shopify/hydrogen/client';

export default function ProductDetails({
  product,
  travesseiroWashable,
  travesseiroWashableCustom,
  duvetFilling,
  grayDuvetCover,
  whiteDuvetCover,
  grayLencol,
  whiteLencol,
  base,
  coralHybrid,
}) {
  const {handle} = useRouteParams();

  const [isColchao, setIsColchao] = useState(false);
  const [isBase, setIsBase] = useState(false);
  const [isTravesseiro, setIsTravesseiro] = useState(false);
  const [isLencol, setIsLencol] = useState(false);
  const [isDuvet, setIsDuvet] = useState(false);

  useEffect(() => {
    switch (handle) {
      case 'colchao-zissou-coral-original':
        setIsColchao(true);
        break;
      case 'colchao-zissou-blue':
        setIsColchao(true);
        break;
      case 'duvet-zissou':
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
    }
  }, [handle]);

  return (
    <>
      <ZissouProductProvider
        baseProduct={product}
        travesseiroWashable={travesseiroWashable}
        travesseiroWashableCustom={travesseiroWashableCustom}
        duvetFilling={duvetFilling}
        grayDuvetCover={grayDuvetCover}
        whiteDuvetCover={whiteDuvetCover}
        grayLencol={grayLencol}
        whiteLencol={whiteLencol}
        base={base}
        coralHybrid={coralHybrid}
        isColchao={isColchao}
        isBase={isBase}
        isDuvet={isDuvet}
        isLencol={isLencol}
        isTravesseiro={isTravesseiro}
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
        ) : null}
      </ZissouProductProvider>
    </>
  );
}
