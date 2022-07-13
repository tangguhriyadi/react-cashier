//import React from 'react';
import { ResultComp, CategoryComp, NavbarComp, MenusComp } from "./components";
import { Col, Row, Container } from "react-bootstrap";
import React, { Component } from "react";
import { API_URL } from "./utils/constant";
import axios from "axios";
import swal from "sweetalert";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      menus: [],
      choosedCategory: "Makanan",
      keranjangs:[]
    };
  }

  componentDidMount() {
    axios
      .get(API_URL + "products?category.nama=" + this.state.choosedCategory)
      .then((res) => {
        const menus = res.data;
        this.setState({
          menus,
        });
      })
      .catch((err) => console.log(err));
      axios
      .get(API_URL + "keranjangs")
      .then((res) => {
        const keranjangs = res.data;
        this.setState({
          keranjangs,
        });
      })
      .catch((err) => console.log(err));
  }

  componentDidUpdate(prevState){
    if(this.state.keranjangs !== prevState.keranjangs){
      axios
      .get(API_URL + "keranjangs")
      .then((res) => {
        const keranjangs = res.data;
        this.setState({
          keranjangs,
        });
      })
      .catch((err) => console.log(err));
    }
  }

  changeCategory = (value) => {
    this.setState({
      choosedCategory: value,
      menus: [],
    });
    axios
      .get(API_URL + "products?category.nama=" + value)
      .then((res) => {
        const menus = res.data;
        this.setState({
          menus,
        });
      })
      .catch((err) => console.log(err));
  };

  toChart = (value) => {
    axios
      .get(API_URL + "keranjangs?product.id=" + value.id)
      .then((res) => {
        if (res.data.length === 0) {
          const temp = {
            qty: 1,
            price: value.price,
            product: value,
          };

          axios
            .post(API_URL + "keranjangs", temp)
            .then((res) => {
              swal({
                title: "success!",
                text: "added to chart ! " + temp.product.name,
                icon: "success",
                button: false,
                timer: 1000,
              });
            })
            .catch((err) => console.log(err));
        } else {
          const temp = {
            qty: res.data[0].qty + 1,
            price: res.data[0].price + value.price,
            product: value,
          };
          axios
            .put(API_URL + "keranjangs/" + res.data[0].id, temp)
            .then((res) => {
              swal({
                title: "success!",
                text: "added to chart !" + temp.product.name,
                icon: "success",
                button: false,
                timer: 1000,
              });
            })
            .catch((err) => console.log(err));
        }
      })
      .catch((err) => console.log(err));
  };

  render() {
    const { menus, choosedCategory, keranjangs } = this.state;
    return (
      <div className="App">
        <NavbarComp />
        <div className="mt-3">
          <Container fluid>
            <Row>
              <CategoryComp
                changeCategory={this.changeCategory}
                choosedCategory={choosedCategory}
              />{" "}
              <Col>
                <h4>
                  {" "}
                  <strong> Product List </strong>{" "}
                </h4>{" "}
                <hr />
                <Row>
                  {" "}
                  {menus &&
                    menus.map((menu) => (
                      <MenusComp
                        key={menu.id}
                        menu={menu}
                        toChart={this.toChart}
                      />
                    ))}{" "}
                </Row>{" "}
              </Col>{" "}
              <ResultComp keranjangs={keranjangs}/>
            </Row>{" "}
          </Container>{" "}
        </div>{" "}
      </div>
    );
  }
}
