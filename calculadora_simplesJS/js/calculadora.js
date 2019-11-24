function calcular(){
    var operacao = document.getElementById('operacao').value;
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    if(num1 == '' || num1 == null) {
        alert("Digite um número válido");
    }
    if(num2 == '' || num2 == null){
        alert("Digite um número válido");
    }

    var resultado = null;

    switch (operacao){
        case '1': // Subtração
            resultado = num1 - num2;
            break;

        case '2': // Soma
            resultado = num1 + num2;
            break;

        case '3': // Multiplicação
            resultado = num1 * num2;
            break;

        case '4': // Divisão
            resultado = num1 / num2;
            break;

            default:
                alert("A opção selecionada é inválida.");
                return false;
    }

    document.getElementById('resultado').value= resultado;
}

