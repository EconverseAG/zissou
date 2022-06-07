import {useState} from 'react';
import useMobile from '../../../hooks/useMobile';

import {Image, Link} from '@shopify/hydrogen/client';
import * as styles from './SpecsColchaoSlick.module.scss';

import Slider from 'react-slick';

import BandeiraEUA from '../../../assets/eua_pdp.png';
import BandeiraBelgica from '../../../assets/belgica_pdp.png';
import BandeiraBrasil from '../../../assets/brasil_pdp.png';
import Brands from '../../../assets/brands_pdp.png';

import ToqueESensacaoTermica from '../../../assets/toque_pdp_spark.png';
import CamadaDeConforto from '../../../assets/camada-de-conforto-spark.png';

import ToqueESensacaoTermicaMobile from '../../../assets/toque-e-sensacao-termica-mobile.png';
import CamadaDeConfortoMobile from '../../../assets/camada-de-conforto-mobile.png';

import MulherDeitada from '../../../assets/mulher_deitada_pdp.png';

import SistemaDeSuporte1 from '../../../assets/colchao_sistema_suporte_1.png';
import SistemaDeSuporte2 from '../../../assets/colchao_sistema_suporte_2.png';
import SistemaDeSuporte1Mobile from '../../../assets/colchao_sistema_suporte_1_mobile.png';
import SistemaDeSuporte2Mobile from '../../../assets/colchao_sistema_suporte_2_mobile.png';

import SetaPDP from '../../../assets/seta_pdp.png';

import ToquePDP from '../../../assets/toque-spark.svg';
import BouncePDP from '../../../assets/bounce-spark.svg';
import SetasPDP from '../../../assets/setas-spark.svg';
import SuportePDP from '../../../assets/suporte-spark.svg';
import IsolamentoPDP from '../../../assets/isolamento-spark.svg';
import AdaptacaoPDP from '../../../assets/adaptacao-spark.svg';

import ColchoesCoral from '../../../assets/colchoes_coral.png';

import IconeGarantia from '../../../assets/icone_garantia_spark.svg';
import IconeEntrega from '../../../assets/icone_entrega_spark.svg';
import IconeFrete from '../../../assets/icone_frete_spark.svg';
import Icone100Dias from '../../../assets/icone_100_dias_spark.svg';

