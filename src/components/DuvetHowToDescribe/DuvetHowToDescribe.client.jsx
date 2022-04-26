import useMobile from '../../hooks/useMobile';

import * as styles from './DuvetHowToDescribe.module.scss';

import Video from '../../assets/duvet-how-to-describe.mp4';

function DuvetHowToDescribe() {
  const {isMobile} = useMobile();

  return (
    <div className={`${styles.wrapper} ${isMobile ? styles.mobile : ''}`}>
      <h2>
        Como descrever <strong>o Duvet Zissou</strong>
      </h2>
      <div className={styles.videoContainer}>
        <video
          src={Video}
          autoPlay
          loop
          muted
          playsInline
          width={isMobile ? 1100 : 366}
          height={isMobile ? 619 : 364}
        />
      </div>
    </div>
  );
}

export default DuvetHowToDescribe;
