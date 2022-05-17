import {Image} from '@shopify/hydrogen';

import Table from '../Table';
import TableCheck from '../TableCheck';

import IconDispersaoUmidade from '../../../assets/icon-dispersao-umidade.svg';
import IconAir from '../../../assets/icon-umidade.png';
import Certifications from '../../../assets/colchao-certificacoes.png';

import * as styles from './ComfortLayerTable.module.scss';

import BounceModerado from '../../../assets/bounce-moderado.svg';
import BounceExtra from '../../../assets/bounce-extra.svg';

function ComfortLayerTable({...rest}) {
  return (
    <Table heading="Camada de conforto" {...rest}>
      <tr>
        <th>
          Resiliência e<br /> suporte progressivo
        </th>
        <td>
          <TableCheck checked />
        </td>
        <td>
          <TableCheck checked />
        </td>
        <td>
          <TableCheck checked colorBlue />
        </td>
      </tr>
      <tr>
        <th>
          Propriedades
          <br /> intimicrobianas e<br /> resistência a ácaros
        </th>
        <td>
          <TableCheck checked />
        </td>
        <td>
          <TableCheck checked />
        </td>
        <td>
          <TableCheck checked colorBlue />
        </td>
      </tr>
      <tr>
        <th>
          Dispersão
          <br /> de umidade
        </th>
        <td style={{gap: '9px'}}>
          <Image src={IconDispersaoUmidade} width={62} height={62} />
          <Image src={IconDispersaoUmidade} width={62} height={62} />
        </td>
        <td style={{gap: '9px'}}>
          <Image src={IconDispersaoUmidade} width={62} height={62} />
          <Image src={IconDispersaoUmidade} width={62} height={62} />
        </td>
        <td style={{gap: '9px'}}>
          <Image src={IconDispersaoUmidade} width={62} height={62} />
          <Image src={IconDispersaoUmidade} width={62} height={62} />
          <Image src={IconDispersaoUmidade} width={62} height={62} />
        </td>
      </tr>
      <tr>
        <th>
          Distribuição
          <br /> equilibrada de
          <br /> peso do corpo
        </th>
        <td>
          <TableCheck checked />
        </td>
        <td>
          <TableCheck checked />
        </td>
        <td>
          <TableCheck checked colorBlue />
        </td>
      </tr>
      <tr>
        <th>
          Bounce <br /> (Facilita movimentação
          <br /> na cama)
        </th>
        <td className={styles.bounceCell}>
          <Image src={BounceModerado} width={145} height={71} />
          <p>Moderado</p>
        </td>
        <td className={styles.bounceCell}>
          <Image src={BounceModerado} width={145} height={71} />
          <p>Moderado</p>
        </td>
        <td className={styles.bounceCell}>
          <Image src={BounceExtra} width={145} height={99} />
          <p>Extra</p>
        </td>
      </tr>
      <tr>
        <th>
          Circulação de ar na
          <br /> camada de conforto
        </th>
        <td style={{gap: '8px'}}>
          <Image src={IconAir} width={63} height={63} />
          <Image src={IconAir} width={63} height={63} />
        </td>
        <td style={{gap: '8px'}}>
          <Image src={IconAir} width={63} height={63} />
          <Image src={IconAir} width={63} height={63} />
        </td>
        <td style={{gap: '8px'}}>
          <Image src={IconAir} width={63} height={63} />
          <Image src={IconAir} width={63} height={63} />
          <Image src={IconAir} width={63} height={63} />
        </td>
      </tr>
      <tr>
        <th>Certificações</th>
        <td>
          <Image src={Certifications} width={314} height={89} />
        </td>
        <td>
          <Image src={Certifications} width={314} height={89} />
        </td>
        <td>
          <Image src={Certifications} width={314} height={89} />
        </td>
      </tr>
      <tr>
        <th>
          Descritivo
          <br /> de materiais
        </th>
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
      </tr>
    </Table>
  );
}

export default ComfortLayerTable;
