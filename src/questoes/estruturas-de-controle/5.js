// Verifique se uma string é um palíndromo (lê-se da mesma forma de trás para frente).
export function questao5(palavra) {
    let palavraInvertida = '';
    for (let i = palavra.length - 1; i >= 0; i--) {
        palavraInvertida += palavra[i];
    }
    if (palavra === palavraInvertida) {
        console.log('A palavra é um palíndromo');
    } else {
        console.log('A palavra não é um palíndromo');
    }
}