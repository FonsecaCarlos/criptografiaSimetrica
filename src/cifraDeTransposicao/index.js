import React, { Component } from 'react';
import Layout from '../common/layout'
import { vegenere } from '../common/cifra'

class Transposicao extends Component {
    constructor (props) {
        super(props)
        this.state = { chave: "", texto: '', textoCifrado: '' }
        this.cifraTexto = this.cifraTexto.bind(this)
        this.alteraChave = this.alteraChave.bind(this)
        this.vegenere = this.vegenere.bind(this)
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
        
        this.vegenere()
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

                cifraTexto={this.cifraTexto} />
        );
    }
}
 
export default Transposicao;