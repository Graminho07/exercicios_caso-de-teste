// Questão 3
// definir a matriz de exemplo
const matriz = [
    [2, 0, 1, 0, 5],
    [0, 3, 0, 0, 0],
    [1, 0, 4, 0, 0],
    [0, 0, 0, 7, 0],
    [0, 0, 0, 0, 6]
];

// inicializar as variáveis necessárias
let numNaoNulos = 0;
let menorValor = Infinity;
let somaDiagonalPrincipal = 0;
let somaAbaixoDiagonal = 0;
let somaAcimaDiagonal = 0;

// percorrer a matriz
for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        const valor = matriz[i][j];
        // verificar se o valor é não nulo
        if (valor !== 0) {
            numNaoNulos++;
        }
        // verificar se o valor é menor que o menorValor atual
        if (valor < menorValor) {
            menorValor = valor;
        }
        // verificar se estamos na diagonal principal
        if (i === j) {
            somaDiagonalPrincipal += valor;
        }
        // verificar se estamos abaixo da diagonal principal
        if (i > j) {
            somaAbaixoDiagonal += valor;
        }
        // verificar se estamos acima da diagonal principal
        if (i < j) {
            somaAcimaDiagonal += valor;
        }
    }
}

// exibir os resultados
console.log("Número de elementos não nulos:", numNaoNulos);
console.log("Menor valor:", menorValor);
console.log("Soma da diagonal principal:", somaDiagonalPrincipal);
console.log("Soma abaixo da diagonal principal:", somaAbaixoDiagonal);
console.log("Soma acima da diagonal principal:", somaAcimaDiagonal);