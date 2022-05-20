import {useState} from 'react';

import {Image} from '@shopify/hydrogen';

import * as styles from '../Klabin/Klabin.module.scss';

import KlabinActive from '../../assets/KlabinActiveTab.webp';
import KlabinInactive from '../../assets/KlabinInactiveTab.webp';

import KlabinFundo from '../../assets/klabinFundoMobile.png';
import ZissouFundo from '../../assets/zissouFundoMobile.png';

import ZissouActive from '../../assets/ZissouActiveTab.webp';
import ZissouInactive from '../../assets/ZissouInactiveTab.webp';

import modalData from '../Klabin/ModalKlabinData';
import PopupContent from '../Klabin/Modal.client';

import VideoUboxing from '../../assets/video_unbox.mp4';

export default function KlabinMobile() {
  const [leftBrandActive, setLeftBrandTab] = useState(true);

  function handleBrandTab(e) {
    if (e.target.id === 'leftBrandTab') {
      setLeftBrandTab(true);
    } else {
      setLeftBrandTab(false);
    }
  }

  return (
    <div className={styles.KlabinContainer}>
      <strong className={styles.KlabinTitle}>
        DURMA <br /> DE CONSCIÊNCIA <br /> TRANQUILA PORQUE{' '}
        <p className={styles.KlabinOtherColorTitle}>#AQUITEMKLABIN</p>
      </strong>
      <div className={styles.KlabinVideo}>
        <video
          className={styles.video}
          src={VideoUboxing}
          controls
          autoPlay
          loop
          muted
          width={333}
          height={192}
        />
      </div>
      <span className={styles.KlabinSubtitle}>
        Todos os produtos Zissou chegam na sua casa com embalagens de papelão
        ondulado de altíssima qualidade da Klabin, referência no mundo em
        sustentabilidade
      </span>
      <div className={styles.KlabinZissouTabs}>
        <div className={styles.KlabinZissouToggleTabs}>
          <button
            className={
              leftBrandActive ? styles.BrandActive : styles.BrandInactive
            }
            style={{borderRadius: '33px 0 0 33px'}}
            onClick={handleBrandTab}
            id="leftBrandTab"
          >
            <Image
              src={leftBrandActive ? KlabinActive : KlabinInactive}
              width="53"
              height="38"
              loading={'lazy'}
            />
          </button>
          <button
            className={
              !leftBrandActive ? styles.BrandActive : styles.BrandInactive
            }
            style={{borderRadius: '0 33px 33px 0'}}
            onClick={handleBrandTab}
            id="rightBrandTab"
          >
            <Image
              src={!leftBrandActive ? ZissouActive : ZissouInactive}
              width="77"
              height="20"
              loading={'lazy'}
            />
          </button>
        </div>
        <div className={styles.KlabinImage}>
          {leftBrandActive ? (
            <Image src={KlabinFundo} width="297" height="481" />
          ) : (
            <Image
              src={ZissouFundo}
              width="297"
              height="481"
              style={{height: 481}}
              loading={'lazy'}
            />
          )}
          <div
            className={`${styles.KlabinDots} ${
              leftBrandActive ? styles.KlabinDotsLeftBrandActive : null
            }`}
          >
            {modalData.map((modal) => (
              <PopupContent content={modal} key={modal.name} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
