import {createContext, useContext, useEffect, useState} from 'react';

import {ProductProvider} from '@shopify/hydrogen/client';

import {BuyTogetherProvider} from './useBuyTogether';

const ZissouProductContext = createContext();
const useZissouProduct = () => useContext(ZissouProductContext);

function ZissouProductProvider({
  children,
  baseProduct,
  travesseiroWashable,
  travesseiroWashableCustom,
  duvetFilling,
  coralHybrid,
  grayLencol,
  whiteLencol,
  base,
  grayDuvetCover,
  whiteDuvetCover,
  isDuvet,
  isLencol,
  isTravesseiro,
  isColchao,
  coral5Hybrid,
  coral10Hybrid,
  coral5,
  coral10,
  blue5,
  blue10,
}) {
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
        currentProduct = coralHybrid;
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
  ]);

  return (
    <ZissouProductContext.Provider
      value={{
        isDuvet,
        isLencol,
        isColchao,
        isCoral,
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
        coral5Hybrid,
        coral10Hybrid,
        coral5,
        coral10,
        blue5,
        blue10,
      }}
    >
      <ProductProvider data={product}>
        <BuyTogetherProvider>{children}</BuyTogetherProvider>
      </ProductProvider>
    </ZissouProductContext.Provider>
  );
}

export {ZissouProductProvider};
export default useZissouProduct;
