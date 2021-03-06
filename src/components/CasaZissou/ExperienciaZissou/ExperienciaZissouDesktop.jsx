import * as styles from './experienciaZissou.module.scss';

import {Image, Link} from '@shopify/hydrogen/client';
import parseUrl from '../../../helpers/parseUrl';

const CasaZissou = parseUrl('casa-zissou.png');
const ZissouNormandia = parseUrl('zissou-normandia.png');
const ZissouGabriel = parseUrl('icone_loja_gabriel.png');
const EmBreve = parseUrl('em-breve.png');

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
              to="https://g.page/zissoubr?share"
              className={styles.ExperienciaZissouRightStoreHowToArrive}
            >
              COMO CHEGAR
            </Link>
            <Link
              to="https://calendly.com/casa-zissou/visita-agendada"
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
              to="https://goo.gl/maps/xGy6NdLi3iLZBMKy7"
              className={styles.ExperienciaZissouRightStoreHowToArrive}
            >
              COMO CHEGAR
            </Link>
            <Link
              to="https://calendly.com/zissou-normandia/visita-agendada"
              className={styles.ExperienciaZissouRightStoreScheduleHere}
            >
              AGENDE AQUI
            </Link>
          </div>
          <div className={styles.ExperienciaZissouLeftStore}>
            <Image src={ZissouGabriel} width="230" height="230" />
            <span className={styles.ExperienciaZissouRightStoreTitle}>
              Zissou <br /> Gabriel
            </span>
            <p className={styles.ExperienciaZissouRightStoreAddress}>
              Al. Gabriel Monteiro da Silva, 1325 <br /> Jardim Paulistano - SP{' '}
              <br /> Cep 01442-001
            </p>
            <Link
              to="https://www.google.com/maps/place/Alameda+Gabriel+Monteiro+da+Silva,+1325+-+Jardim+America,+S%C3%A3o+Paulo+-+SP,+01441-000/@-23.5713041,-46.6808239,17z/data=!3m1!4b1!4m5!3m4!1s0x94ce577087bf1391:0x4a50dea8cc64087a!8m2!3d-23.5713041!4d-46.6808239"
              className={styles.ExperienciaZissouRightStoreHowToArrive}
            >
              COMO CHEGAR
            </Link>
            <Link
              to="https://calendly.com/zissougabriel/visita-agendada"
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
            <Image src={EmBreve} width="230" height="230" />
            <span className={styles.ExperienciaZissouRightStoreTitle}>
              Zissou <br /> Cambuí
            </span>
            <p className={styles.ExperienciaZissouRightStoreAddress}>
              Rua Dr Sampaio Ferraz, 549 <br /> Cambuí, Campinas - SP <br /> Cep
              13024-431
            </p>
            {/* <Link
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
            </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
}
