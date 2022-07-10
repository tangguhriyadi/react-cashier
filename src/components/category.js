import {Col, ListGroup} from 'react-bootstrap'
import axios from 'axios'
import React, { Component } from 'react'
import { API_URL } from '../utils/constant'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUtensils, faAppleWhole, faCheese } from "@fortawesome/free-solid-svg-icons";

const Icon = ({nama}) => {
   if(nama === "Makanan") return <FontAwesomeIcon icon={faUtensils} className="me-2" />
   if(nama === "Cemilan") return <FontAwesomeIcon icon={faCheese} className="me-2" />
   if(nama === "Extra") return <FontAwesomeIcon icon={faAppleWhole} className="me-2" />
   return <FontAwesomeIcon icon={faUtensils} className="me-2" />
}


export default class categoryComp extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       categories: []
    }
  }
  
  componentDidMount(){
   axios
     .get(API_URL+'categories')
     .then((res) => {
       const categories = res.data;
       this.setState({ categories })
     })
     .catch(err => console.log(err))
 }
   render() {
      const {categories} = this.state
      const { changeCategory, choosedCategory } = this.props
    return (
      <Col md={2} mt="2">
            <h4><strong>Category</strong></h4>
            <hr />
            <ListGroup>
               {categories && categories.map((category) => (
                  <ListGroup.Item 
                  key={category.id} 
                  onClick={() => changeCategory(category.nama)}
                  className={choosedCategory === category.nama && "activated"}
                  style={{cursor:'pointer'}}
                  >
                     <h5>
                        <Icon nama={category.nama} />{category.nama}
                        </h5>
                     </ListGroup.Item>
               ))}
      
   
    </ListGroup>
       </Col>
      
    )
  }
}


