/* eslint-disable array-callback-return */
import React from "react";
import Navbar from "../components/Navbar";
import Cart from "../components/Cart";
import Product from "../components/Product";
import Menu from "../components/Menu";
import "../css/Home.css";

class Home extends React.Component {
    constructor(props){
        super(props)
        this.state = {
           cart: [],
           products: [
            {
                id: 1,
                picture: 'https://i.postimg.cc/nV4p3pzr/espresso.png',
                product_name:'Espresso',
                price: 10000,
            },
            {
                id: 2,
                picture: 'https://i.postimg.cc/SRhqmtZm/coffee-latte.png',
                product_name:'Cofee Latte',
                price: 15000,
            },
            {
                id: 3,
                picture: 'https://i.postimg.cc/Fsvsv1q0/cappucino.png',
                product_name:'Cappucino',
                price: 5000,
            },
            {
                id: 4,
                picture: 'https://i.postimg.cc/DwZhfGc4/redvelvet-latte.png',
                product_name:'Red Velvet Latte',
                price: 33000,
            },
            {
                id: 5,
                picture: 'https://i.postimg.cc/nLNpPLBj/chocorum.png',
                product_name:'Choco Rum',
                price: 28000,
            },
            {
                id: 6,
                picture: 'https://i.postimg.cc/jCYTd3Zs/blackforest.png',
                product_name:'Black Forest',
                price: 30000,
            },
            {
                id: 7,
                picture: 'https://i.postimg.cc/L8CHjDsV/chickenkatsu.png',
                product_name:'Chicken Katsu',
                price: 60000,
            },
            {
                id: 8,
                picture: 'https://i.postimg.cc/26pNxKNn/salmon.png',
                product_name:'Salmon Truffle',
                price: 60000,
            },
            {
                id: 9,
                picture: 'https://i.postimg.cc/j27vtt8F/wiener.png',
                product_name:'Wiener Schnitzel',
                price: 69000,
            }],

            hide: false,
            formAdd: {
               picture: "",
               product_name: "",
               price:"",
               category:""
           }
        }
       
    }

  render() {
    const {products, cart} = this.state

    const updateCart = ()=>{
        this.setState({
            cart
        })
    }

    const updateproduct = () =>{
        this.setState({
            products
        })
    }

    const checkdata  = (data) =>{
        const find = cart.find((e) => {
            if (e.id === data){
                return e
            }
        })
        return find
    }

    const addQty = (data) =>{
        const find = cart.findIndex((e=> e.id === data))
        cart[find].qty +=1
    }

    const btnAdd = (data) =>{
        addQty(data)
        updateCart()
    }

    const delCart = (data) =>{
        const newcart = checkdata(data)
        cart.splice([newcart],1)
        updateCart()
    }

    const minQty = (data) =>{
        const x = cart.findIndex((e=> e.id === data))
        cart[x].qty <= 1 ? (
            delCart(data)
        ): (cart[x].qty -=1 )
        updateCart()
    }

    const cancel = () =>{
        this.setState({cart: []});
    }

    const addCart = (id) =>{
        const find = products.find((e) => {
            if(e.id === id){
                return e
            }
        })
        const check = checkdata(id)
        if (check === undefined){
            const qty = {
                ...find, qty : 1
            }
            cart.push(qty)
        }else {
            addQty(id)
        }
        updateCart()
    }

    const addProduct = (result) =>{
      products.push(result)
      updateproduct()
    }

    const hide = () => {
        this.setState({
            hide: !this.state.hide
        })
    }

    const input = (e) => {
        this.setState({
            ...this.state, formAdd: {
                ...this.state.formAdd,
                [e.target.name] :e.target.value
            }
        })
    }

    const submitAdd = (e) => {
        e.preventDefault()
        addProduct(this.state.formAdd)
    }

     
    return (
      <div className="Home">
        <div className="home-kiri">
            <Navbar title="Food Items" hide={hide} />
            {this.state.hide===false?(   
            <div className="main">
                <Menu input={input} formAdd={this.state.formAdd} submitAdd={submitAdd} />    
                <Product addCart={addCart} product={products}/>
            </div>
            ):(    
                <div className="main">        
                <Product addCart={addCart} product={products} />
            </div>
            )}           
        </div>
        <Cart data={this.state.cart} btnPlusQty={btnAdd} btnMinQty={minQty} cancel={cancel} />
      </div>
    );
  }
}

export default Home;
