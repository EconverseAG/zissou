import useMobile from '../../hooks/useMobile';
import * as styles from './BaseBanner.module.scss';

export default function BaseBanner() {
  const {isMobile} = useMobile();

  return (
    <div className={`${styles.wrapper} ${isMobile ? styles.mobile : ''}`}>
      <div className={styles.content}>
        <strong>Base Zissou</strong>
        <span>Estabilidade para dormir e viver</span>
      </div>
    </div>
  );
}
