import {useCallback, useEffect, useState} from 'react';
import {useProduct} from '@shopify/hydrogen/client';
import useZissouProduct from './useZissouProduct';

function useProductContent() {
  const [contentMessage, setContentMessage] = useState('');

  const {selectedVariant} = useProduct();
  const {isLencol} = useZissouProduct();

  const includesAny = useCallback(
    (value, terms) => terms.some((term) => value.includes(term)),
    [],
  );

  const lencolContentMessage = useCallback(() => {
    const selectedOption = selectedVariant?.title?.toLowerCase() ?? '';

    if (!selectedOption) return;

    let message = '1 fronha, lençol de cima e lençol de baixo';

    if (includesAny(selectedOption, ['casal', 'queen', 'king'])) {
      message = '2 fronhas, lençol de cima e lençol de baixo';
    }

    if (selectedOption.includes('fronha')) {
      message = '';
    }

    setContentMessage(message);
  }, [selectedVariant?.title, includesAny]);

  useEffect(() => {
    if (isLencol) lencolContentMessage();
  }, [isLencol, lencolContentMessage]);

  return {contentMessage};
}

export default useProductContent;
