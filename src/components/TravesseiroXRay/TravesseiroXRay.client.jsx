import {useState, useRef, useEffect, useCallback} from 'react';
import {Image} from '@shopify/hydrogen';

import * as styles from './TravesseiroXRay.module.scss';

import useMobile from '../../hooks/useMobile';
import parseUrl from '../../helpers/parseUrl';

const CombinacaoPlush = parseUrl('combinacao-plush.png');
const CombinacaoNasNuvens = parseUrl('combinacao-nas-nuvens.png');
const CombinacaoPlushNasNuvens = parseUrl('combinacao-plush-nas-nuvens.png');
const CombinacaoUltraPlush = parseUrl('combinacao-ultra-plush.png');
const CombinacaoOthers = parseUrl('combinacao-outras.png');

const CamadaCapa = parseUrl('travesseiro-x-ray-capa.png');
const CamadaPlush1 = parseUrl('travesseiro-x-ray-camada-plush-1.png');
const CamadaNasNuvens = parseUrl('travesseiro-x-ray-camada-nas-nuvens.png');
const CamadaPlush2 = parseUrl('travesseiro-x-ray-camada-plush-2.png');

const XRaySkeleton = parseUrl('travesseiro-x-ray-skeleton.png');
const CapaFechada = parseUrl('capa-fechada.png');

const XRaySection = parseUrl('x-ray-section.png');
const CombinacaoSection = parseUrl('combinacao-section.png');

function TravesseiroXRay() {
  const [showXRay, setShowXRay] = useState(false);

  const xRay = useRef();

  const {isMobile} = useMobile();

  const handleScroll = useCallback(() => {
    setShowXRay(
      window?.pageYOffset >= xRay.current.offsetTop - 100 ||
        window?.pageYOffset >= xRay.current.offsetTop - 50,
    );
  }, [xRay]);

  useEffect(() => {
    window?.addEventListener('scroll', handleScroll);

    return () => window?.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <div
      className={`${styles.wrapper} ${isMobile ? styles.mobile : ''}`}
      ref={xRay}
    >
      <h2>
        Raio X{' '}
        <strong>
          do
          <br /> travesseiro Zissou
        </strong>
      </h2>

      <div
        className={`${styles.xRay} ${
          showXRay ? styles.showXRay : styles.hideXRay
        }`}
      >
        {isMobile ? (
          <Image src={XRaySection} width={269} height={469} />
        ) : (
          <>
            <Image
              src={XRaySkeleton}
              width={711}
              height={1859}
              className={styles.xRaySkeleton}
              loading={'lazy'}
            />
            <Image
              src={CapaFechada}
              width={648}
              height={216}
              className={styles.xRayCapaFechada}
              loading={'lazy'}
            />
            <div className={styles.xRayCapa}>
              <Image
                src={CamadaCapa}
                width={610}
                height={241}
                loading={'lazy'}
              />
              <span>
                A capa do Travesseiro Zissou ?? confeccionada com algod??o 300
                fios e recheada com fibra siliconizada que mant??m o frescor com
                toque suave e macio. Atrav??s do z??per invis??vel, voc?? pode
                colocar e retirar as camadas de conforto do jeito que voc??
                preferir.
              </span>
            </div>
            <div className={styles.xRayPlush1AndNuvens}>
              <Image
                src={CamadaPlush1}
                width={600}
                height={144}
                loading={'lazy'}
              />
              <Image
                src={CamadaNasNuvens}
                width={600}
                height={144}
                loading={'lazy'}
              />
              <span>
                Camada delicada com 3cm para compor um travesseiro mais baixo e
                macio. Ela tamb??m ?? perfeita para ajustes finos de conforto e
                altura. Al??m de deitar nas nuvens, voc?? pode literalmente
                lev??-la para tornar a sua pr??xima viagem de avi??o mais
                confort??vel
              </span>
            </div>
            <div className={styles.xRayPlush2}>
              <Image
                src={CamadaPlush2}
                width={600}
                height={168}
                loading={'lazy'}
              />
              <span>
                Um sandu??che de conforto com bordas arredondadas que se ajustam
                ??s curvas naturais da sua cabe??a, pesco??o e ombros. S??o duas
                camadas de viscoel??stico de mem??ria responsiva de 5,5cm de
                altura que proporcionam resili??ncia e maciez. Voc?? no controle
                n??o apenas da altura, mas da resposta do seu Travesseiro Zissou.
                As camadas tamb??m s??o perfeitas para abra??ar ou coloc??-las entre
                as pernas
              </span>
            </div>
          </>
        )}
      </div>

      {isMobile ? (
        <Image
          src={CombinacaoSection}
          width={304}
          height={262}
          className={styles.combinationSectionImage}
        />
      ) : (
        <>
          <h2 className={styles.combinationsTitle}>Combina????es de camadas</h2>
          <span>
            O Travesseiro Zissou ?? modular, assim <br /> quem define o conforto
            ideal ?? voc??!
          </span>
          <div className={styles.combinations}>
            <div className={styles.combinationsItem}>
              <Image
                src={CombinacaoPlush}
                width={55}
                height={55}
                loading={'lazy'}
              />
              <span>
                1 camada: <br />
                plush
              </span>
            </div>
            <div className={styles.combinationsItem}>
              <Image
                src={CombinacaoNasNuvens}
                width={53}
                height={53}
                loading={'lazy'}
              />
              <span>
                1 camada: <br />
                nas nuvens
              </span>
            </div>
            <div className={styles.combinationsItem}>
              <Image
                src={CombinacaoPlushNasNuvens}
                width={138}
                height={54}
                loading={'lazy'}
              />
              <span>
                2 camadas: <br />
                plush nas nuvens
              </span>
            </div>
            <div className={styles.combinationsItem}>
              <Image
                src={CombinacaoUltraPlush}
                width={134}
                height={54}
                loading={'lazy'}
              />
              <span>
                2 camadas: <br />
                ultra plush
              </span>
            </div>
            <div className={styles.combinationsItem}>
              <Image
                src={CombinacaoOthers}
                width={99}
                height={79}
                loading={'lazy'}
              />
              <span>
                outras <br />
                aventuras...
              </span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default TravesseiroXRay;
