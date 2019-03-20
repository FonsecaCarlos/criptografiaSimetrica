import React, { Component } from 'react'
import { criptografar } from '../common/cifra'

import Layout from '../common/layout'

class CifraDeCesar extends Component {

    constructor (props) {
      super(props)
      this.state = { tamanho: 0, texto: '', textoCifrado: '' }
      this.cifraTexto = this.cifraTexto.bind(this)
      this.alteraTamanho = this.alteraTamanho.bind(this)
      this.cesar = this.cesar.bind(this)
    }

    cesar() {
      const cifra = criptografar(this.state.texto, this.state.tamanho)
      this.setState( {textoCifrado: cifra} )
    }

    cifraTexto(e) {
      const campo =  e.target.value
      
      this.setState({ texto: campo })

      this.cesar()
    }

    alteraTamanho(e) {
      const num = e.target.value
      
      this.setState( {tamanho: parseInt(num)} )
      
      this.cesar()
    }

    render() {
      return (
          <Layout tituloCifra="Tamanho da cifra"
                  tituloDescifra="Texto cifrado"

                  inputValue={this.state.tamanho}
                  inputType="number"
                  inputOnChange={this.alteraTamanho}

                  texto={this.state.texto}
                  textoCifrado={this.state.textoCifrado}
                  
                  cifraTexto={this.cifraTexto}/>
      );
    }
  }
  
  export default CifraDeCesar;