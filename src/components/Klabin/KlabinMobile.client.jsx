import {useState} from 'react';

import {Image} from '@shopify/hydrogen';

import * as styles from '../Klabin/Klabin.module.scss';

import KlabinActive from '../../assets/KlabinActiveTab.png';
import KlabinInactive from '../../assets/KlabinInactiveTab.png';
import KlabinFundo from '../../assets/klabinFundoMobile.png';
import ZissouFundo from '../../assets/zissouFundoMobile.png';

import ZissouActive from '../../assets/ZissouActiveTab.png';
import ZissouInactive from '../../assets/ZissouInactiveTab.png';

import modalData from '../Klabin/ModalKlabinData';
import PopupContent from '../Klabin/Modal.client';

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
        <iframe
          width="333"
          height="192"
          src="https://www.youtube.com/embed/L3HpWrsnDSM"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
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