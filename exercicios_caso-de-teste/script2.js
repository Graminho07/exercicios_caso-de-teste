// Questão 2
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Digite o tempo gasto na viagem em horas: ", function (tempo) {
    rl.question("Digite a velocidade média do automóvel em km/h: ", function (velocidadeMedia) {
        const tempoHoras = tempo / 60;
        const velocidadeKmMin = velocidadeMedia / 60;

        const distancia = velocidadeKmMin * tempoHoras;
        const consumo = distancia / 12;

        console.log(`Distância percorrida: ${distancia.toFixed(2)} km`);
        console.log(`Consumo de combustível: ${consumo.toFixed(2)} litros`);

        rl.close();
    });
});