import React from "react";
import { Container, Row } from "react-grid-system";
import Panel from "../../common/components/panel";
import Button from "../../common/components/button";
import Select from "../../common/components/form/select";
import { Option } from "../../common/types/select";
import noop from "../../utils/dummyData/noop";

const dummyReports: Option[] = [
  { label: "report1", value: 1 },
  { label: "report2", value: 2 },
  { label: "report3", value: 3 },
  { label: "report4", value: 4 },
];

const Reports: React.FC = () => {
  return (
    <Container>
      <Row>
        <Panel title="Report Grid" canClose={false} id="reportGrid">
          <Select options={dummyReports} onChange={noop} />
          <Button icon="Plus" title="Create New">
            Create New
          </Button>
        </Panel>
      </Row>
    </Container>
  );
};

export default Reports;
