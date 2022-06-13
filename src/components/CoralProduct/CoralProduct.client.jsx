import {useEffect, useState} from 'react';
import {useProduct} from '@shopify/hydrogen/client';
import useZissouProduct from '../../hooks/useZissouProduct';

import ZissouProductImages from '../ZissouProductImages';
import ZissouProductPrice from '../ZissouProductPrice';
import ZissouProductOptions from '../ZissouProductOptions';
import ZissouAddToCart from '../ZissouAddToCart';
import ZissouProductTitle from '../ZissouProductTitle/ZissouProductTitle.client';
import ZissouColchaoIcons from '../ZissouColchaoIcons/ZissouColchaoIcons.client';
import ZissouCompreJunto from '../ZissouCompreJunto/ZissouCompreJunto.client';
import ZissouProductIsHybrid from '../ZissouProductIsHybrid/ZissouProductIsHybrid.client';
import ProductSection from '../ProductSection';
import ProductSectionLeft from '../ProductSection/ProductSectionLeft';
import ProductSectionRight from '../ProductSection/ProductSectionRight';

import useMobile from '../../hooks/useMobile';

import * as styles from './CoralProduct.module.scss';
import EntregaFutura from '../EntregaFutura/EntregaFutura.client';
import RestockDate from '../RestockDate/RestockDate.client';

function CoralProduct() {
  const {isCoral} = useZissouProduct();
  const {isMobile} = useMobile();
  const [showRestockDate, setShowRestockDate] = useState(false);

  const {selectedVariant} = useProduct();

  useEffect(() => {
    let restockDate = selectedVariant.metafields.edges.filter((item) => {
      return item.node.key === 'data_de_restoque';
    });
    setShowRestockDate(restockDate.length > 0);
  }, [selectedVariant]);

  return (
    <ProductSection
      className={`${styles.wrapper} ${isMobile ? styles.mobile : ''}`}
    >
      <ProductSectionLeft className={styles.leftSection}>
        <ZissouProductImages
          shadow
          navigation={isMobile ? 'dots' : 'arrows'}
          arrowsInside
        />
        {!isMobile && <ZissouCompreJunto />}
      </ProductSectionLeft>
      <ProductSectionRight>
        <ZissouProductOptions
          className={styles.Options}
          title={'QUAL O TAMANHO DO MEU COLCHÃO?'}
          icons
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
        {isMobile && <ZissouCompreJunto />}
        {showRestockDate && <RestockDate />}
        <ZissouAddToCart className={styles.AddToCart} />
        <EntregaFutura />
        <ZissouColchaoIcons />
      </ProductSectionRight>
    </ProductSection>
  );
}

export default CoralProduct;
