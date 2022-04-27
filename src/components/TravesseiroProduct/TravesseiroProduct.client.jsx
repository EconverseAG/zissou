import ZissouProductImages from '../ZissouProductImages';
import ZissouProductPrice from '../ZissouProductPrice';
import ZissouAddToCart from '../ZissouAddToCart';
import TravesseiroSpecialOptions from '../TravesseiroSpecialOptions';

import useMobile from '../../hooks/useMobile';

import * as styles from './TravesseiroProduct.module.scss';

function TravesseiroProduct() {
  const {isMobile} = useMobile();

  return (
    <div className={`${styles.wrapper} ${isMobile ? styles.mobile : ''}`}>
      <ZissouProductImages
        className={styles.productImages}
        title="A conectada. O tranquilão. A preguiçosa.
O resmungão. Cada um tem o seu jeito de dormir.
Com o Travesseiro Zissou, você define o conforto
perfeito com a união de camadas que se adaptam
às curvas do seu corpo dentro da capa que
mantém o frescor com toque suave e macio."
      />
      <div className={styles.productInfo}>
        <span>
          Seu Travesseiro contém:
          <br /> 1 bag, 1 capa com enchimento e 3 camadas
        </span>
        <ZissouProductPrice className={styles.productInfoPrice} />
        <TravesseiroSpecialOptions
          className={styles.productInfoSpecialOptions}
        />
        <ZissouAddToCart className={styles.productInfoAddToCart} />
      </div>
    </div>
  );
}

export default TravesseiroProduct;
