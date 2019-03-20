import React, { Component } from 'react'
import { InputTextarea } from 'primereact/inputtextarea'
import './style.css'
import { criptografar } from '../common/cifra'

const LINHA = 15, COLUNA = 50

class Vegenere extends Component {
    
    constructor (props) {
        super(props)
        this.state = { tamanho: 0, texto: '', textoCifrado: '' }
        this.cifraTexto = this.cifraTexto.bind(this)
        this.alteraTamanho = this.alteraTamanho.bind(this)
    }
    
    cifraTexto(e) {
        const campo =  e.target.value
        
        this.setState({ texto: campo })
  
        const cesar = criptografar(campo, this.state.tamanho)
        this.setState({textoCifrado: cesar })
    }
  
    alteraTamanho(e) {
        const num = e.target.value
        
        this.setState( {tamanho: parseInt(num)} )
        
        const cesar = criptografar(this.state.texto, this.state.tamanho)
        this.setState( {textoCifrado: cesar} )
    }
  
    render() {
        return (
            <div className="container">
              <div className='left'>
                <div className='container-cifra'>
                  <h3>Cifra de Vegenere:</h3>
                </div>
  
                <InputTextarea rows={LINHA} cols={COLUNA} value={this.state.texto} 
                  onChange={ this.cifraTexto }
                  autoResize={false} 
                  placeholder="Digite aqui..."/>
              </div>
  
              <div className='right'>
                <h3>Texto cifrado:</h3>
                <InputTextarea rows={LINHA} cols={COLUNA} value={this.state.textoCifrado} 
                  readOnly={true}
                  autoResize={false} />
              </div>
  
              <button></button>
            </div>
        );
    }
}
 
export default Vegenere