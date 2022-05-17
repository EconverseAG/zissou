import {Link, Image} from '@shopify/hydrogen/client';

import useMobile from '../../../hooks/useMobile';

import * as styles from './StillHaveDoubts.module.scss';

import IconWhatsApp from '../../../assets/whatsapp-white.svg';

function StillHaveDoubts() {
  const {isMobile} = useMobile();

  return (
    <div
      className={`${styles.stillHaveDoubts} ${isMobile ? styles.mobile : ''}`}
    >
      <p>
        Confesso que ainda tenho dúvidas... <br /> Pode me ajudar?
      </p>
      <Link
        to="https://api.whatsapp.com/send?phone=5511932858213"
        target="_blank"
      >
        <div className={styles.whatsapp}>
          <Image
            src={IconWhatsApp}
            width={isMobile ? 26 : 31}
            height={isMobile ? 26 : 31}
          />
        </div>
        <span>Estamos aqui para isso!</span>
      </Link>
    </div>
  );
}

export default StillHaveDoubts;
