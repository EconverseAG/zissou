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
        variants
          ?.sort((a, b) =>
            a.title.length > b.title.length
              ? 1
              : a.title.length < b.title.length
              ? -1
              : 0,
          )
          .find(({title}) => title.toLowerCase().includes(searchTerm)) ||
        variants[0]
      );
    },
    [product],
  );

  useEffect(() => {
    setIncludeGrayDuvetCover(
      localStorage.getItem('includeGrayDuvetCover@Zissou') === 'true',
    );
    setIncludeWhiteDuvetCover(
      localStorage.getItem('includeWhiteDuvetCover@Zissou') === 'true',
    );
    setIncludeBase(localStorage.getItem('includeBase@Zissou') === 'true');
    setIncludeTwoWashableTravesseiros(
      localStorage.getItem('includeTwoWashableTravesseiros@Zissou') === 'true',
    );
    setIncludeLencol(localStorage.getItem('includeLencol@Zissou') === 'true');
  }, []);

  useEffect(() => {
    if (isDuvet || isLencol) {
      localStorage.setItem(
        'includeGrayDuvetCover@Zissou',
        includeGrayDuvetCover,
      );
      localStorage.setItem(
        'includeWhiteDuvetCover@Zissou',
        includeWhiteDuvetCover,
      );

      return;
    }

    if (isColchao) {
      localStorage.setItem('includeBase@Zissou', includeBase);
      localStorage.setItem(
        'includeTwoWashableTravesseiros@Zissou',
        includeTwoWashableTravesseiros,
      );
      localStorage.setItem('includeLencol@Zissou', includeLencol);
    }
  }, [
    includeBase,
    includeGrayDuvetCover,
    includeLencol,
    includeTwoWashableTravesseiros,
    includeWhiteDuvetCover,
    isColchao,
    isDuvet,
    isLencol,
  ]);

  useEffect(() => {
    const newBuyTogetherItems = [];

    if (isDuvet || isLencol) {
      setIncludeGrayDuvetCover(
        localStorage.getItem('includeGrayDuvetCover@Zissou') === 'true',
      );
      setIncludeWhiteDuvetCover(
        localStorage.getItem('includeWhiteDuvetCover@Zissou') === 'true',
      );

      if (includeGrayDuvetCover) {
        newBuyTogetherItems.push(grayDuvetCover);
      }

      if (includeWhiteDuvetCover) {
        newBuyTogetherItems.push(whiteDuvetCover);
      }
    } else {
      if (includeGrayDuvetCover) setIncludeGrayDuvetCover(false);
      if (includeWhiteDuvetCover) setIncludeWhiteDuvetCover(false);

      if (isColchao) {
        setIncludeBase(localStorage.getItem('includeBase@Zissou') === 'true');
        setIncludeLencol(
          localStorage.getItem('includeLencol@Zissou') === 'true',
        );
        setIncludeTwoWashableTravesseiros(
          localStorage.getItem('includeTwoWashableTravesseiros@Zissou') ===
            'true',
        );
        localStorage.setItem('includeBase@Zissou', includeBase);
        localStorage.setItem('includeLencol@Zissou', includeLencol);
        localStorage.setItem(
          'includeTwoWashableTravesseiros@Zissou',
          includeTwoWashableTravesseiros,
        );

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
        if (includeBase) setIncludeBase(false);
        if (includeTwoWashableTravesseiros)
          setIncludeTwoWashableTravesseiros(false);
        if (includeLencol) setIncludeLencol(false);
      }
    }

    if (newBuyTogetherItems.length === buyTogetherItems.length) return;

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
    buyTogetherItems,
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
