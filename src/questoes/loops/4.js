// Calcule o produto dos números de 1 a 5 utilizando um loop do...while.
export function questao4() {
    let i = 1;
    let produto = 1;
    do {
        produto *= i;
        i++;
    } while (i <= 5);
    console.log(`O produto dos números de 1 a 5 é ${produto}`);
}