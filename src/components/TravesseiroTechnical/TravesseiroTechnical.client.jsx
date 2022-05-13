import {useState, useCallback} from 'react';
import {Image} from '@shopify/hydrogen';
import {Accordion, AccordionDetails, AccordionSummary} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import useMobile from '../../hooks/useMobile';

import TravesseiroTechnicalBackground from '../../assets/travesseiro-technical-background.png';

import TravesseiroImage from '../../assets/travesseiro-medidas-1.png';
import CapaImage from '../../assets/travesseiro-medidas-2.png';
import CapaLavavelImage from '../../assets/travesseiro-medidas-3.png';
import CamadasPlushImage from '../../assets/travesseiro-medidas-4.png';
import CamadasNasNuvensImage from '../../assets/travesseiro-medidas-5.png';
import ComposicaoEnchimento from '../../assets/travesseiro-composicao-enchimento.png';
import ComposicaoCapa from '../../assets/travesseiro-composicao-capa.png';

import * as styles from './TravesseiroTechnical.module.scss';

function TravesseiroTechnical() {
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
                src={TravesseiroTechnicalBackground}
                width={324}
                height={353}
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
                <div className={styles.flexItem}>
                  <div className={styles.flexItemImage}>
                    <Image
                      src={TravesseiroImage}
                      width={286}
                      height={97}
                      loading={'lazy'}
                    />
                  </div>
                  <div className={styles.flexItemInfo}>
                    <h4>O travesseiro</h4>
                    <span>
                      50cm (C) x 70cm (L) x Altura ajustável de 10cm até 21cm
                    </span>
                  </div>
                </div>
                <div className={styles.flexItem}>
                  <div className={styles.flexItemImage}>
                    <Image src={CapaImage} width={296} height={199} />
                  </div>
                  <div className={styles.flexItemInfo}>
                    <h4>A capa</h4>
                    <span>50cm (C) x 70cm (L) x Altura ajustável</span>
                  </div>
                </div>
                <div className={styles.flexItem}>
                  <div className={styles.flexItemImage}>
                    <Image src={CapaLavavelImage} width={296} height={118} />
                  </div>
                  <div className={styles.flexItemInfo}>
                    <h4>A capa lavável</h4>
                    <span>50cm (C) x 70cm (L) x Altura ajustável</span>
                  </div>
                </div>
                <div className={styles.flexItem}>
                  <div className={styles.flexItemImage}>
                    <Image
                      src={CamadasPlushImage}
                      width={296}
                      height={269}
                      loading={'lazy'}
                    />
                  </div>
                  <div className={styles.flexItemInfo}>
                    <h4>Camadas Plush</h4>
                    <span>40cm (C) x 60cm (L) X 5,5cm (A) cada camada</span>
                  </div>
                </div>
                <div className={styles.flexItem}>
                  <div className={styles.flexItemImage}>
                    <Image
                      src={CamadasNasNuvensImage}
                      width={267}
                      height={131}
                      loading={'lazy'}
                    />
                  </div>
                  <div className={styles.flexItemInfo}>
                    <h4>Camadas Plush</h4>
                    <span>40cm (C) x 60cm (L) X 3cm (A)</span>
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
                <div className={styles.flexItem}>
                  <div className={styles.flexItemImage}>
                    <Image
                      src={ComposicaoCapa}
                      width={312}
                      height={216}
                      loading={'lazy'}
                    />
                  </div>
                  <div className={styles.flexItemInfo}>
                    <h4>A capa</h4>
                    <span>
                      <strong>Tecido da parte externa:</strong>
                      <br />
                      100% algodão liso acetinado 300 fios
                      <br />
                      <strong>Tecido da parte interna:</strong>
                      <br />
                      Microfibra 100% poliéster <br />
                      Zíper invisível YKK
                    </span>
                  </div>
                </div>
                <div className={styles.flexItem}>
                  <div className={styles.flexItemImage}>
                    <Image
                      src={ComposicaoEnchimento}
                      width={306}
                      height={212}
                      loading={'lazy'}
                    />
                  </div>
                  <div className={styles.flexItemInfo}>
                    <h4>Enchimentos removíveis</h4>
                    <span>
                      100% Microfibra de poliéster siliconizada ultra fina
                    </span>
                  </div>
                </div>
                <div className={styles.flexItem}>
                  <div className={styles.flexItemImage}>
                    <Image
                      src={CamadasPlushImage}
                      width={303}
                      height={275}
                      loading={'lazy'}
                    />
                  </div>
                  <div className={styles.flexItemInfo}>
                    <h4>Camadas plush</h4>
                    <span>
                      <strong>Tecidos da fronha:</strong>
                      <br />
                      Microfibra 100% poliéster <br />
                      <strong>Enchimento:</strong>
                      <br />
                      100% Espuma visco elástica de poliuretano
                      <br />
                      densidade 50kg/m³
                    </span>
                  </div>
                </div>
                <div className={styles.flexItem}>
                  <div className={styles.flexItemImage}>
                    <Image
                      src={CamadasNasNuvensImage}
                      width={267}
                      height={131}
                      loading={'lazy'}
                    />
                  </div>
                  <div className={styles.flexItemInfo}>
                    <h4>Camadas nas nuvens</h4>
                    <span>
                      <strong>Tecidos da fronha:</strong>
                      <br />
                      Microfibra 100% poliéster <br />
                      <strong>Enchimento:</strong>
                      <br />
                      100% Espuma visco elástica de poliuretano
                      <br />
                      densidade 50kg/m³
                    </span>
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
                <p>Oferecemos 1 ano de garantia no Travesseiro Zissou</p>
              </AccordionDetails>
            </Accordion>
          </div>
        </div>

        {!isMobile && (
          <div className={styles.backgroundImageWrapper}>
            <Image
              src={TravesseiroTechnicalBackground}
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

export default TravesseiroTechnical;
