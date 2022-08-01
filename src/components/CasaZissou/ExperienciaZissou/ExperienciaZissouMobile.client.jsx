import {useState} from 'react';

import * as styles from './experienciaZissou.module.scss';

import {Image, Link} from '@shopify/hydrogen/client';
import parseUrl from '../../../helpers/parseUrl';

const CasaZissou = parseUrl('casa-zissou.png');
const ZissouNormandia = parseUrl('zissou-normandia.png');
const ZissouGabriel = parseUrl('icone_loja_gabriel.png');
const EmBreve = parseUrl('em-breve.png');

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
                  className={styles.ExperienciaZissouRightStoreHowToArrive}
                  to="https://g.page/zissoubr?share"
                  target={'_blank'}
                >
                  Como chegar
                </Link>
                <Link
                  className={styles.ExperienciaZissouRightStoreScheduleHere}
                  to="https://calendly.com/casa-zissou/visita-agendada"
                  target={'_blank'}
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
                  className={styles.ExperienciaZissouRightStoreHowToArrive}
                  to="https://goo.gl/maps/xGy6NdLi3iLZBMKy7"
                  target={'_blank'}
                >
                  Como chegar
                </Link>
                <Link
                  className={styles.ExperienciaZissouRightStoreScheduleHere}
                  to="https://calendly.com/zissou-normandia/visita-agendada"
                  target={'_blank'}
                >
                  Agende aqui
                </Link>
              </div>
            </div>
            <div className={styles.ExperienciaZissouStore}>
              <Image src={ZissouGabriel} width="96" height="96" />
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
                  className={styles.ExperienciaZissouRightStoreHowToArrive}
                  to="https://www.google.com/maps/place/Alameda+Gabriel+Monteiro+da+Silva,+1325+-+Jardim+America,+S%C3%A3o+Paulo+-+SP,+01441-000/@-23.5713041,-46.6808239,17z/data=!3m1!4b1!4m5!3m4!1s0x94ce577087bf1391:0x4a50dea8cc64087a!8m2!3d-23.5713041!4d-46.6808239"
                  target={'_blank'}
                >
                  Como chegar
                </Link>
                <Link
                  className={styles.ExperienciaZissouRightStoreScheduleHere}
                  to="https://calendly.com/zissougabriel/visita-agendada"
                  target={'_blank'}
                >
                  Agende aqui
                </Link>
              </div>
            </div>
          </>
        ) : (
          <div className={styles.ExperienciaZissouStore}>
            <Image src={EmBreve} width="96" height="96" />
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
              {/* <Link
                className={styles.ExperienciaZissouRightStoreHowToArrive}
                to=""
              >
                Como chegar
              </Link>
              <Link
                className={styles.ExperienciaZissouRightStoreScheduleHere}
                to="https://calendly.com/zissou-normandia/visita-agendada"
              >
                Agende aqui
              </Link> */}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
