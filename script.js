// CODIGO DO PENAL
let btnAjuda = document.querySelector(".botao-ajuda");
let btnFechar = document.querySelection(".botao-fechar");
let modal = document.querySelection(".modal-fundo");
btnAjuda.addEventListener("clik", abreModal);
btnFechar.addEventListener("clik", fechaModal);
function abreModal() {
    modal.style.display = "block",
}
function fechaModal() {
    modal.style.display = "none",
}
// TAMANHO DE FONTES
let tamanhoFonteAtual = 16;
const valorAdicionado = 2;
const valorSubtraido = 2;
let btnAumentaFonte = document.getElementByld("btnAumentaTexto");
let btnDiminuiFonte = document.getElementByld("btnDiminuiTexto");
btnAumentaFonte.addEventListener("clik", aumentaFonte);
btnDiminuiFonte.addEventListener("clik", diminuiFonte);
function aumentaFonte() {
    tamanhoFonteAtual = tamanhoFontrAtual + valorAdicionado;
    document.documentElement.style.fontSize = '${tamanhoFonteAtual}px';
}
function diminuiFonte() {
    tamanhoFonteAtual = tamanhoFonteAtual - valorSubtraido;
    document.documentElement.style.fontSize = '${tamanhoFonteAtual}px'
}
// LEITURA DE TELA
let lendo = false;
let btnLeitura = document.querySelector(".botao-leitura");
btnLeitura.addEventListener("click", lerEmVozAlta);
function lerEmVozAlta() {
    //se ja esta lendo
    if(lendo == true)
}
// se estiver pausado
if ( speechSynthesis.paused == true) {
    // continua de onde parou
    speechSynthesis.resume();
}
else{
    //speechSynthesis.pause();
}
return;
let btnAjuda = document.querySelector(".botao-ajuda");
let btnFechar = document.querySelector(".botao-fechar");
let modal = document.querySelector(".modal-fundo");


btnAjuda.addEventListener("click", abreModal);
btnFechar.addEventListener("click", fechaModal);


function abreModal(){
   modal.style.display = "block";
}
function fechaModal(){
   modal.style.display = "none";
}
let tamanhoFonteAtual = 16;
const valorAdicionado = 2;
const valorSubtraido = 2;


let btnAumentaFonte = document.getElementById("btnAumentaTexti");
let btnDiminuiFonte = document.getElementById("btnDiminuiTexto");


btnAumentaFonte.addEventListener("click", aumentaFonte);
btnDiminuiFonte.addEventListener("click", diminuiFonte);


function aumentaFonte(){
   tamanhoFonteAtual = tamanhoFonteAtual + valorAdicionado;
   document.documentElement.style.fontSize = `${tamanhoFonteAtual} px`;
}
function diminuiFonte(){
   tamanhoFonteAtual = tamanhoFonteAtual - valorSubtraido;
