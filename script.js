function desmarcacaoAnterior(seletor){
    
    const caixaSelecionada = document.querySelector(`${seletor} .selecionado`);

   
    if (caixaSelecionada !== null){
        
        caixaSelecionada.classList.remove('selecionado');
    }
}

let comida;
let comidaNome;
let ComidaValor;

function selecionarcomida(comidaselecionada){

    desmarcacaoAnterior('.opcoescomida');
    
    comidaselecionada.classList.add('selecionado');

    comida = comidaselecionada.innerHTML;
   
    const alimentos = document.querySelector('.selecionado .alimento');
    comidaNome = alimentos.innerHTML;
       
    
    ComidaValor = document.querySelector('.selecionado .preco');
    ComidaValor = ComidaValor.outerText.replace('R$', '').replace(',', '.');

    ComidaValor = parseFloat(ComidaValor);
         
    verificadordecompra();
}

let bebida;
let BebidaNome;
let BebidaValor;

function selecionarbebida(bebidaselecionada){

    desmarcacaoAnterior('.opcoesbebida');

    bebidaselecionada.classList.add('selecionado');

    bebida = bebidaselecionada.innerHTML;

    const bebidas = document.querySelector('.selecionado .drink');
    BebidaNome = bebidas.innerHTML;

    BebidaValor = document.querySelector('.selecionado .preco2');
    BebidaValor = BebidaValor.outerText.replace('R$', '').replace(',', '.');

    BebidaValor = parseFloat(BebidaValor);
   
    verificadordecompra();

}
let sobremesa;
let SobremesaNome;
let SobremesaValor;

function selecionarsobremesa(sobremesaselecionada){

    desmarcacaoAnterior('.opcoessobremesa');

    sobremesaselecionada.classList.add('selecionado');

    sobremesa = sobremesaselecionada.innerHTML;

    const candy = document.querySelector('.selecionado .docinho');
    SobremesaNome = candy.innerHTML;

    SobremesaValor = document.querySelector('.selecionado .preco3');
    SobremesaValor = SobremesaValor.outerText.replace('R$', '').replace(',', '.');

    SobremesaValor = parseFloat(SobremesaValor);
   
    verificadordecompra();

}

let NomeCliente;
let Endereco;
function continuar(){

    if ( comida !== undefined){
        if ( bebida !== undefined ){
            if ( sobremesa !== undefined ) {
                       
                NomeCliente = prompt("Qual o seu nome?");
                Endereco = prompt("Qual o seu endereço?");
                const painel = document.querySelector('.alternar');
                painel.classList.remove('escondido');
                const opaco = document.querySelector('.caixa');
                opaco.classList.remove('escondido');
                
            }
        }
    }
}

let ValorTotal;


function verificadordecompra(){
   
    if ( comida !== undefined ){
        if ( bebida !== undefined){
            if ( sobremesa !== undefined ) {
            
          
            ComidaValor = parseFloat(ComidaValor);
            BebidaValor = parseFloat(BebidaValor);
            SobremesaValor = parseFloat(SobremesaValor);

            ValorTotal = ComidaValor + BebidaValor + SobremesaValor;
            

            const ligar = document.querySelector('.confirm');
            ligar.disabled = false;

            const botaoContinuar = document.querySelector('.confirm');
            botaoContinuar.classList.add('confirm-pronto');
            botaoContinuar.innerHTML = "Fechar pedido";
            
            const pedido1 = document.querySelector('.itemdopedido h2');
            pedido1.innerHTML = `${comidaNome}`
            ComidaValor = ComidaValor.toFixed(2).replace('.', ',');
            const pedido12 = document.querySelector('.itemdopedido h3');
            pedido12.innerHTML = `R$ ${ComidaValor}`

            const pedido2 = document.querySelector('.itemdopedido2 h2');
            pedido2.innerHTML = `${BebidaNome}`
            BebidaValor = BebidaValor.toFixed(2).replace('.', ',');
            const pedido22 = document.querySelector('.itemdopedido2 h3');
            pedido22.innerHTML = `R$ ${BebidaValor}`

            const pedido3 = document.querySelector('.itemdopedido3 h2');
            pedido3.innerHTML = `${SobremesaNome}`
            SobremesaValor = SobremesaValor.toFixed(2).replace('.', ',');
            const pedido32 = document.querySelector('.itemdopedido3 h3');
            pedido32.innerHTML = `R$ ${SobremesaValor}`
            
            const CASAS_DECIMAIS = 2;
            ValorTotal = ValorTotal.toFixed(CASAS_DECIMAIS).replace('.', ',');
            const precofinal = document.querySelector('.precodopedido h3');
            precofinal.innerHTML = `R$ ${ValorTotal}`

            
            }
        }    
    }
}


function enviarpedido(){
    
    var mensagem = "Olá,%20gostaria%20de%20fazer%20o%20pedido:%0a"
                    + "-%20Prato:%20"+ comidaNome +"%0a"
                    + "-%20Bebida:%20" + BebidaNome +"%0a"
                    + "-%20Sobremesa:%20" + SobremesaNome +"%0a"
                    + "Total:%20R$%20"+ ValorTotal + "%0a%0a"
                    + "Nome:%20"+ NomeCliente +"%0a"  
                    + "Endereço:%20"+ Endereco

    window.location.href="https://wa.me/559999999999?text=" + mensagem;
    return false;
}

function cancelar(){
    
    const cancelamento = document.querySelector('.alternar');
    cancelamento.classList.add('escondido');
    const opaco = document.querySelector('.caixa');
    opaco.classList.add('escondido');
}

