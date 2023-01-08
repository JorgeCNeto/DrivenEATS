function desmarcacaoAnterior(seletor){
    
    const caixaSelecionada = document.querySelector(`${seletor} .selecionado`);

   
    if (caixaSelecionada !== null){
        
        caixaSelecionada.classList.remove('selecionado');
    }
}

let comida;
let ComidaNome;
let ComidaValor;

function selecionarcomida(comidaselecionada){

    desmarcacaoAnterior('.opcoescomida');
    
    comidaselecionada.classList.add('selecionado');

    comida = comidaselecionada.innerHTML;
   
    const alimentos = document.querySelector('.alimento');
    ComidaNome = alimentos.innerHTML;
       
    
    const valor1 = document.querySelector('.preco');
    
    
    console.log(valor1);

    verificadordecompra();
}

let bebida;
let BebidaNome;
let BebidaValor;

function selecionarbebida(bebidaselecionada){

    desmarcacaoAnterior('.opcoesbebida');

    bebidaselecionada.classList.add('selecionado');

    bebida = bebidaselecionada.innerHTML;

    const bebidas = document.querySelector('.drink');
    BebidaNome = bebidas.innerHTML;

    verificadordecompra();

}
let sobremesa;
let SobremesaNome;
let SobremesaValor;

function selecionarsobremesa(sobremesaselecionada){

    desmarcacaoAnterior('.opcoessobremesa');

    sobremesaselecionada.classList.add('selecionado');

    sobremesa = sobremesaselecionada.innerHTML;

    const candy = document.querySelector('.docinho');
    SobremesaNome = candy.innerHTML;

    verificadordecompra();

}

function continuar(){

    if ( comida !== undefined){
        if ( bebida !== undefined ){
            if ( sobremesa !== undefined ) {
                       
             
            const painel = document.querySelector('.alternar');
            painel.classList.remove('escondido');
            const opaco = document.querySelector('.caixa');
            opaco.classList.remove('escondido');
          
            }
        }
    }
}

//let ValorTotal = ComidaValor + BebidaValor + SobremesaValor;

function verificadordecompra(){
   
    if ( comida !== undefined ){
        if ( bebida !== undefined){
            if ( sobremesa !== undefined ) {
            
            const ligar = document.querySelector('.confirm');
            ligar.disabled = false;

            const botaoContinuar = document.querySelector('.confirm');
            botaoContinuar.classList.add('confirm-pronto');
            botaoContinuar.innerHTML = "Fechar pedido";
            console.log(ComidaNome);
            console.log(BebidaNome);
            console.log(SobremesaNome);

            const pedido1 = document.querySelector('.itemdopedido h2');
            pedido1.innerHTML = `${ComidaNome}`
            const pedido12 = document.querySelector('.itemdopedido h3');
            pedido12.innerHTML = `${ComidaValor}`

            const pedido2 = document.querySelector('.itemdopedido2 h2');
            pedido2.innerHTML = `${BebidaNome}`
            const pedido22 = document.querySelector('.itemdopedido2 h3');
            pedido22.innerHTML = `${BebidaValor}`

            const pedido3 = document.querySelector('.itemdopedido3 h2');
            pedido3.innerHTML = `${SobremesaNome}`
            const pedido32 = document.querySelector('.itemdopedido3 h3');
            pedido32.innerHTML = `${SobremesaValor}`

            //const pedido32 = document.querySelector('.precodopedido h3');
            //pedido32.innerHTML = `${ValorTotal}`
            }
        }    
    }
}

function enviarpedido(){
    const enviar = document.querySelector('.envio');
    enviar.encodeURIComponent('https://wa.me/5599999999999');

}

function cancelar(){
    
    const cancelamento = document.querySelector('.alternar');
    cancelamento.classList.add('escondido');
    const opaco = document.querySelector('.caixa');
    opaco.classList.add('escondido');
}