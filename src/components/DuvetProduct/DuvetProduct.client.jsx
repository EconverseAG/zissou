import ZissouProductImages from '../ZissouProductImages';
import ZissouProductPrice from '../ZissouProductPrice';
import ZissouProductOptions from '../ZissouProductOptions';
import ZissouAddToCart from '../ZissouAddToCart';
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
          title="Selecione o tamanho do seu Duvet:"
          uppercaseTitle
        />
        <ZissouProductPrice className={styles.productInfoPrice} />
        <ZissouAddToCart className={styles.productInfoAddToCart} />
        <WhatsAppBanner className={styles.productInfoWhatsApp} />
      </div>
    </div>
  );
}

export default DuvetProduct;
