import React, { Component } from 'react'
import '../css/Product.css'
import  { numberWithCommas }from "../numberwithcomas";
import { Container, Row, Col } from 'reactstrap';

export class Product extends Component {
    constructor(props){
        super(props)
        this.state = {
           data: this.props.product
        }
    }
    render() {
        console.log(this.props);
        const addCart = (id) => {
            this.props.addCart(id)   
        }
        return (
            <Container className="product" fluid={true}>
                 <Row >
                 {this.state.data.map((e) =>{
                    return(
                    <Col lg="3" md="6" xl="4" sx="12"  className="Product-card">
                        <div onClick={() => addCart(e.id)} className="product-list" id={e.id}>
                            <img className="picture" src={e.picture} alt=""/>
                            <div className="name">{e.product_name}</div>
                            <div className="price">Rp. {numberWithCommas(e.price)}</div>
                        </div>
                    </Col>
                    )        
                })}
                </Row>
            </Container>
        )
    }
}

export default Product
