function inserir(num){
    document.querySelector('#result--number').innerHTML += num;
}
function limpar(){
    document.querySelector('#result--number').innerHTML = '';
}
function voltar(){
    let tela = document.querySelector('#result--number').innerHTML;
    document.querySelector('#result--number').innerHTML = tela.substring(0, tela.length - 1);
}
function calcular(){
    let tela = document.querySelector('#result--number').innerHTML;
    if (tela){
        document.querySelector('#result--number').innerHTML = eval(tela);
    } else {
        document.querySelector('#result--number').innerHTML = "nenhum comando";
    }
}