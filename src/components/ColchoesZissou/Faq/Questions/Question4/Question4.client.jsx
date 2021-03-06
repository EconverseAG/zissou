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
            A parte que fica mais pr??xima do corpo e da pele deve receber
            aten????o especial na hora de escolher o colch??o. ?? importante avaliar
            a sensa????o do toque e a capacidade de proporcionar frescor. Todos os
            colch??es Zissou utilizam materiais selecionados de origem americana
            de alt??ssima qualidade.
          </span>
        </div>
        <div className={styles.FaqAccordionAnswerContainer}>
          <strong className={styles.FaqAccordionAnswerTitle}>O conforto</strong>
          <span className={styles.FaqAccordionAnswerText}>
            O mix de camadas de diferentes tipos de l??tex e viscoel??stico de
            mem??ria responsiva ?? a f??rmula m??gica da Zissou. A resili??ncia do
            l??tex favorece a movimenta????o e evita a sensa????o de afundar na cama
            durante o sono. A adaptabilidade do viscoel??stico suaviza pontos de
            press??o e isola ondas de movimento. Confira as diferentes
            caracter??sticas materiais de conforto. .
          </span>
        </div>
        <div className={styles.FaqAccordionAnswerContainer}>
          <strong className={styles.FaqAccordionAnswerTitle}>
            O suporte ideal
          </strong>
          <span className={styles.FaqAccordionAnswerText}>
            Os colch??es com suporte exclusivo de espuma de poliuretano de alta
            resili??ncia proporcionam sensa????o de maior firmeza e distribui????o de
            peso uniforme por toda a ??rea do colch??o. Ela refor??a o isolamento
            de movimentos quando a cama ?? compartilhada.
          </span>
        </div>
        <div className={styles.FaqAccordionAnswerContainer}>
          <span className={styles.FaqAccordionAnswerText}>
            Os modelos com o sistema de suporte h??brido Leggett & Platt oferecem
            maior adaptabilidade do colch??o ??s curvas do corpo devido ??s molas
            ensacadas individualmente, que se movimentam com independ??ncia,
            proporcionam sensa????o de maior maciez. As molas tamb??m melhoram a
            circula????o interna de ar no colch??o. A setoriza????o ergon??mica
            oferece suporte extra na regi??o do quadril e lombar para melhorar o
            alinhamento da coluna.
          </span>
        </div>
        <Link to="/pages/comparativo-colchoes">
          <strong className={styles.FaqAccordionAnswerLink}>
            Comparar os colch??es &gt;&gt;&gt;
          </strong>
        </Link>
      </AccordionDetails>
    </Accordion>
  );
}
