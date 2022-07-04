import {Image, Money} from '@shopify/hydrogen/client';

import Table from '../Table';
import TableRow from '../TableRow';
import useMobile from '../../../hooks/useMobile';

import * as styles from './ProductTable.module.scss';

import LogoSpark from '../../../assets/spark-logo.png';
import LogoCoral from '../../../assets/coral-logo.svg';
import LogoBlue from '../../../assets/blue-logo.svg';
import PhotoSpark from '../../../assets/foto_spark.png';
import PhotoCoral from '../../../assets/foto_coral.png';
import PhotoBlue from '../../../assets/foto_blue.png';
import useComparative from '../../../hooks/useComparative';
import HybridToggle from '../HybridToggle';
import ComparativeSelect from '../ComparativeSelect';

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
  const {products, setProducts} = useComparative();

  return (
    <Table
      rowGap
      className={`${styles.productTable} ${className || ''} ${
        isMobile ? styles.mobile : ''
      }`}
      {...rest}
    >
      <TableRow className={styles.purpleTheme} heading="Selecione o colchão">
        {products.map(({productIndex}, index) => (
          <td key={productIndex}>
            <ComparativeSelect
              product={products[index]}
              setProduct={setProducts[index]}
            />
          </td>
        ))}
      </TableRow>
      <TableRow
        className={styles.purpleTheme}
        heading="Clique para adicionar sistema híbrido"
      >
        {products.map(({id, productIndex}, index) => (
          <td key={productIndex}>
            <HybridToggle
              product={products[index]}
              setProduct={setProducts[index]}
              readOnly={id.includes('blue')}
            />
          </td>
        ))}
      </TableRow>
      <TableRow scrollbar className={styles.products}>
        {products.map(({id, productIndex}) =>
          id === 'spark' ? (
            <td key={productIndex}>
              <Image
                src={LogoSpark}
                width={isMobile ? 63 : 113}
                height={isMobile ? 20 : 37}
                alt="Spark"
              />
              <Image src={PhotoSpark} width={258} height={92} alt="Spark" />
            </td>
          ) : id === 'sparkHybrid' ? (
            <td key={productIndex}>
              <p>
                <Image
                  src={LogoSpark}
                  width={isMobile ? 63 : 113}
                  height={isMobile ? 20 : 37}
                  alt="Spark"
                />{' '}
                <span className={styles.spark}>Híbrido</span>
              </p>
              <Image
                src={PhotoSpark}
                width={258}
                height={92}
                alt="Spark Híbrido"
              />
            </td>
          ) : id === 'coral' ? (
            <td key={productIndex}>
              <Image src={LogoCoral} width={68} height={12} alt="Coral" />
              <Image src={PhotoCoral} width={258} height={92} alt="Coral" />
            </td>
          ) : id === 'coralHybrid' ? (
            <td key={productIndex}>
              <p>
                <Image src={LogoCoral} width={68} height={12} alt="Coral" />
                <span>Híbrido</span>
              </p>
              <Image
                src={PhotoCoral}
                width={258}
                height={92}
                alt="Coral Híbrido"
              />
            </td>
          ) : id === 'blue' ? (
            <td className={styles.blue} key={productIndex}>
              <Image src={LogoBlue} width={50} height={12} alt="Blue" />

              <Image src={PhotoBlue} width={258} height={92} alt="Blue" />
            </td>
          ) : null,
        )}
      </TableRow>
      <TableRow heading="A partir de">
        {products.map(({id, productIndex}) => {
          let currentProduct = spark;

          switch (id) {
            case 'spark':
              currentProduct = spark;
              break;
            case 'sparkHybrid':
              currentProduct = sparkHybrid;
              break;
            case 'coral':
              currentProduct = coral;
              break;
            case 'coralHybrid':
              currentProduct = coralHybrid;
              break;
            case 'blue':
              currentProduct = blue;
              break;
            default:
              return null;
          }

          return (
            <td key={productIndex}>
              <Money data={currentProduct.priceRange.minVariantPrice} />
            </td>
          );
        })}
      </TableRow>
      <TableRow heading="Altura">
        {products.map(({productIndex, height}) => (
          <td key={productIndex}>{height}</td>
        ))}
      </TableRow>
    </Table>
  );
}

export default ProductTable;
