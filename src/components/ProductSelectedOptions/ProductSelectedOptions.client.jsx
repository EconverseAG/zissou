import useZissouProduct from '../../hooks/useZissouProduct';

function ProductSelectedOptions({className, ...rest}) {
  const {selectedVariant} = useZissouProduct();

  return (
    <div className={className} {...rest}>
      {selectedVariant?.selectedOptions.map(({name, value}) => (
        <span key={name}>{value}</span>
      ))}
    </div>
  );
}

export default ProductSelectedOptions;
