import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import {useProduct} from '@shopify/hydrogen/client';

const ProductOptionsContext = createContext({});
const useProductOptions = () => useContext(ProductOptionsContext);

function ProductOptionsProvider({children}) {
  const [oldProduct, setOldProduct] = useState(null);

  const product = useProduct();

  const getEquivalentOption = useCallback((referenceProduct, newProduct) => {
    const referenceOption =
      referenceProduct.selectedOptions[
        referenceProduct.options[0].name
      ]?.toLowerCase();

    let searchTerm;

    if (referenceOption?.includes('solteiro especial'))
      searchTerm = 'solteiro especial';
    else if (referenceOption?.includes('solteiro')) searchTerm = 'solteiro';
    else if (referenceOption?.includes('casal')) searchTerm = 'casal';
    else if (referenceOption?.includes('queen')) searchTerm = 'queen';
    else if (referenceOption?.includes('king br')) searchTerm = 'king br';
    else if (referenceOption?.includes('king')) searchTerm = 'king';

    if (!searchTerm) return;

    return newProduct.options[0].values
      .sort((a, b) => (a.length > b.length ? 1 : a.length < b.length ? -1 : 0))
      .find((option) => option?.toLowerCase()?.includes(searchTerm));
  }, []);

  useEffect(() => {
    if (product?.selectedOptions !== oldProduct?.selectedOptions)
      setOldProduct(product);

    if (oldProduct === null) return;

    if (product.id !== oldProduct.id) {
      const option = getEquivalentOption(oldProduct, product);

      if (!option) return;

      product.setSelectedOption(product.options[0].name, option);
    }
  }, [getEquivalentOption, oldProduct, product]);

  return (
    <ProductOptionsContext.Provider value={{}}>
      {children}
    </ProductOptionsContext.Provider>
  );
}

export {ProductOptionsProvider};
export default useProductOptions;
