import {useState} from 'react';
import useMobile from '../../../hooks/useMobile';

import {Image, Link} from '@shopify/hydrogen/client';
import * as styles from './SpecsColchaoSlick.module.scss';

import Slider from 'react-slick';
import parseUrl from '../../../helpers/parseUrl';

const BandeiraEUA = parseUrl('eua_pdp.png');
const BandeiraBelgica = parseUrl('belgica_pdp.png');
const BandeiraBrasil = parseUrl('brasil_pdp.png');
const Brands = parseUrl('brands_pdp.png');

const ToqueESensacaoTermica = parseUrl('toque_pdp_spark.png');
const CamadaDeConforto = parseUrl('camada-de-conforto-spark.png');

const ToqueESensacaoTermicaMobile = parseUrl(
  'toque-e-sensacao-termica-spark-mobile.png',
);
const CamadaDeConfortoMobile = parseUrl('camada-de-conforto-spark-mobile.png');

const MulherDeitada = parseUrl('mulher_deitada_pdp_spark.png');

const SistemaDeSuporte1 = parseUrl('colchao_sistema_suporte_spark_1.png');
const SistemaDeSuporte2 = parseUrl('colchao_sistema_suporte_spark_2.png');
const SistemaDeSuporte1Mobile = parseUrl(
  'colchao_sistema_suporte_1_mobile.png',
);
const SistemaDeSuporte2Mobile = parseUrl(
  'colchao_sistema_suporte_2_mobile.png',
);

const SetaPDP = parseUrl('seta_pdp.png');

const ToquePDP = parseUrl('toque-spark.svg');
const BouncePDP = parseUrl('bounce-spark.svg');
const SetasPDP = parseUrl('setas-spark.svg');
const SuportePDP = parseUrl('suporte-spark.svg');
const IsolamentoPDP = parseUrl('isolamento-spark.svg');
const AdaptacaoPDP = parseUrl('adaptacao-spark.svg');

const CaixaSpark = parseUrl('caixa-beneficios-spark.png');

