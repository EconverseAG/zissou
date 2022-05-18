import {createContext, useContext, useState} from 'react';

const TableGroupContext = createContext();
const useTableGroup = () => useContext(TableGroupContext);

function TableGroupProvider({children}) {
  const [horizontalScroll, setHorizontalScroll] = useState(0);

  return (
    <TableGroupContext.Provider value={{horizontalScroll, setHorizontalScroll}}>
      {children}
    </TableGroupContext.Provider>
  );
}

export {TableGroupProvider};
export default useTableGroup;
