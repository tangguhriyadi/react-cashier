//import React from 'react';
import { ResultComp, CategoryComp, NavbarComp, MenusComp } from './components';
import {Col, Row, Container} from 'react-bootstrap'
import React, { Component } from 'react'
import { API_URL } from './utils/constant'
import axios from 'axios';


export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       menus: [],
    }
  }

  componentDidMount(){
    axios
      .get(API_URL+'products')
      .then((res) => {
        const menus = res.data;
        this.setState({ menus })
      })
      .catch(err => console.log(err))
  }

  render() {
    const { menus } = this.state
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
           <Row>
            {menus && menus.map((menu) => (
              <MenusComp
                key={menu.id}
                menu={menu}
              />
            ))}
           </Row>
         </Col>
         <ResultComp />
      </Row>
       </Container>
      </div>
     </div>
    )
  }
}







