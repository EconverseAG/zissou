import {useState} from 'react';

import * as styles from './experienciaZissou.module.scss';

import {Image, Link} from '@shopify/hydrogen/client';

import CasaZissou from '../../../assets/casa-zissou.png';
import ZissouNormandia from '../../../assets/zissou-normandia.png';
import BolaRoxa from '../../../assets/bola-roxa.png';

export default function ExperienciaZissouMobile() {
  const [leftCityActive, setLeftCityTab] = useState(true);

  function handleCityTab(e) {
    if (e.target.id === 'leftCityTab') {
      setLeftCityTab(true);
    } else {
      setLeftCityTab(false);
    }
  }

  return (
    <div className={styles.ExperienciaZissouContent}>
      <div className={styles.ExperienciaZissouToggleTabs}>
        <button
          className={leftCityActive ? styles.clicked : styles.notClicked}
          onClick={handleCityTab}
          id="leftCityTab"
        >
          São Paulo
        </button>
        <button
          className={!leftCityActive ? styles.clicked : styles.notClicked}
          onClick={handleCityTab}
          style={{marginLeft: '-3px'}}
          id="rightCityTab"
        >
          Campinas
        </button>
      </div>
      <div className={styles.ExperienciaZissouStores}>
        {leftCityActive ? (
          <>
            <div className={styles.ExperienciaZissouStore}>
              <Image src={CasaZissou} width="96" height="96" />
              <div className={styles.ExperienciaZissouStoreInfo}>
                <span className={styles.ExperienciaZissouRightStoreTitle}>
                  Casa <br /> Zissou
                </span>
                <p className={styles.ExperienciaZissouRightStoreAddress}>
                  Rua Dr Melo Alves, 383 <br /> Jardins - SP <br /> Cep
                  01417-010
                </p>
              </div>
              <div className={styles.ExperienciaZissouStoreLinks}>
                <Link
                  reloadDocument
                  className={styles.ExperienciaZissouRightStoreHowToArrive}
                  to=""
                >
                  Como chegar
                </Link>
                <Link
                  reloadDocument
                  className={styles.ExperienciaZissouRightStoreScheduleHere}
                  to=""
                >
                  Agende aqui
                </Link>
              </div>
            </div>
            <div className={styles.ExperienciaZissouStore}>
              <Image src={ZissouNormandia} width="96" height="96" />
              <div className={styles.ExperienciaZissouStoreInfo}>
                <span className={styles.ExperienciaZissouRightStoreTitle}>
                  Zissou <br /> Normandia
                </span>
                <p className={styles.ExperienciaZissouRightStoreAddress}>
                  Rua Normandia, 25 <br /> Moema - SP <br /> Cep 04517-040
                </p>
              </div>
              <div className={styles.ExperienciaZissouStoreLinks}>
                <Link
                  reloadDocument
                  className={styles.ExperienciaZissouRightStoreHowToArrive}
                  to=""
                >
                  Como chegar
                </Link>
                <Link
                  reloadDocument
                  className={styles.ExperienciaZissouRightStoreScheduleHere}
                  to=""
                >
                  Agende aqui
                </Link>
              </div>
            </div>
            <div className={styles.ExperienciaZissouStore}>
              <Image src={BolaRoxa} width="96" height="96" />
              <div className={styles.ExperienciaZissouStoreInfo}>
                <span className={styles.ExperienciaZissouRightStoreTitle}>
                  Zissou <br /> Gabriel
                </span>
                <p className={styles.ExperienciaZissouRightStoreAddress}>
                  Al. Gabriel Monteiro da Silva, 1325 <br /> Jardim Paulistano -
                  SP <br /> Cep 01442-001
                </p>
              </div>
              <div className={styles.ExperienciaZissouStoreLinks}>
                <Link
                  reloadDocument
                  className={styles.ExperienciaZissouRightStoreHowToArrive}
                  to=""
                >
                  Como chegar
                </Link>
                <Link
                  reloadDocument
                  className={styles.ExperienciaZissouRightStoreScheduleHere}
                  to=""
                >
                  Agende aqui
                </Link>
              </div>
            </div>
          </>
        ) : (
          <div className={styles.ExperienciaZissouStore}>
            <Image src={BolaRoxa} width="96" height="96" />
            <div className={styles.ExperienciaZissouStoreInfo}>
              <span className={styles.ExperienciaZissouRightStoreTitle}>
                Zissou <br /> Cambuí
              </span>
              <p className={styles.ExperienciaZissouRightStoreAddress}>
                Rua Dr Sampaio Ferraz, 549 <br /> Cambuí, Campinas - SP <br />{' '}
                Cep 13024-431
              </p>
            </div>
            <div className={styles.ExperienciaZissouStoreLinks}>
              <Link
                reloadDocument
                className={styles.ExperienciaZissouRightStoreHowToArrive}
                to=""
              >
                Como chegar
              </Link>
              <Link
                reloadDocument
                className={styles.ExperienciaZissouRightStoreScheduleHere}
                to=""
              >
                Agende aqui
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
