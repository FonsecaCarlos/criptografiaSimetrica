# criptografiaSimetrica

Este projeto foi desenvolvido na disciplina de Auditoria de Sistemas da Informação, no curso de Análise e Desenvolvimento de Sistemas, do Instituto Federal de Educação, Ciência e Tecnologia do Mato Grosso do Sul (IFMS), campus Nova Andradina. O professor orientador dessa aplicação foi o Fábio Duarte de Oliveira.

Essa aplicação foi desenvolvida usando [ReactJS](https://reactjs.org/).

Para executar esse repositório em sua máquina siga os seguintes comandos dentro da pasta raiz do projeto após clonar o repositório:

Primeiro instale as dependências do projeto:
> `$ npm install` 

Depois inicie a aplicação usando o React
> `$ npm start`

### [Criptografia Simétrica](https://pt.wikipedia.org/wiki/Algoritmo_de_chave_sim%C3%A9trica)

Algoritmos de chave simétrica são algoritmos para criptografia que usam a mesma chave criptográfica para encriptação de texto puro e decriptação de texto cifrado. A chave, na prática, representa um segredo compartilhado entre duas ou mais partes que pode ser usado para manter uma ligação de informação privada. Este requisito de que ambas as partes possuam acesso à mesma chave secreta é uma das principais desvantagens da criptografia de chave simétrica, em comparação com a criptografia de chave pública (também conhecida como criptografia de chave assimétrica) pois utilizam duas chaves (pública e privada). A Cifra de César, a Cifra de Vigenère e a Cifra de Transposição são excelentes exemplos de criptografia simétrica pois utilizam uma mesma chave, seja numérica ou texto, para criptografar e descriptografar a mensagem.

### [Cifra de César](https://pt.wikipedia.org/wiki/Cifra_de_C%C3%A9sar)

Em criptografia, a Cifra de César, também conhecida como cifra de troca, código de César ou troca de César, é uma das mais simples e conhecidas técnicas de criptografia. É um tipo de cifra de substituição na qual cada letra do texto é substituída por outra, que se apresenta no alfabeto abaixo dela um número fixo de vezes. Por exemplo, com uma troca de três posições, A seria substituído por D, B se tornaria E, e assim por diante. O nome do método é em homenagem a Júlio César, que o usou para se comunicar com os seus generais.

### [Cifra de Vigenère](https://pt.wikipedia.org/wiki/Cifra_de_Vigen%C3%A8re)

A cifra de Vigenère é um método de criptografia que usa uma série de diferentes cifras de César baseadas em letras de uma senha. Trata-se de uma versão simplificada de uma mais geral cifra de substituição polialfabética, inventada por Leon Battista Alberti cerca de 1465. A invenção da cifra de Vigenère é erradamente atribuída a Blaise de Vigenère; encontra-se originalmente descrita por Giovan Battista Bellaso no seu livro datado de 1553 com o título La Cifra del Sig. Giovan Battista Bellaso. Esta cifra é muito conhecida porque é fácil de perceber e de pôr em prática, parecendo, a quem tem pouca prática, que é inquebrável (indecifrável). Consequentemente, muitos programadores implementaram esquemas de criptografia nas suas aplicações que são no essencial cifras de Vigenère, e que são facilmente quebradas por qualquer criptoanalista.

### [Cifra de Transposição](https://pt.wikipedia.org/wiki/Cifra_de_transposi%C3%A7%C3%A3o)

Na criptografia clássica, uma cifra de transposição procede à mudança de cada letra (ou outro qualquer símbolo) no texto a cifrar para outro (sendo a decifração efetuada simplesmente invertendo o processo). Ou seja, a ordem dos caracteres é mudada. Matematicamente trata-se da aplicação de uma função bijectiva para cifrar e da respectiva função inversa para decifrar.