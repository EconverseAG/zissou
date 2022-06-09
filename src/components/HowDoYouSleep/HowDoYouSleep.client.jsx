import * as styles from './HowDoYouSleep.module.scss';

import HowDoYouSleepGif from '../../assets/travesseiro-how-do-you-sleep.gif';
import HowDoYouSleepGifMobile from '../../assets/travesseiro-how-do-you-sleep-mob.gif';

import useMobile from '../../hooks/useMobile';
import {Image} from '@shopify/hydrogen/client';

export default function HowDoYouSleep() {
  const {isMobile} = useMobile();

  return (
    <div
      className={`flex flex-col ${styles.wrapper} ${
        isMobile ? styles.mobile : ''
      }`}
    >
      <h2>
        Como você <strong>dorme?</strong>
      </h2>
      <span>Perfeito para seja-lá-como-você-quiser-usar</span>
      <Image
        src={isMobile ? HowDoYouSleepGifMobile : HowDoYouSleepGif}
        style={{mixBlendMode: 'multiply'}}
        width={isMobile ? 375 : 1200}
        height={isMobile ? 470 : 488}
      />
    </div>
  );
}
