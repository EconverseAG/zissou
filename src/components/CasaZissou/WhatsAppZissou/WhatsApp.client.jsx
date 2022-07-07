import * as styles from './WhatsApp.module.scss';
import parseUrl from '../../../helpers/parseUrl';

const LogoWhatsApp = parseUrl('icone-menu-whatsapp-white.webp');
import {Image, Link} from '@shopify/hydrogen/client';
import useMobile from '../../../hooks/useMobile';

export default function WhatsApp() {
  const {isMobile} = useMobile();
  return (
    <div className={styles.WhatsAppContainer}>
      <strong className={styles.WhatsAppTitle}>
        Quer conhecer os produtos Zissou pessoalmente em uma marca parceira
        próxima da sua casa?
      </strong>
      <Link
        to="https://api.whatsapp.com/send?phone=5511932858213"
        className={styles.WhatsAppButton}
        target="_blank"
      >
        <div className={styles.WhatsAppBackground}>
          <Image
            src={LogoWhatsApp}
            width={isMobile ? '18' : '31'}
            height={isMobile ? '18' : '31'}
          />
        </div>
        <span className={styles.WhatsAppText}>NOS CHAME POR AQUI :)</span>
      </Link>
    </div>
  );
}
