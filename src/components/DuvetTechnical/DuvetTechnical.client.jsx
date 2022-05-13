import {useState, useCallback} from 'react';
import {Image} from '@shopify/hydrogen';
import {Accordion, AccordionDetails, AccordionSummary} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import useMobile from '../../hooks/useMobile';

import DuvetTechnicalBackground from '../../assets/duvet-technical-background.png';

import DuvetComposicao1 from '../../assets/duvet-composicao-1.png';
import DuvetComposicao2 from '../../assets/duvet-composicao-2.png';

import * as styles from './DuvetTechnical.module.scss';

function DuvetTechnical() {
  const [expanded, setExpanded] = useState(false);

  const {isMobile} = useMobile();

  const handleChange = useCallback(
    (panel) => (_, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    },
    [],
  );

  return (
    <div className={`${styles.wrapper} ${isMobile ? styles.mobile : ''}`}>
      <div className={styles.wrapperCenter}>
        <div className={styles.content}>
          <h2>Informações técnicas</h2>
          {isMobile && (
            <div className={styles.backgroundImageWrapper}>
              <Image
                src={DuvetTechnicalBackground}
                width={741}
                height={501}
                loading={'lazy'}
              />
            </div>
          )}
          <div className={styles.accordionWrapper}>
            <Accordion
              className={styles.accordion}
              expanded={expanded === 'panel1'}
              onChange={handleChange('panel1')}
            >
              <AccordionSummary
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
                <h3>Medidas e dimensões</h3>
              </AccordionSummary>
              <AccordionDetails className={styles.accordionDetails}>
                <p>
                  <strong>Solteiro</strong> (C 188 x L 88 cm)
                </p>
                <p>
                  <strong>Casal</strong> (C 188 x L 138 cm)
                </p>
                <p>
                  <strong>King BR</strong> (C 198 x L 178 cm)
                </p>
              </AccordionDetails>
            </Accordion>
            <Accordion
              className={styles.accordion}
              expanded={expanded === 'panel2'}
              onChange={handleChange('panel2')}
            >
              <AccordionSummary
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
              <AccordionDetails
                className={`${styles.accordionDetails} ${styles.grayBlue}`}
              >
                <Image src={DuvetComposicao1} width={500} height={245} />
                <p>
                  O tecido do Duvet Zissou é feito de polpa de bambu com um
                  toque muito macio semelhante à seda. Sua produção é feita de
                  forma artesanal com acabamento em rolotê, aplicado em aparelho
                  especial na máquina de costura. O fechamento é feito através
                  de um zíper de alta qualidade e é possível fixar o enchimento
                  através de amarrações internas evitando seu deslocamento e
                  garantindo todo o conforto para suas noites de sono.
                </p>
                <Image src={DuvetComposicao2} width={500} height={294} />
                <p>
                  Já o Enchimento, a camada interna do Duvet, potencializa a
                  experiência complementando o aconchego ideal com um tecido
                  externo em 100% algodão e seu preenchimento por uma manta de
                  fibra siliconizada.
                  <br />
                  <br />
                  Ah, no caso de optar por utilizar seu próprio enchimento,
                  adquirindo apenas o Duvet Zissou, não se esqueça de verificar
                  as medidas e as amarras do seu enchimento
                </p>
              </AccordionDetails>
            </Accordion>
            <Accordion
              className={styles.accordion}
              expanded={expanded === 'panel3'}
              onChange={handleChange('panel3')}
            >
              <AccordionSummary
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
                  Caso não esteja satisfeito com o produto, basta entrar em
                  contato com nosso atendimento através do Whatsapp{' '}
                  <strong>11 93285-8213</strong>
                </p>
                <br />
                <h4>Frete grátis</h4>
                <p>A entrega é por nossa conta para todo o Brasil</p>
                <br />
                <h4>1 ano de garantia</h4>
                <p>Oferecemos 1 ano de garantia no Duvet Zissou</p>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>

        {!isMobile && (
          <div className={styles.backgroundImageWrapper}>
            <Image
              src={DuvetTechnicalBackground}
              width={539}
              height={588}
              loading={'lazy'}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default DuvetTechnical;
