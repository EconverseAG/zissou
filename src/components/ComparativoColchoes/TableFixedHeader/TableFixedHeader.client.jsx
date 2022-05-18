import {useState, useEffect} from 'react';

import useMobile from '../../../hooks/useMobile';
import Table from '../Table';
import TableRow from '../TableRow';

import * as styles from './TableFixedHeader.module.scss';

function TableFixedHeader() {
  const [isScrolled, setIsScrolled] = useState();

  const {isMobile} = useMobile();

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
        <td>
          <p>Coral</p>
        </td>
        <td>
          <p>
            Coral <span>Híbrido</span>
          </p>
        </td>
        <td>
          <p style={{color: '#415264'}}>Blue</p>
        </td>
      </TableRow>
    </Table>
  );
}

export default TableFixedHeader;
