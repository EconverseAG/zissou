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

function CoralProduct() {
  const {isCoral} = useZissouProduct();
  const {isMobile} = useMobile();

  return (
    <ProductSection
      className={`${styles.wrapper} ${isMobile ? styles.mobile : ''}`}
    >
      <ProductSectionLeft>
        <ZissouProductImages />
        {!isMobile && <ZissouCompreJunto />}
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
        {isMobile && <ZissouCompreJunto />}
        <ZissouAddToCart className={styles.AddToCart} />
        <EntregaFutura />
        <ZissouColchaoIcons />
      </ProductSectionRight>
    </ProductSection>
  );
}

export default CoralProduct;
