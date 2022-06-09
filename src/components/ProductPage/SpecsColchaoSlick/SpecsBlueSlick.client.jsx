import {useState} from 'react';
import useMobile from '../../../hooks/useMobile';

import {Image, Link} from '@shopify/hydrogen/client';
import * as styles from './SpecsColchaoSlick.module.scss';

import Slider from 'react-slick';

import BandeiraEUA from '../../../assets/eua_pdp.png';
import BandeiraBelgica from '../../../assets/belgica_pdp.png';
import BandeiraBrasil from '../../../assets/brasil_pdp.png';
import Brands from '../../../assets/brands_pdp.png';

import ToqueESensacaoTermica from '../../../assets/toque-e-sensacao-termica-blue.png';
import CamadaDeConforto from '../../../assets/camada_de_conforto_blue.png';

import ToqueESensacaoTermicaMobile from '../../../assets/toque-e-sensacao-termica-mobile-blue.png';
import CamadaDeConfortoMobile from '../../../assets/camada-de-conforto-mobile.png';

import MulherDeitada from '../../../assets/mulher_deitada_pdp.png';

import SuporteBlue from '../../../assets/suporte_blue.png';

import ConfortoPDP from '../../../assets/conforto_pdp.png';
import SuperficiePDP from '../../../assets/superficie_pdp.png';
import BouncePDP from '../../../assets/bounce_pdp.png';
import SensacaoPDP from '../../../assets/sensacao_pdp.png';
import IsolamentoPDP from '../../../assets/isolamento_pdp.png';
import SetasPDP from '../../../assets/setas_pdp.png';
import ControlePDP from '../../../assets/controle_pdp.png';
import SuportePDP from '../../../assets/suporte_pdp.png';

import IconeGarantia from '../../../assets/icone_garantia_blue.png';
import IconeEntregaPrime from '../../../assets/icone_entrega_prime.png';
import IconeFrete from '../../../assets/icone_frete_blue.png';
import Icone100Dias from '../../../assets/icone_100_dias_blue.png';

