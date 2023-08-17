// Crie uma função que retorne o maior valor entre três números.
export function questao2(a,b,c) {
    if (a > b && a > c) {
        console.log(`O maior valor é ${a}`);
    } else if (b > a && b > c) {
        console.log(`O maior valor é ${b}`);
    } else if (c > a && c > b) {
        console.log(`O maior valor é ${c}`);
    } else {
        console.log('Os valores são iguais');
    }
}