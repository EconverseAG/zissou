import useMobile from '../../hooks/useMobile';

import {Image} from '@shopify/hydrogen';

import * as styles from './ZissouModalBase.module.scss';

import BaseModal from '../../assets/base-modal.png';

export default function ZissouModalBase({setModalOpen}) {
  const {isMobile} = useMobile();

  return (
    <div className={styles.ZissouModalBaseContainer}>
      <div className={styles.ZissouModalBaseContent}>
        <button
          className={styles.Close}
          onClick={() => setModalOpen((prev) => !prev)}
        >
          <Close />
        </button>
        <strong className={styles.ZissouModalBaseTitle}>
          Base Zissou <br />
          <strong>ESTABILIDADE PARA DORMIR & VIVER</strong>
        </strong>
        <div className={styles.ZissouModalBaseTop}>
          <div className={styles.ZissouModalBaseTopContent}>
            <strong>Estrutura De Madeira Maciça</strong>
            <span>- Superior a qualquer cama box tradicional</span>
            <span>- Estabilidade forca, resistência e durabilidade</span>
            <span>- Composição de madeira de eucalipto de reflorestamento</span>
          </div>
          <div className={styles.ZissouModalBaseTopContent}>
            <strong>Quanto Mais Ripas, Melhor</strong>
            <span>
              - Abundância de ripas de pinus com distância de apensa 5cm
            </span>
            <span>
              - Envelopadas invidualmente evitando que o colchão escorregue
            </span>
            <span>- Nada de barulhinhos indesejados</span>
          </div>
        </div>
        <div className={styles.ZissouModalBaseBottom}>
          <div className={styles.ZissouModalBaseBottomContent}>
            <strong>Design Versátil Minimalista</strong>
            <span>
              - Linhas retas, bordas arredondadas e revestimento em tecido
              estofado
            </span>
            <span>- Cor neutra que combina qualquer ambiente</span>
            <span>
              - Altura total de 30cm para harmonizar com móveis de cabeceira
            </span>
          </div>
          <div className={styles.ZissouModalBaseBottomContent}>
            <strong>Montagem Por Um Especialista Do Sono</strong>
            <span>- Entrega gratuita com agendamento</span>
            <span>- Comodidade e segurança na instalação</span>
          </div>
        </div>
        <div className={styles.ZissouModalBaseImage}>
          <Image
            src={BaseModal}
            width={isMobile ? 284 : 486}
            height={isMobile ? 147 : 300}
          />
          <strong className={styles.ZissouModalBaseImageTitle}>
            Pensada para potencializar ao máximo a experiência de sono dos
            Colchões Zissou
          </strong>
        </div>
      </div>
    </div>
  );
}

function Close() {
  const {isMobile} = useMobile();

  return isMobile ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={15.707}
      height={15.707}
      viewBox="0 0 15.707 15.707"
    >
      <g
        id="Grupo_114"
        data-name="Grupo 114"
        transform="translate(-1071.146 -2556.146)"
      >
        <line
          id="Linha_8"
          data-name="Linha 8"
          x2={15}
          y2={15}
          transform="translate(1071.5 2556.5)"
          fill="none"
          stroke="#707070"
          strokeWidth={1}
        />
        <line
          id="Linha_9"
          data-name="Linha 9"
          x1={15}
          y2={15}
          transform="translate(1071.5 2556.5)"
          fill="none"
          stroke="#707070"
          strokeWidth={1}
        />
      </g>
    </svg>
  ) : (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={10.707}
      height={10.707}
      viewBox="0 0 10.707 10.707"
    >
      <g id="Grupo_52" data-name="Grupo 52" transform="translate(0.354 0.354)">
        <line
          id="Linha_8"
          data-name="Linha 8"
          x2={10}
          y2={10}
          fill="none"
          stroke="#707070"
          strokeWidth={1}
        />
        <line
          id="Linha_9"
          data-name="Linha 9"
          x1={10}
          y2={10}
          fill="none"
          stroke="#707070"
          strokeWidth={1}
        />
      </g>
    </svg>
  );
}
