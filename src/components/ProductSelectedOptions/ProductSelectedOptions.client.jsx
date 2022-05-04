import {useProduct} from '@shopify/hydrogen/client';

function ProductSelectedOptions({className, ...rest}) {
  const {selectedVariant} = useProduct();

  return (
    <div className={className} {...rest}>
      <span>{selectedVariant?.selectedOptions[0].value}</span>
    </div>
  );
}

export default ProductSelectedOptions;
