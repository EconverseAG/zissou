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

function BaseProduct() {
  const {isMobile} = useMobile();

  return (
    <ProductSection
      className={`${styles.wrapper} ${isMobile ? styles.mobile : ''}`}
    >
      <ProductSectionLeft>
        <ZissouProductImages title="Estilosa, resistente e perfeita" thumbs />
      </ProductSectionLeft>
      <ProductSectionRight>
        <ZissouProductOptions
          title="Selecione o tamanho da sua base:"
          uppercaseTitle={isMobile}
          icons
        />
        <ZissouProductPrice className={styles.Price} />
        <ZissouAddToCart className={styles.AddToCart} />
        <WhatsAppBanner className={styles.WhatsApp} />
      </ProductSectionRight>
    </ProductSection>
  );
}

export default BaseProduct;
