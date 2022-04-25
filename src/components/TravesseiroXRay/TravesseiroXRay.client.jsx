import {useState, useRef, useEffect, useCallback} from 'react';
import {Image} from '@shopify/hydrogen';

import * as styles from './TravesseiroXRay.module.scss';

import useMobile from '../../hooks/useMobile';

import CombinacaoPlush from '../../assets/combinacao-plush.png';
import CombinacaoNasNuvens from '../../assets/combinacao-nas-nuvens.png';
import CombinacaoPlushNasNuvens from '../../assets/combinacao-plush-nas-nuvens.png';
import CombinacaoUltraPlush from '../../assets/combinacao-ultra-plush.png';
import CombinacaoOthers from '../../assets/combinacao-outras.png';

import CamadaCapa from '../../assets/travesseiro-x-ray-capa.png';
import CamadaPlush1 from '../../assets/travesseiro-x-ray-camada-plush-1.png';
import CamadaNasNuvens from '../../assets/travesseiro-x-ray-camada-nas-nuvens.png';
import CamadaPlush2 from '../../assets/travesseiro-x-ray-camada-plush-2.png';

import XRaySkeleton from '../../assets/travesseiro-x-ray-skeleton.png';
import CapaFechada from '../../assets/capa-fechada.png';

import XRaySection from '../../assets/x-ray-section.png';
import CombinacaoSection from '../../assets/combinacao-section.png';

function TravesseiroXRay() {
  const [showXRay, setShowXRay] = useState(false);

  const xRay = useRef();

  const {isMobile} = useMobile();

  const handleScroll = useCallback(() => {
    setShowXRay(
      window.pageYOffset >= xRay.current.offsetTop - 100 ||
        window.pageYOffset >= xRay.current.offsetTop - 50,
    );
  }, [xRay]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
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
            />
            <Image
              src={CapaFechada}
              width={648}
              height={216}
              className={styles.xRayCapaFechada}
            />
            <div className={styles.xRayCapa}>
              <Image src={CamadaCapa} width={610} height={241} />
              <span>
                A capa do Travesseiro Zissou é confeccionada com algodão 300
                fios e recheada com fibra siliconizada que mantém o frescor com
                toque suave e macio. Através do zíper invisível, você pode
                colocar e retirar as camadas de conforto do jeito que você
                preferir.
              </span>
            </div>
            <div className={styles.xRayPlush1AndNuvens}>
              <Image src={CamadaPlush1} width={600} height={144} />
              <Image src={CamadaNasNuvens} width={600} height={144} />
              <span>
                Camada delicada com 3cm para compor um travesseiro mais baixo e
                macio. Ela também é perfeita para ajustes finos de conforto e
                altura. Além de deitar nas nuvens, você pode literalmente
                levá-la para tornar a sua próxima viagem de avião mais
                confortável
              </span>
            </div>
            <div className={styles.xRayPlush2}>
              <Image src={CamadaPlush2} width={600} height={168} />
              <span>
                Um sanduíche de conforto com bordas arredondadas que se ajustam
                às curvas naturais da sua cabeça, pescoço e ombros. São duas
                camadas de viscoelástico de memória responsiva de 5,5cm de
                altura que proporcionam resiliência e maciez. Você no controle
                não apenas da altura, mas da resposta do seu Travesseiro Zissou.
                As camadas também são perfeitas para abraçar ou colocá-las entre
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
          <h2 className={styles.combinationsTitle}>Combinações de camadas</h2>
          <span>
            O Travesseiro Zissou é modular, assim <br /> quem define o conforto
            ideal é você!
          </span>
          <div className={styles.combinations}>
            <div className={styles.combinationsItem}>
              <Image src={CombinacaoPlush} width={55} height={55} />
              <span>
                1 camada: <br />
                plush
              </span>
            </div>
            <div className={styles.combinationsItem}>
              <Image src={CombinacaoNasNuvens} width={53} height={53} />
              <span>
                1 camada: <br />
                nas nuvens
              </span>
            </div>
            <div className={styles.combinationsItem}>
              <Image src={CombinacaoPlushNasNuvens} width={138} height={54} />
              <span>
                2 camadas: <br />
                plush nas nuvens
              </span>
            </div>
            <div className={styles.combinationsItem}>
              <Image src={CombinacaoUltraPlush} width={134} height={54} />
              <span>
                2 camadas: <br />
                ultra plush
              </span>
            </div>
            <div className={styles.combinationsItem}>
              <Image src={CombinacaoOthers} width={99} height={79} />
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
