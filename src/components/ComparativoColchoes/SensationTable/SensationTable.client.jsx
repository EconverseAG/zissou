import Table from '../Table';
import TableRow from '../TableRow';

import useComparative from '../../../hooks/useComparative';

function SensationTable({...rest}) {
  const {products} = useComparative();

  return (
    <Table heading="Toque e sensação térmica" {...rest}>
      <TableRow heading="Toque">
        {products.map(({productIndex, touchAndSensation}) => (
          <td key={productIndex}>{touchAndSensation.touch}</td>
        ))}
      </TableRow>
      <TableRow heading="Textura do tecido">
        {products.map(({productIndex, touchAndSensation}) => (
          <td key={productIndex}>{touchAndSensation.tissueTexture}</td>
        ))}
      </TableRow>
      <TableRow heading="Frescor">
        {products.map(({productIndex, touchAndSensation}) => (
          <td key={productIndex}>{touchAndSensation.freshness}</td>
        ))}
      </TableRow>
      <TableRow heading="Características do tecido">
        {products.map(({productIndex, touchAndSensation}) => (
          <td key={productIndex}>{touchAndSensation.tissueCharacteristics}</td>
        ))}
      </TableRow>
    </Table>
  );
}

export default SensationTable;
