import {Image, Link} from '@shopify/hydrogen';

import Banner from '../../assets/whatsapp-banner.gif';

import useMobile from '../../hooks/useMobile';

import * as styles from './WhatsAppBanner.module.scss';

function WhatsAppBanner({className}) {
  const {isMobile} = useMobile();

  return (
    <Link
      to="https://api.whatsapp.com/send?phone=5511932858213"
      className={`${styles.whatsApp} ${className}`}
      target="_blank"
    >
      <Image
        src={Banner}
        width={isMobile ? 284 : 523}
        height={isMobile ? 101 : 185}
      />
    </Link>
  );
}

export default WhatsAppBanner;