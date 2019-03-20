import React from 'react'
import { BrowserRouter as Router, Route, Redirect, Link } from 'react-router-dom'

import Cesar from './cifraDeCesar'
import Vegenere from './cifraDeVegenere'

import Header from './header'
import Footer from './footer'

export default props => (
    
    <Router>
        <div>
            <Header>
                <Link className='link' to="/">Cifra de Cesar</Link>
                <Link className='link' to="/vegenere">Cifra de Vegenere</Link>
            </Header>

            <Route exact path='/' component={ Cesar } />
            <Route path='/vegenere' component={ Vegenere } />
            <Redirect from='*' to='/' />
            
            <Footer/>
        </div>
    </Router>
)