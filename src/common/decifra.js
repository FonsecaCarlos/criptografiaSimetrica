import { cesar, getPosicao, getPosicaoTransposicao } from './cifra'

const descriptografarCesar = (textoCifrado, tamanho) => {
    const tamanhoDescifra = ( 26 - (tamanho%26))
    const textoDescifrado = cesar(textoCifrado, tamanhoDescifra)
    return textoDescifrado;
}

const descriptografarVegenere = (textoCifrado, chave) => {
    let textoDescifrado = ''
    let letra = ''
    let letraChave = ''
    let num = 0

    for(let i=0; i<textoCifrado.length; i++) {
        letra = textoCifrado.charAt(i)
        letraChave = chave.charAt(i%chave.length)
        num = ( getPosicao(letraChave) )
        textoDescifrado = `${textoDescifrado}${descriptografarCesar(letra, num)}`
    }
    return textoDescifrado
}

const getNumLinha = (tamanhoTexto, tamanhoChave, posicao) => {
    let numLinha = Math.trunc(tamanhoTexto/tamanhoChave)
    if (posicao <= (tamanhoTexto % tamanhoChave))
        numLinha++
    return numLinha
}

const descriptografarTransposicao = (textoCifrado, chave) => {
    let cifra = ''
    let posicao = 0
    let numLinha = 0
    let colunas = chave.length
    let chaveOrdenada = []
    let chaveDesordenada = []
    let numLetrasPercorridas = 0
    let textoDecifrado = new Array(colunas)

    for(let i=0; i<colunas; i++) {
        chaveOrdenada[i] = chave.charAt(i)
        chaveDesordenada[i] = chave.charAt(i)
        textoDecifrado[i] = new Array(Math.trunc(textoCifrado.length/colunas +1))
    }
    chaveOrdenada.sort()
    
    for(let i=0; i<colunas; i++) {
        posicao = getPosicaoTransposicao(chaveDesordenada, chaveOrdenada[i])
        numLinha = getNumLinha(textoCifrado.length, colunas, posicao+1 )
        for(let j=0; j<numLinha; j++){
            textoDecifrado[posicao][j] = textoCifrado[numLetrasPercorridas++]
        }
    }

    for(let j=0; j<Math.trunc(textoCifrado.length/colunas +1); j++){
        for(let i=0; i<colunas; i++) {
            if(textoDecifrado[i][j]!==undefined)
                cifra = `${cifra}${textoDecifrado[i][j]}`
        }
    }
    
    return cifra
}

export { descriptografarCesar, descriptografarVegenere, descriptografarTransposicao }