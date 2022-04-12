import useMobile from '../../../../../hooks/useMobile';

import {Image} from '@shopify/hydrogen';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import AddIcon from '@mui/icons-material/Add';

import * as styles from '../../Faq.module.scss';

import Eua from '../../../../../assets/bandeira_eua.png';
import Belgica from '../../../../../assets/bandeira_belgica.png';

export default function Question1() {
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
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <strong className={styles.FaqAccordionTitle}>
          Qual a semelhança entre os colchões?
        </strong>
      </AccordionSummary>
      <AccordionDetails className={styles.FaqAccordionAnswer}>
        <div className={styles.FaqAccordionAnswerTitle}>
          As melhores matérias-primas do mundo
          <Image
            src={Belgica}
            width={isMobile ? '20' : '47'}
            height={isMobile ? '20' : '47'}
          />
          <Image
            src={Eua}
            width={isMobile ? '20' : '47'}
            height={isMobile ? '20' : '47'}
          />
        </div>
        <span className={styles.FaqAccordionAnswerText}>
          Materiais rigorosamente selecionados entre os melhores fornecedores do
          mundo, importados de países como Bélgica e EUA, com destaque para as
          molas da mais conceituada fabricante de componentes, a Leggett & Platt
        </span>
        <strong className={styles.FaqAccordionAnswerTitle}>
          Benefícios Zissou
        </strong>
        <span className={styles.FaqAccordionAnswerText}>
          100 dias de teste, com possibilidade de devolução sem custo e sem
          letras miúdas, 10 anos de garantia e frete grátis
        </span>
      </AccordionDetails>
    </Accordion>
  );
}