const IconeGarantia = parseUrl('icone_garantia_spark.svg');
const IconeEntrega = parseUrl('icone_entrega_spark.svg');
const IconeFrete = parseUrl('icone_frete_spark.svg');
const Icone100Dias = parseUrl('icone_100_dias_spark.svg');

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
            toque e <br /> sensa????o t??rmica
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
            sensa????es
          </span>
        </div>
        <div className={styles.SpecsColchaoSlickFirstSliderTabs}>
          <span className={styles.SpecsColchaoSlickFirstSliderTabsTitle}>
            benef??cios
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
                TECIDO VELVET & BALANCED{' '}
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
                garantindo o ajuste perfeito ao colch??o.
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
                - Composta por Latex Infused de origem belga, exclusivo da
                Zissou. Torna Spark ideal para quem prefere um colch??o que
                proporciona distribui????o uniforme de peso, com total conforto.
                <br />
                <br />
                - Proporciona resili??ncia e suporte progressivo, com apoio
                corporal perfeito
                <br />
                <br />
                - Estrutura aerada estimula a circula????o de ar, evitando
                aquecimento e ac??mulo de umidade
                <br />
                <br />
                - Cont??m pequenas perfura????es que aumentam a ventila????o,
                proporcionando refresc??ncia
                <br />
                <br />
                - Alta resist??ncia a press??o, evitando deforma????o com o passar
                do tempo
                <br />
                <br />- Propriedades hipoalerg??nicas, antimicrobianas e
                resist??ncia a ??caros
              </span>
              {isMobile ? (
                <div className={styles.brands}>
                  <Image src={Brands} width={340} height={53} />
                </div>
              ) : null}
            </div>
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
                VISCO
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
                  - Viscoel??stico de mem??ria responsiva que se molda ao corpo e
                  alivia pontos de press??o
                  <br />
                  <br />
                  -Absorve e distribui a press??o evita transfer??ncia de
                  movimentos
                </span>
              ) : (
                <span
                  className={
                    styles.SpecsColchaoSlickSecondSliderBackgroundInfoText
                  }
                >
                  - Viscoel??stico de mem??ria responsiva que proporciona
                  durabilidade
                  <br />
                  <br />
                  - Absorve e distribui a press??o e proporciona transfer??ncia
                  m??nima de movimentos
                  <br />
                  <br />- Se molda ao formato e peso do corpo, aliviando pontos
                  de press??o
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
          <div className={styles.sparkSuporte}>
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
                <span
                  className={
                    styles.SpecsColchaoSlickSecondSliderBackgroundSuporteLeftMinimodalTitle
                  }
                >
                  - Base de espuma de poliuretano de alta densidade e
                  durabilidade.
                  <br />
                  <br />- Oferece suporte uniforme ao corpo e ??s camadas de
                  conforto, al??m de refor??ar o isolamento de movimentos
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
                  styles.SpecsColchaoSlickSecondSliderBackgroundSuporteRightMinimodal
                }
              >
                <strong className={styles.Title}>
                  BOUNCE COM
                  {!isMobile && <br />}
                  ADAPTA????O AO CORPO
                </strong>
                <span
                  className={
                    styles.SpecsColchaoSlickSecondSliderBackgroundSuporteRightMinimodalTitle
                  }
                >
                  - Substitui????o do suporte de espuma de alta resili??ncia por
                  suporte h??brido com molas Legget & Platt
                  <br />
                  <br />
                  - Inclui camada de transi????o de poliuretano com alta
                  densidade, que garante o n??vel de suporte adequado e protege
                  as camadas superiores do atrito com as molas
                  <br />
                  <br />
                  - Bounce com maior adaptabilidade do colch??o ??s curvas do
                  corpo e circula????o de ar interna
                  <br />
                  <br />- Refor??o nas bordas, com molas mais firmes em todo o
                  per??metro
                </span>
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
                  style={{left: '15%'}}
                >
                  OP????O DE SISTEMA
                  <br />
                  DE SUPORTE H??BRIDO
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
        </div>
        <div
          className={`${styles.SpecsColchaoSlickSecondSliderBackground} ${styles.SpecsColchaoSlickSecondSliderBackground5} ${styles.sensationSpark}`}
        >
          <div className={styles.sparkSensationsGrid}>
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
                Elasticidade moderada que d?? aquela ajudinha ao se virar na cama
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
              <span>Al??vio dos pontos de press??o</span>
            </div>
            <div className={styles.GridItem}>
              <Image
                src={SuportePDP}
                width={isMobile ? 91 : 171}
                height={isMobile ? 41 : 77}
                loading={'lazy'}
              />
              <span>Suporte est??vel e uniforme</span>
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
                <strong>OPCIONAL:</strong> Bounce com adapta????o ??s curvas do
                corpo na op????o com sistema de suporte h??brido com molas Leggett
                & Platt
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
                  frete <br /> gr??tis
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
                  Caso n??o esteja satisfeito com o produto, entre em contato com
                  nosso atendimento atrav??s do Whatsapp 11 93285-8213
                </span>
              </div>
              <div className={styles.BeneficiosItem}>
                <strong className={styles.BeneficiosItemTitle}>
                  ENTREGA EXPRESSA E FRETE GR??TIS
                </strong>
                <span className={styles.BeneficiosItemSubtitle}>
                  A entrega ?? por nossa conta para todo o Brasil
                </span>
              </div>
              <div className={styles.BeneficiosItem}>
                <strong className={styles.BeneficiosItemTitle}>
                  GARANTIA DE 10 ANOS
                </strong>
                <span className={styles.BeneficiosItemSubtitle}>
                  Para saber mais sobre os termos de garantia,{' '}
                  <Link
                    to="/blogs/redefinaseusono/como-funciona-a-garantia-de-um-colchao"
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
            <Image src={CaixaSpark} width={496} height={523} loading={'lazy'} />
          </div>
        </div>
      </Slider>
    </div>
  );
}
