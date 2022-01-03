import React, { Component } from 'react'
import "../css/Cart.css"
import  {numberWithCommas} from "../numberwithcomas";
import ntsf from '../svg/ntf.svg'
import { Row, Col } from 'reactstrap';
import Empty from '../svg/empty.svg'

export class Cart extends Component {   
    
    render() { 
        let cart = this.props.data

        const plusQty= (data) => {
            this.props.btnPlusQty(data)
        }  
        const minQty = (data) => {
            this.props.btnMinQty(data)
        }
        const cancel = () => {
            this.props.cancel()
        }   

        let total= 0
        let ntf = cart.length
        this.props.data.forEach((e) => {
           total += e.price * e.qty
        })

        
        return (
            <div className="Cart">
                <div className="Notif-Cart">
                    <div className="label">Cart</div>
                    <div className="ntf">
                        <img src={ntsf} alt="" />
                        <p className="ntf2">{ntf}</p>
                    </div>
                </div>
                {ntf === 0 ?(<div className="Item-Empty"><img className="Empty-cart" src={Empty} alt="" /> </div>):(
                   <div className="Item-Cart">
                   {cart.map((e) =>{
                      return(
                          <div className="Cart-card">
                              <Row className="Cart-list" id={e.id}>
                                  <Col lg="5" md="5" xs="2" className="l1">
                                      <img className="Cart-picture" width="150px" height="120px" src={e.picture} alt=""/>
                                  </Col>
                                  <Col xs="7" md="7" sm="7" lg="7" className="l2">
                                      <Col className="Cart-name">{e.product_name}</Col>
                                      <div className="Tombol">
                                          <div className="Minus" onClick={() => minQty(e.id)}>-</div>
                                          <div xs="2" className="Qty"><input type="text" value={e.qty}/></div>
                                          <div xs="2" className="Plus" onClick={() => plusQty(e.id)}>+</div>        
                                      </div>
                                      <div className="Cart-price">Rp.{numberWithCommas(e.qty * e.price)}</div> 
                                  </Col>  
                              </Row>
                          </div>       
                      )
                      
                   })}
                  </div>  
                )}
                <div className="Menu-cart">
                    <div className="t1">Total:</div>
                    <div className="t2">Rp. {numberWithCommas(total)}</div>    
                    <div className="Info">*Belum termasuk ppn</div>
                    <div className="Checkout" onClick={''}>Checkout</div>
                    <div className="Cancel" onClick={cancel}>Cancel</div>                  
                </div>
            </div>
        )
    }
}

export default Cart
