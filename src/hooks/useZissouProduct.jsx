import {createContext, useContext, useState} from 'react';
import {useProduct} from '@shopify/hydrogen/client';

const ZissouProductContext = createContext();
const useZissouProduct = () => useContext(ZissouProductContext);

function ZissouProductProvider({children}) {
  const [washable, setWashable] = useState(false);
  const [customBag, setCustomBag] = useState(false);
  const [customBagText, setCustomBagText] = useState('');
  const [includeDuvetFilling, setIncludeDuvetFilling] = useState(false);

  const product = useProduct();

  return (
    <ZissouProductContext.Provider
      value={{
        ...product,
        washable,
        customBag,
        setWashable,
        setCustomBag,
        customBagText,
        setCustomBagText,
        includeDuvetFilling,
        setIncludeDuvetFilling,
      }}
    >
      {children}
    </ZissouProductContext.Provider>
  );
}

export {ZissouProductProvider};
export default useZissouProduct;
