import Table from '../Table';
import TableRow from '../TableRow';

import * as styles from './ComfortLayerTable.module.scss';
import useComparative from '../../../hooks/useComparative';

function ComfortLayerTable({...rest}) {
  const {products} = useComparative();

  return (
    <Table heading="Camada de conforto" {...rest}>
      <TableRow heading="Resiliência e suporte progressivo">
        {products.map(({productIndex, comfortLayer}) => (
          <td key={productIndex}>
            {comfortLayer.resilienceAndProgressiveSupport}
          </td>
        ))}
      </TableRow>
      <TableRow heading="Propriedades antimicrobianas e resistência a ácaros">
        {products.map(({productIndex, comfortLayer}) => (
          <td key={productIndex}>{comfortLayer.antimicrobianaProperties}</td>
        ))}
      </TableRow>
      <TableRow heading="Dispersão de umidade">
        {products.map(({productIndex, comfortLayer}) => (
          <td style={{gap: '5px'}} key={productIndex}>
            {comfortLayer.umidityDispersion}
          </td>
        ))}
      </TableRow>
      <TableRow heading="Distribuição equilibrada de peso do corpo">
        {products.map(({productIndex, comfortLayer}) => (
          <td key={productIndex}>{comfortLayer.bodyWeightDistribution}</td>
        ))}
      </TableRow>
      <TableRow heading="Bounce (Facilita movimentação na cama)">
        {products.map(({productIndex, comfortLayer}) => (
          <td className={styles.bounceCell} key={productIndex}>
            {comfortLayer.bounce}
          </td>
        ))}
      </TableRow>
      <TableRow heading="Circulação de ar na camada de conforto">
        {products.map(({productIndex, comfortLayer}) => (
          <td style={{gap: '5px'}} key={productIndex}>
            {comfortLayer.airflow}
          </td>
        ))}
      </TableRow>
      <TableRow heading="Certificações">
        {products.map(({productIndex, comfortLayer}) => (
          <td key={productIndex}>{comfortLayer.certifications}</td>
        ))}
      </TableRow>
      <TableRow heading="Descritivo de materiais">
        {products.map(({productIndex, comfortLayer}) => (
          <td key={productIndex}>{comfortLayer.materialDetails}</td>
        ))}
      </TableRow>
    </Table>
  );
}

export default ComfortLayerTable;
