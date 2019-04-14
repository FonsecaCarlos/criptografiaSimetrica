const alfabeto = ['a','b','c','d','e','f','g','h','i','j','k','l','m',
                      'n','o','p','q','r','s','t','u','v','w','x','y','z'];

const cifraCaracter = (element, tamanho) => {
    let caracter = element;
    alfabeto.forEach((el, indice) => {
        if(element===el){
        caracter = alfabeto[ (indice+tamanho)%26 ]
        }
    })
    return caracter
}

const cesar = (text, tamanho) => {
    let cifra=''
    for (let index=0; index < text.length; index++) {
        let element = text.charAt(index) 
        cifra = `${cifra}${cifraCaracter(element, tamanho)}`
    }
    return cifra;
}

const getPosicao = (letra) => {
    let posicao = -1
    alfabeto.forEach((elemento, indice) => {
        if(letra===elemento){
            posicao = indice
        }
    })
    return posicao
}

const vegenere = (text, chave) => {
    let cifra = ''
    let letra = ''
    let letraChave = ''
    let num = 0

    for(let i=0; i<text.length; i++) {
        letra = text.charAt(i)
        letraChave = chave.charAt(i%chave.length)
        num = ( getPosicao(letraChave) )
        cifra = `${cifra}${cesar(letra, num)}`
    }
    return cifra
}

const getPosicaoTransposicao = (chaveDesordenada, letra) => {
    let posicao=-1
    let elemento=''
    
    for(let indice=0; indice<=chaveDesordenada.length; indice++) {
        elemento=chaveDesordenada[indice]
        if(elemento===letra){
            posicao=indice
            chaveDesordenada[indice]='*'
            break
        }
    }
    return posicao
}

const getColunaTransposicao = (text, posicao, colunas) => {
    let coluna=''
    for(let i=0; i<=colunas+1; i++) {
        if( (posicao + (i*colunas)) <= text.length )
            coluna = `${coluna}${text.charAt( posicao + (i*colunas) )}`
    }
    return coluna
}

const transposicao = (text, chave) => {
    let cifra = ''
    let posicao = 0
    let chaveOrdenada = []
    let chaveDesordenada = []
    
    for(let i=0; i<chave.length; i++) {
        chaveOrdenada[i] = chave.charAt(i)
        chaveDesordenada[i] = chave.charAt(i)
    }

    chaveOrdenada.sort()
    
    for(let i=0; i<chave.length; i++) {
        posicao = getPosicaoTransposicao(chaveDesordenada, chaveOrdenada[i])
        cifra = `${cifra}${getColunaTransposicao(text, posicao, chave.length)}`
    }

    return cifra
}

export { cesar, vegenere, transposicao, getPosicao, getPosicaoTransposicao }