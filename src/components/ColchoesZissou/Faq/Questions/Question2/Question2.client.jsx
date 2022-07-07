import {useCallback, useEffect, useState} from 'react';

import useMobile from '../../../../../hooks/useMobile';
import parseUrl from '../../../../../helpers/parseUrl';

import {Image, Link} from '@shopify/hydrogen/client';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import * as styles from '../../Faq.module.scss';

const ColchaoSpark = parseUrl('colchao-spark-faq.png');
const ColchaoCoral = parseUrl('colchao-coral-faq.png');
const ColchaoBlue = parseUrl('colchao-blue-faq.png');

export default function Question2({setIsOpen}) {
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
          Qual é o colchão ideal para mim?
        </strong>
      </AccordionSummary>
      <AccordionDetails
        className={[styles.FaqAccordionAnswer, styles.FaqAccordionAnswer2].join(
          ' ',
        )}
      >
        <div className={styles.FaqAccordionAnswerContainer}>
          <Image
            src={ColchaoSpark}
            width={isMobile ? '135' : '296'}
            height={isMobile ? '48' : '106'}
            style={{marginRight: '53px'}}
          />
          <span className={styles.FaqAccordionAnswerText}>
            O{' '}
            <strong className={styles.FaqAccordionAnswerTextBolder}>
              Spark
            </strong>{' '}
            foi pensado para estimular níveis progressivos de sensação de
            bem-estar, em um colchão levemente mais firme
          </span>
        </div>
        <div className={styles.FaqAccordionAnswerContainer}>
          <Image
            src={ColchaoCoral}
            width={isMobile ? '135' : '296'}
            height={isMobile ? '48' : '106'}
            style={{marginRight: '39px'}}
          />
          <span className={styles.FaqAccordionAnswerText}>
            O{' '}
            <strong className={styles.FaqAccordionAnswerTextBolder}>
              CORAL
            </strong>{' '}
            é perfeito para quem busca suporte e conforto na medida certa,
            unindo conforto térmico e resiliência
          </span>
        </div>
        <div className={styles.FaqAccordionAnswerContainer}>
          <Image
            src={ColchaoBlue}
            width={isMobile ? '135' : '333'}
            height={isMobile ? '48' : '117'}
            style={{marginRight: '20px', marginLeft: !isMobile && '-20px'}}
          />
          <span className={styles.FaqAccordionAnswerText}>
            Se você busca o que há de mais avançado no mundo em termos de
            tecnologia do sono, confira o{' '}
            <strong className={styles.FaqAccordionAnswerTextBolder}>
              BLUE
            </strong>
            , sinônimo de aconchego e refrescância.
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
