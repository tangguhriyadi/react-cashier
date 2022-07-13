import { Row, Col, ListGroup, Badge } from "react-bootstrap";
import React, { Component } from "react";
import { numberWithCommas } from "../utils/utils";

export default class resultComp extends Component {
  render() {
    const { keranjangs } = this.props;
    return (
      <Col md={3} mt="2">
        <h4>
          <strong>Result</strong>
        </h4>
        <hr />
        {keranjangs.lenght !== 0 && (
          <ListGroup variant="flush">
            {keranjangs.map((item) => (
              <ListGroup.Item>
                <Row>
                  <Col xs={3}>
                    <h4>
                      <Badge pill bg="success">
                        {item.qty}
                      </Badge>
                    </h4>
                  </Col>
                  <Col>
                    <h5>{item.product.name}</h5>
                    <p>Rp. {numberWithCommas(item.product.price)}</p>
                  </Col>
                  <Col>
                  <strong className="float-end"><p>Rp. {numberWithCommas(item.price)}</p></strong>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>
    );
  }
}
