import ZissouProductImages from '../ZissouProductImages';
import ZissouProductPrice from '../ZissouProductPrice';
import ZissouAddToCart from '../ZissouAddToCart';
import ProductSection from '../ProductSection';
import ProductSectionLeft from '../ProductSection/ProductSectionLeft';
import ProductSectionRight from '../ProductSection/ProductSectionRight';

import useMobile from '../../hooks/useMobile';

import * as styles from './TocaProduct.module.scss';

function TocaProduct() {
  const {isMobile} = useMobile();

  return (
    <ProductSection
      className={`${styles.wrapper} ${isMobile ? styles.mobile : ''}`}
    >
      <ProductSectionLeft>
        <ZissouProductImages
          className={styles.Images}
          title={
            !isMobile &&
            'O abraço, conforto e proteção que seu melhor amigo precisa na hora de pegar no soninho'
          }
        />
      </ProductSectionLeft>
      <ProductSectionRight>
        <span className={styles.contentDisclaimer}>
          Um luxo para pequenos e {isMobile && <br />} aconchegante para médios
          -
          <br />
          recomendação de até 20kg
          <br />
          <br />
          Tamanho C65 x L62 x A18cm
        </span>
        <ZissouProductPrice className={styles.Price} />
        <ZissouAddToCart className={styles.AddToCart} />
      </ProductSectionRight>
    </ProductSection>
  );
}

export default TocaProduct;
