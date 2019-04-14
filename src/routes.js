import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Cesar from './cifraDeCesar'
import Vegenere from './cifraDeVegenere'
import Transposicao from './cifraDeTransposicao'

import Header from './header'
import Footer from './footer'

export default class Routes extends Component {
    
    render() {
        return(
            <Router>
                <div>
                    <Header>
                        <Link className='link' to={{
                            pathname: "/",
                            state: {
                                cesar: true, 
                                vegenere: false, 
                                transposicao: false 
                            }
                            }}>Cifra de César</Link>
                        <Link className='link'  to={{
                            pathname: "/vegenere",
                            state: {
                                cesar: false, 
                                vegenere: true, 
                                transposicao: false 
                            }
                            }}>Cifra de Vigenère</Link>
                        <Link className='link' to={{
                            pathname: "/transposicao",
                            state: {
                                cesar: false, 
                                vegenere: false, 
                                transposicao: true 
                            }
                            }}>Cifra de Transposição</Link>
                    </Header>
                    
                    <Route exact path='/' component={Cesar} />
                    <Route path='/vegenere' component={Vegenere} />
                    <Route path='/transposicao' component={Transposicao} />

                    <Footer />
                </div>
            </Router>
        )
    }
}