import Table from '../Table';
import TableCheck from '../TableCheck';
import TableRow from '../TableRow';

function BenefitsTable({...rest}) {
  return (
    <Table heading="Benefícios" {...rest}>
      <TableRow heading="100 dias">
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
      <TableRow heading="Garantia de 10 anos">
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
      <TableRow heading="Frete grátis">
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
      <TableRow heading="Entrega agendada com unboxing">
        <td>Opcional</td>
        <td>Opcional</td>
        <td>Gratuita</td>
      </TableRow>
    </Table>
  );
}

export default BenefitsTable;
