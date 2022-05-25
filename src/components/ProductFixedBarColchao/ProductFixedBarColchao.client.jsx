import {Image} from '@shopify/hydrogen';
import {useState, useEffect} from 'react';

import useMobile from '../../hooks/useMobile';
import useZissouProduct from '../../hooks/useZissouProduct';
import ZissouAddToCart from '../ZissouAddToCart';

import * as styles from './ProductFixedBarColchao.module.scss';

import CoralBar from '../../assets/coral-bar.png';
import BlueBar from '../../assets/blue-bar.png';

function ProductFixedBarColchao({title, subtitle}) {
  const [show, setShow] = useState(false);
  const {isCoral} = useZissouProduct();

  const {isMobile} = useMobile();

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
    <div
      className={`${styles.container} ${isMobile ? styles.mobile : ''} ${
        show ? styles.show : ''
      }`}
    >
      {!isMobile && (
        <div className={styles.infos}>
          <Image
            src={isCoral ? CoralBar : BlueBar}
            width="54.4"
            height="54.4"
          />
          <div className={styles.infosRight}>
            <h2 style={{color: isCoral && '#F48580'}}>{title}</h2>
            <span>{subtitle}</span>
          </div>
        </div>
      )}
      <ZissouAddToCart text={'ESCOLHA SEU COLCHÃO'} />
    </div>
  );
}

export default ProductFixedBarColchao;
