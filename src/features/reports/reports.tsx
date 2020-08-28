import React from "react";
import { Container, Row } from "react-grid-system";
import Panel from "../../common/components/panel";

const Reports: React.FC = () => {
  return (
    <Container>
      <Row>
        <Panel title="Report Grid" canClose={false} id="reportGrid">
          <select></select>
          <button> create New</button>
        </Panel>
      </Row>
    </Container>
  );
};

export default Reports;
