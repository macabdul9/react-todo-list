import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Layout from './containers/Layout';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';


// import uuid from 'uuid';
export default class App extends Component {
  state = {
    items:[],
    id:0,
    item:'',
    editItem:false
  }

  inputChangeHandler = (event) => {
    this.setState({item:event.target.value})
  }

  submitHandler = (event) =>{
    event.preventDefault()
    const updatedState = {...this.state};
    const items = updatedState['items']
    items.push(updatedState['item'])
    this.setState({items:items})

  }
  clearHandler = () => {
    this.setState({items:[]})
  }
  render() {
    // console.log('App.js', this.state.items);
    return (
        <div className='container'>
          <div className='col-10 mx-auto col-md-8 mt-4'>
            <h3 className='text-capitalize text-center'>Todo Input</h3>
            <TodoInput 
              item={this.state.item} 
              inputChangeHandler={this.inputChangeHandler}
              submitHandler={this.submitHandler}
              />
            <TodoList items = {this.state.items} clearHandler={this.clearHandler}/>
          </div>
        </div>
      
    );
  }
}

