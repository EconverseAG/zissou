import {useEffect, useState} from 'react';
import {useProduct} from '@shopify/hydrogen/client';

import ZissouAddToCart from '../ZissouAddToCart';
import ZissouProductOptions from '../ZissouProductOptions';
import ZissouProductImages from '../ZissouProductImages';
import ZissouProductPrice from '../ZissouProductPrice';
import WhatsAppBanner from '../WhatsAppBanner';
import ProductSection from '../ProductSection';
import ProductSectionRight from '../ProductSection/ProductSectionRight';
import ProductSectionLeft from '../ProductSection/ProductSectionLeft';

import useMobile from '../../hooks/useMobile';

import * as styles from './BaseProduct.module.scss';
import RestockDate from '../RestockDate/RestockDate.client';

function BaseProduct() {
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
        <ZissouProductImages
          navigation={isMobile ? 'dots' : 'arrows'}
          shadow
          title="Estilosa, resistente e perfeita"
        />
      </ProductSectionLeft>
      <ProductSectionRight>
        <ZissouProductOptions
          title="Selecione o tamanho da sua base:"
          uppercaseTitle={isMobile}
          icons
        />
        <ZissouProductPrice className={styles.Price} />
        {showRestockDate && <RestockDate />}
        <ZissouAddToCart className={styles.AddToCart} />
        <WhatsAppBanner className={styles.WhatsApp} />
      </ProductSectionRight>
    </ProductSection>
  );
}

export default BaseProduct;
