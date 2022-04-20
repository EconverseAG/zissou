import {useState} from 'react';
import useMobile from '../../../hooks/useMobile';

import {Image} from '@shopify/hydrogen';
import * as styles from './SpecsColchaoSlick.module.scss';

import Slider from 'react-slick';

import BandeiraEUA from '../../../assets/eua_pdp.png';
import BandeiraBelgica from '../../../assets/belgica_pdp.png';
import BandeiraBrasil from '../../../assets/brasil_pdp.png';
import Brands from '../../../assets/brands_pdp.png';

import ToqueESensacaoTermica from '../../../assets/toque-e-sensacao-termica-coral.png';
import CamadaDeConforto from '../../../assets/camada-de-conforto-coral.png';

import ToqueESensacaoTermicaMobile from '../../../assets/toque-e-sensacao-termica-mobile.png';
import CamadaDeConfortoMobile from '../../../assets/camada-de-conforto-mobile.png';

import MulherDeitada from '../../../assets/mulher_deitada_pdp.png';

export default function SpecsCoralSlick() {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  const {isMobile} = useMobile();

  return (
    <div className={styles.SpecsColchaoSlickContainer}>
      <Slider
        asNavFor={nav1}
        ref={(slider2) => setNav2(slider2)}
        slidesToShow={6}
        focusOnSelect={true}
        arrows={false}
        responsive={[
          {
            breakpoint: 1023,
            settings: {
              centerMode: true,
              slidesToShow: 1,
            },
          },
        ]}
        className={`${styles.SpecsColchaoSlickFirstSlider} ${styles.SpecsColchaoSlickFirstSliderCoral}`}
      >
        <div className={styles.SpecsColchaoSlickFirstSliderTabs}>
          <span className={styles.SpecsColchaoSlickFirstSliderTabsTitle}>
            toque e <br /> sensação térmica
          </span>
        </div>
        <div className={styles.SpecsColchaoSlickFirstSliderTabs}>
          <span className={styles.SpecsColchaoSlickFirstSliderTabsTitle}>
            camada de conforto
          </span>
        </div>
        <div className={styles.SpecsColchaoSlickFirstSliderTabs}>
          <span className={styles.SpecsColchaoSlickFirstSliderTabsTitle}>
            camada de aconchego
          </span>
        </div>
        <div className={styles.SpecsColchaoSlickFirstSliderTabs}>
          <span className={styles.SpecsColchaoSlickFirstSliderTabsTitle}>
            sistema de suporte
          </span>
        </div>
        <div className={styles.SpecsColchaoSlickFirstSliderTabs}>
          <span className={styles.SpecsColchaoSlickFirstSliderTabsTitle}>
            sensações
          </span>
        </div>
        <div className={styles.SpecsColchaoSlickFirstSliderTabs}>
          <span className={styles.SpecsColchaoSlickFirstSliderTabsTitle}>
            benefícios
          </span>
        </div>
      </Slider>
      <Slider
        asNavFor={nav2}
        fade={true}
        ref={(slider1) => setNav1(slider1)}
        dots={true}
        arrows={false}
        className={`${styles.SpecsColchaoSlickSecondSlider} ${styles.SpecsColchaoSlickSecondSliderCoral}`}
      >
        <div
          className={`${styles.SpecsColchaoSlickSecondSliderBackground} ${styles.SpecsColchaoSlickSecondSliderBackground1}`}
        >
          <div
            className={styles.SpecsColchaoSlickSecondSliderBackgroundContent}
          >
            <div
              className={`${styles.SpecsColchaoSlickSecondSliderBackgroundInfo} ${styles.SpecsColchaoSlickSecondSliderBackgroundInfo1}`}
            >
              <strong
                className={`${styles.SpecsColchaoSlickSecondSliderBackgroundInfoTitle} ${styles.SpecsColchaoSlickSecondSliderBackgroundInfoTitleCoral}`}
              >
                TECIDO CORAL PREMIUM {isMobile ? <br /> : null} COM COOLING{' '}
                <Image
                  src={BandeiraEUA}
                  width={isMobile ? 20 : 30}
                  height={isMobile ? 20 : 30}
                  className={
                    styles.SpecsColchaoSlickSecondSliderBackgroundInfoTitleFlag
                  }
                />
              </strong>
              <span
                className={
                  styles.SpecsColchaoSlickSecondSliderBackgroundInfoText
                }
              >
                Tecido premium altamente respirável e contendo polietileno para
                prevenir o aquecimento do corpo, desenvolvido nos Estados Unidos
                e com toque sutil e elástico na medida certa
                <br />
                <br />
                Suas propriedades garantem a performance e durabilidade das
                camadas de conforto, sem que seu corpo aqueça
              </span>
            </div>
          </div>
          <Image
            src={isMobile ? ToqueESensacaoTermicaMobile : ToqueESensacaoTermica}
            width={isMobile ? 390 : 1980}
            height={700}
            className={styles.SpecsColchaoSlickSecondSliderBackgroundImage}
          />
        </div>
        <div
          className={`${styles.SpecsColchaoSlickSecondSliderBackground} ${styles.SpecsColchaoSlickSecondSliderBackground2}`}
        >
          <div
            className={styles.SpecsColchaoSlickSecondSliderBackgroundContent}
          >
            <div
              className={`${styles.SpecsColchaoSlickSecondSliderBackgroundInfo} ${styles.SpecsColchaoSlickSecondSliderBackgroundInfo2}`}
            >
              <strong
                className={`${styles.SpecsColchaoSlickSecondSliderBackgroundInfoTitle} ${styles.SpecsColchaoSlickSecondSliderBackgroundInfoTitleCoral}`}
              >
                Látex hipoalergênico {isMobile ? <br /> : null} de origem belga{' '}
                <Image
                  src={BandeiraBelgica}
                  width={isMobile ? 20 : 30}
                  height={isMobile ? 20 : 30}
                  className={
                    styles.SpecsColchaoSlickSecondSliderBackgroundInfoTitleFlag
                  }
                />
              </strong>
              {isMobile ? null : (
                <Image
                  src={Brands}
                  width={220}
                  height={53}
                  style={{marginTop: '-25px'}}
                />
              )}
              {isMobile ? (
                <span
                  className={
                    styles.SpecsColchaoSlickSecondSliderBackgroundInfoText
                  }
                >
                  - Alta resiliência e suporte progressivo
                  <br />
                  <br />- Pequenas perfurações aumentam a ventilação
                </span>
              ) : (
                <span
                  className={
                    styles.SpecsColchaoSlickSecondSliderBackgroundInfoText
                  }
                >
                  - Látex nobre e sofisticado, com elasticidade incomparável
                  <br />
                  <br />
                  - Proporciona resiliência e suporte progressivo, com apoio
                  corporal perfeito
                  <br />
                  <br />
                  - Estrutura aerada estimula a circulação de ar, evitando
                  aquecimento e acúmulo de umidade
                  <br />
                  <br />
                  - Contém pequenas perfurações que aumentam a ventilação,
                  proporcionando refrescância
                  <br />
                  <br />
                  - Alta resistência a pressão, evitando deformação com o passar
                  do tempo
                  <br />
                  <br />
                  - Propriedades hipoalergênicas, antimicrobianas e resistência
                  a ácaros
                  <br />
                  <br />- Matéria-prima natural, de fonte renovável, proveniente
                  de seringueiras, árvores típicas do Brasil
                </span>
              )}
            </div>
            {isMobile ? (
              <div className={styles.brands}>
                <Image src={Brands} width={340} height={53} />
              </div>
            ) : null}
          </div>
          <Image
            src={isMobile ? CamadaDeConfortoMobile : CamadaDeConforto}
            width={isMobile ? 390 : 1980}
            height={700}
            className={styles.SpecsColchaoSlickSecondSliderBackgroundImage}
          />
        </div>
        <div
          className={`${styles.SpecsColchaoSlickSecondSliderBackground} ${styles.SpecsColchaoSlickSecondSliderBackground3}`}
        >
          <div
            className={styles.SpecsColchaoSlickSecondSliderBackgroundContent}
          >
            <div
              className={`${styles.SpecsColchaoSlickSecondSliderBackgroundInfo} ${styles.SpecsColchaoSlickSecondSliderBackgroundInfo3}`}
            >
              <strong
                className={`${styles.SpecsColchaoSlickSecondSliderBackgroundInfoTitle} ${styles.SpecsColchaoSlickSecondSliderBackgroundInfoTitleCoral}`}
              >
                Viscoelástico de <br /> memória responsiva <br /> com gel de
                cooling
                <Image
                  src={BandeiraBrasil}
                  width={isMobile ? 20 : 30}
                  height={isMobile ? 20 : 30}
                  className={
                    styles.SpecsColchaoSlickSecondSliderBackgroundInfoTitleFlag
                  }
                />
              </strong>
              {isMobile ? (
                <span
                  className={
                    styles.SpecsColchaoSlickSecondSliderBackgroundInfoText
                  }
                >
                  - Viscoelástico de memória responsiva que se molda ao corpo e
                  alivia pontos de pressão
                  <br />
                  <br />
                  -Absorve e distribui a pressão evita transferência de
                  movimentos
                </span>
              ) : (
                <span
                  className={
                    styles.SpecsColchaoSlickSecondSliderBackgroundInfoText
                  }
                >
                  - Viscoelástico de memória responsiva que proporciona
                  durabilidade
                  <br />
                  <br />
                  - Absorve e distribui a pressão e proporciona transferência
                  mínima de movimentos
                  <br />
                  <br />- Se molda ao formato e peso do corpo, aliviando pontos
                  de pressão
                </span>
              )}
            </div>
            <div className={styles.SpecsColchaoSlickSecondSliderImage}>
              <Image
                src={MulherDeitada}
                width={isMobile ? 325 : 803}
                height={isMobile ? 153 : 378}
              />
            </div>
          </div>
        </div>
        <div className={styles.SpecsColchaoSlickSecondSliderBackground}>
          <h3>4</h3>
        </div>
        <div className={styles.SpecsColchaoSlickSecondSliderBackground}>
          <h3>5</h3>
        </div>
        <div className={styles.SpecsColchaoSlickSecondSliderBackground}>
          <h3>6</h3>
        </div>
      </Slider>
    </div>
  );
}