import ColchoesBlue from '../../../assets/colchoes_blue.png';

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
                TECIDO PLUSH & COOL{' '}
                <Image
                  src={BandeiraEUA}
                  width={isMobile ? 20 : 30}
                  height={isMobile ? 20 : 30}
                  className={
                    styles.SpecsColchaoSlickSecondSliderBackgroundInfoTitleFlag
                  }
                  loading={'lazy'}
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
                <br />O tecido Plush & Cool potencializa a condutividade
                térmica, criando o micro-clima ideal para o sono de qualidade,
                criando sensação extraordinária de frescor ao dormir e maciez
                única.
              </span>
            </div>
          </div>
          <Image
            src={isMobile ? ToqueESensacaoTermicaMobile : ToqueESensacaoTermica}
            width={isMobile ? 390 : 1980}
            height={700}
            className={styles.SpecsColchaoSlickSecondSliderBackgroundImage}
            loading={'lazy'}
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
                LATEX PULSE{' '}
                <Image
                  src={BandeiraBelgica}
                  width={isMobile ? 20 : 30}
                  height={isMobile ? 20 : 30}
                  className={
                    styles.SpecsColchaoSlickSecondSliderBackgroundInfoTitleFlag
                  }
                  loading={'lazy'}
                />
                {isMobile ? null : (
                  <Image
                    src={Brands}
                    width={220}
                    height={53}
                    style={{marginTop: '-25px'}}
                    loading={'lazy'}
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
                <Image src={Brands} width={340} height={53} loading={'lazy'} />
              </div>
            ) : null}
          </div>
          <Image
            src={isMobile ? CamadaDeConfortoMobile : CamadaDeConforto}
            width={isMobile ? 390 : 1980}
            height={700}
            className={styles.SpecsColchaoSlickSecondSliderBackgroundImage}
            loading={'lazy'}
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
                VISCO COOL
                <Image
                  src={BandeiraBrasil}
                  width={isMobile ? 20 : 30}
                  height={isMobile ? 20 : 30}
                  className={
                    styles.SpecsColchaoSlickSecondSliderBackgroundInfoTitleFlag
                  }
                  loading={'lazy'}
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
                loading={'lazy'}
              />
            </div>
          </div>
        </div>
        <div
          className={`${styles.SpecsColchaoSlickSecondSliderBackground} ${styles.SpecsColchaoSlickSecondSliderBackground4}`}
        >
          <div
            className={
              styles.SpecsColchaoSlickSecondSliderBackgroundSuporteLeft
            }
          >
            <div
              className={
                styles.SpecsColchaoSlickSecondSliderBackgroundSuporteLeftMinimodal
              }
            >
              <strong
                className={
                  styles.SpecsColchaoSlickSecondSliderBackgroundSuporteLeftMinimodalBolder
                }
              >
                SISTEMA DE SUPORTE HÍBRIDO ZONED SPRING SYSTEM
              </strong>
              <span
                className={
                  styles.SpecsColchaoSlickSecondSliderBackgroundSuporteLeftMinimodalTitle
                }
              >
                - Camada transição de espuma de poliuretano de alta densidade
                uniformiza a distribuição de peso.
                <br />
                <br />
                - Sistema do suporte híbrido com molas ensacadas individualmente
                com 15cm de altura, que proporcionam maior maleabilidade ao
                colchão, aumentando a adaptabilidade às curvaturas do corpo.
                <br />
                <br />- Molas Zoned Spring System com tecnologia de zonamento
                ergonômico para melhor alinhamento da coluna.
                <br />
                <br />
                - Sustentação adicional com maior fluxo de ar
                <br />
                <br />- Reforço nas bordas em todas as laterais do colchão com
                molas mais firmes para garantir a uniformidade do suporte em
                todas a superfície
              </span>
            </div>
          </div>
          <div
            className={
              styles.SpecsColchaoSlickSecondSliderBackgroundSuporteRight
            }
          >
            <div
              className={
                styles.SpecsColchaoSlickSecondSliderBackgroundSuporteRightImage
              }
            >
              <Image
                src={SuporteBlue}
                width={isMobile ? 327 : 739}
                height={isMobile ? 150 : 342}
                loading={'lazy'}
              />
            </div>
          </div>
        </div>
        <div
          className={`${styles.SpecsColchaoSlickSecondSliderBackground} ${styles.SpecsColchaoSlickSecondSliderBackground5}`}
        >
          <div className={styles.SpecsColchaoSlickSecondSliderBackground5Grid}>
            <div className={styles.GridItem}>
              <Image
                src={ConfortoPDP}
                width={isMobile ? 70 : 125}
                height={isMobile ? 33 : 60}
                loading={'lazy'}
              />
              <span>Conforto excepcional</span>
            </div>
            <div className={styles.GridItem}>
              <Image
                src={SuperficiePDP}
                width={isMobile ? 62 : 110}
                height={isMobile ? 71 : 126}
                loading={'lazy'}
              />
              <span>Superfície que refresca</span>
            </div>
            <div className={styles.GridItem}>
              <Image
                src={BouncePDP}
                width={isMobile ? 43 : 80}
                height={isMobile ? 49 : 92}
                loading={'lazy'}
              />
              {isMobile ? (
                <span>
                  Elasticidade na superfície que facilita movimentação na cama
                </span>
              ) : (
                <span>
                  Bounce extra, para facilitar a movimentação na cama durante o
                  sono
                </span>
              )}
            </div>
            <div className={styles.GridItem}>
              <Image
                src={SensacaoPDP}
                width={isMobile ? 62 : 110}
                height={isMobile ? 43 : 77}
                loading={'lazy'}
              />
              {isMobile ? (
                <span>Aconchego extraordinário</span>
              ) : (
                <span>Sensação extraordinária de aconchego</span>
              )}
            </div>
            <div className={styles.GridItem}>
              <Image
                src={IsolamentoPDP}
                width={isMobile ? 120 : 223}
                height={isMobile ? 35 : 65}
                loading={'lazy'}
              />
              <span>Isolamento de ondas de movimento</span>
            </div>
            <div className={styles.GridItem}>
              <Image
                src={SetasPDP}
                width={isMobile ? 48 : 92}
                height={isMobile ? 40 : 74}
                loading={'lazy'}
              />
              <span>Alívio dos pontos de pressão</span>
            </div>
            <div className={styles.GridItem}>
              <Image
                src={ControlePDP}
                width={isMobile ? 73 : 129}
                height={isMobile ? 61 : 108}
                loading={'lazy'}
              />
              {isMobile ? (
                <span>
                  Controle otimizado de temperatura e refrescância extra
                </span>
              ) : (
                <span>
                  Controle otimizado de temperatura e refrescância extra no
                  núcleo do colchão
                </span>
              )}
            </div>
            <div className={styles.GridItem}>
              <Image
                src={SuportePDP}
                width={isMobile ? 51 : 96}
                height={isMobile ? 45 : 85}
                loading={'lazy'}
              />
              {isMobile ? (
                <span>
                  Suporte ergonômico para melhor alinhamento da coluna
                </span>
              ) : (
                <span>
                  Suporte ergonômico com adaptação ao corpo e reforço na região
                  do quadril para melhorar o alinhamento da coluna
                </span>
              )}
            </div>
          </div>
        </div>
        <div
          className={`${styles.SpecsColchaoSlickSecondSliderBackground} ${styles.SpecsColchaoSlickSecondSliderBackground6}`}
        >
          <div
            className={
              styles.SpecsColchaoSlickSecondSliderBackgroundBeneficiosLeft
            }
          >
            <div className={styles.Icons}>
              <div className={styles.Icon}>
                <Image
                  src={IconeGarantia}
                  width={62}
                  height={43}
                  loading={'lazy'}
                />
                <strong className={styles.IconTitle}>
                  10 anos de <br /> garantia
                </strong>
              </div>
              <div className={styles.Icon}>
                <Image
                  src={IconeEntregaPrime}
                  width={59}
                  height={39}
                  loading={'lazy'}
                />
                <strong className={styles.IconTitle}>
                  entrega <br /> prime
                </strong>
              </div>
              <div className={styles.Icon}>
                <Image
                  src={IconeFrete}
                  width={58}
                  height={41}
                  loading={'lazy'}
                />
                <strong className={styles.IconTitle}>
                  frete <br /> grátis
                </strong>
              </div>
              <div className={styles.Icon}>
                <Image
                  src={Icone100Dias}
                  width={42}
                  height={37}
                  loading={'lazy'}
                />
                <strong className={styles.IconTitle}>
                  100 dias <br /> de teste
                </strong>
              </div>
            </div>
            <div className={styles.BeneficiosZissou}>
              <div className={styles.BeneficiosItem}>
                <strong className={styles.BeneficiosItemTitle}>
                  100 dias de teste
                </strong>
                <span className={styles.BeneficiosItemSubtitle}>
                  Caso não esteja satisfeito com o produto, entre em contato com
                  nosso atendimento através do Whatsapp 11 93285-8213
                </span>
              </div>
              <div className={styles.BeneficiosItem}>
                <strong className={styles.BeneficiosItemTitle}>
                  ENTREGA EXPRESSA E FRETE GRÁTIS
                </strong>
                <span className={styles.BeneficiosItemSubtitle}>
                  A entrega é por nossa conta para todo o Brasil
                </span>
              </div>
              <div className={styles.BeneficiosItem}>
                <strong className={styles.BeneficiosItemTitle}>
                  GARANTIA DE 10 ANOS
                </strong>
                <span className={styles.BeneficiosItemSubtitle}>
                  Para saber mais sobre os termos de garantia,{' '}
                  <Link
                    to="/blogs/faq/como-funciona-a-garantia-de-um-colchao"
                    className={styles.BeneficiosItemSubtitleLink}
                  >
                    clique aqui
                  </Link>
                </span>
              </div>
              <div className={styles.BeneficiosItem}>
                <strong className={styles.BeneficiosItemTitle}>
                  INFORMAÇÕES TÉCNICAS
                </strong>
                <span className={styles.BeneficiosItemSubtitle}>
                  Para saber mais sobre informações técnicas dos colchões,{' '}
                  <Link
                    to="/pages/comparativo-colchoes"
                    className={styles.BeneficiosItemSubtitleLink}
                  >
                    clique aqui
                  </Link>
                </span>
              </div>
            </div>
          </div>
          <div
            className={
              styles.SpecsColchaoSlickSecondSliderBackgroundBeneficiosRight
            }
          >
            <Image
              src={ColchoesBlue}
              width={496}
              height={523}
              loading={'lazy'}
            />
          </div>
        </div>
      </Slider>
    </div>
  );
}
