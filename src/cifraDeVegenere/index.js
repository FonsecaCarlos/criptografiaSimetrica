import React, { Component } from 'react'
import { vegenere } from '../common/cifra'
import { descriptografarVegenere } from '../common/decifra'
import Layout from '../common/layout'

class Vegenere extends Component {
    
    constructor (props) {
        super(props)
        this.state = { chave: "", texto: '', textoCifrado: '' }
        this.cifraTexto = this.cifraTexto.bind(this)
        this.alteraChave = this.alteraChave.bind(this)
        this.descifraTexto = this.descifraTexto.bind(this)
    }

    vegenere () {      
      const cifra = vegenere(this.state.texto, this.state.chave)
      this.setState( {textoCifrado: cifra} )
    }
    
    cifraTexto (e) {
        const texto =  e.target.value
        this.setState({ texto })
        this.vegenere()
    }
  
    alteraChave (e) {
        const chave = e.target.value
        this.setState( { chave } )
        //this.vegenere()
    }

    descriptografar() {
        const descifra = descriptografarVegenere(this.state.texto, this.state.chave)
        this.setState( {textoCifrado: descifra} )
    }
  
    descifraTexto(e) {
        const campo =  e.target.value
        this.setState({ texto: campo })
        this.descriptografar()
    }
  
    render() {
        return (
            <Layout tituloCifra="Vigenère"
                tituloDescifra="Texto cifrado"

                inputValue={this.state.chave}
                inputType="text"
                inputOnChange={this.alteraChave}
                inputPlaceholder="Chave"

                texto={this.state.texto}
                textoCifrado={this.state.textoCifrado}

                cifraTexto={this.cifraTexto} 
                descifraTexto={ this.descifraTexto }

                { ... this.props.location.state } />
        );
    }
}
 
export default Vegenere