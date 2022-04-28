import {createContext, useContext, useEffect, useState, useMemo} from 'react';

import {flattenConnection, ProductProvider} from '@shopify/hydrogen/client';

const ZissouProductContext = createContext();
const useZissouProduct = () => useContext(ZissouProductContext);

function ZissouProductProvider({
  children,
  baseProduct,
  travesseiroWashable,
  travesseiroWashableCustom,
  duvetFilling,
  grayDuvetCover,
  whiteDuvetCover,
  isDuvet,
  isTravesseiro,
}) {
  const [washable, setWashable] = useState(false);
  const [customBag, setCustomBag] = useState(false);
  const [customBagText, setCustomBagText] = useState('');
  const [includeDuvetFilling, setIncludeDuvetFilling] = useState(false);
  const [includeGrayDuvetCover, setIncludeGrayDuvetCover] = useState(false);
  const [includeWhiteDuvetCover, setIncludeWhiteDuvetCover] = useState(false);
  const [selectedColor, setSelectedColor] = useState('white');
  const [product, setProduct] = useState(baseProduct);

  const initialVariant = useMemo(
    () => flattenConnection(product.variants)[0],
    [product],
  );

  useEffect(() => {
    let currentProduct = baseProduct;

    if (isTravesseiro) {
      if (washable) {
        currentProduct = travesseiroWashable;

        if (customBag) {
          currentProduct = travesseiroWashableCustom;
        }
      }
    } else if (isDuvet && includeDuvetFilling) {
      currentProduct = duvetFilling;
    }

    setProduct(currentProduct);
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
  ]);

  return (
    <ZissouProductContext.Provider
      value={{
        washable,
        customBag,
        setWashable,
        setCustomBag,
        customBagText,
        setCustomBagText,
        includeDuvetFilling,
        setIncludeDuvetFilling,
        includeGrayDuvetCover,
        setIncludeGrayDuvetCover,
        includeWhiteDuvetCover,
        setIncludeWhiteDuvetCover,
        selectedColor,
        setSelectedColor,
      }}
    >
      <ProductProvider data={product} initialVariantId={initialVariant.id}>
        {children}
      </ProductProvider>
    </ZissouProductContext.Provider>
  );
}

export {ZissouProductProvider};
export default useZissouProduct;
