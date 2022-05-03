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
  const [isHybrid, setIsHybrid] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className={`${styles.wrapper} ${isMobile ? styles.mobile : ''}`}>
      <div className={styles.productLeft}>
        <ZissouProductImages />
<<<<<<< HEAD
        {!isMobile ? (
          <ZissouCompreJunto
            selectedBase={selectedBase}
            setSelectedBase={setSelectedBase}
            selectedLencol={selectedLencol}
            setSelectedLencol={setSelectedLencol}
            selectedTravesseiro={selectedTravesseiro}
            setSelectedTravesseiro={setSelectedTravesseiro}
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
          />
        ) : null}
=======
        {!isMobile && <ZissouCompreJunto />}
>>>>>>> 0fa2c1ed60679771ea6603522583f9fc36257252
      </div>
      <div className={styles.productInfo}>
        <ZissouProductOptions
          className={styles.productInfoOptions}
          title={
            isMobile ? 'SELECIONE O TAMANHO' : 'QUAL O TAMANHO DO MEU COLCHÃO?'
          }
          uppercaseTitle
        />
        <ZissouProductIsHybrid isHybrid={isHybrid} setIsHybrid={setIsHybrid} />
        <ZissouProductTitle
          productTitle={'Colchão Zissou Coral'}
          color={'#F48580'}
          isHybrid={isHybrid}
        />
        <ZissouProductPrice className={styles.productInfoPrice} />
<<<<<<< HEAD
        {isMobile ? (
          <ZissouCompreJunto
            selectedBase={selectedBase}
            setSelectedBase={setSelectedBase}
            selectedLencol={selectedLencol}
            setSelectedLencol={setSelectedLencol}
            selectedTravesseiro={selectedTravesseiro}
            setSelectedTravesseiro={setSelectedTravesseiro}
            modalOpen={modalOpen}
            setModalOpen={setModalOpen}
          />
        ) : null}
=======
        {isMobile && <ZissouCompreJunto />}
>>>>>>> 0fa2c1ed60679771ea6603522583f9fc36257252
        <ZissouAddToCart className={styles.productInfoAddToCart} />
        <ZissouColchaoIcons />
        {modalOpen && <ZissouModalBase setModalOpen={setModalOpen} />}
      </div>
    </div>
  );
}

export default CoralProduct;
