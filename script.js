let comida;
let ComidaNome;
let ComidaValor;

function desmarcacaoAnterior(seletor){
    
    const caixaSelecionada = document.querySelector(`${seletor} .selecionado`);

   
    if (caixaSelecionada !== null){
        
        caixaSelecionada.classList.remove('selecionado');
    }
}


function selecionarcomida(comidaselecionada){

    desmarcacaoAnterior('.opcoescomida');
    
    comidaselecionada.classList.add('selecionado');

    comida = comidaselecionada.innerHTML;
    console.log(comida);

    const alimentos = document.querySelectorAll('alimento');
    ComidaNome = alimentos.innerHTML;
    console.log(ComidaNome);
    
    
    const ComidaValor = document.getElementsByClassName('preco');
    
    console.log(ComidaValor);

    verificadordecompra();
}



let bebida;

function selecionarbebida(bebidaselecionada){

    desmarcacaoAnterior('.opcoesbebida');

    bebidaselecionada.classList.add('selecionado');

    bebida = bebidaselecionada.innerHTML;

    verificadordecompra();

}
let sobremesa;

function selecionarsobremesa(sobremesaselecionada){

    desmarcacaoAnterior('.opcoessobremesa');

    sobremesaselecionada.classList.add('selecionado');

    sobremesa = sobremesaselecionada.innerHTML;

    verificadordecompra();

}

function continuar(){

    if ( comida !== undefined){
        if ( bebida !== undefined ){
            if ( sobremesa !== undefined ) {
             
            
            // ocultar o painel de seleção de jogo e qtde de jogadores
            //const painel = document.querySelector('.selecionar-jogo');
            //painel.classList.add('escondido');
            //document.querySelector('.selecionar-jogo').classList.add('escondido');

            // exibir o painel de carregando o jogo 
           // const overlay = document.querySelector('.loading-overlay');
            //overlay.classList.remove('escondido');

            // alterar a mensagem com o jogo selecionado e qtde de joga. selecionado
           // const mensagem = document.querySelector('.mensagem-iniciando');
            //mensagem.innerHTML = "INICIANDO POKER 100 com o jogo "+jogo+" e Qtde de Jogadores "+qtdeJogadores;
           // mensagem.innerHTML = `INICIANDO POKER 100 com o jogo ${jogo} e Qtde de Jogadores ${qtdeJogadores}`;
            }
        }
    }
}

function verificadordecompra(){
   
    if ( comida !== undefined ){
        if ( bebida !== undefined){
            if ( sobremesa !== undefined ) {
                
            const botaoContinuar = document.querySelector('.confirm');
            botaoContinuar.classList.add('confirm-pronto');
            botaoContinuar.innerHTML = "Fechar pedido";
             }
        }    
    }
}

