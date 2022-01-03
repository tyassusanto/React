import React from "react";
import Menu1 from "../svg/menu.svg";
import Search from "../svg/search.svg";
import "../css/Navbar.css";

class Navbar extends React.Component {
  render() {
    const hide = () => {
        this.props.hide()
    }
    return (
      <div className="Navbar">
        <div className="Navbar1">
          <img className="Menu1" src={Menu1} alt="" onClick={hide}/>
        </div>
        <div className="Navbar2">{this.props.title}</div>
        <div className="Navbar3">
          <img className="Search" src={Search} alt="" />
        </div>
      </div>
    );
  }
}

export default Navbar;
