import {Image, Money} from '@shopify/hydrogen/client';

import Table from '../Table';
import TableRow from '../TableRow';
import useMobile from '../../../hooks/useMobile';

import * as styles from './ProductTable.module.scss';

import LogoSpark from '../../../assets/spark-logo.png';
import PhotoSpark from '../../../assets/foto_spark.png';
import PhotoCoral from '../../../assets/foto_coral.png';
import PhotoBlue from '../../../assets/foto_blue.png';

function ProductTable({
  coral,
  coralHybrid,
  blue,
  spark,
  sparkHybrid,
  className,
  ...rest
}) {
  const {isMobile} = useMobile();

  return (
    <Table
      rowGap
      className={`${styles.productTable} ${className || ''} ${
        isMobile ? styles.mobile : ''
      }`}
      {...rest}
    >
      <TableRow scrollbar>
        <td>
          <Image
            src={LogoSpark}
            width={isMobile ? 63 : 113}
            height={isMobile ? 20 : 37}
            alt="Spark"
          />
          <Image src={PhotoSpark} width={258} height={92} alt="Spark" />
        </td>
        <td>
          <p>
            <Image
              src={LogoSpark}
              width={isMobile ? 63 : 113}
              height={isMobile ? 20 : 37}
              alt="Spark"
            />{' '}
            <span className={styles.spark}>Híbrido</span>
          </p>
          <Image src={PhotoSpark} width={258} height={92} alt="Spark Híbrido" />
        </td>
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
        <td>{spark && <Money data={spark.priceRange.minVariantPrice} />}</td>
        <td>
          {sparkHybrid && (
            <Money data={sparkHybrid.priceRange.minVariantPrice} />
          )}
        </td>
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
        <td>20cm</td>
        <td>25cm</td>
        <td>25cm</td>
        <td>30cm</td>
        <td>32cm</td>
      </TableRow>
    </Table>
  );
}

export default ProductTable;
