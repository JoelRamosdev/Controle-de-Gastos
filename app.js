// importar funções da livraria  do code.org para serem usadas na aplicação
import {
    onEvent, 
    showElement, 
    setScreen} 
    from './lib/code.org.js';

    import {
    imprimeExtrato
    } 
    from './gui.js';

// definir abaixo quais as variáveis que serão usadas


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

// criar variavel de extrato que será alimentada conforme os gastos forem acontecendo
let extractList = []

// incluir o valor informado para gastos na carteira
document.querySelector("#wallet").innerHTML = carteira;

// cada vez que o botão for clicado ele deve: 
onEvent("comida","click", () =>{
    carteira -= COMIDA; // reduzir o valor que foi declarado na variável
    alert("Você gastou R$" + COMIDA + " com comida!"); // informar ao usuário que ouve uma transação
    extrato += "R$" + COMIDA + " Gastos com Comida \n"; // armazenar em extrato o que está sendo gasto
    alteraCarteiraEalertaLimite();  
    atualizaListaComida(); 
});    

onEvent("brinquedo","click", () => {
    carteira -= BRINQUEDO;
    alert("Você gastou R$" + BRINQUEDO + " com brinquedo!");    
    extrato += "R$" + BRINQUEDO + " Gastos com Brinquedo \n"; 
    alteraCarteiraEalertaLimite();   
    atualizaListaBrinquedo();
});

onEvent("circo","click", () => {
    carteira -= CIRCO; 
    alert("Você gastou R$" + CIRCO + " com circo!");    
    extrato += "R$" + CIRCO + " Gastos com Circo \n"; 
    alteraCarteiraEalertaLimite();
    atualizaListaCirco();
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

 function atualizaListaBrinquedo() {
    let transaction = {
        nome: "brinquedo",
        valor: 13.00,
        data: new Date()
    };
    extractList.push(transaction);
}

function atualizaListaComida() {
    let transaction = {
        nome: "comida",
        valor: 18.00,
        data: new Date()
    };
    extractList.push(transaction);
}

function atualizaListaCirco() {
    let transaction = {
        nome: "circo",
        valor: 15.00,
        data: new Date()
    };
    extractList.push(transaction);
}

 function alteraCarteiraEalertaLimite() {
    document.querySelector("#wallet").innerHTML = carteira; // apresentar o valor restante em cateria deduzido do gasto
    if (carteira <= economia) { // se o valor em carteira for inferior que a economia pretendida ele vai avisar com a msg e mudar o fundo da tela para vermelho
        walletColorRed();
        alert("ATENÇAO! Você atingiu seu limite de gastos");
    }
}


