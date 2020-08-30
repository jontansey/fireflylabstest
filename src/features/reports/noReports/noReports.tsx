import React from "react";
import Panel from "../../../common/components/panel";
import { ActionContainer } from "../reports.styled";
import Select from "../../../common/components/form/select";
import Button from "../../../common/components/button";
import { Option } from "../../../common/types/select";
import noop from "../../../utils/noop";

type NoReportProps = {
  options: Option[];
  view(option: Option): void;
};

const NoReports: React.FC<NoReportProps> = ({ options, view }) => {
  return (
    <Panel
      title="Report Grid"
      onClose={noop}
      canClose={false}
      id="reportGrid"
      width="500px"
    >
      <ActionContainer>
        <Select
          options={options}
          onChange={view}
          placeholder="Select a previously saved report"
        />
        <Button icon="Plus" title="Create New">
          Create New
        </Button>
      </ActionContainer>

      <div>
        Create a new Report
        <br />
        or choose from a saved one
      </div>
    </Panel>
  );
};

export default NoReports;
