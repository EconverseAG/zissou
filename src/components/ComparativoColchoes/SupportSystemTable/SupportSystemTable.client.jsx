import Table from '../Table';
import TableRow from '../TableRow';
import useComparative from '../../../hooks/useComparative';

function SupportSystemTable({...rest}) {
  const {products} = useComparative();

  return (
    <Table heading="Sistema de suporte" {...rest}>
      <TableRow heading="Principal matéria prima para suporte">
        {products.map(({productIndex, supportSystem}) => (
          <td key={productIndex}>{supportSystem.mainMaterial}</td>
        ))}
      </TableRow>
      <TableRow heading="Camada de transição">
        {products.map(({productIndex, supportSystem}) => (
          <td key={productIndex}>{supportSystem.transitionLayer}</td>
        ))}
      </TableRow>
      <TableRow heading="Zoneamento ergonômico de molas">
        {products.map(({productIndex, supportSystem}) => (
          <td key={productIndex}>{supportSystem.ergonomicZoning}</td>
        ))}
      </TableRow>
      <TableRow heading="Sensação deo suporte">
        {products.map(({productIndex, supportSystem}) => (
          <td key={productIndex}>{supportSystem.supportSensation}</td>
        ))}
      </TableRow>
      <TableRow heading="Circulação interna de ar">
        {products.map(({productIndex, supportSystem}) => (
          <td key={productIndex}>{supportSystem.internalAirflow}</td>
        ))}
      </TableRow>
      <TableRow heading="Peso suportado (por pessoa)">
        {products.map(({productIndex, supportSystem}) => (
          <td key={productIndex}>{supportSystem.supportedWeight}</td>
        ))}
      </TableRow>
      <TableRow heading="Descritivo de materiais">
        {products.map(({productIndex, supportSystem}) => (
          <td key={productIndex}>{supportSystem.materialDetails}</td>
        ))}
      </TableRow>
    </Table>
  );
}

export default SupportSystemTable;
