import ZissouProductImages from '../ZissouProductImages';
import ZissouProductPrice from '../ZissouProductPrice';
import ZissouProductOptions from '../ZissouProductOptions';
import ZissouAddToCart from '../ZissouAddToCart';
import ProductSelectedOptions from '../ProductSelectedOptions';
import DuvetSpecialOptions from '../DuvetSpecialOptions';
import ExtraDuvetCoverSelector from '../ExtraDuvetCoverSelector';
import WhatsAppBanner from '../WhatsAppBanner';

import useMobile from '../../hooks/useMobile';

import * as styles from './DuvetProduct.module.scss';

function DuvetProduct() {
  const {isMobile} = useMobile();

  return (
    <div className={`${styles.wrapper} ${isMobile ? styles.mobile : ''}`}>
      <div className={styles.productLeft}>
        <ZissouProductImages title="Embale no aconchego para um sono mais gostoso" />
      </div>
      <div className={styles.productInfo}>
        <ZissouProductOptions
          className={styles.productInfoOptions}
          title="Selecione o tamanho do seu Duvet:"
          uppercaseTitle
        />
        <DuvetSpecialOptions className={styles.productInfoSpecialOptions} />
        <ProductSelectedOptions className={styles.productInfoSelectedOptions} />
        <ZissouProductPrice className={styles.productInfoPrice} />
        <ExtraDuvetCoverSelector className={styles.productInfoExtraCover} />
        <ZissouAddToCart className={styles.productInfoAddToCart} />
        <WhatsAppBanner className={styles.productInfoWhatsApp} />
      </div>
    </div>
  );
}

export default DuvetProduct;
