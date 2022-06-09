import {useCallback, useEffect, useState} from 'react';

import useMobile from '../../../../../hooks/useMobile';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import * as styles from '../../Faq.module.scss';
import {Link} from '@shopify/hydrogen/client';

export default function Question4({setIsOpen}) {
  const [expanded, setExpanded] = useState(false);

  const {isMobile} = useMobile();

  const handleChange = useCallback(
    (panel) => (_, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    },
    [],
  );

  useEffect(() => {
    setIsOpen(expanded);
  }, [expanded, setIsOpen]);

  return (
    <Accordion
      className={styles.FaqAccordion}
      onChange={handleChange('panel1')}
    >
      <AccordionSummary
        expandIcon={
          expanded !== 'panel1' ? (
            isMobile ? (
              <AddIcon style={{color: 'fff', width: '21px', height: '21px'}} />
            ) : (
              <AddIcon style={{color: 'fff', width: '41px', height: '41px'}} />
            )
          ) : isMobile ? (
            <RemoveIcon style={{color: 'fff', width: '21px', height: '21px'}} />
          ) : (
            <RemoveIcon style={{color: 'fff', width: '41px', height: '41px'}} />
          )
        }
        aria-controls="panel2a-content"
        id="panel2a-header"
      >
        <strong className={styles.FaqAccordionTitle}>
          Como decidir entre SPARK, CORAL E BLUE?
        </strong>
      </AccordionSummary>
      <AccordionDetails
        className={[styles.FaqAccordionAnswer, styles.FaqAccordionAnswer4].join(
          ' ',
        )}
      >
        <div className={styles.FaqAccordionAnswerContainer}>
          <strong className={styles.FaqAccordionAnswerTitle}>A capa</strong>
          <span className={styles.FaqAccordionAnswerText}>
            A parte que fica mais próxima do corpo e da pele deve receber
            atenção especial na hora de escolher o colchão. É importante avaliar
            a sensação do toque e a capacidade de proporcionar frescor. Todos os
            colchões Zissou utilizam materiais selecionados de origem americana
            de altíssima qualidade.
          </span>
        </div>
        <div className={styles.FaqAccordionAnswerContainer}>
          <strong className={styles.FaqAccordionAnswerTitle}>O conforto</strong>
          <span className={styles.FaqAccordionAnswerText}>
            O mix de camadas de diferentes tipos de látex e viscoelástico de
            memória responsiva é a fórmula mágica da Zissou. A resiliência do
            látex favorece a movimentação e evita a sensação de afundar na cama
            durante o sono. A adaptabilidade do viscoelástico suaviza pontos de
            pressão e isola ondas de movimento. Confira as diferentes
            características materiais de conforto. .
          </span>
        </div>
        <div className={styles.FaqAccordionAnswerContainer}>
          <strong className={styles.FaqAccordionAnswerTitle}>
            O suporte ideal
          </strong>
          <span className={styles.FaqAccordionAnswerText}>
            Os colchões com suporte exclusivo de espuma de poliuretano de alta
            resiliência proporcionam sensação de maior firmeza e distribuição de
            peso uniforme por toda a área do colchão. Ela reforça o isolamento
            de movimentos quando a cama é compartilhada.
          </span>
        </div>
        <div className={styles.FaqAccordionAnswerContainer}>
          <span className={styles.FaqAccordionAnswerText}>
            Os modelos com o sistema de suporte híbrido Leggett & Platt oferecem
            maior adaptabilidade do colchão às curvas do corpo devido às molas
            ensacadas individualmente, que se movimentam com independência,
            proporcionam sensação de maior maciez. As molas também melhoram a
            circulação interna de ar no colchão. A setorização ergonômica
            oferece suporte extra na região do quadril e lombar para melhorar o
            alinhamento da coluna.
          </span>
        </div>
        <Link to="/pages/comparativo-colchoes">
          <strong className={styles.FaqAccordionAnswerLink}>
            Comparar os colchões &gt;&gt;&gt;
          </strong>
        </Link>
      </AccordionDetails>
    </Accordion>
  );
}
