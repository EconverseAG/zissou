import {Link, Image} from '@shopify/hydrogen/client';

import * as styles from './StillHaveDoubts.module.scss';

import IconWhatsApp from '../../../assets/whatsapp-white.svg';

function StillHaveDoubts() {
  return (
    <div className={styles.stillHaveDoubts}>
      <p>
        Confesso que ainda tenho dúvidas... <br /> Pode me ajudar?
      </p>
      <Link
        to="https://api.whatsapp.com/send?phone=5511932858213"
        target="_blank"
      >
        <div className={styles.whatsapp}>
          <Image src={IconWhatsApp} width={31} height={31} />
        </div>
        <span>Estamos aqui para isso</span>
      </Link>
    </div>
  );
}

export default StillHaveDoubts;
