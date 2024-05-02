var teclado = require("prompt-sync")();
console.clear();
function menu() {
    console.log("Qual opera\u00E7\u00E3o deseja iniciar? Digite: ");
    console.log("** -> Eleva\u00E7\u00E3o");
    console.log("+ -> Adi\u00E7\u00E3o");
    console.log("- -> Subtra\u00E7\u00E3o");
    console.log("* -> Multiplica\u00E7\u00E3o");
    console.log("/ -> Divis\u00E3o");
    console.log("% -> Porcentagem \"Coloque a porcentagem primeiro\"");
    console.log("# -> Sair");
    var opcao = teclado("Digite a op\u00E7\u00E3o desejada: ");
    return opcao;
}
function entrada() {
    var n = parseFloat(teclado("Digite um n\u00FAmero: "));
    return n;
}
function soma() {
    var n1 = entrada();
    var n2 = entrada();
    console.log("".concat(n1, " + ").concat(n2, " = ").concat(n1 + n2));
    var resSom = n1 + n2;
    return resSom;
}
function porcentagem() {
    var n1 = entrada();
    var n2 = entrada();
    console.log("".concat(n1 / 100, " * ").concat(n2, " = ").concat((n1 / 100) * n2));
    var resSom = (n1 / 100) * n2;
    return resSom;
}
function elevacao() {
    var n1 = entrada();
    var n2 = entrada();
    console.log("".concat(n1, " ** ").concat(n2, " = ").concat(Math.pow(n1, n2)));
    var resSom = Math.pow(n1, n2);
    return resSom;
}
function subtracao() {
    var n1 = entrada();
    var n2 = entrada();
    console.log("".concat(n1, " - ").concat(n2, " = ").concat(n1 - n2));
    var resSub = n1 - n2;
    return resSub;
}
function multiplicacao() {
    var n1 = entrada();
    var n2 = entrada();
    console.log("".concat(n1, " x ").concat(n2, " = ").concat(n1 * n2));
    var resMult = n1 * n2;
    return resMult;
}
function divisao() {
    var n1 = entrada();
    var n2 = entrada();
    console.log("".concat(n1, " : ").concat(n2, " = ").concat(n1 / n2));
    var resDiv = n1 / n2;
    return resDiv;
}
switch (menu()) {
    case "+":
        soma();
        break;
    case "-":
        subtracao();
        break;
    case "*":
        multiplicacao();
        break;
    case "/":
        divisao();
        break;
    case "**":
        elevacao();
        break;
    case "%":
        porcentagem();
        break;
    default: break;
}
