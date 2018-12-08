import React from 'react';

class ItemForm extends React.Component {
  state = {
    name: "",
    price: 0.00
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    let {add} = this.props;
    let {name, price} = this.state;
    e.preventDefault();
    add(name, price)
    this.setState({
      name: "",
      price: 0.00
    })
  }

  render() {
    let {name, price} = this.state
    return (
      <form className="dish-form" onSubmit={this.handleSubmit}>
        <input 
          name="name"
          placeholder="Dish Name"
          value={name}
          className="input"
          required
          onChange={this.handleChange}
        />
        <input 
          type="number"
          name="price"
          placeholder="Price:"
          value={price}
          className="input"
          required
          onChange={this.handleChange}
        />
        <button className="submit">Add Item</button>
      </form>
    )
  }
}

export default ItemForm;