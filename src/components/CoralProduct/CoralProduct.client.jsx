import {useState} from 'react';

import ZissouProductImages from '../ZissouProductImages';
import ZissouProductPrice from '../ZissouProductPrice';
import ZissouProductOptions from '../ZissouProductOptions';
import ZissouAddToCart from '../ZissouAddToCart';
import ZissouProductTitle from '../ZissouProductTitle/ZissouProductTitle.client';
import ZissouColchaoIcons from '../ZissouColchaoIcons/ZissouColchaoIcons.client';
import ZissouCompreJunto from '../ZissouCompreJunto/ZissouCompreJunto.client';
import ZissouProductIsHybrid from '../ZissouProductIsHybrid/ZissouProductIsHybrid.client';

import useMobile from '../../hooks/useMobile';

import * as styles from './CoralProduct.module.scss';

function CoralProduct() {
  const {isMobile} = useMobile();
  const [selectedBase, setSelectedBase] = useState(false);
  const [selectedTravesseiro, setSelectedTravesseiro] = useState(false);
  const [selectedLencol, setSelectedLencol] = useState(false);
  const [isHybrid, setIsHybrid] = useState(false);

  return (
    <div className={`${styles.wrapper} ${isMobile ? styles.mobile : ''}`}>
      <div className={styles.productLeft}>
        <ZissouProductImages />
        {!isMobile ? (
          <ZissouCompreJunto
            selectedBase={selectedBase}
            setSelectedBase={setSelectedBase}
            selectedLencol={selectedLencol}
            setSelectedLencol={setSelectedLencol}
            selectedTravesseiro={selectedTravesseiro}
            setSelectedTravesseiro={setSelectedTravesseiro}
          />
        ) : null}
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
        {isMobile ? (
          <ZissouCompreJunto
            selectedBase={selectedBase}
            setSelectedBase={setSelectedBase}
            selectedLencol={selectedLencol}
            setSelectedLencol={setSelectedLencol}
            selectedTravesseiro={selectedTravesseiro}
            setSelectedTravesseiro={setSelectedTravesseiro}
          />
        ) : null}
        <ZissouAddToCart className={styles.productInfoAddToCart} />
        <ZissouColchaoIcons />
      </div>
    </div>
  );
}

export default CoralProduct;
