import {useEffect, useState} from 'react';
import {useProduct} from '@shopify/hydrogen/client';

function ProductSelectedOptions({className, ...rest}) {
  const [displayOption, setDisplayOption] = useState();

  const {selectedOptions} = useProduct();

  useEffect(() => {
    const keys = Object.keys(selectedOptions);

    setDisplayOption(selectedOptions[keys[keys.length - 1]]);
  }, [selectedOptions]);

  return (
    <div className={className} {...rest}>
      <span>{displayOption}</span>
    </div>
  );
}

export default ProductSelectedOptions;
