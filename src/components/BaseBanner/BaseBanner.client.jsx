import useMobile from '../../hooks/useMobile';
import * as styles from './BaseBanner.module.scss';

export default function BaseBanner() {
  const {isMobile} = useMobile();

  return (
    <div className={`${styles.wrapper} ${isMobile ? styles.mobile : ''}`}>
      <div className={styles.content}>
        <h1>Base Zissou</h1>
        <span>Estabilidade para dormir e viver</span>
      </div>
    </div>
  );
}
