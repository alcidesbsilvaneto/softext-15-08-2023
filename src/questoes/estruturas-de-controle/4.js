// Crie uma calculadora simples que opera com dois números e um operador (+, -, *, /).
export function questao4(x, y, operador) {
  if(typeof x !== 'number' || typeof y !== 'number') {
    console.log('Os valores devem ser números');
    return;
  }
  switch (operador) {
    case '+':
      console.log(x + y);
      break;
    case '-':
      console.log(x - y);
      break;
    case '*':
      console.log(x * y);
      break;
    case '/':
      console.log(x / y);
      break;
    default:
      console.log('Operador inválido');
  }
}