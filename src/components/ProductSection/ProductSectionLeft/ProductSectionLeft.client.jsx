import useMobile from '../../../hooks/useMobile';

import * as styles from './ProductSectionLeft.module.scss';

function ProductSectionLeft({className, children, ...rest}) {
  const {isMobile} = useMobile();

  return (
    <div
      className={`${styles.productSectionLeft} ${
        isMobile ? styles.mobile : ''
      } ${className || ''}`}
      {...rest}
    >
      {children}
    </div>
  );
}

export default ProductSectionLeft;
