import useMobile from '../../../hooks/useMobile';

import * as styles from './FormulaDoConforto.module.scss';

import VideoLatex from '../../../assets/video_latex.mp4';
import VideoVisco from '../../../assets/video_visco.webm';

export default function FormulaDoConforto() {
  const {isMobile} = useMobile();

  return (
    <div className={styles.FormulaDoConfortoContainer}>
      <strong className={styles.FormulaDoConfortoTitle}>
        ABSURDAMENTE CONFORTÁVEL
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
              <video
                className={styles.FormulaDoConfortoTopContentImage}
                src={VideoLatex}
                autoPlay
                loop
                muted
                width="339"
                height="141"
              />
              <span className={styles.FormulaDoConfortoTopContentSubtitle}>
                Selecionamos as variações de látex mais sofisticadas do mundo,
                com características especiais mais avançadas
              </span>
              <ul className={styles.FormulaDoConfortoTopContentList}>
                <li>
                  • Látex Infused: material de alta resiliência exclusivo do
                  Spark, tem ótimas características ergonômicas
                </li>
                <li>
                  • Latex Classic: com alta resiliência oferece suporte
                  progressivo e maior frescor
                </li>
                <li>
                  • Latex Pulse: cria microclima equilibrado, tem controle de
                  umidade e mais elasticidade para facilitar os movimentos
                  durante o sono
                </li>
              </ul>
            </div>
          </>
        ) : (
          <>
            <div className={styles.FormulaDoConfortoTopImage}>
              <video
                className={styles.video}
                src={VideoLatex}
                autoPlay
                loop
                muted
                width="550"
                height="310"
              />
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
                  <strong className={styles.FormulaDoConfortoTopContentList}>
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
              <video
                className={styles.FormulaDoConfortoTopContentImage}
                src={VideoVisco}
                autoPlay
                loop
                muted
                width="339"
                height="141"
              />
              <span className={styles.FormulaDoConfortoBottomContentText}>
                O viscoelástico de memória responsiva proporciona aconchego e
                aquela sensação gostosa de abraço, aliviando pontos de pressão,
                mitigando a transmissão de ondas de movimento
              </span>
            </div>
          </>
        ) : (
          <>
            <div className={styles.FormulaDoConfortoBottomImage}>
              <video
                className={styles.video}
                src={VideoVisco}
                autoPlay
                loop
                muted
                width="550"
                height="310"
              />
            </div>
            <div className={styles.FormulaDoConfortoBottomContent}>
              <strong className={styles.FormulaDoConfortoBottomContentTitle}>
                Camada de aconchego com Viscoelástico
              </strong>
              <span className={styles.FormulaDoConfortoBottomContentText}>
                O viscoelástico de memória responsiva proporciona aconchego e
                aquela sensação gostosa de abraço, aliviando pontos de pressão,
                mitigando a transmissão de ondas de movimento
              </span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
