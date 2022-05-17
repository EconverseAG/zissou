import Table from '../Table';
import TableCheck from '../TableCheck';

function SecurityTable() {
  return (
    <Table heading="Segurança e manuseio">
      <tr>
        <th>Alças laterais para manuseio</th>
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
        <th>Tecido antiderrapante</th>
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
        <th>Descritivo dos materiais</th>
        <td>
          Tecido com trama fechada para maior durabilidade e proteção contra o
          atrito
        </td>
        <td>
          Tecidoc om trama fechada para maior durabilidade e proteção contra o
          atrito
        </td>
        <td>
          Tecido com trama fechada para maior durabilidade e proteção contra o
          atrito
        </td>
      </tr>
    </Table>
  );
}

export default SecurityTable;
