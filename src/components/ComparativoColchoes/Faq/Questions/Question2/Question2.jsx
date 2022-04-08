import {Image} from '@shopify/hydrogen';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import AddIcon from '@mui/icons-material/Add';

import * as styles from '../../Faq.module.scss';

import ColchaoCoral from '../../../../../assets/colchao-coral-faq.png';
import ColchaoBlue from '../../../../../assets/colchao-blue-faq.png';

export default function Question2() {
  return (
    <Accordion className={styles.FaqAccordion}>
      <AccordionSummary
        expandIcon={
          <AddIcon style={{color: 'fff', width: '41px', height: '41px'}} />
        }
        aria-controls="panel2a-content"
        id="panel2a-header"
      >
        <strong className={styles.FaqAccordionTitle}>
          Qual é o colchão ideal para mim?
        </strong>
      </AccordionSummary>
      <AccordionDetails className={styles.FaqAccordionAnswer}>
        <div>
          <Image
            src={ColchaoCoral}
            width="296"
            height="106"
            style={{marginRight: '39px'}}
          />
          <span className={styles.FaqAccordionAnswerText}>
            O <strong>CORAL</strong> é perfeito para quem busca suporte e
            conforto na medida certa, unindo conforto térmico e resiliência
          </span>
        </div>
        <div>
          <Image
            src={ColchaoBlue}
            width="296"
            height="106"
            style={{marginRight: '39px'}}
          />
          <span className={styles.FaqAccordionAnswerText}>
            Se você busca o que há de mais avançado no mundo em termos de
            tecnologia do sono, confira o <strong>Blue</strong>, sinônimo de
            aconchego e refrescância
          </span>
        </div>
      </AccordionDetails>
    </Accordion>
  );
}
