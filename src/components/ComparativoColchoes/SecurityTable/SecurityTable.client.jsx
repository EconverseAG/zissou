import useComparative from '../../../hooks/useComparative';
import Table from '../Table';
import TableRow from '../TableRow';

function SecurityTable({...rest}) {
  const {products} = useComparative();

  return (
    <Table heading="Segurança e manuseio" {...rest}>
      <TableRow heading="Alças laterais para manuseio">
        {products.map(({productIndex, security}) => (
          <td key={productIndex}>{security.lateralHandling}</td>
        ))}
      </TableRow>
      <TableRow heading="Tecido antiderrapante">
        {products.map(({productIndex, security}) => (
          <td key={productIndex}>{security.antidriftingTissue}</td>
        ))}
      </TableRow>
      <TableRow heading="descritivo dos materiais">
        {products.map(({productIndex, security}) => (
          <td key={productIndex}>{security.materialDetails}</td>
        ))}
      </TableRow>
    </Table>
  );
}

export default SecurityTable;
