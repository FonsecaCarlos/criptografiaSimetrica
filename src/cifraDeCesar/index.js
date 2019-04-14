import React, { Component } from 'react'
import { cesar as criptografarCesar } from '../common/cifra'
import { descriptografarCesar } from '../common/decifra'

import Layout from '../common/layout'

class CifraDeCesar extends Component {

    constructor (props) {
      super(props)
      this.state = { tamanho: 3, texto: '', textoCifrado: '' }
      this.cifraTexto = this.cifraTexto.bind(this)
      this.alteraTamanho = this.alteraTamanho.bind(this)
      this.descifraTexto = this.descifraTexto.bind(this)
    }

    cesar() {
      const cifra = criptografarCesar(this.state.texto, this.state.tamanho)
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
      //this.cesar()
    }

    descriptografar() {
      const descifra = descriptografarCesar(this.state.texto, this.state.tamanho)
      this.setState( {textoCifrado: descifra} )
    }

    descifraTexto(e) {
      const campo =  e.target.value
      this.setState({ texto: campo })
      this.descriptografar()
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
                  
                  cifraTexto={this.cifraTexto}
                  descifraTexto={ this.descifraTexto }

                  { ... this.props.location.state }/>
      )
    }
  }
  
  export default CifraDeCesar;