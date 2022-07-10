import React from 'react'
import {Col, Card} from 'react-bootstrap'
import './menus.css'
import { numberWithCommas } from '../utils/utils'

const MenusComp = ({menu}) => {
  return (
    
    <Col md={4} xs={6} className="kartu mb-4">
    <Card style={{ width: '15rem', height:"20rem" }}>
      <Card.Img className="gmb shadow" variant="top" src={"assets/images/"+menu.category.nama.toLowerCase()+"/"+menu.gambar} />
      <Card.Body>
        <Card.Title>{menu.name} ({menu.code})</Card.Title>
        <Card.Text>
          Rp. {numberWithCommas(menu.price)}
        </Card.Text>
      
      </Card.Body>
    </Card>
    </Col>
    
    
    
  )
}

export default MenusComp
