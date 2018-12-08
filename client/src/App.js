import React, { Component } from 'react';
import './styles/App.scss';
import axios from "axios";
import MenuList from "./components/MenuList";

class App extends Component {
  state = {
    menus: []
  }

  componentDidMount() {
    axios.get("/api/menus")
    .then( res => {
      this.setState({ 
        menus: res.data 
      });
    })
  }

  render() {
    // let {items} = this.state;
    let {menus} = this.state;
    return (
      <div>
       <MenuList menus={menus} />
      </div>
    );
  }
}

export default App;
