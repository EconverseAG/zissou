function TableRow({heading, children, ...rest}) {
  return (
    <tr {...rest}>
      <th style={{visibility: heading ? 'visible' : 'hidden'}}>{heading}</th>
      {children}
    </tr>
  );
}

export default TableRow;
