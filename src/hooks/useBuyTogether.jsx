import {
  createContext,
  useContext,
  useEffect,
  useState,
  useCallback,
} from 'react';

import {flattenConnection, useProduct} from '@shopify/hydrogen/client';

import useZissouProduct from './useZissouProduct';

const BuyTogetherContext = createContext({buyTogetherItems: []});
const useBuyTogether = () => useContext(BuyTogetherContext);

function BuyTogetherProvider({grayDuvetCover, whiteDuvetCover, children}) {
  const [includeGrayDuvetCover, setIncludeGrayDuvetCover] = useState(false);
  const [includeWhiteDuvetCover, setIncludeWhiteDuvetCover] = useState(false);
  const [buyTogetherItems, setBuyTogetherItems] = useState([]);

  const product = useProduct();
  const {isDuvet, isLencol} = useZissouProduct();

  const getProductEquivalentVariant = useCallback(
    ({variants}) => {
      variants = flattenConnection(variants);

      const determineSearchTerm = () => {
        const currentVariant = product?.selectedVariant?.title.toLowerCase();

        if (!currentVariant) return '';

        if (currentVariant.includes('solteiro espeical'))
          return 'solteiro especial';
        if (currentVariant.includes('solteiro')) return 'solteiro';
        if (currentVariant.includes('casal')) return 'casal';
        if (currentVariant.includes('king br')) return 'king br';
        if (currentVariant.includes('king')) return 'king';
        if (currentVariant.includes('queen')) return 'queen';
      };

      const searchTerm = determineSearchTerm();

      return variants?.find(({title}) =>
        title.toLowerCase().includes(searchTerm),
      );
    },
    [product],
  );

  useEffect(() => {
    const newBuyTogetherItems = [];
    if (isDuvet || isLencol) {
      if (includeGrayDuvetCover) {
        newBuyTogetherItems.push(grayDuvetCover);
      }

      if (includeWhiteDuvetCover) {
        newBuyTogetherItems.push(whiteDuvetCover);
      }
    } else {
      setIncludeGrayDuvetCover(false);
      setIncludeWhiteDuvetCover(false);
    }

    setBuyTogetherItems(
      newBuyTogetherItems.map((item) => ({
        ...item,
        selectedVariant: getProductEquivalentVariant(item),
      })),
    );
  }, [
    product,
    isDuvet,
    isLencol,
    getProductEquivalentVariant,
    grayDuvetCover,
    whiteDuvetCover,
    includeGrayDuvetCover,
    includeWhiteDuvetCover,
  ]);

  return (
    <BuyTogetherContext.Provider
      value={{
        includeGrayDuvetCover,
        setIncludeGrayDuvetCover,
        includeWhiteDuvetCover,
        setIncludeWhiteDuvetCover,
        buyTogetherItems,
      }}
    >
      {children}
    </BuyTogetherContext.Provider>
  );
}

export {BuyTogetherProvider};
export default useBuyTogether;
