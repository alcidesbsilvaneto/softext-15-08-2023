//Imprima os números pares de 0 a 20 utilizando um loop for.
export function questao3() {
  for (let i = 0; i <= 20; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}