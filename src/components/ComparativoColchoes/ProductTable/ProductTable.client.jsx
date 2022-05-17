import {Image, Money} from '@shopify/hydrogen/client';

import Table from '../Table';
import TableRow from '../TableRow';

import * as styles from './ProductTable.module.scss';

import PhotoCoral from '../../../assets/foto_coral.png';
import PhotoBlue from '../../../assets/foto_blue.png';
import Firme from '../../../assets/firme.svg';
import MedioMacio from '../../../assets/medio-macio.svg';
import MedioFirme from '../../../assets/medio-firme.svg';

function ProductTable({coral, coralHybrid, blue, className, ...rest}) {
  return (
    <Table
      rowGap
      className={`${styles.productTable} ${className || ''}`}
      {...rest}
    >
      <TableRow>
        <td>
          <p>Coral</p>
          <Image src={PhotoCoral} width={258} height={92} alt="Coral" />
        </td>
        <td>
          <p>
            Coral <span>Híbrido</span>
          </p>
          <Image src={PhotoCoral} width={258} height={92} alt="Coral Híbrido" />
        </td>
        <td className={styles.blue}>
          <p>Blue</p>
          <Image src={PhotoBlue} width={258} height={92} alt="Blue" />
        </td>
      </TableRow>
      <TableRow heading="A partir de">
        <td>
          <Money data={coral.priceRange.minVariantPrice} />
        </td>
        <td>
          <Money data={coralHybrid.priceRange.minVariantPrice} />
        </td>
        <td>
          <Money data={blue.priceRange.minVariantPrice} />
        </td>
      </TableRow>
      <TableRow heading="Altura">
        <td>25cm</td>
        <td>30cm</td>
        <td>32cm</td>
      </TableRow>
      <TableRow heading="Escala de firmeza" className={styles.firmnessScale}>
        <td>
          <Image src={Firme} width={259} height={45} />
          <span>Firme</span>
        </td>
        <td>
          <Image src={MedioMacio} width={259} height={45} />
          <span>Médio macio</span>
        </td>
        <td>
          <Image src={MedioFirme} width={259} height={45} />
          <span>Médio firme</span>
        </td>
      </TableRow>
    </Table>
  );
}

export default ProductTable;
