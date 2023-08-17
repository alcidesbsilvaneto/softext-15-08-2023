// Crie uma função que receba um array de números e retorne a média deles.
export function questao4(array) {
    if (!Array.isArray(array)) {
        console.log('O valor deve ser um array');
        return;
    }
    let soma = 0;
    for (let i = 0; i < array.length; i++) {
        if (typeof array[i] !== 'number') {
            console.log('O array deve conter apenas números');
            return;
        }
        soma += array[i];
    }
    console.log(`A média dos valores é ${soma / array.length}`);
}