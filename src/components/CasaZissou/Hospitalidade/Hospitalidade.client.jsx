import useMobile from '../../../hooks/useMobile';

import {Image} from '@shopify/hydrogen';

import * as styles from './Hospitalidade.module.scss';

import LogoFasano from '../../../assets/logo-fasano.webp';
import LogoCataratas from '../../../assets/logo-Cataratas.webp';

import HotelGrande from '../../../assets/hotel-grande.png';
import HotelGrande2 from '../../../assets/hotel-grande2.png';
import CataratasGrande from '../../../assets/catarata-grande.png';
import HotelPequeno1 from '../../../assets/hotel-pequeno1.png';
import HotelPequeno2 from '../../../assets/hotel-pequeno2.png';
import HotelPequeno3 from '../../../assets/hotel-pequeno3.png';
import HotelPequeno4 from '../../../assets/hotel-pequeno4.png';
import HotelPequeno5 from '../../../assets/hotel-pequeno5.png';
import HotelPequeno6 from '../../../assets/hotel-pequeno6.png';

export default function Hospitalidade() {
  const {isMobile} = useMobile();

  return (
    <div className={styles.HospitalidadeContainer}>
      <strong className={styles.HospitalidadeTitle}>Hospitalidade</strong>
      <span className={styles.HospitalidadeSubtitle}>
        Se você quer dar uma folga para sua cama, aproveite para dormir & viver
        em <br /> um Zissou nos hotéis mais exclusivos e acomodações únicas pelo
        Brasil
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
              <Image
                src={HotelGrande}
                width={isMobile ? '258' : '376'}
                height={isMobile ? '281' : '410'}
              />
            ) : (
              <div className={styles.HospitalidadeFotosGrande}>
                <Image
                  src={HotelGrande}
                  width={isMobile ? '258' : '376'}
                  height={isMobile ? '281' : '410'}
                />
              </div>
            )}
            <div className={styles.HospitalidadeFotosPequenas}>
              <Image
                src={HotelPequeno1}
                width={isMobile ? '123' : '180'}
                height={isMobile ? '134' : '196'}
              />
              <Image
                src={HotelPequeno2}
                width={isMobile ? '123' : '180'}
                height={isMobile ? '134' : '196'}
              />
              <Image
                src={HotelPequeno3}
                width={isMobile ? '123' : '180'}
                height={isMobile ? '134' : '196'}
              />
              <Image
                src={HotelPequeno4}
                width={isMobile ? '123' : '180'}
                height={isMobile ? '134' : '196'}
              />
            </div>
            {isMobile ? (
              <Image
                src={CataratasGrande}
                width={isMobile ? '226' : '330'}
                height={isMobile ? '281' : '410'}
                style={{marginLeft: '11px'}}
              />
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
              <Image
                src={CataratasGrande}
                width={isMobile ? '226' : '330'}
                height={isMobile ? '281' : '410'}
              />
            </div>
          </div>
        )}
      </div>
      <div className={styles.HospitalidadeContent}>
        <div className={styles.HospitalidadeLeft}>
          <div className={styles.HospitalidadeLogo}>
            <strong className={styles.HospitalidadeLogoTitle}>
              TURISMO DE EXPERIÊNCIA
            </strong>
          </div>
          <div className={styles.HospitalidadeFotos}>
            {isMobile ? (
              <Image
                src={HotelGrande2}
                width={isMobile ? '357' : '573'}
                height={isMobile ? '255' : '410'}
              />
            ) : (
              <div className={styles.HospitalidadeFotosGrande}>
                <Image
                  src={HotelGrande2}
                  width={isMobile ? '357' : '573'}
                  height={isMobile ? '255' : '410'}
                />
              </div>
            )}
            <div className={styles.HospitalidadeFotosPequenas}>
              <Image
                src={HotelPequeno1}
                width={isMobile ? '112' : '180'}
                height={isMobile ? '122' : '196'}
              />
              <Image
                src={HotelPequeno2}
                width={isMobile ? '112' : '180'}
                height={isMobile ? '122' : '196'}
              />
              <Image
                src={HotelPequeno3}
                width={isMobile ? '112' : '180'}
                height={isMobile ? '122' : '196'}
              />
              <Image
                src={HotelPequeno4}
                width={isMobile ? '112' : '180'}
                height={isMobile ? '122' : '196'}
              />
              <Image
                src={HotelPequeno5}
                width={isMobile ? '112' : '180'}
                height={isMobile ? '122' : '196'}
              />
              <Image
                src={HotelPequeno6}
                width={isMobile ? '112' : '180'}
                height={isMobile ? '122' : '196'}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
