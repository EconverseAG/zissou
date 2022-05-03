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

function BuyTogetherProvider({children}) {
  const [includeGrayDuvetCover, setIncludeGrayDuvetCover] = useState(false);
  const [includeWhiteDuvetCover, setIncludeWhiteDuvetCover] = useState(false);
  const [includeBase, setIncludeBase] = useState(false);
  const [includeTwoWashableTravesseiros, setIncludeTwoWashableTravesseiros] =
    useState(false);
  const [includeLencol, setIncludeLencol] = useState(false);
  const [buyTogetherItems, setBuyTogetherItems] = useState([]);

  const product = useProduct();

  const {
    isDuvet,
    isLencol,
    isColchao,
    grayDuvetCover,
    whiteDuvetCover,
    whiteLencol,
    travesseiroWashable,
    base,
  } = useZissouProduct();

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

      return (
        variants?.find(({title}) => title.toLowerCase().includes(searchTerm)) ||
        variants[0]
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

      if (isColchao) {
        if (includeBase) {
          newBuyTogetherItems.push(base);
        }

        if (includeLencol) {
          newBuyTogetherItems.push(whiteLencol);
        }

        if (includeTwoWashableTravesseiros) {
          newBuyTogetherItems.push(travesseiroWashable);
          newBuyTogetherItems.push(travesseiroWashable);
        }
      } else {
        setIncludeBase(false);
        setIncludeTwoWashableTravesseiros(false);
        setIncludeLencol(false);
      }
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
    isColchao,
    getProductEquivalentVariant,
    grayDuvetCover,
    whiteDuvetCover,
    base,
    whiteLencol,
    travesseiroWashable,
    includeGrayDuvetCover,
    includeWhiteDuvetCover,
    includeBase,
    includeTwoWashableTravesseiros,
    includeLencol,
  ]);

  return (
    <BuyTogetherContext.Provider
      value={{
        includeGrayDuvetCover,
        setIncludeGrayDuvetCover,
        includeWhiteDuvetCover,
        setIncludeWhiteDuvetCover,
        includeBase,
        setIncludeBase,
        includeTwoWashableTravesseiros,
        setIncludeTwoWashableTravesseiros,
        includeLencol,
        setIncludeLencol,
        buyTogetherItems,
      }}
    >
      {children}
    </BuyTogetherContext.Provider>
  );
}

export {BuyTogetherProvider};
export default useBuyTogether;
