import {useState} from 'react';

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
  const {isMobile} = useMobile();
  const [modalOpen, setModalOpen] = useState(false);

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
        <ZissouProductIsHybrid />
        <ZissouProductTitle
          productTitle={'Colchão Zissou Coral'}
          color={'#F48580'}
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
