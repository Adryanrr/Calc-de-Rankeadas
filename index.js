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
