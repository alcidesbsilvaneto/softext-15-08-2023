// Crie um programa que imprima a tabela de multiplicação de 1 a 10.
export function questao2() {
    for (let i = 1; i <= 10; i++) {
        let linha = '';
        for (let j = 1; j <= 10; j++) {
            linha += `${i * j}\t`;
        }
        console.log(linha);
    }
}