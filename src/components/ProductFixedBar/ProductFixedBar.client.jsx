import {useState, useEffect} from 'react';
import ZissouAddToCart from '../ZissouAddToCart';

import * as styles from './ProductFixedBar.module.scss';

function ProductFixedBar({title}) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 1028) {
        setShow(true);
      } else {
        setShow(false);
      }
    });

    return () => window.removeEventListener('scroll', () => {});
  }, []);

  return (
    <div className={`${styles.container} ${show ? styles.show : ''}`}>
      <div className={styles.infos}>
        <h2>{title}</h2>
        <span>Experimente por 100 dias. Um ano de garantia.</span>
      </div>
      <ZissouAddToCart />
    </div>
  );
}

export default ProductFixedBar;
