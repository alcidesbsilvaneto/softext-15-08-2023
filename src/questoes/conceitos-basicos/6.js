// Escreva uma função que inverta uma string (exemplo: "hello" => "olleh").
export function questao6(texto) {
    if (typeof texto !== 'string') {
        console.log('O valor deve ser uma string');
        return;
    }
    let novoTexto = '';
    for (let i = texto.length - 1; i >= 0; i--) {
        novoTexto += texto[i];
    }
    console.log(novoTexto);
}