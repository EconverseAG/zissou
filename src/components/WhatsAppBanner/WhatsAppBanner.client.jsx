import {Image, Link} from '@shopify/hydrogen/client';
import parseUrl from '../../helpers/parseUrl';

const Banner = parseUrl('whatsapp-banner.gif');

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
        width={isMobile ? 284 : 400}
        height={isMobile ? 101 : 141}
        loading={'lazy'}
      />
    </Link>
  );
}

export default WhatsAppBanner;
