import useZissouProduct from '../../hooks/useZissouProduct';
import useMobile from '../../hooks/useMobile';

import * as styles from './DuvetSpecialOptions.module.scss';

function DuvetSpecialOptions({className, ...rest}) {
  const {includeDuvetFilling, setIncludeDuvetFilling} = useZissouProduct();
  const {isMobile} = useMobile();

  return (
    <div
      className={`${styles.specialOptions} ${isMobile ? styles.mobile : ''} ${
        className || ''
      }`}
      {...rest}
    >
      <span>
        Duvet ou experiência
        <br /> completa de aconchego?
      </span>
      <div className={styles.specialOptionsSelect}>
        <button
          className={includeDuvetFilling && styles.highlight}
          onClick={() => setIncludeDuvetFilling(true)}
        >
          Duvet + Enchimento
        </button>
        <button
          className={!includeDuvetFilling && styles.highlight}
          onClick={() => setIncludeDuvetFilling(false)}
        >
          Duvet
        </button>
      </div>
      <button className={styles.specialOptionsSaibaMais}>Saiba mais +</button>
    </div>
  );
}

export default DuvetSpecialOptions;
