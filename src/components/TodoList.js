import React, { Component } from 'react'

import Todo from './Todo';

export default class TodoList extends Component {
    render() {
        const { items, clearList, handleDelete, handleEdit } = this.props;

        return (
            <>
                <div className="container mt-4">
                    <div className="row">
                        <div className="offset-2 col-8 text-center">
                            <p className="alert alert-info font-weight-bolder ">Daily Tasks </p>
                            {items.map((item) => { return (
                                <Todo 
                                key={item.id}
                                title={item.title} 
                                handleDelete={() => handleDelete(item.id)}
                                handleEdit={() => handleEdit(item.id)}
                                ></Todo> 
                             )}
                             )}
                            
                            <button className="btn btn-danger btn-block text-center font-weight-bolder" type="button" onClick={clearList}>
                                Clear List
                            </button>
                        </div>     
                    </div>
                
                </div>
            </>
        )
    }
}
