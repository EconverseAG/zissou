import ZissouProductImages from '../ZissouProductImages';
import ZissouProductPrice from '../ZissouProductPrice';
import ZissouProductOptions from '../ZissouProductOptions';
import ZissouAddToCart from '../ZissouAddToCart';
import WhatsAppBanner from '../WhatsAppBanner';

import useMobile from '../../hooks/useMobile';

import * as styles from './LencolProduct.module.scss';
import ExtraDuvetCoverSelector from '../ExtraDuvetCoverSelector';

function LencolProduct() {
  const {isMobile} = useMobile();

  return (
    <div className={`${styles.wrapper} ${isMobile ? styles.mobile : ''}`}>
      <div className={styles.productLeft}>
        <ZissouProductImages
          className={styles.productImages}
          title="Deite, role, estique, desenrole, abrace e se jogue para aproveitar ao máximo essa experiência :)"
        />
      </div>
      <div className={styles.productInfo}>
        <ZissouProductOptions
          title={
            isMobile
              ? 'Selecione o tamanho'
              : 'Selecione o tamanho da sua base:'
          }
          info="Contém: 2 fronhas, lençol de cima e lençol de baixo"
          uppercaseTitle={isMobile}
        />
        <ZissouProductPrice className={styles.productInfoPrice} />
        <ExtraDuvetCoverSelector className={styles.productInfoExtraCover} />
        <ZissouAddToCart className={styles.productInfoAddToCart} />
        <WhatsAppBanner className={styles.productInfoWhatsApp} />
      </div>
    </div>
  );
}

export default LencolProduct;
