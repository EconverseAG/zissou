import useComparative from '../../../hooks/useComparative';
import Table from '../Table';
import TableRow from '../TableRow';

function BenefitsTable({...rest}) {
  const {products} = useComparative();
  return (
    <Table heading="Benefícios" {...rest}>
      <TableRow heading="100 dias">
        {products.map(({productIndex, benefits}) => (
          <td key={productIndex}>{benefits.oneHundredDays}</td>
        ))}
      </TableRow>
      <TableRow heading="Garantia de 10 anos">
        {products.map(({productIndex, benefits}) => (
          <td key={productIndex}>{benefits.tenYearsWarranty}</td>
        ))}
      </TableRow>
      <TableRow heading="Frete grátis">
        {products.map(({productIndex, benefits}) => (
          <td key={productIndex}>{benefits.freeShipping}</td>
        ))}
      </TableRow>
      <TableRow heading="Entrega agendada com unboxing">
        {products.map(({productIndex, benefits}) => (
          <td key={productIndex}>{benefits.scheduledDelivery}</td>
        ))}
      </TableRow>
    </Table>
  );
}

export default BenefitsTable;
