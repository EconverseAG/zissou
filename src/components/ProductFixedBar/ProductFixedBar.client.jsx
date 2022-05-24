import ZissouAddToCart from '../ZissouAddToCart';

import * as styles from './ProductFixedBar.module.scss';

function ProductFixedBar({title}) {
  return (
    <div className={styles.container}>
      <div className={styles.infos}>
        <h2>{title}</h2>
        <span>Experimente por 100 dias. Um ano de garantia.</span>
      </div>
      <ZissouAddToCart />
    </div>
  );
}

export default ProductFixedBar;
