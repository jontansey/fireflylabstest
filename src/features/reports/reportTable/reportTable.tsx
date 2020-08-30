import React from "react";
import { Report, ReportRow } from "../../../common/types/report";
import Table from "../../../common/components/table";
import { TableColumn } from "../../../common/types/table";
import { format } from "date-fns";

type ReportProps = {
  report: Report;
};

const renderReportColumns: TableColumn<ReportRow>[] = [
  {
    title: "Date Time and Identifier",
    field: "dateTime",
    computedField: ({ dateTime, identifier }) =>
      `${format(dateTime, "yyyy-mm-dd")}${identifier}`,
  },
  {
    title: "Date Time",
    field: "dateTime",
    computedField: ({ dateTime }) => format(dateTime, "yyyy-mm-dd-hh.mm.ss"),
  },
  {
    title: "Identifier Type",
    field: "identifierType",
    center: true,
  },
  {
    title: "Identifier",
    field: "identifier",
  },
  {
    title: "Name",
    field: "name",
  },
  {
    title: "Sedol",
    field: "sedol",
  },
];

const ReportTable: React.FC<ReportProps> = ({ report }) => {
  return <Table columns={renderReportColumns} data={report.rows} />;
};

export default ReportTable;
