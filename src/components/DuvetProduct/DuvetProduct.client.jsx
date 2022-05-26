import {useEffect, useState} from 'react';
import {useProduct} from '@shopify/hydrogen/client';

import ZissouProductImages from '../ZissouProductImages';
import ZissouProductPrice from '../ZissouProductPrice';
import ZissouProductOptions from '../ZissouProductOptions';
import ZissouAddToCart from '../ZissouAddToCart';
import ProductSelectedOptions from '../ProductSelectedOptions';
import ExtraDuvetCoverSelector from '../ExtraDuvetCoverSelector';
import WhatsAppBanner from '../WhatsAppBanner';
import ColorSelector from '../ColorSelector';
import ProductSection from '../ProductSection';
import ProductSectionLeft from '../ProductSection/ProductSectionLeft';
import ProductSectionRight from '../ProductSection/ProductSectionRight';

import useMobile from '../../hooks/useMobile';

import * as styles from './DuvetProduct.module.scss';
import RestockDate from '../RestockDate/RestockDate.client';

function DuvetProduct() {
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
        <ZissouProductImages title="Embale no aconchego para um sono mais gostoso" />
        {!isMobile && <WhatsAppBanner className={styles.WhatsApp} />}
      </ProductSectionLeft>
      <ProductSectionRight>
        <ZissouProductOptions
          className={styles.Options}
          title="Selecione o tamanho do seu Duvet:"
          uppercaseTitle
        />
        <ColorSelector className={styles.ColorSelector} />
        <ProductSelectedOptions className={styles.SelectedOptions} />
        <ZissouProductPrice className={styles.Price} />
        <ExtraDuvetCoverSelector className={styles.ExtraCover} />
        {showRestockDate && <RestockDate />}
        <ZissouAddToCart className={styles.AddToCart} />
        {isMobile && <WhatsAppBanner className={styles.WhatsApp} />}
      </ProductSectionRight>
    </ProductSection>
  );
}

export default DuvetProduct;
