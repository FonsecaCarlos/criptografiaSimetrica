import React, { Component } from 'react'
import './style.css'

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { tipo: 'Cesar' }
    }
    render() { 
        return (
            <div className='header'>
                <h2>Criptografia:</h2>
                { this.props.children } 
            </div>
        );
    }
}

export default Header