import {useState, useEffect} from 'react';
import {Image} from '@shopify/hydrogen/client';

import useMobile from '../../../hooks/useMobile';
import Table from '../Table';
import TableRow from '../TableRow';

import LogoSpark from '../../../assets/spark-logo.png';
import useComparative from '../../../hooks/useComparative';

import * as styles from './TableFixedHeader.module.scss';

function TableFixedHeader() {
  const [isScrolled, setIsScrolled] = useState();

  const {isMobile} = useMobile();
  const {products} = useComparative();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 200) {
        setIsScrolled(true);
      }

      if (currentScrollY == 0) {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, {passive: true});

    return () => window.removeEventListener('scroll', handleScroll);
  });

  return (
    <Table
      className={`${styles.container} ${isMobile ? styles.mobile : ''} ${
        isScrolled ? styles.active : ''
      }`}
    >
      <TableRow>
        {products.map(({id, productIndex}) =>
          id === 'spark' ? (
            <td key={productIndex}>
              <Image
                src={LogoSpark}
                width={isMobile ? 63 : 113}
                height={isMobile ? 20 : 37}
                alt="Spark"
              />
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
            </td>
          ) : id === 'coral' ? (
            <td key={productIndex}>
              <p>Coral</p>
            </td>
          ) : id === 'coralHybrid' ? (
            <td key={productIndex}>
              <p>
                Coral <span>Híbrido</span>
              </p>
            </td>
          ) : id === 'blue' ? (
            <td key={productIndex}>
              <p style={{color: '#415264'}}>Blue</p>
            </td>
          ) : null,
        )}
      </TableRow>
    </Table>
  );
}

export default TableFixedHeader;
