import React, { Component } from 'react'

export default class Input extends Component {


    render() {

        const { item, handleChange, handleSubmit, editItem } = this.props;

        return (
            <div className="container mt-5 ">
                <div className="row h-100">
                    <div  className="offset-2 col-8 ">
                        <h3 className="bg-primary text-center text-white rounded ">Todo Input</h3>
                        <form onSubmit={handleSubmit} className="border p-4"> 
                            <div className="row m-0">
                                <div className="col-1 bg-primary m-0  d-flex align-items-center ">
                                    <i style={{color: "white"}} className="icono-list m-0 p-0 "> </i>
                                </div>
                                <div className="col-11 m-0 p-0">
                                    <textarea value={item} rows="2" cols="40" className="form-control mb-0" onChange={handleChange}></textarea>
                                </div>
                            </div>
                            <button type="submit"
                                disabled={item? false: true}
                            className={editItem? "btn btn-success btn-block mt-0 text-uppercase" : "btn btn-outline-primary btn-block mt-0 text-uppercase"}>
                                {editItem ? "Edit item" : "Add item"}
                            </button>
                        </form >
                    </div>
                </div>
                

        </div>
        )
    }
}
