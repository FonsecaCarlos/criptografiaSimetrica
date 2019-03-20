import React, { Component } from 'react';
import './style.css'
import { InputTextarea } from 'primereact/inputtextarea'

const LINHA = 15, COLUNA = 50

class Layout extends Component {
    render() { 
        return ( 
            <div className="container">
                <div className='left'>
                <div className='container-cifra'>
                    <h3>{this.props.tituloCifra}</h3>
                    <input type={this.props.inputType} value={ this.props.inputValue } 
                    className='input-cifra'
                    min="0" max="25"
                    onChange={ this.props.inputOnChange  }
                    placeholder={ this.props.inputPlaceholder } />
                </div>

                <InputTextarea rows={LINHA} cols={COLUNA} value={this.props.texto} 
                    onChange={ this.props.cifraTexto }
                    autoResize={false} 
                    placeholder="Digite aqui..."/>
                </div>

                <div className='right'>
                <h3>{this.props.tituloDescifra}</h3>
                <InputTextarea rows={LINHA} cols={COLUNA} value={this.props.textoCifrado} 
                    readOnly={true}
                    autoResize={false} />
                </div>
            </div>
        );
    }
}
 
export default Layout;