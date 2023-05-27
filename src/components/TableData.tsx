import React, { FC, ReactNode } from 'react';

const TableData = ({ children }: { children: ReactNode }) => {
  return (
    <td className="border border-slate-900 font-mono text-base font-medium text-slate-900">
      {children}
    </td>
  );
};

export default TableData;