export default function SpecsSparkSlick() {
  const [nav1, setNav1] = useState();
  const [nav2, setNav2] = useState();

  const {isMobile} = useMobile();

  return (
    <div className={`${styles.SpecsColchaoSlickContainer} ${styles.spark}`}>
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
        className={`${styles.SpecsColchaoSlickFirstSlider} ${styles.SpecsColchaoSlickFirstSliderSpark}`}
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
        className={`${styles.SpecsColchaoSlickSecondSlider} ${styles.SpecsColchaoSlickSecondSliderSpark}`}
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
                TECIDO SOFT & CHILL{' '}
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
              <span
                className={
                  styles.SpecsColchaoSlickSecondSliderBackgroundInfoText
                }
              >
                Spark tem capa desenvolvida nos EUA, com a parte superior em
                tecido microtexturizado, com toque aveludado. Combina fibras de
                alta gramatura com trama especial e toque de elastano,
                garantindo o ajuste perfeito ao colchão.
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
                className={`${styles.SpecsColchaoSlickSecondSliderBackgroundInfoTitle} ${styles.SpecsColchaoSlickSecondSliderBackgroundInfoTitleCoral}`}
              >
                LATEX INFUSED{' '}
                <Image
                  src={BandeiraBelgica}
                  width={isMobile ? 20 : 30}
                  height={isMobile ? 20 : 30}
                  className={
                    styles.SpecsColchaoSlickSecondSliderBackgroundInfoTitleFlag
                  }
                  loading={'lazy'}
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
              <span
                className={
                  styles.SpecsColchaoSlickSecondSliderBackgroundInfoText
                }
              >
                - Composta pela espuma HR Acefom com látex infused de origem
                belga, exclusivo Zissou. Torna Spark ideal para quem prefere um
                colchão que proporciona distribuição uniforme de peso, com total
                conforto
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
                <br />- Propriedades hipoalergênicas, antimicrobianas e
                resistência a ácaros
              </span>
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
                className={`${styles.SpecsColchaoSlickSecondSliderBackgroundInfoTitle} ${styles.SpecsColchaoSlickSecondSliderBackgroundInfoTitleCoral}`}
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
                width={isMobile ? 325 : 900}
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
                styles.SpecsColchaoSlickSecondSliderBackgroundSuporteLeftImage
              }
            >
              <span
                className={
                  styles.SpecsColchaoSlickSecondSliderBackgroundSuporteLeftImageTitle
                }
              >
                sistema <br /> de suporte
              </span>
              <Image
                src={isMobile ? SistemaDeSuporte1Mobile : SistemaDeSuporte1}
                width={isMobile ? '213' : '368'}
                height={isMobile ? '181' : '305'}
                loading={'lazy'}
              />
              <Image
                src={SetaPDP}
                width="137"
                height="82"
                className={styles.seta}
                loading={'lazy'}
              />
            </div>
            <div
              className={
                styles.SpecsColchaoSlickSecondSliderBackgroundSuporteLeftMinimodal
              }
            >
              <strong className={styles.Title}>
                ESTABILIDADE E {!isMobile && <br />} SUPORTE UNIFORME
              </strong>
              {isMobile ? (
                <span
                  className={
                    styles.SpecsColchaoSlickSecondSliderBackgroundSuporteLeftMinimodalTitle
                  }
                >
                  Base de espuma de poliuretano de alta densidade para maior
                  suporte e isolamento de movimentos
                </span>
              ) : (
                <span
                  className={
                    styles.SpecsColchaoSlickSecondSliderBackgroundSuporteLeftMinimodalTitle
                  }
                >
                  - Base de espuma de poliuretano de alta densidade e
                  durabilidade.
                  <br />
                  <br />- Oferece suporte uniforme ao corpo e às camadas de
                  conforto, além de reforçar o isolamento de movimentos
                </span>
              )}
            </div>
          </div>
          <div
            className={
              styles.SpecsColchaoSlickSecondSliderBackgroundSuporteRight
            }
          >
            <div
              className={
                styles.SpecsColchaoSlickSecondSliderBackgroundSuporteRightMinimodal
              }
            >
              <strong className={styles.Title}>
                BOUNCE COM
                {!isMobile && <br />}
                ADAPTAÇÃO AO CORPO
              </strong>
              {isMobile ? (
                <span
                  className={
                    styles.SpecsColchaoSlickSecondSliderBackgroundSuporteRightMinimodalTitle
                  }
                >
                  Base de sustentação composta por molas Leggett & Platt
                  ensacadas individualmente Maior adaptabilidade do colchão às
                  curvas do corpo e circulação de ar potencialiada
                </span>
              ) : (
                <span
                  className={
                    styles.SpecsColchaoSlickSecondSliderBackgroundSuporteRightMinimodalTitle
                  }
                >
                  - Substituição do suporte de espuma de alta resiliência por
                  suporte híbrido Spring System Plus com molas ensacadas
                  individualmente
                  <br />
                  <br />
                  - Inclui camada de transição de poliuretano com alta
                  densidade, que garante o nível de suporte adequado e protege
                  as camadas superiores do atrito com as molas
                  <br />
                  <br />
                  - Bounce com maior adaptabilidade do colchão às curvas do
                  corpo e circulação de ar interna
                  <br />
                  <br />- Reforço nas bordas, com molas mais firmes em todo o
                  perímetro
                </span>
              )}
            </div>
            <div
              className={
                styles.SpecsColchaoSlickSecondSliderBackgroundSuporteRightImage
              }
            >
              <span
                className={
                  styles.SpecsColchaoSlickSecondSliderBackgroundSuporteRightImageTitle
                }
              >
                OPÇÃO DE SISTEMA
                <br />
                DE SUPORTE HÍBRIDO
                <br />
              </span>
              <Image
                src={isMobile ? SistemaDeSuporte2Mobile : SistemaDeSuporte2}
                width={isMobile ? '213' : '368'}
                height={isMobile ? '181' : '333'}
                loading={'lazy'}
              />
              <Image
                src={SetaPDP}
                width="137"
                height="82"
                className={styles.seta}
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
                src={ToquePDP}
                width={isMobile ? 73 : 137}
                height={isMobile ? 36 : 67}
                loading={'lazy'}
              />
              <span>Toque suave e macio</span>
            </div>
            <div className={styles.GridItem}>
              <Image
                src={BouncePDP}
                width={isMobile ? 43 : 80}
                height={isMobile ? 49 : 92}
                loading={'lazy'}
              />
              <span>
                Elasticidade moderada que dá aquela ajudinha ao se virar na cama
                durante a noite
              </span>
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
                src={SuportePDP}
                width={isMobile ? 91 : 171}
                height={isMobile ? 41 : 77}
                loading={'lazy'}
              />
              <span>Suporte estável e uniforme</span>
            </div>
            <div className={styles.GridItem}>
              <Image
                src={IsolamentoPDP}
                width={isMobile ? 119 : 223}
                height={isMobile ? 35 : 65}
                loading={'lazy'}
              />
              <span>Isolamento de ondas de movimento</span>
            </div>
            <div className={styles.GridItem}>
              <Image
                src={AdaptacaoPDP}
                width={isMobile ? 51 : 96}
                height={isMobile ? 45 : 85}
                loading={'lazy'}
              />
              <span>
                <strong>OPCIONAL:</strong> Bounce com adaptação às curvas do
                corpo na opção adicional de sistema híbrido Spring System Plus
              </span>
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
                <Image src={IconeGarantia} width={62} height={43} />
                <strong className={styles.IconTitle}>
                  10 anos de <br /> garantia
                </strong>
              </div>
              <div className={styles.Icon}>
                <Image src={IconeEntrega} width={45} height={49} />
                <strong className={styles.IconTitle}>
                  entrega <br /> expressa
                </strong>
              </div>
              <div className={styles.Icon}>
                <Image src={IconeFrete} width={58} height={40} />
                <strong className={styles.IconTitle}>
                  frete <br /> grátis
                </strong>
              </div>
              <div className={styles.Icon}>
                <Image src={Icone100Dias} width={41} height={36} />
                <strong className={styles.IconTitle}>
                  100 dias {!isMobile && <br />} de teste
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
                    to="https://www.zissou.com.br/blogs/faq/como-funciona-a-garantia-de-um-colchao"
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
              src={ColchoesCoral}
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
