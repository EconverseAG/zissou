import {useState} from 'react';
import useZissouProduct from '../../hooks/useZissouProduct';

import ZissouProductImages from '../ZissouProductImages';
import ZissouProductPrice from '../ZissouProductPrice';
import ZissouProductOptions from '../ZissouProductOptions';
import ZissouAddToCart from '../ZissouAddToCart';
import ZissouProductTitle from '../ZissouProductTitle/ZissouProductTitle.client';
import ZissouColchaoIcons from '../ZissouColchaoIcons/ZissouColchaoIcons.client';
import ZissouCompreJunto from '../ZissouCompreJunto/ZissouCompreJunto.client';
import ZissouProductIsHybrid from '../ZissouProductIsHybrid/ZissouProductIsHybrid.client';
import ZissouModalBase from '../ZissouModalBase/ZissouModalBase.client';

import useMobile from '../../hooks/useMobile';

import * as styles from './CoralProduct.module.scss';

function CoralProduct() {
  const [modalOpen, setModalOpen] = useState(false);

  const {isCoral} = useZissouProduct();
  const {isMobile} = useMobile();

  return (
    <div className={`${styles.wrapper} ${isMobile ? styles.mobile : ''}`}>
      <div className={styles.productLeft}>
        <ZissouProductImages />
        {!isMobile && (
          <ZissouCompreJunto
            setModalOpen={setModalOpen}
            modalOpen={modalOpen}
          />
        )}
      </div>
      <div className={styles.productInfo}>
        <ZissouProductOptions
          className={styles.productInfoOptions}
          title={
            isMobile ? 'SELECIONE O TAMANHO' : 'QUAL O TAMANHO DO MEU COLCHÃO?'
          }
          uppercaseTitle
        />
        {isCoral && <ZissouProductIsHybrid />}
        <ZissouProductTitle
          productTitle={
            isCoral ? 'Colchão Zissou Coral' : 'Colchão Zissou Blue'
          }
          color={isCoral ? '#F48580' : '#415264'}
        />
        <ZissouProductPrice className={styles.productInfoPrice} />
        {isMobile && (
          <ZissouCompreJunto
            setModalOpen={setModalOpen}
            modalOpen={modalOpen}
          />
        )}
        <ZissouAddToCart className={styles.productInfoAddToCart} />
        <ZissouColchaoIcons />
        {modalOpen && <ZissouModalBase setModalOpen={setModalOpen} />}
      </div>
    </div>
  );
}

export default CoralProduct;
