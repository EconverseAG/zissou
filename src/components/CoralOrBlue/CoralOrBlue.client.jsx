import {Link, Image} from '@shopify/hydrogen/client';
import * as styles from './CoralOrBlue.module.scss';
import parseUrl from '../../helpers/parseUrl';

const GifFundoMobile = parseUrl('gif_fundo_mobile.gif');
const GifFundo = parseUrl('gif_coral_ou_blue_fundo.gif');
import useMobile from '../../hooks/useMobile';

export default function CoralOrBlue() {
  const {isMobile} = useMobile();

  return (
    <div className={styles.CoralOrBlueContainer}>
      <strong className={styles.CoralOrBlueTitle}>SPARK, CORAL OU BLUE?</strong>
      <Image
        src={isMobile ? GifFundoMobile : GifFundo}
        width="100%"
        height="100%"
      />
      <Link to="/pages/comparativo-colchoes" className={styles.CoralOrBlueLink}>
        Comparar os colchões
      </Link>
    </div>
  );
}
