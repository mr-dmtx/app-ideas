var includeUpperCase = false;
var includeLowerCase = false;
var includeNumbers = false;
var includeSymbols = false;
var lenghtPass = 10;

function GerarSenha(){
    var senhaGerada = "";
    ValoresForm();
    for (let i = 0; i < lenghtPass; i++) {
        var numeroAleatorio = pegarNumeroAleatorio(1, 4);
        console.log(numeroAleatorio);
        if(numeroAleatorio == 1){
            senhaGerada += (includeUpperCase) ? String.fromCharCode(pegarNumeroAleatorio(65, 90)) : String.fromCharCode(pegarNumeroAleatorio(33, 126));
        }
        else if(numeroAleatorio == 2){
            senhaGerada += (includeLowerCase) ? String.fromCharCode(pegarNumeroAleatorio(97, 122)) : String.fromCharCode(pegarNumeroAleatorio(33, 126));
        }
        else if(numeroAleatorio == 3){
            senhaGerada += (includeNumbers) ? String.fromCharCode(pegarNumeroAleatorio(48, 57)) : String.fromCharCode(pegarNumeroAleatorio(33, 126));
        }
        else if(numeroAleatorio == 4){
            senhaGerada += (includeSymbols) ? pegarSimbolo() : String.fromCharCode(pegarNumeroAleatorio(33, 126));
        }
    }

    var informacoes = zxcvbn(senhaGerada);
    document.getElementById("password").innerHTML = senhaGerada;
    document.getElementById("nota").innerHTML = "Pontuação da senha: " + informacoes.score + " / 4";
    
    
    console.log(zxcvbn(senhaGerada));
    console.log(informacoes.calc_time);

}

function ValoresForm(){
    if(document.getElementById("cbSymbols").checked){
        includeSymbols = true;
    }
    if(document.getElementById("cbNumbers").checked){
        includeNumbers = true;
    }
    if(document.getElementById("cbUpperCase").checked){
        includeUpperCase = true;
    }
    if(document.getElementById("cbLowerCase").checked){
        includeLowerCase = true;
    }

    if(document.getElementById("tamanhoSenha").value > 0){
        lenghtPass = document.getElementById("tamanhoSenha").value;
    }
}

function pegarNumeroAleatorio(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

function pegarSimbolo(){
    var symbol = "";
    var numeroAleatorio = pegarNumeroAleatorio(1, 4);
    symbol += (numeroAleatorio == 1) ? String.fromCharCode(pegarNumeroAleatorio(33, 47)) : "";
    symbol += (numeroAleatorio == 2) ? String.fromCharCode(pegarNumeroAleatorio(58, 64)) : "";
    symbol += (numeroAleatorio == 3) ? String.fromCharCode(pegarNumeroAleatorio(91, 96)) : "";
    symbol += (numeroAleatorio == 4) ? String.fromCharCode(pegarNumeroAleatorio(123, 126)) : "";

    return symbol;
}