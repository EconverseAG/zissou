import {useEffect, useState} from 'react';
import {useProduct} from '@shopify/hydrogen/client';

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

import * as styles from './SparkProduct.module.scss';
import EntregaFutura from '../EntregaFutura/EntregaFutura.client';
import RestockDate from '../RestockDate/RestockDate.client';

function SparkProduct() {
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
      <ProductSectionLeft>
        <ZissouProductImages shadow arrowsInside />
        {!isMobile && <ZissouCompreJunto />}
      </ProductSectionLeft>
      <ProductSectionRight>
        <ZissouProductOptions
          className={styles.Options}
          title={'QUAL O TAMANHO DO MEU COLCHÃO?'}
          icons
          uppercaseTitle
        />
        <ZissouProductIsHybrid />
        <ZissouProductTitle
          productTitle={'Colchão Zissou Spark'}
          color={'#9F85B2'}
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

export default SparkProduct;
