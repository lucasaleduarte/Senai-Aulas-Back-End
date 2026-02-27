/*************************************************************************************************
 * Objetivo: Arquivo responsavel pelas funções de calcular média, validar entradas e realizar a aprovação
 * Data: 27/02/2026
 * Autor: Lucas
 * Versão: 1.0
 *************************************************************************************************/

const validacaoNotas = function(valor1, valor2, valor3, valor4){
    let nota1 = Number(valor1)
    let nota2 = Number(valor2)
    let nota3 = Number(valor3)
    let nota4 = Number(valor4)

    if(
        nota1 < 0 || nota1 > 100 ||
        nota2 < 0 || nota2 > 100 ||
        nota3 < 0 || nota3 > 100 ||
        nota4 < 0 || nota4 > 100)
        { return 'Nota inválida apenas números ente 0 a 100'
    } return false
}

const validacaoVazio = function(entr1, entr2, entr3, entr4, entr5, entr6, entr7, entr8, entr9, entr10){
    if(
        entr1.trim() === '' ||
        entr2.trim() === '' ||
        entr3.trim() === '' ||
        entr4.trim() === '' ||
        entr5.trim() === '' ||
        entr6.trim() === '' ||
        entr7.trim() === '' ||
        entr8.trim() === '' ||
        entr9.trim() === '' ||
        entr10.trim() === '' 
    ){
        return false
    }
}

const calcularMedia = (valor1, valor2, valor3, valor4) => (Number(valor1) + Number(valor2) + Number(valor3) + Number(valor4)) / 4

const avaliacaoMedia = function(media){
    let status
    if(media >= 70){
        status = 'Aprovado'
        return status
    }else if(media < 50){
        status = 'Reprovado'
        return status
    }
}

let resposta = avaliacaoMedia(40)
console.log(resposta)