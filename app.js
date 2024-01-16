let listadenumerossorteados=[]
let numerolimite = 5
let numeroSecreto = gerarNumeroAleatorio(numerolimite);
tentativa = 1;
console.log(numeroSecreto)


function limparcampo(){
    chute = document.querySelector('input')
    chute.value = ''
}


function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2} );
}

function mensagemInicial(){
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela(`p`, `Escolha um número entre 1 e ${numerolimite}`);
}

mensagemInicial();
function verificarChute() {
    let chute = parseInt(document.querySelector('input').value); // Convertendo para número
    console.log(chute == numeroSecreto);

    if (numeroSecreto == chute) {
        exibirTextoNaTela('h1', 'você acertou!');
        let palavratentativa = tentativa > 1? 'tentativas':'tentativa';
        let mensagemTentativas =`Você descobriu o número secreto em ${tentativa} ${palavratentativa}`; 
        exibirTextoNaTela('p',mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else 
    {
        if (chute < numeroSecreto){
            exibirTextoNaTela('p',`O número secreto é maior que ${chute}`)
        ;}else{
            exibirTextoNaTela('p',`O número secreto é menor que ${chute}`)
        ;}
        tentativa ++;
        limparcampo();
    }
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random()*numerolimite +1);
    let quantidadedenumerosescolhidos= listadenumerossorteados.length;
   
    if (quantidadedenumerosescolhidos==numerolimite){
        listadenumerossorteados=[];
    }
   
    if (listadenumerossorteados.includes(numeroEscolhido)){
       return gerarNumeroAleatorio();}
    else {
        listadenumerossorteados.push(numeroEscolhido); 
        return numeroEscolhido;
    }

}

function novoJogo(){
    mensagemInicial();
    limparcampo();
    tentativa=1
    numeroSecreto = gerarNumeroAleatorio(numerolimite)
    document.getElementById('reiniciar').setAttribute('disabled', true)
    console.log(numeroSecreto)
    console.log(listadenumerossorteados)
}


