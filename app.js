// importar funções da livraria  do code.org para serem usadas na aplicação
import {
    onEvent, 
    showElement, 
    setScreen} 
    from './lib/code.org.js';  


// perguntar ao usuário quanto ele possui na carteira
let carteira = prompt("QUANTO VOCÊ POSSUI NA CARTEIRA?"); 


// perguntar ao usuario quanto ele quer economizar 
let economia = prompt("QUANTO VOCÊ QUER ECONOMIZAR?");

// a variavel extrato irá emitir uma listagem do que  foi gasto
// ela deve iniciar vazia para elecar os gastos executaods
let extrato = " ";

// definir o valor que cada item custa
const COMIDA = 18.00; 
const CIRCO = 15.00; 
const BRINQUEDO = 13.00; 

// incluir o valor informado para gastos na carteira
document.querySelector("#wallet").innerHTML = carteira;

// cada vez que o botão for clicado ele deve: 
onEvent("comida","click", () =>{    
    if (carteira - COMIDA < economia) {
        alert("VALOR NÃO LIBERADO, POIS ULTRAPASSA SUUA META DE ECONOMIA.");
        return;      
      }
    carteira -= COMIDA; // reduzir o valor que foi declarado na variável
    let dataHora = new Date().toLocaleString(); // obter a data e hora atual
    extrato += "- " + dataHora + " | R$" + COMIDA + " Gastos com Comida \n"; // armazenar em extrato o que está sendo gasto
    
    if (carteira <= economia) {
        walletColorRed();
        alert("ATENÇÃO! Você atingiu seu limite de gastos.");
        return;
    }
    
});    

onEvent("brinquedo","click", () => {
    if (carteira - BRINQUEDO < economia) {
        alert("VALOR NÃO LIBERADO, POIS ULTRAPASSA SUUA META DE ECONOMIA.");
        return;      
      }
    carteira -= BRINQUEDO;
    let dataHora = new Date().toLocaleString(); // obter a data e hora atual      
    extrato += "- " + dataHora + " | R$" + BRINQUEDO + " Gastos com Brinquedo \n"; 
    
    if (carteira <= economia) {
        walletColorRed();
        alert("ATENÇÃO! Você atingiu seu limite de gastos.");
        return;
    }
    
});

onEvent("circo","click", () => {
    if (carteira - BRINQUEDO < economia) {
        alert("VALOR NÃO LIBERADO, POIS ULTRAPASSA SUUA META DE ECONOMIA.");
        return;      
      }
    carteira -= CIRCO;
    let dataHora = new Date().toLocaleString(); // obter a data e hora atual      
    extrato += "- " + dataHora + " | R$" + CIRCO + " Gastos com Circo \n"; 
    
    if (carteira <= economia) {
        walletColorRed();
        alert("ATENÇÃO! Você atingiu seu limite de gastos.");
        return;
    }
    
});

// quando clicar no botão EXTRATO ele vai abrir uma caixa de alerta listando os gastos e informando quando tem de saldo e qual o valor definido como economia.
onEvent("go-extrato", "click", () => {    
    alert(extrato + "\n" + "Seu saldo atual é de R$" + carteira + ".\n" + "Sua meta de Economia é de R$" + economia); 
    let listHTML = imprimeExtrato(extractList);
    setContent(listHTML, "lista-de-gastos");
})

// criar a variavel que altera o background do BODY para vermelho
const walletColorRed = () => {
    document.querySelector("body").style.background= "linear-gradient(to left, #660000, #990000, #ff0000)";   
 } 

 function alteraCarteiraEalertaLimite() {
    document.querySelector("#wallet").innerHTML = carteira; // apresentar o valor restante em cateria deduzido do gasto
    if (carteira <= economia) { // se o valor em carteira for inferior que a economia pretendida ele vai avisar com a msg e mudar o fundo da tela para vermelho
        walletColorRed();
        alert("ATENÇAO! Você atingiu seu limite de gastos");
    }
}


