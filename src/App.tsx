import React from "react";
import Providers from "./providers";
import { Container, Row, Col } from "react-grid-system";

import Navigation from "./common/components/navigation";
import Reports from "./features/reports";

const App: React.FC = () => (
  <Providers>
    <Container style={{ maxWidth: "1800px" }}>
      <Row>
        <Col>
          <Navigation />
        </Col>
      </Row>
    </Container>
    <Reports />
  </Providers>
);

export default App;
