import React, { useMemo } from 'react';
import Tr from './Tr';

const Table = ({ onClick, tableData, dispatch }) => {
  return (
    <table>
      {Array(tableData.length).fill().map((tr, i) => (
        useMemo(
          () => <Tr key={i} rowIndex={i} rowData={tableData[i]} dispatch={dispatch}>{''}</Tr>
          , [tableData[i]]
        )
      ))}
    </table>
  );
};

export default Table;