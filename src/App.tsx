import React from "react";
import Providers from "./providers";
import { Container, Row, Col } from "react-grid-system";

const App: React.FC = () => (
  <Providers>
    <Container>
      <Row>
        <Col>
          <Navigation />
        </Col>
      </Row>
    </Container>
  </Providers>
);

export default App;
