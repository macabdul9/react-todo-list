import React, { Component } from 'react';
import TodoItem from './TodoItem';


export default class TodoList extends Component {

    render() {
        const todoItems = this.props.items.map(el =>{
            return <TodoItem title ={el}/>
        })
        return (
            <ul className="list-group my-4">
                <h3 className='text-capitalize text-center'>todo list</h3>
                {todoItems}
                <button
                    type='button'
                    className='btn btn-danger btn-block text-capitalize mt-5'
                    onClick={this.props.clearHandler}
                >clear list</button>
            </ul>
        )
    }
}
