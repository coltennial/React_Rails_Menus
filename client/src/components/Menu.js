import React, { Component } from "react";
import axios from "axios";
import ItemForm from "./ItemForm";

class Menu extends Component {
  state={ items: [] }

  componentDidMount() {
    let {id} = this.props
    axios.get(`/api/menus/${id}/items`)
    .then(res => {
      this.setState({
        items: res.data
      })
    })
  }

  addItem(name, price) {
    
  }

  render() {
    // let {items} = this.state;
    let {menuName, id} = this.props;
    return (
      <div className="menu">
      <ItemForm id={id} add={this.addItem}/>
        <h1>{menuName}</h1>
        
      </div>
    )
  }
}

export default Menu;