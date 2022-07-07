import {useEffect, useState} from 'react';
import useMobile from '../../hooks/useMobile';
import {Image} from '@shopify/hydrogen/client';

import * as styles from './LencolDuvetBanner.module.scss';
import parseUrl from '../../helpers/parseUrl';

const BannerLencolDuvet = parseUrl('banner_lencol_duvet.png');
const BannerLencolDuvetMobile = parseUrl('banner_lencol_duvet_mobile.png');

export default function LencolDuvetBanner() {
  const [isMobile, setTrueIsMobile] = useState(false);

  const {isMobile: incorrectIsMobile} = useMobile();

  useEffect(() => {
    setTrueIsMobile(incorrectIsMobile);
  }, [incorrectIsMobile]);

  return (
    <div className={styles.LencolDuvetBannerContainer}>
      <h1 className={styles.LencolDuvetBannerTitle}>
        LENÇOL <span className={styles.OtherColor}>&</span> DUVET
      </h1>
      <Image
        src={isMobile ? BannerLencolDuvetMobile : BannerLencolDuvet}
        width={isMobile ? 429 : 1920}
        height={isMobile ? 333 : 995}
        className={styles.LencolDuvetBannerImage}
      />
    </div>
  );
}
