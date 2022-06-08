import {Image} from '@shopify/hydrogen';

import Table from '../Table';
import TableCheck from '../TableCheck';
import TableRow from '../TableRow';
import useMobile from '../../../hooks/useMobile';

import IconDispersaoUmidade from '../../../assets/icon-dispersao-umidade.svg';
import IconAir from '../../../assets/icon-umidade.png';
import Certifications from '../../../assets/colchao-certificacoes.png';

import * as styles from './ComfortLayerTable.module.scss';

import BounceLeve from '../../../assets/bounce-leve.svg';
import BounceModerado from '../../../assets/bounce-moderado.svg';
import BounceExtra from '../../../assets/bounce-extra.svg';

function ComfortLayerTable({...rest}) {
  const {isMobile} = useMobile();

  return (
    <Table heading="Camada de conforto" {...rest}>
      <TableRow heading="Resiliência e suporte progressivo">
        <td>
          <TableCheck checked colorSpark />
        </td>
        <td>
          <TableCheck checked colorSpark />
        </td>
        <td>
          <TableCheck checked />
        </td>
        <td>
          <TableCheck checked />
        </td>
        <td>
          <TableCheck checked colorBlue />
        </td>
      </TableRow>
      <TableRow heading="Propriedades antimicrobianas e resistência a ácaros">
        <td>
          <TableCheck checked colorSpark />
        </td>
        <td>
          <TableCheck checked colorSpark />
        </td>
        <td>
          <TableCheck checked />
        </td>
        <td>
          <TableCheck checked />
        </td>
        <td>
          <TableCheck checked colorBlue />
        </td>
      </TableRow>
      <TableRow heading="Dispersão de umidade">
        <td style={{gap: '5px'}}>
          <Image
            src={IconDispersaoUmidade}
            width={isMobile ? 36 : 62}
            height={isMobile ? 36 : 62}
          />
        </td>
        <td style={{gap: '5px'}}>
          <Image
            src={IconDispersaoUmidade}
            width={isMobile ? 36 : 62}
            height={isMobile ? 36 : 62}
          />
        </td>
        <td style={{gap: '5px'}}>
          <Image
            src={IconDispersaoUmidade}
            width={isMobile ? 36 : 62}
            height={isMobile ? 36 : 62}
          />
          <Image
            src={IconDispersaoUmidade}
            width={isMobile ? 36 : 62}
            height={isMobile ? 36 : 62}
          />
        </td>
        <td style={{gap: '5px'}}>
          <Image
            src={IconDispersaoUmidade}
            width={isMobile ? 36 : 62}
            height={isMobile ? 36 : 62}
          />
          <Image
            src={IconDispersaoUmidade}
            width={isMobile ? 36 : 62}
            height={isMobile ? 36 : 62}
          />
        </td>
        <td style={{gap: '5px'}}>
          <Image
            src={IconDispersaoUmidade}
            width={isMobile ? 36 : 62}
            height={isMobile ? 36 : 62}
          />
          <Image
            src={IconDispersaoUmidade}
            width={isMobile ? 36 : 62}
            height={isMobile ? 36 : 62}
          />
          <Image
            src={IconDispersaoUmidade}
            width={isMobile ? 36 : 62}
            height={isMobile ? 36 : 62}
          />
        </td>
      </TableRow>
      <TableRow heading="Distribuição equilibrada de peso do corpo">
        <td>
          <TableCheck checked colorSpark />
        </td>
        <td>
          <TableCheck checked colorSpark />
        </td>
        <td>
          <TableCheck checked />
        </td>
        <td>
          <TableCheck checked />
        </td>
        <td>
          <TableCheck checked colorBlue />
        </td>
      </TableRow>
      <TableRow heading="Bounce (Facilita movimentação na cama)">
        <td className={styles.bounceCell}>
          <Image
            src={BounceLeve}
            width={isMobile ? 83 : 145}
            height={isMobile ? 41 : 56}
          />
          <p>Leve</p>
        </td>
        <td className={styles.bounceCell}>
          <Image
            src={BounceLeve}
            width={isMobile ? 84 : 145}
            height={isMobile ? 33 : 56}
          />
          <p>Leve</p>
        </td>
        <td className={styles.bounceCell}>
          <Image
            src={BounceModerado}
            width={isMobile ? 84 : 145}
            height={isMobile ? 33 : 71}
          />
          <p>Moderado</p>
        </td>
        <td className={styles.bounceCell}>
          <Image
            src={BounceModerado}
            width={isMobile ? 83 : 145}
            height={isMobile ? 41 : 71}
          />
          <p>Moderado</p>
        </td>
        <td className={styles.bounceCell}>
          <Image
            src={BounceExtra}
            width={isMobile ? 83 : 145}
            height={isMobile ? 57 : 99}
          />
          <p>Extra</p>
        </td>
      </TableRow>
      <TableRow heading="Circulação de ar na camada de conforto">
        <td style={{gap: '5px'}}>
          <Image
            src={IconAir}
            width={isMobile ? 36 : 63}
            height={isMobile ? 36 : 63}
          />
        </td>
        <td style={{gap: '5px'}}>
          <Image
            src={IconAir}
            width={isMobile ? 36 : 63}
            height={isMobile ? 36 : 63}
          />
        </td>
        <td style={{gap: '5px'}}>
          <Image
            src={IconAir}
            width={isMobile ? 36 : 63}
            height={isMobile ? 36 : 63}
          />
          <Image
            src={IconAir}
            width={isMobile ? 36 : 63}
            height={isMobile ? 36 : 63}
          />
        </td>
        <td style={{gap: '5px'}}>
          <Image
            src={IconAir}
            width={isMobile ? 36 : 63}
            height={isMobile ? 36 : 63}
          />
          <Image
            src={IconAir}
            width={isMobile ? 36 : 63}
            height={isMobile ? 36 : 63}
          />
        </td>
        <td style={{gap: '5px'}}>
          <Image
            src={IconAir}
            width={isMobile ? 36 : 63}
            height={isMobile ? 36 : 63}
          />
          <Image
            src={IconAir}
            width={isMobile ? 36 : 63}
            height={isMobile ? 36 : 63}
          />
          <Image
            src={IconAir}
            width={isMobile ? 36 : 63}
            height={isMobile ? 36 : 63}
          />
        </td>
      </TableRow>
      <TableRow heading="Certificações">
        <td>
          <Image src={Certifications} width={314} height={89} />
        </td>
        <td>
          <Image src={Certifications} width={314} height={89} />
        </td>
        <td>
          <Image src={Certifications} width={314} height={89} />
        </td>
        <td>
          <Image src={Certifications} width={314} height={89} />
        </td>
        <td>
          <Image src={Certifications} width={314} height={89} />
        </td>
      </TableRow>
      <TableRow heading="Descritivo de materiais">
        <td>
          <div>
            <h3>Latex Infused</h3>
            <br />
            <p>
              • Espuma de alta resiliência com látex na composição, de origem
              belga
              <br /> • Material exclusivo dos colchões Zissou
              <br /> • Excelente durabilidade
              <br /> • Microclima saudável na cama
              <br /> • Ótimas características ergonômicas
            </p>
          </div>
        </td>
        <td>
          <div>
            <h3>Latex Infused</h3>
            <br />
            <p>
              • Espuma de alta resiliência com látex na composição, de origem
              belga
              <br /> • Material exclusivo dos colchões Zissou
              <br /> • Excelente durabilidade
              <br /> • Microclima saudável na cama
              <br /> • Ótimas características ergonômicas
            </p>
          </div>
        </td>
        <td>
          <div>
            <h3>Látex Classic</h3>
            <br />
            <p>
              • Látex nobre e sofisticado
              <br /> • Resiliência e suporte progressivo
              <br /> • Excelente durabilidade
              <br /> • Pequenas perfurações potencializam a circulação de ar
              <br /> • Propriedades antimicrobianas e resistência a ácaros
            </p>
          </div>
        </td>
        <td>
          <div>
            <h3>Látex Classic</h3>
            <br />
            <p>
              • Látex nobre e sofisticado
              <br /> • Resiliência e suporte progressivo
              <br /> • Excelente durabilidade
              <br /> • Pequenas perfurações potencializam a circulação de ar
              <br /> • Propriedades antimicrobianas e resistência a ácaros
            </p>
          </div>
        </td>
        <td>
          <div>
            <h3>Látex Pulse</h3>
            <br />
            <p>
              • Verdadeiramente único como camada de conforto
              <br /> • Estrutura celular homogênea, que promove excelente
              capacidade de conservação de suas propriedades, aumentando a
              durabilidade
              <br /> • Excelentes propriedades de ventilação, para um microclima
              perfeitamente equilibrado
              <br /> • Controle de umidade otimizado
              <br /> • Maior elasticidade facilitando a movimentação an cama
              durante o sono
            </p>
          </div>
        </td>
      </TableRow>
    </Table>
  );
}

export default ComfortLayerTable;
