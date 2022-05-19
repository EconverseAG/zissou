import {useCallback, useState} from 'react';
import {Image} from '@shopify/hydrogen';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import * as styles from './TocaTechnical.module.scss';

import BackgroundImage from '../../assets/toca-background.webp';

import useMobile from '../../hooks/useMobile';

import TocaTamanhos from '../../assets/toca-tamanhos.webp';
import Protecao from '../../assets/protecao.webp';
import Conforto from '../../assets/conforto.webp';
import Abraco from '../../assets/abraco.webp';

export default function TocaTechnical() {
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
              <Image
                src={TocaTamanhos}
                width={isMobile ? 225 : 476}
                height={isMobile ? 110 : 232}
              />
              <div>
                <h4>TOCA ZISSOU TAMANHO M</h4>
                <p>(C65 x L62 x A18)</p>
                <span>Recomendado para cães de até 20kg</span>
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
          <AccordionDetails className={styles.accordionDetailsFlexItems}>
            <div className={styles.FlexItem}>
              <div className={styles.FlexItemImage}>
                <Image
                  src={Protecao}
                  width={isMobile ? 204 : 398}
                  height={isMobile ? 100 : 194}
                />
              </div>
              <div className={styles.FlexItemTexts}>
                <strong>DUVET DUPLA FACE</strong>
                <span>Tecido da parte externa:</span>
                <p>suede matelassê</p>
                <span>Tecido da parte interna:</span>
                <p>100% algodão</p>
              </div>
            </div>
            <div className={styles.FlexItem}>
              <div className={styles.FlexItemImage}>
                <Image
                  src={Conforto}
                  width={isMobile ? 219 : 398}
                  height={isMobile ? 112 : 194}
                />
              </div>
              <div className={styles.FlexItemTexts}>
                <strong>COLCHÃO</strong>
                <span>Tecido da parte externa:</span>
                <p>100% algodão</p>
                <span>Parte interna:</span>
                <p>
                  Espuma de poliuretano com manta de fibra e proteção
                  impermeável
                </p>
              </div>
            </div>
            <div className={styles.FlexItem}>
              <div className={styles.FlexItemImage}>
                <Image
                  src={Abraco}
                  width={isMobile ? 204 : 398}
                  height={isMobile ? 100 : 194}
                />
              </div>
              <div className={styles.FlexItemTexts}>
                <strong>CAMA</strong>
                <span>Tecido da parte externa:</span>
                <p>SUEDE matelassê</p>
                <span>Parte interna:</span>
                <p>Espuma de poliuretano com proteção impermeável</p>
              </div>
            </div>
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
            <h4>15 dias de teste (equivalente a 100 dias caninos)</h4>
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
            <br />
          </AccordionDetails>
        </Accordion>
      </div>
      {!isMobile && (
        <div className={styles.Background}>
          <Image src={BackgroundImage} width="617" height="448" />
        </div>
      )}
    </div>
  );
}
