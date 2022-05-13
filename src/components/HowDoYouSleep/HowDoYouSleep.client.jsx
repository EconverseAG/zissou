import * as styles from './HowDoYouSleep.module.scss';

import HowDoYouSleepGif from '../../assets/travesseiro-how-do-you-sleep.webm';
import HowDoYouSleepGifMobile from '../../assets/travesseiro-how-do-you-sleep-mob.webm';

import useMobile from '../../hooks/useMobile';

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
      <video
        src={isMobile ? HowDoYouSleepGifMobile : HowDoYouSleepGif}
        autoPlay
        loop
        muted
        style={{mixBlendMode: 'multiply'}}
      />
    </div>
  );
}
