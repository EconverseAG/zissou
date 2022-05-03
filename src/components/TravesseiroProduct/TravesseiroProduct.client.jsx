import ZissouProductImages from '../ZissouProductImages';
import ZissouProductPrice from '../ZissouProductPrice';
import ZissouAddToCart from '../ZissouAddToCart';
import TravesseiroSpecialOptions from '../TravesseiroSpecialOptions';
import ProductSection from '../ProductSection';
import ProductSectionLeft from '../ProductSection/ProductSectionLeft';
import ProductSectionRight from '../ProductSection/ProductSectionRight';

import useMobile from '../../hooks/useMobile';

import * as styles from './TravesseiroProduct.module.scss';

function TravesseiroProduct() {
  const {isMobile} = useMobile();

  return (
    <ProductSection
      className={`${styles.wrapper} ${isMobile ? styles.mobile : ''}`}
    >
      <ProductSectionLeft>
        <ZissouProductImages
          className={styles.Images}
          title="A conectada. O tranquilão. A preguiçosa.
  O resmungão. Cada um tem o seu jeito de dormir.
  Com o Travesseiro Zissou, você define o conforto
  perfeito com a união de camadas que se adaptam
  às curvas do seu corpo dentro da capa que
  mantém o frescor com toque suave e macio."
        />
      </ProductSectionLeft>
      <ProductSectionRight>
        <span className={styles.contentDisclaimer}>
          Seu Travesseiro contém:
          <br /> 1 bag, 1 capa com enchimento e 3 camadas
        </span>
        <ZissouProductPrice className={styles.Price} />
        <TravesseiroSpecialOptions className={styles.SpecialOptions} />
        <ZissouAddToCart className={styles.AddToCart} />
      </ProductSectionRight>
    </ProductSection>
  );
}

export default TravesseiroProduct;
