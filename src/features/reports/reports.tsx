import React, { useEffect, useState } from "react";
import { Container, Row } from "react-grid-system";
import Panel from "../../common/components/panel";
import Button from "../../common/components/button";
import Select from "../../common/components/form/select";
import noop from "../../utils/noop";
import ReportTable from "./reportTable";

import {
  dummyReports,
  randomReports,
} from "../../utils/dummyData/dummyReports";
import { Report } from "../../common/types/report";
import { ActionContainer } from "./reports.styled";

const Reports: React.FC = () => {
  const [reports, setReports] = useState<Report[]>([]);
  useEffect(() => {
    setReports(randomReports());
  }, []);

  return (
    <Container>
      <Row>
        <Panel
          title="Report Grid"
          canClose={false}
          id="reportGrid"
          width="870px"
          height="715px"
        >
          <ActionContainer>
            <Select
              options={dummyReports}
              onChange={noop}
              placeholder="Select a previously saved report"
            />
            <Button icon="Plus" title="Create New">
              Create New
            </Button>
          </ActionContainer>
          <div style={{ flex: "100%" }}>
            {reports[0] && <ReportTable report={reports[0]} />}
          </div>
        </Panel>
      </Row>
    </Container>
  );
};

export default Reports;
