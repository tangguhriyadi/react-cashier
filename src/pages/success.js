import React, { Component } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class Success extends Component {
  render() {
    return (
      <div className="mt-4 text-center">
        <h2>Order Success</h2>
        <p>Thanks !</p>
        <Button 
          variant="primary"
          as={Link}
          to="/
            "
        >
          back
        </Button>
      </div>
    );
  }
}
