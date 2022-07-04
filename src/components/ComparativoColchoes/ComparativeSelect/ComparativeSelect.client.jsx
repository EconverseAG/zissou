import {useCallback, useState} from 'react';
import useComparative from '../../../hooks/useComparative';
import useMobile from '../../../hooks/useMobile';
import * as styles from './ComparativeSelect.module.scss';

function ComparativeSelect({product, setProduct}) {
  const [isOpen, setIsOpen] = useState(false);

  const {isMobile} = useMobile();
  const {productData} = useComparative();

  const handleSelect = useCallback(
    (product) => {
      const productIsHybrid = product.id.includes('Hybrid');
      const productId = product.id + (productIsHybrid ? 'Hybrid' : '');

      setProduct(productData[productId]);
    },
    [productData, setProduct],
  );

  return (
    <div
      className={`${styles.container} 
          ${
            product.id.includes('spark')
              ? styles.spark
              : product.id.includes('coral')
              ? styles.coral
              : product.id.includes('blue')
              ? styles.blue
              : ''
          } ${isMobile ? styles.mobile : ''}
      `}
    >
      <button
        className={styles.select}
        onClick={() => setIsOpen((state) => !state)}
      >
        <span>
          {product.id.includes('spark')
            ? 'Colchão Spark'
            : product.id.includes('coral')
            ? 'Colchão Coral'
            : product.id.includes('blue')
            ? 'Colchão Blue'
            : 'Colchão Zissou'}
        </span>
        <div className={`${styles.dropdown} ${isOpen ? styles.open : ''}`}>
          <button onClick={() => handleSelect(productData.spark)}>
            Colchão Spark
          </button>
          <button onClick={() => handleSelect(productData.coral)}>
            Colchão Coral
          </button>
          <button onClick={() => handleSelect(productData.blue)}>
            Colchão Blue
          </button>
        </div>
      </button>
    </div>
  );
}

export default ComparativeSelect;
