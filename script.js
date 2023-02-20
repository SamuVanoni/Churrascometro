
let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular() {

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let totalDeCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
    let totalDeLinguica = linguicaPP(duracao) * adultos + (linguicaPP(duracao) / 2 * criancas);
    let totalDeAsa = asaPP(duracao) * adultos + (asaPP(duracao) / 2 * criancas);
    let totalDeCerveja = cervejaPP(duracao) * adultos;
    let totalDeRefrigerante = refrigerantePP(duracao) * adultos + (refrigerantePP(duracao) / 2 * criancas);
    let totalDePaoDeAlho = paoDeAlhoPP(duracao);
    let totalDeQueijo = queijoPP(duracao);

    resultado.innerHTML += `<p> <img src="./carne.png" width="30px"> ${totalDeCarne / 1000}Kg de carne`
    resultado.innerHTML += `<p> <img src="./linguica.png" width="30px"> ${totalDeLinguica}g de linguiça`
    resultado.innerHTML += `<p> <img src="./asa.png" width="30px"> ${totalDeAsa}g de asa`
    resultado.innerHTML += `<p> <img src="./cerveja.png" width="30px"> ${Math.ceil(totalDeCerveja / 355)} latas de cerveja`
    resultado.innerHTML += `<p> <img src="./refrigerante.png" width="30px"> ${Math.ceil(totalDeRefrigerante / 2000)} garrafas de refrigerante`
    resultado.innerHTML += `<p> <img src="./pao.png" width="30px"> ${totalDePaoDeAlho} caixas de pão de alho`
    resultado.innerHTML += `<p> <img src="./queijo.png" width="30px"> ${totalDeQueijo} pacotes de queijo`

}

function carnePP(duracao) {
    if (duracao >=3) {
        return 250;
    } else {
        return 200;
    }
}

function linguicaPP(duracao) {
    if (duracao >=3) {
        return 150;
    } else {
        return 100;
    }
}

function asaPP(duracao) {
    if (duracao >=3) {
        return 100;
    } else {
        return 60;
    }
}

function cervejaPP(duracao) {
    if (duracao >=3) {
        return 2000;
    } else {
        return 1200;
    }
}

function refrigerantePP(duracao) {
    if (duracao >=3) {
        return 1000;
    } else {
        return 700;
    }
}

function paoDeAlhoPP(duracao) {
    let pessoas = parseInt(adultos.value) + parseInt(criancas.value);
    if (duracao >=3) {
        return Math.ceil(pessoas / 3);
    } else {
        return Math.ceil(pessoas / 2);
    }
}

function queijoPP(duracao) {
    let pessoas = parseInt(adultos.value) + parseInt(criancas.value);
    if (duracao >=3) {
        return Math.ceil(pessoas / 5);
    } else {
        return Math.ceil(pessoas / 4);
    }
}