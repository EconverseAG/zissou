import {Image, Link} from '@shopify/hydrogen';
import * as styles from './CoralOrBlue.module.scss';

import Gif from '../../assets/gif_coral_ou_blue.gif';

export default function CoralOrBlue() {
  return (
    <div className={styles.CoralOrBlueContainer}>
      <strong className={styles.CoralOrBlueTitle}>Coral ou blue?</strong>
      <Image src={Gif} width="950" height="352" />
      <Link
        to="https://www.zissou.com.br/pages/colchoes-zissou"
        className={styles.CoralOrBlueLink}
      >
        Comparar os colchões
      </Link>
    </div>
  );
}
