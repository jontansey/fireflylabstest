import React from "react";
import { TableColumn, DataItem } from "../../types/table";
import { StyledTable, StyledTH, StyledTD, StyledTHead } from "./table.styled";

export type TableProps = {
  data: DataItem[];
  columns: TableColumn<any>[];
};

export const Table: React.FC<TableProps> = ({ columns, data }) => {
  return (
    <StyledTable>
      <StyledTHead>
        {columns.map(({ title }) => (
          <StyledTH>{title}</StyledTH>
        ))}
      </StyledTHead>
      <tbody>
        {data.map((item) => (
          <tr>
            {columns.map(({ field, computedField, center }) => (
              <StyledTD displayCenter={center}>
                {computedField ? computedField(item) : item[field]}
              </StyledTD>
            ))}
          </tr>
        ))}
      </tbody>
    </StyledTable>
  );
};

export default Table;
