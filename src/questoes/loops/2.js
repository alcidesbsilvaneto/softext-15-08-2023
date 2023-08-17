// Calcule a soma dos números de 1 a 100 utilizando um loop while.
export function questao2() {
  let i = 1;
  let soma = 0;
  while (i <= 100) {
    soma += i;
    i++;
  }
  console.log(`A soma dos números de 1 a 100 é ${soma}`)
}