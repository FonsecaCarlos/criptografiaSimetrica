import React, { Component } from 'react';
import Layout from '../common/layout'
import { transposicao } from '../common/cifra'

class Transposicao extends Component {
    constructor (props) {
        super(props)
        this.state = { chave: "", texto: '', textoCifrado: '' }
        this.cifraTexto = this.cifraTexto.bind(this)
        this.alteraChave = this.alteraChave.bind(this)
        this.cifraTransposicao = this.cifraTransposicao.bind(this)
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
        
        this.cifraTransposicao()
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