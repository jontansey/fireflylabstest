import React from "react";
import Providers from "./providers";
import { Container, Row, Col } from "react-grid-system";

import Navigation from "./common/components/navigation";
import Reports from "./features/reports";

const App: React.FC = () => (
  <Providers>
    <Container>
      <Row>
        <Col>
          <Navigation />
          <Reports />
        </Col>
      </Row>
    </Container>
  </Providers>
);

export default App;
