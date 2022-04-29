import {useState} from 'react';

import ZissouProductImages from '../ZissouProductImages';
import ZissouProductPrice from '../ZissouProductPrice';
import ZissouProductOptions from '../ZissouProductOptions';
import ZissouAddToCart from '../ZissouAddToCart';
import ZissouProductTitle from '../ZissouProductTitle/ZissouProductTitle.client';
import ZissouColchaoIcons from '../ZissouColchaoIcons/ZissouColchaoIcons.client';
import ZissouCompreJunto from '../ZissouCompreJunto/ZissouCompreJunto.client';

import useMobile from '../../hooks/useMobile';

import * as styles from './CoralProduct.module.scss';

function CoralProduct({travesseiroWashable, product}) {
  const {isMobile} = useMobile();
  const [selectedBase, setSelectedBase] = useState(false);
  const [selectedTravesseiro, setSelectedTravesseiro] = useState(false);
  const [selectedLencol, setSelectedLencol] = useState(false);

  return (
    <div className={`${styles.wrapper} ${isMobile ? styles.mobile : ''}`}>
      <div className={styles.productLeft}>
        <ZissouProductImages />
        <ZissouCompreJunto
          base={(selectedBase, setSelectedBase)}
          travesseiro={(selectedTravesseiro, setSelectedTravesseiro)}
          lencol={(selectedLencol, setSelectedLencol)}
        />
      </div>
      <div className={styles.productInfo}>
        <ZissouProductOptions
          className={styles.productInfoOptions}
          title="QUAL O TAMANHO DO MEU COLCHÃO?"
          uppercaseTitle
        />
        <ZissouProductTitle
          productTitle={'Colchão Zissou Coral'}
          color={'#F48580'}
        />
        <ZissouProductPrice className={styles.productInfoPrice} />
        <ZissouAddToCart className={styles.productInfoAddToCart} />
        <ZissouColchaoIcons />
      </div>
    </div>
  );
}

export default CoralProduct;
