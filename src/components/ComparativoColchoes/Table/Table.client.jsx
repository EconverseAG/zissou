import * as styles from './Table.module.scss';

function Table({heading, children, className, marginTop, rowGap, ...rest}) {
  return (
    <div
      className={`${styles.tableContainer} ${rowGap ? styles.rowGap : ''} ${
        className || ''
      }`}
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
