import {Link} from '@shopify/hydrogen/client';
import * as styles from './CoralOrBlue.module.scss';

// import Gif from '../../assets/gif_coral_ou_blue.webm';
import GifFundoMobile from '../../assets/gif_fundo_mobile.webm';
import GifFundo from '../../assets/gif_coral_ou_blue_fundo.webm';
import useMobile from '../../hooks/useMobile';

export default function CoralOrBlue() {
  const {isMobile} = useMobile();

  return (
    <div className={styles.CoralOrBlueContainer}>
      <strong className={styles.CoralOrBlueTitle}>Coral ou blue?</strong>
      <video src={isMobile ? GifFundoMobile : GifFundo} autoPlay loop muted />
      <Link to="/pages/colchoes-zissou" className={styles.CoralOrBlueLink}>
        Comparar os colchões
      </Link>
    </div>
  );
}
