
var botao_1 = document.querySelector("#btn_1");
var botao_2=  document.querySelector("#btn_2");
var texto = document.querySelector("#texto");

function sair_jogo() {
    alert("Poxa, saudade do que a gente não viveu ainda");
}


function fase_um () {
    texto.textContent = " Você é Julia, uma médica recém contratada da empresa. À medida que seus pacientes se recuperam  eles adquirem uma ideologia em comum: tornar o presidente o governante mundial. Sabendo que cada vez mais pessoas desejam receber o tratamento milagroso e, da ameaça que o mundo corre , qual deverá ser seu próximo passo? ";
    botao_1.textContent=" Concordar com seus pacientes juntar-se à eles";
    botao_2.textContent = " Investigar os planos dos pacientes ";
    botao_1.onclick= perde_jogo_um;
    botao_2.onclick= fase_dois;


}

function fase_dois (){
    texto.textContent = "Descobre que eles estão espalhando várias fakenews nas redes sociais para  mais pessoas aderirem ao novo tratamento. "
    botao_1.textContent= "Decide se infiltrar nos grupos virtuais";
    botao_2.textContent = " Pede auxílio à seu amigo hacker ";
    botao_1.onclick= perde_jogo_dois;
    botao_2.onclick= fase_tres;

}

function perde_jogo_dois (){
    texto.textContent = "OOPS.. parece que descobriram suas intenções e você foi presa"
    botao_1.textContent = " Liga para seu amigo hacker te tirar da prisão";
    botao_2.textContent= "DESISTOO";

    botao_1.onclick= fase_tres;
    botao_2.onclick= perde_jogo_um;
}

function fase_tres(){
    texto.textContent = "Seu amigo hacker descobre os planos do governo e te conta"
    botao_1.textContent = "Com medo de perder o emprego você o denuncia";
    botao_2.textContent= " Vocês publicam os documentos";

    botao_1.onclick= perde_vacilona;
    botao_2.onclick= victoria;
}

function victoria () {
    texto.textContent = "PARABÉÉNS !! Graças a sua coragem foi possível evitar a destruição mundial";
    botao_1.style.display = "none";
    botao_2.style.display = "none";
}
function perde_vacilona(){
    alert("VACILÃO MORRE CEDO !!!!");
    texto.textContent = " Como esperado, a IA adquirou uma inteligência superior aos apoiadores do governo. Em prol da proteção mundial, ela opta por eliminá -los"
    botao_1.style.display = "none";
    botao_2.style.display = "none";

}

function perde_jogo_um(){
    texto.textContent = " Como esperado, a IA adquirou uma inteligência superior aos apoiadores do governo. Em prol da proteção mundial, ela opta por eliminá -los"
    botao_1.style.display = "none";
    botao_2.style.display = "none";
}

