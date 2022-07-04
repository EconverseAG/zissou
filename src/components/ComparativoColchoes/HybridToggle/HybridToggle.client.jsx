import {useCallback, useMemo} from 'react';
import useComparative from '../../../hooks/useComparative';
import useMobile from '../../../hooks/useMobile';
import CheckIcon from '../../CheckIcon.client';

import * as styles from './HybridToggle.module.scss';

function HybridToggle({product, setProduct, className, readOnly, ...rest}) {
  const {isMobile} = useMobile();
  const {productData} = useComparative();

  const isHybrid = useMemo(() => product.id.includes('Hybrid'), [product]);

  const handleChange = useCallback(() => {
    switch (product.id) {
      case 'spark':
        setProduct(productData.sparkHybrid);
        break;
      case 'sparkHybrid':
        setProduct(productData.spark);
        break;
      case 'coral':
        setProduct(productData.coralHybrid);
        break;
      case 'coralHybrid':
        setProduct(productData.coral);
        break;
      default:
        return;
    }
  }, [product.id, productData, setProduct]);

  return (
    <div
      className={`${styles.container} ${isMobile ? styles.mobile : ''} ${
        className ?? ''
      }`}
      {...rest}
    >
      <label
        className={
          product.id.includes('spark')
            ? styles.spark
            : product.id.includes('coral')
            ? styles.coral
            : product.id.includes('blue')
            ? styles.blue
            : ''
        }
      >
        {!readOnly && (
          <>
            <input type="checkbox" checked={isHybrid} onChange={handleChange} />
            <div className={styles.checkbox}>
              {isHybrid && (
                <CheckIcon
                  color={
                    product.id.includes('spark')
                      ? '#9873ac'
                      : product.id.includes('coral')
                      ? '#f48580'
                      : product.id.includes('blue')
                      ? '#415264'
                      : ''
                  }
                />
              )}
            </div>
          </>
        )}
        <span>
          SISTEMA HÍBRIDO
          <br /> (espuma + molas)
        </span>
      </label>
    </div>
  );
}

export default HybridToggle;
