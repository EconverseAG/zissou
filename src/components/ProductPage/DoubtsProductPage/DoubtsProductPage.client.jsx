import {useState} from 'react';
import {Image, Link} from '@shopify/hydrogen/client';
import * as styles from './DoubtsProductPage.module.scss';
import parseUrl from '../../../helpers/parseUrl';

const WhatsApp = parseUrl('icone-menu-whatsapp-white.webp');
import useMobile from '../../../hooks/useMobile';

export default function DoubtsProductPage({color, hover}) {
  const [isMouseOver, setIsMouseOver] = useState(false);
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
        onMouseEnter={() => setIsMouseOver((prev) => !prev)}
        onMouseLeave={() => setIsMouseOver((prev) => !prev)}
      >
        <div
          style={{background: isMouseOver ? hover : color ? color : ''}}
          className={styles.DoubtsProductPageButton}
        >
          <Image
            src={WhatsApp}
            width={isMobile ? 20 : 30}
            height={isMobile ? 20 : 30}
            loading={'lazy'}
          />
        </div>
        <strong className={styles.DoubtsProductPageCTA}>
          ESTAMOS AQUI {isMobile ? <br /> : null} PARA ISSO!
        </strong>
      </Link>
    </div>
  );
}
