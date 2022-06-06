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
  const [isCoral, setIsCoral] = useState(false);
  const [washable, setWashable] = useState(false);
  const [customBag, setCustomBag] = useState(false);
  const [customBagText, setCustomBagText] = useState('');
  const [includeDuvetFilling, setIncludeDuvetFilling] = useState(false);
  const [coralIsHybrid, setCoralIsHybrid] = useState(false);
  const [selectedColor, setSelectedColor] = useState('white');
  const [product, setProduct] = useState(baseProduct);

  const isSpark = useMemo(() => product?.title.includes('Spark'), [product]);

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
      isTravesseiro,
      isBase,
      washable,
      customBag,
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
      isToca,
      isTravesseiro,
      selectedColor,
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
