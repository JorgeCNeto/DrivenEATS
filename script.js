let comida;
let comidavalor;
function selecionarcomida(comidaselecionada){
    const comida = document.querySelector('.opcoescomida .selecionado');
    console.log(comida);
    if (comida !== null){
        
        comida.classList.remove('selecionado');
    }
    comidaselecionada.classList.add('selecionado');
    comidavalor.
    verificadordecompra();
}

let bebida;
function selecionarbebida(bebidaselecionada){
    const bebida = document.querySelector('.opcoesbebida .selecionado');
    console.log(bebida);
    if (bebida !== null){
        
        bebida.classList.remove('selecionado');
    }
    bebidaselecionada.classList.add('selecionado');
    verificadordecompra();
}

let sobremesa;
function selecionarsobremesa(sobremesaselecionada){
    const sobremesa = document.querySelector('.opcoessobremesa .selecionado');
    console.log(sobremesa);
    if (sobremesa !== null){
        
        sobremesa.classList.remove('selecionado');
    }
    sobremesaselecionada.classList.add('selecionado');
    verificadordecompra();
}

function verificadordecompra(){
    if (comida !== undefined) {
        if(bebida !== undefined){
            if(sobremesa !== undefined){
                console.log("funcionou");
                const fecharpedido = document.querySelector('');
                fecharpedido.classList.add('');
                fecharpedido.innerHTML = "Fechar pedido";
            }
        }
        
    }


}

