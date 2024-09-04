
let num1 = prompt("Digite: ");
let num2 = prompt("Digite: ");
let operador = prompt("Digite: ");

function calculadora(num1, num2, operador) {
    let resultado;

    switch (operador) {
        case '+':
            resultado = num1 + num2;
            break;
        case '-':
            resultado = num1 - num2;
            break;
        case '*':
            resultado = num1 * num2;
            break;
        case '/':
    
            if (num2 === 0) {
                alert("Erro: Divisão por zero");
            }
            resultado = num1 / num2;
            break;
        default:
            alert("Operador inválido");
    }


    alert(resultado);
}
calculadora(num1, num2, operador);