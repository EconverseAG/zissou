import {useCallback, useEffect, useState} from 'react';

import useMobile from '../../../../../hooks/useMobile';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import * as styles from '../../Faq.module.scss';

export default function Question5({setIsOpen}) {
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
          Comprar colchão online: posso confiar?
        </strong>
      </AccordionSummary>
      <AccordionDetails
        className={[styles.FaqAccordionAnswer, styles.FaqAccordionAnswer5].join(
          ' ',
        )}
      >
        <div className={styles.FaqAccordionAnswerContainer}>
          <span className={styles.FaqAccordionAnswerText}>
            Com a Zissou, sem dúvida. Você tem{' '}
            <strong className={styles.FaqAccordionAnswerTextBolder}>
              100 dias de teste
            </strong>{' '}
            para provar os produtos na sua casa, no seu tempo, sem compromisso,
            além de contar com entrega expressa e frete grátis
          </span>
        </div>
      </AccordionDetails>
    </Accordion>
  );
}
