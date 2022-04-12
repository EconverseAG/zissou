import useMobile from '../../../../../hooks/useMobile';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import AddIcon from '@mui/icons-material/Add';

import * as styles from '../../Faq.module.scss';

export default function Question3() {
  const {isMobile} = useMobile();

  return (
    <Accordion className={styles.FaqAccordion}>
      <AccordionSummary
        expandIcon={
          isMobile ? (
            <AddIcon style={{color: 'fff', width: '21px', height: '21px'}} />
          ) : (
            <AddIcon style={{color: 'fff', width: '41px', height: '41px'}} />
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
            espuma de poliuretano de alta densidade ou com sistema híbrido
            Leggett & Platt Inside, que combina espuma de poliuretano e molas
            Caliber ensacadas individualmente
          </span>
        </div>
        <div className={styles.FaqAccordionAnswerContainer}>
          <span className={styles.FaqAccordionAnswerText}>
            No modelo Blue, a tecnologia das molas Leggett & Platt possui
            setorização ergonômica, que oferece suporte extra na região do
            quadril e lombar
          </span>
        </div>
        <div className={styles.FaqAccordionAnswerContainer}>
          <strong
            className={styles.FaqAccordionAnswerText}
            style={{fontFamily: 'ZonaProBlack'}}
          >
            Você pode escolher qualquer um dos suportes, sem medo de errar, pois
            o importante é que todas as matérias primas são de altíssima
            qualidade
          </strong>
        </div>
      </AccordionDetails>
    </Accordion>
  );
}
