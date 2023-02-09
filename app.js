'use strict'

const nota1 = document.getElementById('nota1');

const nota2 = document.getElementById('nota2');

const calcular = document.getElementById('calcular');

const situacao = document.getElementById('situacao')

const formulario = document.getElementById('formulario')

function somar () {
    

    if (situacao <= 6) {
        console.log('Reprovado')
    } else {
        console.log('Aprovado')
    }
    
    situacao.value =(~~nota1.value + ~~nota2.value)/2
}

calcular.addEventListener('click', somar);