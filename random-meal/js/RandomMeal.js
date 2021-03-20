const url = "https://www.themealdb.com/api/json/v1/1/random.php";
var refeicaoAleatoria = "";

class Refeicao {
    constructor(nome, img, youtube, instrucao, ingredientes) {
        this.nome = nome;
        this.img = img;
        this.youtube = youtube;
        this.instrucao = instrucao;
        this.ingredientes = ingredientes;

        this.getNome = function () {
            return this.nome;
        };
        this.getImg = function () {
            return this.img;
        };
        this.getYoutube = function () {
            return this.youtube;
        };
        this.getInstrucao = function () {
            return this.instrucao;
        };
        this.getIngredientes = function () {
            return this.ingredientes;
        };
    }
}

$(document).ready(function() {
    $("#refeicao").addClass("invisible");
});

$("#gerarRefeicao").click(async function(){
    $("#refeicao").removeClass("invisible");
    obterRefeicao();
    exibirRefeicao();
})

function obterRefeicao(){
    $.ajax({
        type: "POST",
        dataType: 'json',
        url: url,
        beforeSend: function(){
            console.log("Carregando...");
        },
        success: function(response){
            refeicaoAleatoria = new Refeicao(
                response.meals[0].strMeal,
                response.meals[0].strMealThumb,
                response.meals[0].strYoutube,
                response.meals[0].strInstructions,
                response.meals[0].strIngredient1 + "#" + response.meals[0].strIngredient2 + "#" + response.meals[0].strIngredient3 + "#" + response.meals[0].strIngredient4 + "#" + response.meals[0].strIngredient5 + "#" + response.meals[0].strIngredient6 + "#" + response.meals[0].strIngredient7 + "#" + response.meals[0].strIngredient8 + "#" + response.meals[0].strIngredient9 + "#" + response.meals[0].strIngredient10 + "#" + response.meals[0].strIngredient11 + "#" + response.meals[0].strIngredient12 + "#" + response.meals[0].strIngredient13 + "#" + response.meals[0].strIngredient14 + "#" + response.meals[0].strIngredient15 + "#" + response.meals[0].strIngredient16 + "#" + response.meals[0].strIngredient17 + "#" + response.meals[0].strIngredient18 + "#" + response.meals[0].strIngredient19 + "#" + response.meals[0].strIngredient20
            );
            
            console.log("Refeicao gerada com sucesso");
        },
        async : false,
        complete: function(){
            console.log("Requisição encerrada com sucesso!");
        },
        erro: function(){
            console.log("Erro ao buscar comida!");
        }
        
    });
    
}

function exibirRefeicao(){
    $("#nomeRefeicao").text(refeicaoAleatoria.getNome());
    $("#imgRefeicao").attr("src", refeicaoAleatoria.getImg());
    $("#imgRefeicao").attr("alt", refeicaoAleatoria.getNome() + ".jpg");
    $("#imgRefeicao").attr("title", refeicaoAleatoria.getNome());
    $("#ytbVideo").attr("src", adicionarEmbedVideoYtb(refeicaoAleatoria.getYoutube()));
    $("#comoFazer").text(refeicaoAleatoria.getInstrucao());
    adicionarIngredientesLista(refeicaoAleatoria.getIngredientes());
    formatarTextoInstrucoes(refeicaoAleatoria.getInstrucao());
}


function adicionarEmbedVideoYtb(linkVideo){
    var link = linkVideo;
    var pos1 = link.slice(0, 24);
    var pos2 = link.slice(-11)
    return pos1 +"embed/" + pos2;
}

function adicionarIngredientesLista(ingredientes){
    $("#ingredientes").empty();
    var txtIngredientes = ingredientes.split("#");
    var txtFormatado = "";
    $("#ingredientes").append("<li class='list-group-item font-weight-bold'>Ingredientes</li>")
    for (let i = 0; i < 20; i++) {
        if(txtIngredientes[i] != ""){
            $("#ingredientes").append("<li class='list-group-item list-group-item-action'>"+txtIngredientes[i]+"</li>")
           txtFormatado += txtIngredientes[i] = " ";
        }
        
    }
}

function formatarTextoInstrucoes(instrucoes){
    $("#passos").empty();
    var ins = instrucoes;
    ins = ins.split(".");
    $("#passos").append("<li class='list-group-item font-weight-bold'>Como fazer</li>");
    for (let i = 0; i < ins.length; i++) {
        $("#passos").append("<li class='list-group-item list-group-item-action'>"+ins[i]+"</li>")
        
    }
}