import React, { Component } from 'react'

export default class Todo extends Component {
    render() {
        const { title, handleDelete, handleEdit} = this.props;

        return (
            <div>
                <li className="d-flex justify-content-between my-2 border border-secondary p-3 rounded list-group-item">
                    <span className=" text-left text-capitalize ">{title}</span> 
                    <span className="text-light user-select-none">
                        <i style={{color: "grey", cursor: "pointer"}} className="icono-dropper" onClick={handleEdit}></i>
                        <i style={{color: "red", cursor: "pointer"}}  className="icono-trash ml-3" onClick={handleDelete}></i>
                    </span> 
                </li>
            </div>
        )
    }
}
