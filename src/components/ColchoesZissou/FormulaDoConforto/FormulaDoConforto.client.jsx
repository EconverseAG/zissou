import useMobile from '../../../hooks/useMobile';

import {Image} from '@shopify/hydrogen';
import * as styles from './FormulaDoConforto.module.scss';

import LatexSpark from '../../../assets/latex spark.png';
import ViscoElastico from '../../../assets/visco-elastico.png';

export default function FormulaDoConforto() {
  const {isMobile} = useMobile();

  return (
    <div className={styles.FormulaDoConfortoContainer}>
      <strong className={styles.FormulaDoConfortoTitle}>
        A FÓRMULA DO CONFORTO ZISSOU
      </strong>
      <div className={styles.FormulaDoConfortoTop}>
        {isMobile ? (
          <>
            <div className={styles.FormulaDoConfortoTopTitleContainer}>
              <strong className={styles.FormulaDoConfortoTopContentTitle}>
                Camada de conforto <br /> com Látex
              </strong>
            </div>
            <div className={styles.FormulaDoConfortoTopContent}>
              <Image
                src={LatexSpark}
                width="339"
                height="141"
                className={styles.FormulaDoConfortoTopContentImage}
              />
              <span className={styles.FormulaDoConfortoTopContentSubtitle}>
                Selecionamos as variações de látex mais sofisticadas do mundo,
                com características especiais mais avançadas
              </span>
              <ul className={styles.FormulaDoConfortoTopContentList}>
                <li>
                  <strong
                    className={styles.FormulaDoConfortoTopContentListBold}
                  >
                    • Látex Infused:
                  </strong>{' '}
                  material exclusivo do Spark, tem alta resiliência e ótimas
                  características ergonômicas
                </li>
                <li>
                  <strong
                    className={styles.FormulaDoConfortoTopContentListBold}
                  >
                    • Latex Classic:
                  </strong>{' '}
                  alta resiliência com suporte
                </li>
                <li>
                  <strong
                    className={styles.FormulaDoConfortoTopContentListBold}
                  >
                    • Latex Pulse:
                  </strong>{' '}
                  microclima equilibrado, controle de umidade e mais
                  elasticidade para facilitar os movimentos durante o sono
                </li>
              </ul>
            </div>
          </>
        ) : (
          <>
            <div className={styles.FormulaDoConfortoTopImage}>
              <Image src={LatexSpark} width="942" height="392" />
            </div>
            <div className={styles.FormulaDoConfortoTopContent}>
              <strong className={styles.FormulaDoConfortoTopContentTitle}>
                Camada de conforto com Látex
              </strong>
              <span className={styles.FormulaDoConfortoTopContentSubtitle}>
                Selecionamos as variações de látex mais sofisticadas do mundo,
                com características especiais mais avançadas
              </span>
              <ul className={styles.FormulaDoConfortoTopContentList}>
                <li>
                  <strong
                    className={styles.FormulaDoConfortoTopContentListBold}
                  >
                    • Acefom HR:
                  </strong>{' '}
                  material exclusivo do Spark, tem alta resiliência e ótimas
                  características ergonômicas
                </li>
                <li>
                  <strong
                    className={styles.FormulaDoConfortoTopContentListBold}
                  >
                    • Latex Classic:
                  </strong>{' '}
                  alta resiliência com suporte
                </li>
                <li>
                  <strong
                    className={styles.FormulaDoConfortoTopContentListBold}
                  >
                    • Latex Pulse:
                  </strong>{' '}
                  microclima equilibrado, controle de umidade e mais
                  elasticidade para facilitar os movimentos durante o sono
                </li>
              </ul>
            </div>
          </>
        )}
      </div>
      <div className={styles.FormulaDoConfortoBottom}>
        {isMobile ? (
          <>
            <div className={styles.FormulaDoConfortoBottomTitleContainer}>
              <strong className={styles.FormulaDoConfortoBottomContentTitle}>
                Camada de aconchego <br /> com Viscoelástico
              </strong>
            </div>
            <div className={styles.FormulaDoConfortoBottomContent}>
              <Image
                src={ViscoElastico}
                width="339"
                height="141"
                className={styles.FormulaDoConfortoBottomContentImage}
              />
              <span className={styles.FormulaDoConfortoBottomContentText}>
                O viscoelástico de memória responsiva proporciona aconchego e
                aquela sensação gostosa de abraço, aliviando pontos de pressão,
                mitigando a transmissão de ondas de movimento e reunindo
                propriedades hipoalergênicas e antimicrobianas
              </span>
            </div>
          </>
        ) : (
          <>
            <div className={styles.FormulaDoConfortoBottomImage}>
              <Image src={ViscoElastico} width="942" height="392" />
            </div>
            <div className={styles.FormulaDoConfortoBottomContent}>
              <strong className={styles.FormulaDoConfortoBottomContentTitle}>
                Camada de aconchego com Viscoelástico
              </strong>
              <span className={styles.FormulaDoConfortoBottomContentText}>
                O viscoelástico de memória responsiva proporciona aconchego e
                aquela sensação gostosa de abraço, aliviando pontos de pressão,
                mitigando a transmissão de ondas de movimento e reunindo
                propriedades hipoalergênicas e antimicrobianas
              </span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
