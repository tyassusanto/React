import React from 'react'
import Navbar from '../components/Navbar'
import Menu from '../components/Menu'
import '../css/History.css'
import Card1 from '../svg/card1.svg'
import Card2 from '../svg/card2.svg'
import Card3 from '../svg/card3.svg'
import Card4 from '../svg/card4.svg'



class About extends React.Component{
    constructor(props){
        super(props)
        this.state = {
           hide: false
        }
       
    }

    render(){ 

        const hide = () => {
            this.setState({
                ...this.state, hide: !this.state.hide
            })
        }
        return(
        <div fluid={true} className="History">
            <Navbar title="History"  hide={hide}/> 

            {this.state.hide===false?(
                <main >
                <Menu/>    
                <article className="Article-history">
                    <img className="test2" src={Card1} alt=""/>
                    <img className="test2" src={Card2} alt=""/>
                    <img className="test2" src={Card3} alt=""/>
                    <img className="test" src={Card4} alt=""/>
                </article>         
            </main>  
            ):(
                <main >  
                    <article className="Article-history">
                        <img className="test2" src={Card1} alt=""/>
                        <img className="test2" src={Card2} alt=""/>
                        <img className="test2" src={Card3} alt=""/>
                        <img className="test" src={Card4} alt=""/>
                    </article>        
                </main>  
            )}        
            </div>                 
        )
    }
}

export default About