/**
 * JS Aula 5 Calculadora Flex
 * @author Maria Karolina
 */

var etanol, gasolina;

function calcular(){

    etanol = document.getElementById('txtEtanol').value
    gasolina = document.getElementById('txtGasolina').value

    if(etanol == '' || etanol == 0){
        alert("Preencher o campo Etanol");
    } else if(gasolina == '' || gasolina == 0){
        alert("Preencher o campo Gasolina");
    } 


    etanol = parseFloat(frmFlex.txtEtanol.value.replace (",","."));
    gasolina = parseFloat(frmFlex.txtGasolina.value.replace (",","."));
    


    if (etanol < 0.7 * gasolina) {
        document.getElementById ('status').src="imagens/etanol.png";
    }
    
    else if (etanol > 0.7 * gasolina){
        document.getElementById ('status').src="imagens/gasolina.png";
    }else {
        document.getElementById ('status').src="imagens/neutro.png";
    } 
}

function resetar(){
    document.getElementById ('status').src="imagens/neutro.png";
}

