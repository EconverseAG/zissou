import {useProduct} from '@shopify/hydrogen/client';

function ProductSelectedOptions({className, ...rest}) {
  const {selectedVariant} = useProduct();

  return (
    <div className={className} {...rest}>
      {selectedVariant?.selectedOptions.map(({name, value}) => (
        <span key={name}>{value}</span>
      ))}
    </div>
  );
}

export default ProductSelectedOptions;
