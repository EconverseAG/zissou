import Table from '../Table';
import TableCheck from '../TableCheck';
import TableRow from '../TableRow';

function SecurityTable({...rest}) {
  return (
    <Table heading="Segurança e manuseio" {...rest}>
      <TableRow heading="Alças laterais para manuseio">
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
      <TableRow heading="Tecido antiderrapante">
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
      <TableRow heading="descritivo dos materiais">
        <td>
          Tecido com trama fechada para maior durabilidade e proteção contra o
          atrito
        </td>
        <td>
          Tecido com trama fechada para maior durabilidade e proteção contra o
          atrito
        </td>
        <td>
          Tecido com trama fechada para maior durabilidade e proteção contra o
          atrito
        </td>
      </TableRow>
    </Table>
  );
}

export default SecurityTable;
