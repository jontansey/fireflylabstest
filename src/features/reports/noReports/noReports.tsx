import React from "react";
import Panel from "../../../common/components/panel";
import Select from "../../../common/components/form/select";
import Button from "../../../common/components/button";
import { Option } from "../../../common/types/select";
import noop from "../../../utils/noop";
import { NoReportMessage, ActionContainer, NewIcon } from "./noReports.styled";
import newIcon from "./new.svg";

type NoReportProps = {
  options: Option[];
  view(option: Option): void;
  createNew(): void;
};

const NoReports: React.FC<NoReportProps> = ({ options, view, createNew }) => {
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
        <Button icon="Plus" title="Create New" onClick={() => createNew()}>
          Create New
        </Button>
      </ActionContainer>

      <NoReportMessage onClick={() => createNew()}>
        <NewIcon src={newIcon} alt="Logo" />
        <div>
          Create a new Report
          <br />
          or choose from a saved one
        </div>
      </NoReportMessage>
    </Panel>
  );
};

export default NoReports;
