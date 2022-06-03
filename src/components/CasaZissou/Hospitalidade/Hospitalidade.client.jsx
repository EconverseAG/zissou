import useMobile from '../../../hooks/useMobile';

import {Image} from '@shopify/hydrogen';

import * as styles from './Hospitalidade.module.scss';

import LogoFasano from '../../../assets/logo-fasano.webp';
import LogoCataratas from '../../../assets/logo-Cataratas.webp';

import HotelGrande from '../../../assets/hotel-grande.png';
import HotelGrande2 from '../../../assets/hotel-grande2.png';
import HotelGrande3 from '../../../assets/hotel-grande3.png';
import CataratasGrande from '../../../assets/catarata-grande.png';
import HotelPequeno1 from '../../../assets/hotel-pequeno1.png';
import HotelPequeno2 from '../../../assets/hotel-pequeno2.png';
import HotelPequeno3 from '../../../assets/hotel-pequeno3.png';
import HotelPequeno4 from '../../../assets/hotel-pequeno4.png';
import HotelPequeno5 from '../../../assets/hotel-pequeno5.png';
import HotelPequeno6 from '../../../assets/hotel-pequeno6.png';
import HotelPequeno7 from '../../../assets/hotel-pequeno7.png';
import HotelPequeno8 from '../../../assets/hotel-pequeno8.png';

