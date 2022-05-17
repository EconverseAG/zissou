import Table from '../Table';
import TableCheck from '../TableCheck';

function CozinessTable() {
  return (
    <Table heading="Camada de aconchego">
      <tr>
        <th>
          Adaptabilidade à<br /> curvatura do corpo
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
          Absorção de
          <br /> ondas de movimento
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
          Alívio de pontos
          <br /> de pressão
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
        <th>Gel de cooling</th>
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
        <th>Descritivo de materiais</th>
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
      </tr>
    </Table>
  );
}

export default CozinessTable;
