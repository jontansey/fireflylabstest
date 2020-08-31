import React from "react";
import { Report, ReportRow } from "../../../common/types/report";
import Table from "../../../common/components/table";
import { TableColumn } from "../../../common/types/table";
import { format } from "date-fns";
import Panel from "../../../common/components/panel";
import { ActionContainer } from "../reports.styled";
import Select from "../../../common/components/form/select";
import Button from "../../../common/components/button";
import { Option } from "../../../common/types/select";

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

type ReportProps = {
  report?: Report;
  options: Option[];
  view(option: Option): void;
  onClose(): void;
};

const ReportPanel: React.FC<ReportProps> = ({
  report,
  options,
  view,
  onClose,
}) => {
  if (!report) return null;
  return (
    <Panel
      title={`Report | ${report.name}`}
      canClose={true}
      id="reportGrid"
      width="870px"
      height="715px"
      onClose={onClose}
    >
      <ActionContainer>
        <Select
          options={options}
          onChange={view}
          placeholder="Select a previously saved report"
          value={options.find(({ value }) => value === report.id)}
        />
        <Button icon="Plus" title="Create New">
          Create New
        </Button>
      </ActionContainer>
      <div style={{ flex: "100%" }}>
        <Table columns={renderReportColumns} data={report.rows} />
      </div>
    </Panel>
  );
};

export default ReportPanel;