export default function Hospitalidade() {
  const {isMobile} = useMobile();

  return (
    <div className={styles.HospitalidadeContainer}>
      <strong className={styles.HospitalidadeTitle}>Hospitalidade</strong>
      <span className={styles.HospitalidadeSubtitle}>
        Se você quer dar uma folga para sua cama, aproveite para dormir & viver
        em um Zissou nos hotéis mais exclusivos e acomodações únicas pelo Brasil
      </span>
      <div className={styles.HospitalidadeContent}>
        <div className={styles.HospitalidadeLeft}>
          <div className={styles.HospitalidadeLogo}>
            <Image
              src={LogoFasano}
              width={isMobile ? '113' : '178'}
              height={isMobile ? '17' : '28'}
            />
            {isMobile ? (
              <Image
                src={LogoCataratas}
                width={isMobile ? '114' : '189'}
                height={isMobile ? '36' : '60'}
              />
            ) : null}
          </div>
          <div className={styles.HospitalidadeFotos}>
            {isMobile ? (
              <figure
                className={styles.legendaContainer}
                style={{marginLeft: '12px'}}
              >
                <Image
                  src={HotelGrande}
                  width={isMobile ? '226' : '246'}
                  height={isMobile ? '281' : '405'}
                />
                <figcaption className={styles.legenda}>
                  FASANO <br />
                  SALVADOR
                </figcaption>
              </figure>
            ) : (
              <div className={styles.HospitalidadeFotosGrande}>
                <figure className={styles.legendaContainer}>
                  <Image
                    src={HotelGrande}
                    width={isMobile ? '226' : '246'}
                    height={isMobile ? '281' : '405'}
                  />
                  <figcaption className={styles.legenda}>
                    FASANO <br />
                    SALVADOR
                  </figcaption>
                </figure>
              </div>
            )}
            <div className={styles.HospitalidadeFotosPequenas}>
              <figure className={styles.legendaContainer}>
                <Image
                  src={HotelPequeno1}
                  width={isMobile ? '226' : '246'}
                  height={isMobile ? '134' : '196'}
                />
                <figcaption className={styles.legenda}>
                  FASANO <br /> BELO HORIZONTE
                </figcaption>
              </figure>
              <figure className={styles.legendaContainer}>
                <Image
                  src={HotelPequeno3}
                  width={isMobile ? '226' : '246'}
                  height={isMobile ? '134' : '196'}
                />
                <figcaption className={styles.legenda}>
                  FASANO <br /> Boa Vista
                </figcaption>
              </figure>
              <figure className={styles.legendaContainer}>
                <Image
                  src={HotelPequeno2}
                  width={isMobile ? '226' : '246'}
                  height={isMobile ? '134' : '196'}
                />
                <figcaption className={styles.legenda}>
                  Fasano <br /> TRANCOSO
                </figcaption>
              </figure>
              <figure className={styles.legendaContainer}>
                <Image
                  src={HotelPequeno4}
                  width={isMobile ? '226' : '246'}
                  height={isMobile ? '134' : '196'}
                />
                <figcaption className={styles.legenda}>
                  FASANO <br />
                  BELO HORIZONTE
                </figcaption>
              </figure>
            </div>
            {isMobile ? (
              <figure
                className={styles.legendaContainer}
                style={{marginLeft: '12px', marginRight: '12px'}}
              >
                <Image
                  src={CataratasGrande}
                  width={isMobile ? '226' : '342'}
                  height={isMobile ? '372' : '410'}
                  style={{height: '372px'}}
                />
                <figcaption className={styles.legenda}>
                  BELMOND <br />
                  CATARATAS
                </figcaption>
              </figure>
            ) : null}
          </div>
        </div>
        {isMobile ? null : (
          <div className={styles.HospitalidadeRight}>
            <div className={styles.HospitalidadeLogo}>
              <Image
                src={LogoCataratas}
                width={isMobile ? '114' : '189'}
                height={isMobile ? '36' : '60'}
              />
            </div>
            <div className={styles.HospitalidadeFotos}>
              <figure className={styles.legendaContainer}>
                <Image
                  src={CataratasGrande}
                  width={isMobile ? '226' : '342'}
                  height={isMobile ? '281' : '410'}
                />
                <figcaption className={styles.legenda}>
                  BELMOND <br />
                  CATARATAS
                </figcaption>
              </figure>
            </div>
          </div>
        )}
      </div>
      <div className={styles.HospitalidadeContent}>
        <div className={styles.HospitalidadeLeft}>
          <div
            className={styles.HospitalidadeLogo}
            style={{paddingBottom: '17.8px'}}
          >
            <strong className={styles.HospitalidadeLogoTitle}>
              TURISMO DE EXPERIÊNCIA
            </strong>
          </div>
          <div className={styles.HospitalidadeFotos}>
            {isMobile ? (
              <figure
                className={styles.legendaContainer}
                style={{marginLeft: '12px'}}
              >
                <Image
                  src={HotelGrande2}
                  width={isMobile ? '226' : '342'}
                  height={isMobile ? '372' : '410'}
                />
                <figcaption className={styles.legenda}>
                  ALTAR <br />
                  FLUTUANTE
                </figcaption>
              </figure>
            ) : (
              <div className={styles.HospitalidadeFotosGrande}>
                <figure className={styles.legendaContainer}>
                  <Image
                    src={HotelGrande2}
                    width={isMobile ? '226' : '279'}
                    height={isMobile ? '372' : '406'}
                  />
                  <figcaption className={styles.legenda}>
                    ALTAR <br />
                    FLUTUANTE
                  </figcaption>
                </figure>
              </div>
            )}
            <div className={styles.HospitalidadeFotosEmGrade}>
              <div className={styles.FlexItem}>
                <figure className={styles.legendaContainer}>
                  <Image
                    src={HotelPequeno5}
                    width={isMobile ? '226' : '279'}
                    height={isMobile ? '134' : '196'}
                  />
                  <figcaption className={styles.legenda}>
                    ALTAR <br />
                    PRAINHA
                  </figcaption>
                </figure>
                <figure className={styles.legendaContainer}>
                  <Image
                    src={HotelPequeno6}
                    width={isMobile ? '226' : '279'}
                    height={isMobile ? '134' : '196'}
                  />
                  <figcaption className={styles.legenda}>
                    CLUBE <br />
                    DO MATO
                  </figcaption>
                </figure>
              </div>
              <figure className={styles.legendaContainer}>
                <Image
                  src={HotelGrande3}
                  width={isMobile ? '226' : '279'}
                  height={isMobile ? '372' : '406'}
                />
                <figcaption className={styles.legenda}>
                  CASA <br />
                  VISTA
                </figcaption>
              </figure>
              <div className={styles.FlexItem} style={{marginRight: '12px'}}>
                <figure className={styles.legendaContainer}>
                  <Image
                    src={HotelPequeno7}
                    width={isMobile ? '226' : '279'}
                    height={isMobile ? '134' : '196'}
                  />
                  <figcaption className={styles.legenda}>
                    FAZENDA <br />
                    SANTA ESTHER
                  </figcaption>
                </figure>
                <figure className={styles.legendaContainer}>
                  <Image
                    src={HotelPequeno8}
                    width={isMobile ? '226' : '279'}
                    height={isMobile ? '134' : '196'}
                  />
                  <figcaption className={styles.legenda}>
                    BUBBLE <br />
                    EXPERIENCE
                  </figcaption>
                </figure>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
