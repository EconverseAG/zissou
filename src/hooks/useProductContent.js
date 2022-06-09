import {useCallback, useEffect, useState} from 'react';
import {useProduct} from '@shopify/hydrogen/client';
import useZissouProduct from './useZissouProduct';

function useProductContent() {
  const [contentMessage, setContentMessage] = useState('');

  const {selectedVariant} = useProduct();
  const {isLencol} = useZissouProduct();

  const lencolContentMessage = useCallback(() => {
    const selectedOption = selectedVariant?.title?.toLowerCase() ?? '';

    if (!selectedOption) return;

    let message = '2 fronhas, lençol de cima e lençol de baixo';

    if (selectedOption.includes('fronha')) {
      message = '1 fronha';

      if (selectedOption.includes('par')) {
        message = '2 fronhas';
      }
    }

    setContentMessage(message);
  }, [selectedVariant?.title]);

  useEffect(() => {
    if (isLencol) lencolContentMessage();
  }, [isLencol, lencolContentMessage]);

  return {contentMessage};
}

export default useProductContent;
