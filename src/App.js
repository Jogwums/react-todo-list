import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './App.css';
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';

import Input from './components/Input';
import TodoList from './components/TodoList';
import Nav from './components/NavBar/nav';

export default class App extends Component {
  state = {
    items: [],
    id: uuidv4(),
    item: '',
    editItem: false
  }

  handleChange = e => {
    this.setState({
      item: e.target.value
    })
  }
  handleSubmit = e => {
    e.preventDefault();
    const newItem = {
      id:this.state.id,
      title: this.state.item
    }
    const updatedItems = [...this.state.items, newItem]

    this.setState({
      items: updatedItems,
      item: '',
      id: uuidv4(),
      editItem: false
    }, () => console.log(this.state));

  }
  clearList = () => {
    this.setState({
      items: []
    });
  }
  handleDelete = (id) => {
    const filteredItems = this.state.items.filter(item => item.id !== id);
    this.setState({
      items: filteredItems
    });
  }
  handleEdit = (id) => {
    const filteredItems = this.state.items.filter(item=> item.id !== id);
    const selectedItem = this.state.items.find(item=> item.id === id)
    this.setState({
      items: filteredItems,
      item: selectedItem.title,
      id: id,
      editItem: true
    })
    
  }
  render() {
    return (
      <div>
        <Nav />
        <Input item={this.state.item} 
        handleChange={this.handleChange} 
        handleSubmit={this.handleSubmit}
         editItem={this.state.editItem} />
        <TodoList 
         items={this.state.items} 
         clearList={this.clearList}
         handleDelete={this.handleDelete}
         handleEdit={this.handleEdit}/>
         
      </div>
    )
  }
}

