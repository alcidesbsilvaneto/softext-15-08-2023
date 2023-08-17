// Crie uma função que remova elementos duplicados de um array.
export function questao5(array) {
    if (!Array.isArray(array)) {
        console.log('O valor deve ser um array');
        return;
    }
    let novoArray = [];
    for (let i = 0; i < array.length; i++) {
        if (novoArray.indexOf(array[i]) === -1) {
            novoArray.push(array[i]);
        }
    }
    console.log(novoArray);
}