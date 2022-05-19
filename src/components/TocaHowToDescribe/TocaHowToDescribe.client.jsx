import useMobile from '../../hooks/useMobile';

import VideoGif from '../../assets/toca-gif.webm';

import * as styles from './TocaHowToDescribe.module.scss';

export default function TocaHowToDescribe() {
  const {isMobile} = useMobile();

  return (
    <div className={styles.TocaHowToDescribeContainer}>
      <strong className={styles.TocaHowToDescribeContainerTitle}>
        <span className={styles.OtherColor}>Como descrever</span> a toca zissou?
      </strong>
      <div className={styles.Bottom}>
        <div className={styles.BottomVideo}>
          <video
            src={VideoGif}
            autoPlay
            loop
            muted
            playsInline
            width={isMobile ? 375 : 784}
            height={isMobile ? 340 : 526}
          />
        </div>
        <span className={styles.BottomText}>
          Direto na fonte
          <br />
          <br />
          Contratamos os melhores especialistas das universidades de Hauvard,
          Pischerstone e UNICÃOP para chegarmos na fórmula do sono perfeito
          <br />
          <br />E como nosso Colchão, a Toca Zissou também foi desenvolvida no
          Brasil e é produzida nos Estados Unidos
        </span>
      </div>
    </div>
  );
}
