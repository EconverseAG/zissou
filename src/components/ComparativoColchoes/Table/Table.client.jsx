import useMobile from '../../../hooks/useMobile';
import * as styles from './Table.module.scss';

function Table({heading, children, className, marginTop, rowGap, ...rest}) {
  const {isMobile} = useMobile();

  return (
    <div
      className={`${styles.tableContainer} ${rowGap ? styles.rowGap : ''} ${
        className || ''
      } ${isMobile ? styles.mobile : ''}`}
      style={marginTop && {marginTop: `${marginTop}px`}}
      {...rest}
    >
      {heading && <h2>{heading}</h2>}
      <table>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
}

export default Table;
