import useMobile from '../../hooks/useMobile';
import * as styles from './TravesseiroBanner.module.scss';

export default function TravesseiroBanner() {
  const {isMobile} = useMobile();

  return (
    <div className={`${styles.wrapper} ${isMobile ? styles.mobile : ''}`}>
      <div className={styles.content}>
        <strong>Travesseiro Zissou</strong>
        <span>O conforto que você define</span>
      </div>
    </div>
  );
}
