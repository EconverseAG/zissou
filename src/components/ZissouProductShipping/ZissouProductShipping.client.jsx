import useMobile from '../../hooks/useMobile';

import * as styles from './ZissouProductShipping.module.scss';

function ZissouProductShipping({className, ...rest}) {
  const {isMobile} = useMobile();

  return (
    <div
      className={`${styles.shipping} ${isMobile ? styles.mobile : ''} ${
        className || ''
      }`}
      {...rest}
    >
      <strong>Quer saber em quantos dias chega?</strong>
      <div className={styles.shippingActions}>
        <input type="text" placeholder="Informe seu CEP" />
        <button type="button">Ir</button>
      </div>
    </div>
  );
}

export default ZissouProductShipping;
