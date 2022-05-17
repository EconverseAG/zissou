import Table from '../Table';
import TableCheck from '../TableCheck';

function SecurityTable() {
  return (
    <Table heading="Segurança e manuseio">
      <tr>
        <th>
          Alças laterais
          <br /> para manuseio
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
          Tecido
          <br /> antiderrapante
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
          Descritivo
          <br /> dos materiais
        </th>
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
      </tr>
    </Table>
  );
}

export default SecurityTable;
