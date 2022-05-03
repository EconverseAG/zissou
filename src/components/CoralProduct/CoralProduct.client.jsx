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
import ProductSection from '../ProductSection';
import ProductSectionLeft from '../ProductSection/ProductSectionLeft';
import ProductSectionRight from '../ProductSection/ProductSectionRight';

import useMobile from '../../hooks/useMobile';

import * as styles from './CoralProduct.module.scss';

function CoralProduct() {
  const [modalOpen, setModalOpen] = useState(false);

  const {isCoral} = useZissouProduct();
  const {isMobile} = useMobile();

  return (
    <ProductSection
      className={`${styles.wrapper} ${isMobile ? styles.mobile : ''}`}
    >
      <ProductSectionLeft>
        <ZissouProductImages />
        {!isMobile && (
          <ZissouCompreJunto
            setModalOpen={setModalOpen}
            modalOpen={modalOpen}
          />
        )}
      </ProductSectionLeft>
      <ProductSectionRight>
        <ZissouProductOptions
          className={styles.Options}
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
        <ZissouProductPrice className={styles.Price} />
        {isMobile && (
          <ZissouCompreJunto
            setModalOpen={setModalOpen}
            modalOpen={modalOpen}
          />
        )}
        <ZissouAddToCart className={styles.AddToCart} />
        <ZissouColchaoIcons />
        {modalOpen && <ZissouModalBase setModalOpen={setModalOpen} />}
      </ProductSectionRight>
    </ProductSection>
  );
}

export default CoralProduct;
