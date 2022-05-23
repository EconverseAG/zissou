import {useCallback, useEffect, useState} from 'react';

import useMobile from '../../../../../hooks/useMobile';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import * as styles from '../../Faq.module.scss';

export default function Question6({setIsOpen}) {
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
          O colchão vem dentro de uma caixa? {isMobile ? '' : 'Como assim?'}
        </strong>
      </AccordionSummary>
      <AccordionDetails
        className={[styles.FaqAccordionAnswer, styles.FaqAccordionAnswer6].join(
          ' ',
        )}
      >
        <div className={styles.FaqAccordionAnswerContainer}>
          <span className={styles.FaqAccordionAnswerText}>
            <em>Bed in a box</em> é uma tecnologia que permite que os colchões
            Zissou sejam comprimidos à vácuo e enrolados para que possam caber
            em uma caixa super compacta, garantindo assim maior comodidade para
            chegar à sua casa.
          </span>
        </div>
        <div className={styles.FaqAccordionAnswerContainer}>
          <span className={styles.FaqAccordionAnswerText}>
            Os colchões Zissou são produzidos, comprimidos e embalados no Brasil
            com tecnologia americana e matérias primas importadas, de altíssima
            qualidade.
          </span>
        </div>
        <div className={styles.FaqAccordionAnswerContainer}>
          <span className={styles.FaqAccordionAnswerText}>
            Ao receber seu colchão, tudo o que você precisa fazer é retirá-lo da
            embalagem, colocá-lo na horizontal e deixá-lo expandir. Em até 3
            horas ele estará pronto para você deitar e rolar.
          </span>
        </div>
      </AccordionDetails>
    </Accordion>
  );
}
