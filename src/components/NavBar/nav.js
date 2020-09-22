import React, { Component } from 'react'

import './Nav.css';

export default class Nav extends Component {
    render() {
        return (
            <>
               <nav>
                <a href="/home">Home</a>
                <a href="/index">About</a>
                <a href="/home">Contact</a> 
               </nav> 
            </>
        )
    }
}
