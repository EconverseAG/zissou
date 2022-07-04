import Table from '../Table';
import TableRow from '../TableRow';
import useComparative from '../../../hooks/useComparative';

function CozinessTable({...rest}) {
  const {products} = useComparative();

  return (
    <Table heading="Camada de aconchego" {...rest}>
      <TableRow heading="Adaptabilidade à curvatura do corpo">
        {products.map(({productIndex, cozinessLayer}) => (
          <td key={productIndex}>{cozinessLayer.bodyCurvatureAdaptability}</td>
        ))}
      </TableRow>
      <TableRow heading="Absorção de ondas de movimento">
        {products.map(({productIndex, cozinessLayer}) => (
          <td key={productIndex}>{cozinessLayer.moveWavesAbsortion}</td>
        ))}
      </TableRow>
      <TableRow heading="Alívio de pontos de pressão">
        {products.map(({productIndex, cozinessLayer}) => (
          <td key={productIndex}>{cozinessLayer.pressurePointsRelief}</td>
        ))}
      </TableRow>
      <TableRow heading="Gel de cooling">
        {products.map(({productIndex, cozinessLayer}) => (
          <td key={productIndex}>{cozinessLayer.coolingGel}</td>
        ))}
      </TableRow>
      <TableRow heading="Descritivo de materiais">
        {products.map(({productIndex, cozinessLayer}) => (
          <td key={productIndex}>{cozinessLayer.materialDetails}</td>
        ))}
      </TableRow>
    </Table>
  );
}

export default CozinessTable;
