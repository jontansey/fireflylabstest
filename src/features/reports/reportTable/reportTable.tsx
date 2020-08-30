import React from "react";
import { Report, ReportRow } from "../../../common/types/report";
import Table from "../../../common/components/table";
import { TableColumn } from "../../../common/types/table";

type ReportProps = {
  report: Report;
};

const renderReportColumns: TableColumn<ReportRow>[] = [
  {
    title: "Date Time and Identifier",
    field: "dateTime",
    computedField: ({ dateTime, identifier }) =>
      `${dateTime.toLocaleDateString()}${identifier}`,
    width: "192px",
  },
  {
    title: "Date Time",
    field: "dateTime",
    computedField: ({ dateTime }) => dateTime.toLocaleDateString(),
    width: "154px",
  },
  {
    title: "Identifier Type",
    field: "identifierType",
    width: "96px",
    center: true,
  },
  {
    title: "Identifier",
    field: "identifier",
    width: "116px",
  },
  {
    title: "Name",
    field: "name",
    width: "185px",
  },
  {
    title: "Sedol",
    field: "sedol",
    width: "117px",
  },
];

const ReportTable: React.FC<ReportProps> = ({ report }) => {
  return <Table columns={renderReportColumns} data={report.rows} />;
};

export default ReportTable;
