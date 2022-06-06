import {useEffect, useState} from 'react';
import {useProduct} from '@shopify/hydrogen/client';

import ZissouProductImages from '../ZissouProductImages';
import ZissouProductPrice from '../ZissouProductPrice';
import ZissouProductOptions from '../ZissouProductOptions';
import ZissouAddToCart from '../ZissouAddToCart';
import WhatsAppBanner from '../WhatsAppBanner';
import ExtraDuvetCoverSelector from '../ExtraDuvetCoverSelector';
import ColorSelector from '../ColorSelector';
import ProductSection from '../ProductSection';
import ProductSectionLeft from '../ProductSection/ProductSectionLeft';
import ProductSectionRight from '../ProductSection/ProductSectionRight';

import useMobile from '../../hooks/useMobile';

import * as styles from './LencolProduct.module.scss';
import RestockDate from '../RestockDate/RestockDate.client';

function LencolProduct() {
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
          className={styles.Images}
          title="Deite, role, estique, desenrole, abrace e se jogue para aproveitar ao máximo essa experiência :)"
        />
        {!isMobile && <WhatsAppBanner className={styles.WhatsApp} />}
      </ProductSectionLeft>
      <ProductSectionRight>
        <ZissouProductOptions
          title={
            isMobile
              ? 'Selecione o tamanho'
              : 'Selecione o tamanho do seu lençol:'
          }
          info="Contém: 2 fronhas, lençol de cima e lençol de baixo"
          uppercaseTitle={isMobile}
        />
        <ColorSelector className={styles.ColorSelector} />
        <ZissouProductPrice className={styles.Price} />
        <ExtraDuvetCoverSelector className={styles.ExtraCover} />
        {showRestockDate && <RestockDate />}
        <ZissouAddToCart className={styles.AddToCart} />
        {isMobile && <WhatsAppBanner className={styles.WhatsApp} />}
      </ProductSectionRight>
    </ProductSection>
  );
}

export default LencolProduct;
