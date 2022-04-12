import * as styles from './experienciaZissou.module.scss';

import {Image, Link} from '@shopify/hydrogen';

import CasaZissou from '../../../assets/casa-zissou.png';
import ZissouNormandia from '../../../assets/zissou-normandia.png';
import BolaRoxa from '../../../assets/bola-roxa.png';

export default function ExperienciaZissouDesktop() {
  return (
    <div className={styles.ExperienciaZissouContent}>
      <div className={styles.ExperienciaZissouLeft}>
        <span className={styles.ExperienciaZissouLeftTitle}>São Paulo</span>
        <div className={styles.ExperienciaZissouLeftStores}>
          <div className={styles.ExperienciaZissouLeftStore}>
            <Image src={CasaZissou} width="230" height="230" />
            <span className={styles.ExperienciaZissouRightStoreTitle}>
              CASA <br /> Zissou
            </span>
            <p className={styles.ExperienciaZissouRightStoreAddress}>
              Rua Dr Melo Alves, 383 <br /> Jardins - SP <br /> Cep 01417-010
            </p>
            <Link
              to="/"
              className={styles.ExperienciaZissouRightStoreHowToArrive}
            >
              COMO CHEGAR
            </Link>
            <Link
              to="/"
              className={styles.ExperienciaZissouRightStoreScheduleHere}
            >
              AGENDE AQUI
            </Link>
          </div>
          <div className={styles.ExperienciaZissouLeftStore}>
            <Image src={ZissouNormandia} width="230" height="230" />
            <span className={styles.ExperienciaZissouRightStoreTitle}>
              Zissou <br /> Normandia
            </span>
            <p className={styles.ExperienciaZissouRightStoreAddress}>
              Rua Normandia, 25 <br /> Moema - SP <br /> Cep 04517-040
            </p>
            <Link
              to="/"
              className={styles.ExperienciaZissouRightStoreHowToArrive}
            >
              COMO CHEGAR
            </Link>
            <Link
              to="/"
              className={styles.ExperienciaZissouRightStoreScheduleHere}
            >
              AGENDE AQUI
            </Link>
          </div>
          <div className={styles.ExperienciaZissouLeftStore}>
            <Image src={BolaRoxa} width="230" height="230" />
            <span className={styles.ExperienciaZissouRightStoreTitle}>
              Zissou <br /> Gabriel
            </span>
            <p className={styles.ExperienciaZissouRightStoreAddress}>
              Al. Gabriel Monteiro da Silva, 1325 <br /> Jardim Paulistano - SP{' '}
              <br /> Cep 01442-001
            </p>
            <Link
              to="/"
              className={styles.ExperienciaZissouRightStoreHowToArrive}
            >
              COMO CHEGAR
            </Link>
            <Link
              to="/"
              className={styles.ExperienciaZissouRightStoreScheduleHere}
            >
              AGENDE AQUI
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.ExperienciaZissouRight}>
        <span className={styles.ExperienciaZissouRightTitle}>Campinas</span>
        <div className={styles.ExperienciaZissouRightStores}>
          <div className={styles.ExperienciaZissouRightStore}>
            <Image src={BolaRoxa} width="230" height="230" />
            <span className={styles.ExperienciaZissouRightStoreTitle}>
              Zissou <br /> Cambuí
            </span>
            <p className={styles.ExperienciaZissouRightStoreAddress}>
              Rua Dr Sampaio Ferraz, 549 <br /> Cambuí, Campinas - SP <br /> Cep
              13024-431
            </p>
            <Link
              to="/"
              className={styles.ExperienciaZissouRightStoreHowToArrive}
            >
              COMO CHEGAR
            </Link>
            <Link
              to="/"
              className={styles.ExperienciaZissouRightStoreScheduleHere}
            >
              AGENDE AQUI
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
