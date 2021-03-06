import {useState} from 'react';
import useMobile from '../../../hooks/useMobile';

import {Image, Link} from '@shopify/hydrogen/client';
import * as styles from './SpecsColchaoSlick.module.scss';
import parseUrl from '../../../helpers/parseUrl';

import Slider from 'react-slick';

const BandeiraEUA = parseUrl('eua_pdp.png');
const BandeiraBelgica = parseUrl('belgica_pdp.png');
const BandeiraBrasil = parseUrl('brasil_pdp.png');
const Brands = parseUrl('brands_pdp.png');

const ToqueESensacaoTermica = parseUrl('toque-e-sensacao-termica-blue.png');
const CamadaDeConforto = parseUrl('camada-de-conforto-blue.gif');

const ToqueESensacaoTermicaMobile = parseUrl(
  'toque-e-sensacao-termica-mobile-blue.png',
);
const CamadaDeConfortoMobile = parseUrl('camada-de-conforto-mobile.png');

const MulherDeitada = parseUrl('mulher_deitada_pdp.png');

const SuporteBlue = parseUrl('molasblue.mp4');

const ConfortoPDP = parseUrl('conforto_pdp.png');
const SuperficiePDP = parseUrl('superficie_pdp.png');
const BouncePDP = parseUrl('bounce_pdp.png');
const SensacaoPDP = parseUrl('sensacao_pdp.png');
const IsolamentoPDP = parseUrl('isolamento_pdp.png');
const SetasPDP = parseUrl('setas_pdp.png');
const ControlePDP = parseUrl('controle_pdp.png');
const SuportePDP = parseUrl('suporte_pdp.png');

const IconeGarantia = parseUrl('icone_garantia_blue.png');
const IconeEntregaPrime = parseUrl('icone_entrega_prime.png');
const IconeFrete = parseUrl('icone_frete_blue.png');
const Icone100Dias = parseUrl('icone_100_dias_blue.png');

const ColchoesBlue = parseUrl('colchoes_blue.png');

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
                ESSE COLCH??O VOC?? PODE JULGAR PELA CAPA
              </p>
              <span
                className={
                  styles.SpecsColchaoSlickSecondSliderBackgroundInfoText
                }
              >
                Blue incorpora o que h?? de mais avan??ado em tecnologia do sono
                em sua capa. O tecido matelassado cria superf??cie acolchoada,
                que proporciona mais maciez.
                <br />
                <br />O tecido Plush & Cool potencializa a condutividade
                t??rmica, criando o micro-clima ideal para o sono de qualidade,
                criando sensa????o extraordin??ria de frescor ao dormir e maciez
                ??nica.
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
                style={{position: 'relative'}}
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
                    style={{
                      right: '0',
                      position: 'absolute',
                    }}
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
                  - L??tex hipoalerg??nico de origem belga que proporciona
                  resili??ncia e suporte progressivo
                  <br />
                  <br />
                  - Maior bounce na superf??cie, que facilita os movimentos
                  durante o sono
                  <br />
                  <br />- Alta capacidade de ventila????o cria microclima
                  perfeitamente equilibrado e controle de umidade
                </span>
              ) : (
                <span
                  className={
                    styles.SpecsColchaoSlickSecondSliderBackgroundInfoText
                  }
                >
                  - ?? a evolu????o do l??tex, se destaca em todos os n??veis de
                  conforto
                  <br />
                  <br />
                  - Proporciona resili??ncia e suporte progressivo
                  <br />
                  <br />
                  - Possui estrutura celular homog??nea que o torna
                  verdadeiramente ??nico aumentando a sensa????o de impulso, que
                  facilita os movimentos durante o sono
                  <br />
                  <br />
                  - Excelente capacidade de conserva????o de suas propriedades e
                  alt??ssima resist??ncia ?? tra????o, aumentando sua durabilidade
                  <br />
                  <br />
                  - Alta capacidade de ventila????o, que garante microclima
                  perfeitamente equilibrado e controle de umidade otimizado
                  <br />
                  <br />- Propriedades antimicrobianas e resist??ncia a ??caros
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
                VISCO FRESH
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
                  - Alivia pontos de press??o e ameniza transfer??ncia de
                  movimentos
                  <br />
                  <br />- Contribui para manter a temperatura ideal do colch??o
                </span>
              ) : (
                <span
                  className={
                    styles.SpecsColchaoSlickSecondSliderBackgroundInfoText
                  }
                >
                  - Mat??ria prima premium com gel que contribui para manter a
                  temperatura ideal do colch??o
                  <br />
                  <br />
                  - Viscoel??stico de mem??ria responsiva que proporciona
                  durabilidade
                  <br />
                  <br />
                  - Absorve e distribui a press??o e proporciona transfer??ncia
                  m??nima de movimentos, sem deformar
                  <br />
                  <br />- Se molda ao formato e peso do corpo, aliviando pontos
                  de press??o
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
            style={{
              marginTop: '50px',
              marginBottom: 0,
            }}
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
                SISTEMA DE SUPORTE H??BRIDO LEGGETT & PLATT
              </strong>
              <span
                className={
                  styles.SpecsColchaoSlickSecondSliderBackgroundSuporteLeftMinimodalTitle
                }
              >
                - Camada de transi????o de espuma de poliuretano de alta densidade
                uniformiza a distribui????o de peso
                <br />
                <br />
                - Sistema de suporte h??brido com molas ensacadas individualmente
                com 15cm de altura, que proporcionam maior maleabilidade ao
                colch??o, aumentando a adaptabilidade ??s curvas do corpo
                <br />
                <br />
                - Molas Legget & Platt com tecnologia de zoneamento ergon??mico
                para melhor alinhamento da coluna
                <br />
                <br />
                Sustenta????o adicional, com maior fluxo de ar
                <br />
                <br />
                Refor??o das bordas em todas em todas as lateris do colch??o com
                molas mais firmes, para garantir a uniformidade do suporte em
                toda a superf??cie
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
              <video
                src={SuporteBlue}
                width={isMobile ? 270 : 670}
                autoPlay
                loop
                muted
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
              <span>Superf??cie que refresca</span>
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
                  Elasticidade na superf??cie que facilita movimenta????o na cama
                </span>
              ) : (
                <span>
                  Bounce extra, para facilitar a movimenta????o na cama durante o
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
                <span>Aconchego extraordin??rio</span>
              ) : (
                <span>Sensa????o extraordin??ria de aconchego</span>
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
              <span>Al??vio dos pontos de press??o</span>
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
                  Controle otimizado de temperatura e refresc??ncia extra
                </span>
              ) : (
                <span>
                  Controle otimizado de temperatura e refresc??ncia extra no
                  n??cleo do colch??o
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
                  Suporte ergon??mico para melhor alinhamento da coluna
                </span>
              ) : (
                <span>
                  Suporte ergon??mico com adapta????o ao corpo e refor??o na regi??o
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
                  frete <br /> gr??tis
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
