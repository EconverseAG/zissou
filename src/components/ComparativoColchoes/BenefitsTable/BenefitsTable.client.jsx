import Table from '../Table';
import TableCheck from '../TableCheck';

function BenefitsTable() {
  return (
    <Table heading="Benefícios">
      <tr>
        <th>100 dias</th>
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
          Garantia
          <br /> de 10 anos
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
        <th>Frete grátis</th>
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
          Entreag agendada
          <br /> com unboxing
        </th>
        <td>Opcional</td>
        <td>Opcional</td>
        <td>Gratuita</td>
      </tr>
    </Table>
  );
}

export default BenefitsTable;
