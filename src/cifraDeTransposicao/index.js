import React, { Component } from 'react';
import Layout from '../common/layout'
import { transposicao } from '../common/cifra'
import { descriptografarTransposicao } from '../common/decifra'


class Transposicao extends Component {
    constructor (props) {
        super(props)
        this.state = { chave: "", texto: '', textoCifrado: '' }
        this.cifraTexto = this.cifraTexto.bind(this)
        this.alteraChave = this.alteraChave.bind(this)
        this.descifraTexto = this.descifraTexto.bind(this)
    }

    cifraTransposicao () {      
      const cifra = transposicao(this.state.texto, this.state.chave)
      this.setState( {textoCifrado: cifra} )
    }
    
    cifraTexto (e) {
        const texto =  e.target.value
        this.setState({ texto })
        this.cifraTransposicao()
    }
  
    alteraChave (e) {
        const chave = e.target.value
        this.setState( { chave } )
        //this.cifraTransposicao()
    }
    
    descriptografar() {
        const descifra = descriptografarTransposicao(this.state.texto, this.state.chave)
        this.setState( {textoCifrado: descifra} )
      }
  
    descifraTexto(e) {
        const campo =  e.target.value
        this.setState({ texto: campo })
        this.descriptografar()
    }

    render() {
        return (
            <Layout tituloCifra="Transposição"
                tituloDescifra="Texto cifrado"

                inputValue={this.state.chave}
                inputType="text"
                inputOnChange={this.alteraChave}
                inputPlaceholder="Chave"

                texto={this.state.texto}
                textoCifrado={this.state.textoCifrado}

                cifraTexto={this.cifraTexto} 
                descifraTexto={ this.descifraTexto }
                
                cesar={true}
                { ... this.props.location.state } />
        );
    }
}
 
export default Transposicao;