import {Image} from '@shopify/hydrogen';
import {useState, useEffect} from 'react';
import parseUrl from '../../helpers/parseUrl';

import useMobile from '../../hooks/useMobile';
import useZissouProduct from '../../hooks/useZissouProduct';
import ZissouAddToCart from '../ZissouAddToCart';

import * as styles from './ProductFixedBarColchao.module.scss';

const CoralBar = parseUrl('coral-bar.png');
const BlueBar = parseUrl('blue-bar.png');
const SparkBar = parseUrl('spark-bar.png');
const SparkLogo = parseUrl('spark-logo.png');

function ProductFixedBarColchao({title, subtitle}) {
  const [show, setShow] = useState(false);
  const {isCoral, isSpark} = useZissouProduct();

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
            src={isCoral ? CoralBar : isSpark ? SparkBar : BlueBar}
            width="54.4"
            height="54.4"
          />
          <div className={styles.infosRight}>
            {title.includes('SPARK') ? (
              <Image
                src={SparkLogo}
                width={isMobile ? 63 : 90}
                height={isMobile ? 20 : 29}
              />
            ) : (
              <h2 style={{color: isCoral && '#F48580'}}>{title}</h2>
            )}
            <span>{subtitle}</span>
          </div>
        </div>
      )}
      <ZissouAddToCart scrollToProductSection text={'ESCOLHA SEU COLCHÃO'} />
    </div>
  );
}

export default ProductFixedBarColchao;
