import {useState} from 'react';

import * as styles from './experienciaZissou.module.scss';

// import {Image, Link} from '@shopify/hydrogen';

// import CasaZissou from '../../../assets/casa-zissou.png';
// import ZissouNormandia from '../../../assets/zissou-normandia.png';
// import BolaRoxa from '../../../assets/bola-roxa.png';

export default function ExperienciaZissouMobile() {
  const [leftBrandActive, setLeftBrandTab] = useState(true);

  function handleBrandTab(e) {
    if (e.target.id === 'leftBrandTab') {
      setLeftBrandTab(true);
    } else {
      setLeftBrandTab(false);
    }
  }

  return (
    <div className={styles.ExperienciaZissouContent}>
      <div className={styles.ExperienciaZissouToggleTabs}>
        <button
          className={leftBrandActive ? styles.clicked : styles.notClicked}
          onClick={handleBrandTab}
          id="leftBrandTab"
        >
          São Paulo
        </button>
        <button
          className={!leftBrandActive ? styles.clicked : styles.notClicked}
          onClick={handleBrandTab}
          style={{marginLeft: '-3px'}}
          id="rightBrandTab"
        >
          Campinas
        </button>
      </div>
    </div>
  );
}
