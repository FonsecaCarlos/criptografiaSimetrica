import React from 'react'
import { BrowserRouter as Router, Route, Redirect, Link } from 'react-router-dom'

import Cesar from './cifraDeCesar'
import Vegenere from './cifraDeVegenere'
import Transposicao from './cifraDeTransposicao'

import Header from './header'
import Footer from './footer'

export default props => (
    
    <Router>
        <div>
            <Header>
                <Link className='link' to="/">Cifra de César</Link>
                <Link className='link' to="/vegenere">Cifra de Vigenère</Link>
                <Link className='link' to="/transposicao">Cifra de Transposição</Link>
            </Header>

            <Route exact path='/' component={ Cesar } />
            <Route path='/vegenere' component={ Vegenere } />
            <Route path='/transposicao' component={ Transposicao } />
            <Redirect from='*' to='/' />
            
            <Footer/>
        </div>
    </Router>
)