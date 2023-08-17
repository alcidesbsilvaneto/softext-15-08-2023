// Crie um loop que imprima a sequência de Fibonacci até o 10º termo.
export function questao5() {
    let a = 0;
    let b = 1;
    let c = 0;
    let i = 1;
    console.log(a);
    console.log(b);
    while (i <= 10) {
        c = a + b;
        console.log(c);
        a = b;
        b = c;
        i++;
    }
}