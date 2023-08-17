// Crie uma função que calcule o fatorial de um número inteiro.
export function questao1(x) {

    let fatorial = 1;

    if (typeof x !== 'number') {
        console.log('O valor deve ser um número inteiro');
        return;
    }

    if (x < 0) {
        console.log('O valor deve ser um número inteiro positivo');
        return;
    }

    if (x === 0) {
        console.log('O fatorial de 0 é 1');
        return;
    }

    for (let i = 1; i <= x; i++) {
        fatorial *= i;
    }

    console.log(`O fatorial de ${x} é ${fatorial}`);

}