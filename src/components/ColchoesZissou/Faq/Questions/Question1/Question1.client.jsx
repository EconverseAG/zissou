import {useCallback, useEffect, useState} from 'react';

import useMobile from '../../../../../hooks/useMobile';

import {Image} from '@shopify/hydrogen';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import parseUrl from '../../../../../helpers/parseUrl';
import * as styles from '../../Faq.module.scss';

const Eua = parseUrl('bandeira_eua.png');
const Belgica = parseUrl('bandeira_belgica.png');

export default function Question1({setIsOpen}) {
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
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <strong className={styles.FaqAccordionTitle}>
          Qual a semelhança entre os colchões?
        </strong>
      </AccordionSummary>
      <AccordionDetails className={styles.FaqAccordionAnswer}>
        <strong className={styles.FaqAccordionAnswerTitle}>
          Equilíbrio ideal entre suporte e conforto
        </strong>
        <span className={styles.FaqAccordionAnswerText}>
          Composições desenvolvidas para o equilíbrio ideal entre suporte e
          conforto, dentro de uma faixa de sensação de firmeza médio-firme, com
          leve variação entre os modelos, que atendem às diferentes preferências
          e necessidades dos dorminhocos mais exigentes.
        </span>
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
          molas da mais conceituada fabricante de componentes, a Leggett &
          Platt.
        </span>
        <strong className={styles.FaqAccordionAnswerTitle}>
          Benefícios Zissou
        </strong>
        <span className={styles.FaqAccordionAnswerText}>
          100 dias de teste, com possibilidade de devolução sem custo e sem
          letras miúdas, 10 anos de garantia e frete grátis.
        </span>
      </AccordionDetails>
    </Accordion>
  );
}
