import {createContext, useContext, useEffect, useMemo, useState} from 'react';

import {ProductProvider} from '@shopify/hydrogen/client';

import {BuyTogetherProvider} from './useBuyTogether';
import {ProductOptionsProvider} from './useProductOptions';

const ZissouProductContext = createContext();
const useZissouProduct = () => useContext(ZissouProductContext);

function ZissouProductProvider({
  children,
  baseProduct,
  travesseiro,
  travesseiroWashable,
  duvetFilling,
  coralHybrid,
  sparkHybrid,
  spark,
  coral,
  grayLencol,
  whiteLencol,
  base,
  grayDuvet,
  grayDuvetCover,
  whiteDuvetCover,
  isDuvet,
  isLencol,
  isTravesseiro,
  isColchao,
  isToca,
  isBase,
}) {
  const [isSpark, setIsSpark] = useState(false);
  const [isCoral, setIsCoral] = useState(false);
  const [isBlue, setIsBlue] = useState(false);
  const [washable, setWashable] = useState(false);
  const [customBag, setCustomBag] = useState(false);
  const [customBagText, setCustomBagText] = useState('');
  const [includeDuvetFilling, setIncludeDuvetFilling] = useState(false);
  const [coralIsHybrid, setCoralIsHybrid] = useState(false);
  const [selectedColor, setSelectedColor] = useState('white');
  const [product, setProduct] = useState(baseProduct);
  const [oldProduct, setOldProduct] = useState(baseProduct);

  useEffect(() => {
    if (oldProduct?.id === product?.id) return;

    if (
      (oldProduct.title.includes('Spark') && !isSpark) ||
      (oldProduct.title.includes('Coral') && !isCoral) ||
      (oldProduct.title.includes('Blue') && !isBlue)
    ) {
      setCoralIsHybrid(false);
    }

    if (!isTravesseiro) {
      setWashable(false);
      setCustomBag(false);
      setCustomBagText('');
    }

    if (
      (oldProduct.title.includes('Lençol') && !isLencol) ||
      (oldProduct.title.includes('Duvet') && !isDuvet)
    ) {
      setIncludeDuvetFilling(false);
      setSelectedColor('white');
    }
  }, [
    isBlue,
    isColchao,
    isCoral,
    isDuvet,
    isLencol,
    isSpark,
    isTravesseiro,
    oldProduct,
    product,
  ]);

  useEffect(() => {
    let currentProduct = baseProduct;

    if (isTravesseiro) {
      if (washable) {
        currentProduct = travesseiroWashable;
      }
    } else if (isDuvet || isLencol) {
      if (isDuvet) {
        if (includeDuvetFilling) {
          currentProduct = duvetFilling;
        } else if (selectedColor === 'gray') {
          currentProduct = grayDuvet;
        }
      } else if (isLencol) {
        if (selectedColor === 'gray') {
          currentProduct = grayLencol;
        }
      }
    } else if (isColchao) {
      if (coralIsHybrid) {
        currentProduct = isSpark ? sparkHybrid : coralHybrid;
      }
    }

    setIsCoral(baseProduct.title.includes('Coral'));
    setIsSpark(baseProduct.title.includes('Spark'));
    setIsBlue(baseProduct.title.includes('Blue'));
    setOldProduct(product);
    setProduct(currentProduct || baseProduct);
  }, [
    washable,
    customBag,
    includeDuvetFilling,
    travesseiroWashable,
    duvetFilling,
    baseProduct,
    isDuvet,
    isTravesseiro,
    isLencol,
    isColchao,
    grayDuvetCover,
    grayLencol,
    selectedColor,
    coralHybrid,
    coralIsHybrid,
    isSpark,
    sparkHybrid,
    grayDuvet,
    product,
  ]);

  const value = useMemo(
    () => ({
      isToca,
      isDuvet,
      isLencol,
      isColchao,
      isCoral,
      isSpark,
      isBlue,
      isTravesseiro,
      isBase,
      washable,
      customBag,
      coral,
      spark,
      setWashable,
      setCustomBag,
      customBagText,
      setCustomBagText,
      includeDuvetFilling,
      setIncludeDuvetFilling,
      selectedColor,
      setSelectedColor,
      coralIsHybrid,
      setCoralIsHybrid,
      sparkHybrid,
      grayDuvet,
      grayDuvetCover,
      whiteDuvetCover,
      grayLencol,
      whiteLencol,
      base,
      travesseiro,
      travesseiroWashable,
      coralHybrid,
    }),
    [
      base,
      coral,
      coralHybrid,
      coralIsHybrid,
      customBag,
      customBagText,
      grayDuvet,
      grayDuvetCover,
      grayLencol,
      includeDuvetFilling,
      isBase,
      isBlue,
      isColchao,
      isCoral,
      isDuvet,
      isLencol,
      isSpark,
      isToca,
      isTravesseiro,
      selectedColor,
      spark,
      sparkHybrid,
      travesseiro,
      travesseiroWashable,
      washable,
      whiteDuvetCover,
      whiteLencol,
    ],
  );

  return (
    <ZissouProductContext.Provider value={value}>
      <ProductProvider data={product}>
        <ProductOptionsProvider>
          <BuyTogetherProvider>{children}</BuyTogetherProvider>
        </ProductOptionsProvider>
      </ProductProvider>
    </ZissouProductContext.Provider>
  );
}

export {ZissouProductProvider};
export default useZissouProduct;
