import {useCallback, useState} from 'react';
import {Image} from '@shopify/hydrogen';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import parseUrl from '../../helpers/parseUrl';

import * as styles from './LencolTechnical.module.scss';

const BackgroundImage = parseUrl('lencol-technical-background.png');

import useMobile from '../../hooks/useMobile';

function LencolTechnical() {
  const [expanded, setExpanded] = useState(false);

  const {isMobile} = useMobile();

  const handleChange = useCallback(
    (panel) => (_, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    },
    [],
  );

  return (
    <div className={`flex ${styles.wrapper} ${isMobile ? styles.mobile : ''}`}>
      {!isMobile && <Image src={BackgroundImage} width="500" height="323" />}
      <div className={`flex flex-col ${styles.content}`}>
        <h2>Informações técnicas</h2>
        <Accordion
          className={styles.accordion}
          expanded={expanded === 'panel1'}
          onChange={handleChange('panel1')}
        >
          <AccordionSummary
            aria-controls="panel1bh-content"
            id="panel1bh-header"
            className={styles.accordionSummary}
            expandIcon={
              expanded !== 'panel1' ? (
                <AddIcon
                  style={{color: '245066', width: '21px', height: '21px'}}
                />
              ) : (
                <RemoveIcon
                  style={{color: '245066', width: '21px', height: '21px'}}
                />
              )
            }
          >
            <h3>Tamanhos</h3>
          </AccordionSummary>
          <AccordionDetails
            className={styles.accordionDetails}
            data-info="tamanhos"
          >
            <div className={styles.accordionDetailsGrid}>
              <div>
                <h4>Solteiro</h4>
                <p>(C 188 x L 88 cm)</p>
              </div>
              <div>
                <h4>Solteiro especial</h4>
                <p>(C 203 x L 96 cm)</p>
              </div>
              <div>
                <h4>Casal</h4>
                <p>(C 188 x L 138 cm)</p>
              </div>
              <div>
                <h4>Queen</h4>
                <p>(C 198 x L 158 cm)</p>
              </div>
              <div>
                <h4>King BR</h4>
                <p>(C 198 x L 178 cm)</p>
              </div>
              <div>
                <h4>King</h4>
                <p>(C 203 x L 193 cm)</p>
              </div>
            </div>
          </AccordionDetails>
        </Accordion>
        <Accordion
          className={styles.accordion}
          expanded={expanded === 'panel2'}
          onChange={handleChange('panel2')}
        >
          <AccordionSummary
            aria-controls="panel2bh-content"
            id="panel2bh-header"
            className={styles.accordionSummary}
            expandIcon={
              expanded !== 'panel2' ? (
                <AddIcon
                  style={{color: '245066', width: '21px', height: '21px'}}
                />
              ) : (
                <RemoveIcon
                  style={{color: '245066', width: '21px', height: '21px'}}
                />
              )
            }
          >
            <h3>Composição</h3>
          </AccordionSummary>
          <AccordionDetails className={styles.accordionDetails}>
            <p>
              O tecido de bambu é feito da polpa de bambu e tem toque muito
              macio (um dos mais macios do mundo) semelhante à seda. É mais
              absorvente e mais suave do que o algodão. É reconhecido por sua
              suavidade natural, durabilidade e capacidade de respiração. O
              tecido é perfeito para pessoas com alergias cutâneas, e tem
              propriedades naturais antibacterianas e desodorizantes. Além
              disso, têm habilidades de absorção natural que absorvem melhor do
              que outros tecidos
            </p>
          </AccordionDetails>
        </Accordion>
        <Accordion
          className={styles.accordion}
          expanded={expanded === 'panel3'}
          onChange={handleChange('panel3')}
        >
          <AccordionSummary
            aria-controls="panel3bh-content"
            id="panel3bh-header"
            className={styles.accordionSummary}
            expandIcon={
              expanded !== 'panel3' ? (
                <AddIcon
                  style={{color: '245066', width: '21px', height: '21px'}}
                />
              ) : (
                <RemoveIcon
                  style={{color: '245066', width: '21px', height: '21px'}}
                />
              )
            }
          >
            <h3>Experiência</h3>
          </AccordionSummary>
          <AccordionDetails className={styles.accordionDetails}>
            <h4>100 dias de teste</h4>
            <p>
              Caso não esteja satisfeito com o produto, basta entrar em contato
              com nosso atendimento através do Whatsapp{' '}
              <strong>11 93285-8213</strong>
            </p>
            <br />
            <h4>Frete grátis</h4>
            <p>A entrega e montagem são por nossa conta para todo o Brasil</p>
            <br />
            <h4>1 ano de garantia</h4>
            <p>Oferecemos 1 ano de garantia na Lençol Zissou</p>
            <br />
          </AccordionDetails>
        </Accordion>
      </div>
    </div>
  );
}

export default LencolTechnical;
