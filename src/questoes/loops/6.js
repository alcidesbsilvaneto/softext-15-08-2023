// Imprima os múltiplos de 3 de 0 a 30 utilizando um loop for.
export function questao6() {
    for (let i = 0; i <= 30; i++) {
        if (i % 3 === 0) {
            console.log(i);
        }
    }
}