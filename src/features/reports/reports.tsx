import React from "react";
import { Container, Row } from "react-grid-system";
import Panel from "../../common/components/panel";
import Button from "../../common/components/button";
import Select from "../../common/components/form/select";
import noop from "../../utils/noop";

import { dummyReports } from "../../utils/dummyData/dummySavedReports";

const Reports: React.FC = () => {
  return (
    <Container>
      <Row>
        <Panel title="Report Grid" canClose={false} id="reportGrid">
          <Select
            options={dummyReports}
            onChange={noop}
            placeholder="Select a previously saved report"
          />
          <Button icon="Plus" title="Create New">
            Create New
          </Button>
        </Panel>
      </Row>
    </Container>
  );
};

export default Reports;
