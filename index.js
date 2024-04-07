// Calculadora de partidas Rankeadas
// **O Que deve ser utilizado**

// - Variáveis
// - Operadores
// - Laços de repetição
// - Estruturas de decisões
// - Funções

// ## Objetivo:

// Crie uma função que recebe como parâmetro a quantidade de vitórias e derrotas de um jogador,
// depois disso retorne o resultado para uma variável, o saldo de Rankeadas deve ser feito através do calculo (vitórias - derrotas)

// Se vitórias for menor do que 10 = Ferro
// Se vitórias for entre 11 e 20 = Bronze
// Se vitórias for entre 21 e 50 = Prata
// Se vitórias for entre 51 e 80 = Ouro
// Se vitórias for entre 81 e 90 = Diamante
// Se vitórias for entre 91 e 100= Lendário
// Se vitórias for maior ou igual a 101 = Imortal

// ## Saída

// Ao final deve se exibir uma mensagem:
// "O Herói tem de saldo de **{saldoVitorias}** está no nível de **{nivel}**

const nick = ("Adryanrr");
let vitorias = 95
let derrotas = 29
let saldoVitorias;
let rank;


function calcSaldo(vitorias, derrotas) {
    return vitorias - derrotas
}


function definirRank(saldoVitorias) {
    switch (true) {
        case saldoVitorias <= 10:
            return "Ferro";
          
        case saldoVitorias >= 11 && saldoVitorias <= 20:
            return "Bronze";
          
        case saldoVitorias >= 21 && saldoVitorias <= 50:
            return "Prata";
          
        case saldoVitorias >= 51 && saldoVitorias <= 80:
            return "Ouro";
          
        case saldoVitorias >= 81 && saldoVitorias <= 90:
            return "Diamante";
          
        case saldoVitorias >= 91 && saldoVitorias <= 100:
            return "Lendario";
          
        case saldoVitorias >= 101:
            return "Imortal";
          
        default:
            return "sem rank";
    }
}

saldoVitorias = calcSaldo(vitorias, derrotas)
rank = definirRank(saldoVitorias)

console.log("O jogador " + nick + " tem um saldo de " + saldoVitorias + " vitórias e está no rank " + rank);