const alfabeto = ['a','b','c','d','e','f','g','h','i','j','k','l','m',
                      'n','o','p','q','r','s','t','u','v','w','x','y','z'];

const cifraCaracter = (element, tamanho) => {
    let caracter = element;
    alfabeto.forEach((el, indice) => {
        if(element===el){
        caracter = alfabeto[ (indice+tamanho)%26 ]
        }
    })
    return caracter;
}

const criptografar = (text, tamanho) => {
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
        
        cifra = `${cifra}${criptografar(letra, num)}`
    }
    return cifra
}

export { criptografar, vegenere }