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
    let cifra='';

    for (let index=0; index < text.length; index++) {
      let element = text.charAt(index);
      
      cifra = `${cifra}${cifraCaracter(element, tamanho)}`
    }

    return cifra;
}

export { criptografar }