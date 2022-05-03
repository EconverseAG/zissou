import useMobile from '../../hooks/useMobile';

import * as styles from './ProductSection.module.scss';

function ProductSection({className, children, ...rest}) {
  const {isMobile} = useMobile();

  return (
    <div
      className={`${styles.productSection} ${isMobile ? styles.mobile : ''} ${
        className || ''
      }`}
      {...rest}
    >
      {children}
    </div>
  );
}

export default ProductSection;
