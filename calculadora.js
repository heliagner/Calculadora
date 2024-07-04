const prompt = require("prompt-sync")({sigint: true});

let resultado;

function verificarNumero(numero1, numero2){
    if (isNaN(numero1) || isNaN(numero2)){
        console.log("Digite um número válido");
        process.exit();
    };
};

function adicao(numero1, numero2){
    return numero1 + numero2
};

function subtracao(numero1, numero2){
    return numero1 - numero2
};

function multiplicacao(numero1, numero2){
    return numero1 * numero2
};

function divisao(numero1, numero2){
    if (numero2 === 0){
        console.log("Não existe número divisível por zero, tente novamente");
        } else {

        return numero1 / numero2
    };
};

function porcentagem(numero1, numero2){
    return (numero1 * numero2) / 100
};

function calculadora(){
let numero1, numero2, operacao;

console.log(` 
                ||| CALCULADORA SIMPLES |||
            `)
numero1 = Number(prompt(`1. Digite o primeiro número que deseja realizar a operação:`));
numero2 = Number(prompt(`2. Digite o segundo número que deseja realizar a operação: `));

verificarNumero(numero1, numero2);

console.log(`
                Agora digite qual operação deseja realizar:
                (+) Adição
                (-) Subtração
                (*) Multiplicação
                (/) Divisão
                (%) porcentagem`);

operacao = prompt();

    switch (operacao) {
        case "+":
            resultado = adicao(numero1, numero2);
            break;

        case "-":
            resultado = subtracao(numero1, numero2);
            break;
        
        case "*":
            resultado = multiplicacao(numero1, numero2);
            break;
        
        case "/":
            resultado = divisao(numero1, numero2);
            break;

        case "%":
            resultado = porcentagem(numero1, numero2);
            break;
    
        default:
            console.log("Operação inválida, digite novamente!");
            break;
        };
    }

calculadora();

console.log(`O resultado é: ${resultado}`);
