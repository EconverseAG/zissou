import ZissouProductImages from '../ZissouProductImages';
import ZissouProductPrice from '../ZissouProductPrice';
import ZissouProductOptions from '../ZissouProductOptions';
import ZissouAddToCart from '../ZissouAddToCart';
import WhatsAppBanner from '../WhatsAppBanner';
import ExtraDuvetCoverSelector from '../ExtraDuvetCoverSelector';
import ColorSelector from '../ColorSelector';

import useMobile from '../../hooks/useMobile';

import * as styles from './LencolProduct.module.scss';

function LencolProduct() {
  const {isMobile} = useMobile();

  return (
    <div className={`${styles.wrapper} ${isMobile ? styles.mobile : ''}`}>
      <div className={styles.productLeft}>
        <ZissouProductImages
          className={styles.productImages}
          title="Deite, role, estique, desenrole, abrace e se jogue para aproveitar ao máximo essa experiência :)"
        />
        <WhatsAppBanner className={styles.productInfoWhatsApp} />
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
        <ColorSelector className={styles.productInfoColorSelector} />
        <ZissouProductPrice className={styles.productInfoPrice} />
        <ExtraDuvetCoverSelector className={styles.productInfoExtraCover} />
        <ZissouAddToCart className={styles.productInfoAddToCart} />
      </div>
    </div>
  );
}

export default LencolProduct;
