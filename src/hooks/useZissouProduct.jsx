import {createContext, useContext, useEffect, useMemo, useState} from 'react';

import {ProductProvider} from '@shopify/hydrogen/client';

import {BuyTogetherProvider} from './useBuyTogether';
import {ProductOptionsProvider} from './useProductOptions';

const ZissouProductContext = createContext();
const useZissouProduct = () => useContext(ZissouProductContext);

function ZissouProductProvider({
  children,
  baseProduct,
  travesseiroWashable,
  travesseiroWashableCustom,
  duvetFilling,
  coralHybrid,
  sparkHybrid,
  spark,
  coral,
  grayLencol,
  whiteLencol,
  base,
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
  const [washable, setWashable] = useState(false);
  const [customBag, setCustomBag] = useState(false);
  const [customBagText, setCustomBagText] = useState('');
  const [includeDuvetFilling, setIncludeDuvetFilling] = useState(false);
  const [coralIsHybrid, setCoralIsHybrid] = useState(false);
  const [selectedColor, setSelectedColor] = useState('white');
  const [product, setProduct] = useState(baseProduct);

  useEffect(() => {
    let currentProduct = baseProduct;

    if (isTravesseiro) {
      if (washable) {
        currentProduct = travesseiroWashable;

        if (customBag) {
          currentProduct = travesseiroWashableCustom;
        }
      }
    } else if (isDuvet || isLencol) {
      if (isDuvet) {
        if (includeDuvetFilling) {
          currentProduct = duvetFilling;
        } else if (selectedColor === 'gray') {
          currentProduct = grayDuvetCover;
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
    setProduct(currentProduct || baseProduct);
  }, [
    washable,
    customBag,
    includeDuvetFilling,
    travesseiroWashable,
    travesseiroWashableCustom,
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
  ]);

  const value = useMemo(
    () => ({
      isToca,
      isDuvet,
      isLencol,
      isColchao,
      isCoral,
      isSpark,
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
      grayDuvetCover,
      whiteDuvetCover,
      grayLencol,
      whiteLencol,
      base,
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
      grayDuvetCover,
      grayLencol,
      includeDuvetFilling,
      isBase,
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
