import {useCallback, useEffect, useState} from 'react';

import useMobile from '../../../../../hooks/useMobile';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import * as styles from '../../Faq.module.scss';

export default function Question3({setIsOpen}) {
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
          Mola ou espuma como suporte?
        </strong>
      </AccordionSummary>
      <AccordionDetails className={styles.FaqAccordionAnswer}>
        <div className={styles.FaqAccordionAnswerContainer}>
          <span className={styles.FaqAccordionAnswerText}>
            A Zissou oferece as duas opções de suporte para o seu colchão:
            espuma de poliuretano de alta densidade ou Spring System, que
            consiste em um sistema híbrido de espuma de poliuretano e molas
            ensacadas individualmente.
          </span>
        </div>
        <div className={styles.FaqAccordionAnswerContainer}>
          <span className={styles.FaqAccordionAnswerText}>
            No modelo Blue, a tecnologia das molas Zoned Spring System possui
            setorização ergonômica, que oferece suporte extra na região do
            quadril e lombar.
          </span>
        </div>
        <div className={styles.FaqAccordionAnswerContainer}>
          <strong
            className={styles.FaqAccordionAnswerText}
            style={{fontFamily: 'ZonaProBlack'}}
          >
            Você pode escolher qualquer um dos suportes, sem medo de errar, pois
            o importante é que todas as matérias primas são de altíssima
            qualidade.
          </strong>
        </div>
      </AccordionDetails>
    </Accordion>
  );
}
