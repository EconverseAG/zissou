import {Link} from '@shopify/hydrogen/client';
import * as styles from './CoralOrBlue.module.scss';

import Gif from '../../assets/gif_coral_ou_blue.webm';

export default function CoralOrBlue() {
  return (
    <div className={styles.CoralOrBlueContainer}>
      <strong className={styles.CoralOrBlueTitle}>Coral ou blue?</strong>
      <video src={Gif} autoPlay loop muted />
      <Link to="/pages/colchoes-zissou" className={styles.CoralOrBlueLink}>
        Comparar os colchões
      </Link>
    </div>
  );
}
