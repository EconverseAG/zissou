import {useCallback, useEffect, useRef} from 'react';
import useMobile from '../../../hooks/useMobile';
import useTableGroup from '../../../hooks/useTableGroup';
import * as styles from './TableRow.module.scss';

function TableRow({heading, children, className, ...rest}) {
  const {isMobile} = useMobile();
  const {horizontalScroll, setHorizontalScroll} = useTableGroup();

  const rowRef = useRef(null);

  const handleScroll = useCallback(
    (e) => {
      setHorizontalScroll(e.target.scrollLeft);
    },
    [setHorizontalScroll],
  );

  useEffect(() => {
    if (!rowRef) return;

    rowRef.current.scrollLeft = horizontalScroll;
  }, [horizontalScroll]);

  return (
    <>
      {isMobile && heading && (
        <div className={styles.headingMobile}>
          <span>{heading}</span>
        </div>
      )}
      <tr
        className={`${styles.tableRow} ${className || ''} ${
          isMobile ? styles.mobile : ''
        }`}
        onScroll={handleScroll}
        ref={rowRef}
        {...rest}
      >
        {!isMobile && (
          <th className={heading ? '' : styles.headingUnused}>{heading}</th>
        )}
        {children}
      </tr>
    </>
  );
}

export default TableRow;
