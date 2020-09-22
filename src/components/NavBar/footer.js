import React, { Component } from 'react'

import './Nav.css';

export default class Footer extends Component {
    render() {
        return (
            <>
               <nav style={{height:"50px"}}>
                <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer">Twitter</a>
                <a href="https://github.com/Jogwums" target="_blank" rel="noopener noreferrer">GitHub</a> 
               </nav> 
            </>
        )
    }
}
