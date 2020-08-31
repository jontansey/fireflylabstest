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
        <tr>
          {columns.map(({ title }) => (
            <StyledTH key={title}>{title}</StyledTH>
          ))}
        </tr>
      </StyledTHead>
      <tbody>
        {data.map((item, i) => (
          <tr key={`${i}-row`}>
            {columns.map(({ field, computedField, center }, i) => (
              <StyledTD displayCenter={center} key={`${field}${i}`}>
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
