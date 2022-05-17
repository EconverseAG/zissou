import {Image} from '@shopify/hydrogen';

import Table from '../Table';
import TableCheck from '../TableCheck';
import TableRow from '../TableRow';

import IconUmidade from '../../../assets/icon-umidade.png';

function SupportSystemTable({...rest}) {
  return (
    <Table heading="Sistema de suporte" {...rest}>
      <TableRow heading="Principal matéria prima para suporte">
        <td>16cm de poliuretano de alta densidade e durabilidade</td>
        <td>
          15cm molas Leggett & Platt ensacadas individualmente, com reforço na
          sustentação das bordas
        </td>
        <td>
          15cm de molas Legget & Platt ensacadas individualmente, com reforço na
          sustentação das bordas e zoneamento ergonômico
        </td>
      </TableRow>
      <TableRow heading="Camada de transição">
        <td>
          <TableCheck />
        </td>
        <td>
          <TableCheck checked />
        </td>
        <td>
          <TableCheck checked colorBlue />
        </td>
      </TableRow>
      <TableRow heading="Zoneamento ergonômico de molas">
        <td>
          <TableCheck />
        </td>
        <td>
          <TableCheck />
        </td>
        <td>
          <TableCheck checked colorBlue />
        </td>
      </TableRow>
      <TableRow heading="Sensação deo suporte">
        <td>estável e uniforme</td>
        <td>bounce com adaptação ao corpo</td>
        <td>bounce com ergonomia extra e adaptação ao corpo</td>
      </TableRow>
      <TableRow heading="Circulação interna de ar">
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
      </TableRow>
      <TableRow heading="Peso suportado (por pessoa)">
        <td>150kg</td>
        <td>170kg</td>
        <td>170kg</td>
      </TableRow>
      <TableRow heading="Descritivo de materiais">
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
      </TableRow>
    </Table>
  );
}

export default SupportSystemTable;
