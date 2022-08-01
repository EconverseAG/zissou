import parseUrl from '../../helpers/parseUrl';
import useMobile from '../../hooks/useMobile';

import * as styles from './DuvetHowToDescribe.module.scss';

const Video = parseUrl('duvet-how-to-describe.mp4');
const VideoMobile = parseUrl('duvet-how-to-describe-mobile.mp4');

function DuvetHowToDescribe() {
  const {isMobile} = useMobile();

  return (
    <div className={`${styles.wrapper} ${isMobile ? styles.mobile : ''}`}>
      <h2>
        Como descrever <strong>o Duvet Zissou</strong>
      </h2>
      <div className={styles.videoContainer}>
        {!isMobile ? (
          <video
            src={Video}
            autoPlay
            loop
            muted
            playsInline
            width={366}
            height={364}
          />
        ) : (
          <video
            src={VideoMobile}
            controls
            loop
            muted
            playsInline
            width={1100}
            height={619}
          />
        )}
      </div>
    </div>
  );
}

export default DuvetHowToDescribe;
