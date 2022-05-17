import {Image} from '@shopify/hydrogen';

import Table from '../Table';
import TableCheck from '../TableCheck';

import IconUmidade from '../../../assets/icon-umidade.png';

function SupportSystemTable({...rest}) {
  return (
    <Table heading="Sistema de suporte" {...rest}>
      <tr>
        <th>
          Principal matéria
          <br /> prima de suporte
        </th>
        <td>16cm de poliuretano de alta densidade e durabilidade</td>
        <td>
          15cm molas Leggett & Platt ensacadas individualmente, com reforço na
          sustentação das bordas
        </td>
        <td>
          15cm de molas Legget & Platt ensacadas individualmente, com reforço na
          sustentação das bordas e zoneamento ergonômico
        </td>
      </tr>
      <tr>
        <th>
          Camada
          <br /> de transição
        </th>
        <td>
          <TableCheck />
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
          Zoneamento ergonômico
          <br /> de molas
        </th>
        <td>
          <TableCheck />
        </td>
        <td>
          <TableCheck />
        </td>
        <td>
          <TableCheck checked colorBlue />
        </td>
      </tr>
      <tr>
        <th>
          Sensação
          <br /> do suporte
        </th>
        <td>estável e uniforme</td>
        <td>bounce com adaptação ao corpo</td>
        <td>bounce com ergonomia extra e adaptação ao corpo</td>
      </tr>
      <tr>
        <th>
          Circulação interna
          <br /> de ar
        </th>
        <td>
          <Image src={IconUmidade} width={63} height={63} />
        </td>
        <td style={{gap: '7px'}}>
          <Image src={IconUmidade} width={63} height={63} />
          <Image src={IconUmidade} width={63} height={63} />
          <Image src={IconUmidade} width={63} height={63} />
        </td>
        <td style={{gap: '7px'}}>
          <Image src={IconUmidade} width={63} height={63} />
          <Image src={IconUmidade} width={63} height={63} />
          <Image src={IconUmidade} width={63} height={63} />
        </td>
      </tr>
      <tr>
        <th>
          Pesso suportado
          <br /> (por pessoa)
        </th>
        <td>150kg</td>
        <td>170kg</td>
        <td>170kg</td>
      </tr>
      <tr>
        <th>
          Descritivo
          <br /> de materiais
        </th>
        <td>
          <div>
            <h3>Spring System Plus</h3>
            <br />
            <p>
              • Base de espuma de poliuretano de alta densidade e durabilidade
              <br />
              • Suporte uniforme ao corpo e às camadas de conforto
              <br />• Reforço do isolamento de movimentos
            </p>
          </div>
        </td>
        <td>
          <div>
            <h3>Spring System Plus</h3>
            <br />
            <p>
              • Sistema de suporte Leggett & Platt
              <br />
              • Combina espuma e molas com 15cm de altura
              <br />• Camada de transição de espuma de poliuretano de alta
              densidade oferece suporte uniforme ao corpo
              <br />• Molas ensacadas individualmente proporcionam maior
              maleabilidade ao colchão e adaptação às curvas do corpo
            </p>
          </div>
        </td>
        <td>
          <div>
            <h3>Zoned Spring System</h3>
            <br />
            <p>
              • Sistema de suporte Leggett Inside com espuma e molas com 15cm de
              altura
              <br />
              • Molas com zoneamento ergonômico, que proporcionam melhor
              alinhamento da coluna
              <br />• Molas ensacadas individualmente proporcionam maior
              maleabilidade ao colchão
              <br />• Camada de transição de espuma de poliuretano de alta
              densidade uniformiza a distribuição de peso
            </p>
          </div>
        </td>
      </tr>
    </Table>
  );
}

export default SupportSystemTable;
