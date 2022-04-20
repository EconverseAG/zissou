import {useState} from 'react';
import useMobile from '../../../hooks/useMobile';

import {Image} from '@shopify/hydrogen';
import * as styles from './SpecsColchaoSlick.module.scss';

import Slider from 'react-slick';

import BandeiraEUA from '../../../assets/eua_pdp.png';
import BandeiraBelgica from '../../../assets/belgica_pdp.png';
import BandeiraBrasil from '../../../assets/brasil_pdp.png';
import Brands from '../../../assets/brands_pdp.png';

import ToqueESensacaoTermica from '../../../assets/toque-e-sensacao-termica-blue.png';
import CamadaDeConforto from '../../../assets/camada-de-conforto-blue.png';

import ToqueESensacaoTermicaMobile from '../../../assets/toque-e-sensacao-termica-mobile.png';
import CamadaDeConfortoMobile from '../../../assets/camada-de-conforto-mobile.png';

import MulherDeitada from '../../../assets/mulher_deitada_pdp.png';

export default function SpecsBlueSlick() {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  const {isMobile} = useMobile();

  return (
    <div className={styles.SpecsColchaoSlickContainer}>
      <Slider
        asNavFor={nav1}
        arrows={false}
        ref={(slider2) => setNav2(slider2)}
        slidesToShow={6}
        focusOnSelect={true}
        responsive={[
          {
            breakpoint: 1023,
            settings: {
              centerMode: true,
              slidesToShow: 1,
            },
          },
        ]}
        className={`${styles.SpecsColchaoSlickFirstSlider} ${styles.SpecsColchaoSlickFirstSliderBlue}`}
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
        className={`${styles.SpecsColchaoSlickSecondSlider} ${styles.SpecsColchaoSlickSecondSliderBlue}`}
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
                className={`${styles.SpecsColchaoSlickSecondSliderBackgroundInfoTitle} ${styles.SpecsColchaoSlickSecondSliderBackgroundInfoTitleBlue}`}
              >
                Tecido Blue {isMobile ? <br /> : null} com Ultra Cooling{' '}
                <Image
                  src={BandeiraEUA}
                  width={isMobile ? 20 : 30}
                  height={isMobile ? 20 : 30}
                  className={
                    styles.SpecsColchaoSlickSecondSliderBackgroundInfoTitleFlag
                  }
                />
              </strong>
              <p
                className={
                  styles.SpecsColchaoSlickSecondSliderBackgroundInfoSubtitle
                }
              >
                ESSE COLCHÃO VOCÊ PODE JULGAR PELA CAPA
              </p>
              <span
                className={
                  styles.SpecsColchaoSlickSecondSliderBackgroundInfoText
                }
              >
                Blue incorpora o que há de mais avançado em tecnologia do sono
                em sua capa. O tecido matelassado cria superfície acolchoada,
                que proporciona mais maciez.
                <br />
                <br />A tecnologia americana Ultra Cooling potencializa a
                condutividade térmica, criando o micro-clima ideal para o sono
                de qualidade, criando sensação extraordinária de frescor ao
                dormir e maciez única.
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
                className={`${styles.SpecsColchaoSlickSecondSliderBackgroundInfoTitle} ${styles.SpecsColchaoSlickSecondSliderBackgroundInfoTitleBlue}`}
              >
                Látex Pulse{' '}
                <Image
                  src={BandeiraBelgica}
                  width={isMobile ? 20 : 30}
                  height={isMobile ? 20 : 30}
                  className={
                    styles.SpecsColchaoSlickSecondSliderBackgroundInfoTitleFlag
                  }
                />
                {isMobile ? null : (
                  <Image
                    src={Brands}
                    width={220}
                    height={53}
                    style={{marginTop: '-25px'}}
                  />
                )}
              </strong>
              {isMobile ? (
                <span
                  className={
                    styles.SpecsColchaoSlickSecondSliderBackgroundInfoText
                  }
                >
                  - Látex hipoalergênico de origem belga que proporciona
                  resiliência e suporte progressivo
                  <br />
                  <br />
                  - Maior bounce na superfície, que facilita os movimentos
                  durante o sono
                  <br />
                  <br />- Alta capacidade de ventilação cria microclima
                  perfeitamente equilibrado e controle de umidade
                </span>
              ) : (
                <span
                  className={
                    styles.SpecsColchaoSlickSecondSliderBackgroundInfoText
                  }
                >
                  - É a evolução do látex, se destaca em todos os níveis de
                  conforto
                  <br />
                  <br />
                  - Proporciona resiliência e suporte progressivo
                  <br />
                  <br />
                  - Possui estrutura celular homogênea que o torna
                  verdadeiramente único aumentando a sensação de impulso, que
                  facilita os movimentos durante o sono
                  <br />
                  <br />
                  - Excelente capacidade de conservação de suas propriedades e
                  altíssima resistência à tração, aumentando sua durabilidade
                  <br />
                  <br />
                  - Alta capacidade de ventilação, que garante microclima
                  perfeitamente equilibrado e controle de umidade otimizado
                  <br />
                  <br />- Propriedades antimicrobianas e resistência a ácaros
                </span>
              )}
            </div>
            {isMobile ? (
              <div className={styles.brands} style={{top: '60%'}}>
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
                className={`${styles.SpecsColchaoSlickSecondSliderBackgroundInfoTitle} ${styles.SpecsColchaoSlickSecondSliderBackgroundInfoTitleBlue}`}
              >
                Viscoelástico com <br /> gel de cooling
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
                  - Alivia pontos de pressão e ameniza transferência de
                  movimentos
                  <br />
                  <br />- Contribui para manter a temperatura ideal do colchão
                </span>
              ) : (
                <span
                  className={
                    styles.SpecsColchaoSlickSecondSliderBackgroundInfoText
                  }
                >
                  - Matéria prima premium com gel que contribui para manter a
                  temperatura ideal do colchão
                  <br />
                  <br />
                  - Viscoelástico de memória responsiva que proporciona
                  durabilidade
                  <br />
                  <br />
                  - Absorve e distribui a pressão e proporciona transferência
                  mínima de movimentos, sem deformar
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
