import * as styles from './ProductSectionRight.module.scss';

function ProductSectionRight({className, children, ...rest}) {
  return (
    <div
      className={`${styles.productSectionRight} ${className || ''}`}
      {...rest}
    >
      {children}
    </div>
  );
}

export default ProductSectionRight;
