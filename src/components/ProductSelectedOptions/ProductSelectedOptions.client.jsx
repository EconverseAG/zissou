import {useProduct} from '@shopify/hydrogen/client';

function ProductSelectedOptions({className, ...rest}) {
  const {selectedOptions} = useProduct();

  return (
    <div className={className} {...rest}>
      {Object.keys(selectedOptions).map((key) => (
        <span key={key}>{selectedOptions[key]}</span>
      ))}
    </div>
  );
}

export default ProductSelectedOptions;
