import ZissouAddToCart from '../ZissouAddToCart';
import ZissouProductOptions from '../ZissouProductOptions';
import ZissouProductImages from '../ZissouProductImages';
import ZissouProductPrice from '../ZissouProductPrice';
import WhatsAppBanner from '../WhatsAppBanner';

import * as styles from './BaseProduct.module.scss';

function BaseProduct() {
  return (
    <div className={styles.wrapper}>
      <ZissouProductImages title="Estilosa, resistente e perfeita" thumbs />
      <div className={styles.productInfo}>
        <ZissouProductOptions title="Selecione o tamanho da sua base:" />
        <ZissouProductPrice className={styles.productInfoPrice} />
        <ZissouAddToCart className={styles.productInfoAddToCart} />
        <WhatsAppBanner className={styles.productInfoWhatsApp} />
      </div>
    </div>
  );
}

export default BaseProduct;
