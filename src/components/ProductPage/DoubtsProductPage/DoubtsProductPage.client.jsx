import {Image, Link} from '@shopify/hydrogen';
import * as styles from './DoubtsProductPage.module.scss';

import WhatsApp from '../../../assets/icone-menu-whatsapp-white.png';
import useMobile from '../../../hooks/useMobile';

export default function DoubtsProductPage({color}) {
  const {isMobile} = useMobile();

  return (
    <div className={styles.DoubtsProductPageContainer}>
      <div className={styles.DoubtsProductPageLeft}>
        <span className={styles.DoubtsProductPageTitle}>
          CONFESSO QUE AINDA TENHO DÚVIDAS…
          <br />
          PODE ME AJUDAR?
        </span>
      </div>
      <Link
        to="https://api.whatsapp.com/send?phone=5511932858213"
        target="_blank"
        className={styles.DoubtsProductPageRight}
      >
        <div
          style={{background: color ? color : ''}}
          className={styles.DoubtsProductPageButton}
        >
          <Image
            src={WhatsApp}
            width={isMobile ? 20 : 30}
            height={isMobile ? 20 : 30}
          />
        </div>
        <strong className={styles.DoubtsProductPageCTA}>
          ESTAMOS AQUI {isMobile ? <br /> : null} PARA ISSO!
        </strong>
      </Link>
    </div>
  );
}
