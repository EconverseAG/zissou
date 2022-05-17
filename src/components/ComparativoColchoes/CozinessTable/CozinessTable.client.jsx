import Table from '../Table';
import TableCheck from '../TableCheck';
import TableRow from '../TableRow';

function CozinessTable({...rest}) {
  return (
    <Table heading="Camada de aconchego" {...rest}>
      <TableRow heading="Adaptabilidade à curvatura do corpo">
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
      <TableRow heading="Absorção de ondas de movimento">
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
      <TableRow heading="Alívio de pontos de pressão">
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
      <TableRow heading="Gel de cooling">
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
      <TableRow heading="Descritivo de materiais">
        <td>
          <div>
            <h3>Visco Cool</h3>
            <br />
            <p>
              • Absorve e redistribui o peso
              <br /> • Alivia pontos de pressão
              <br /> • Proporciona transferência mínima de movimento
            </p>
          </div>
        </td>
        <td>
          <div>
            <h3>Visco Cool</h3>
            <br />
            <p>
              • Absorve e redistribui o peso
              <br /> • Alivia pontos de pressão
              <br /> • Proporciona transferência mínima de movimento
            </p>
          </div>
        </td>
        <td>
          <div>
            <h3>Visco Cool</h3>
            <br />
            <p>
              • Absorve e redistribui o peso
              <br /> • Alivia pontos de pressão
              <br /> • Proporciona transferência mínima de movimento
            </p>
          </div>
        </td>
      </TableRow>
    </Table>
  );
}

export default CozinessTable;
