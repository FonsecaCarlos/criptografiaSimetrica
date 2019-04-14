import React, { Component } from 'react';
import './style.css'
import { InputTextarea } from 'primereact/inputtextarea'

const LINHA = 15, COLUNA = 50

class Layout extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cesar: this.props.cesar,
            vegenere: this.props.vegenere,
            transposicao: this.props.transposicao,
            descriptografar: false
        }
    }

    cifraCesar = () => {
        this.setState({
            //cesar: !this.state.cesar
            cesar: true,
            vegenere: false,
            transposicao: false
        })
    }

    cifraVegenere = () => {
        this.setState({
            //vegenere: !this.state.vegenere
            cesar: false,
            vegenere: true,
            transposicao: false
        })
    }

    cifraTransposicao = () => {
        this.setState({
            //transposicao: !this.state.transposicao
            cesar: false,
            vegenere: false,
            transposicao: true
        })
    }

    changeCheckBox = (value) => {
        const descriptografar = !this.state.descriptografar
        this.setState({descriptografar})
    }

    render() {
        return ( 
            <div>
                <div className='descript-box' >
                    <div>
                        {this.state.cesar ? <h4>Cifra de Cesar</h4> : ''}
                        {this.state.vegenere ? <h4>Cifra de Vegenere</h4> : ''}
                        {this.state.transposicao ? <h4>Cifra de Transposição</h4> : ''}
                    </div>
                    <div>
                        <input type="checkbox" id="descript" name="descript"
                            onChange={(value) => this.changeCheckBox(value)}/>
                        <label htmlFor="descript">Descriptografar</label>
                    </div>
                </div>



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
                        onChange={ this.state.descriptografar ? 
                            this.props.descifraTexto : this.props.cifraTexto }
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
            </div>
        )
    }
}
 
export default Layout;