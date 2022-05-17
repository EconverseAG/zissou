import useMobile from '../../../hooks/useMobile';
import * as styles from './TableRow.module.scss';

function TableRow({heading, children, className, ...rest}) {
  const {isMobile} = useMobile();

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
