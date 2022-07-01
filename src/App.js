//import React from 'react';
import { ResultComp, CategoryComp, NavbarComp } from './components';
import {Col, Row, Container} from 'react-bootstrap'



function App() {
  return (
    <div className="App">
     <NavbarComp />
     <div className="mt-3">
      <Container fluid>
      <Row >
        <CategoryComp />
        <Col>
          <h4><strong>Product List</strong></h4>
          <hr />
        </Col>
        <ResultComp />
     </Row>
      </Container>
     </div>
    </div>
  );
}

export default App;
