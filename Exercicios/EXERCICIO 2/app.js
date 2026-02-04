/************************************************************************
 * Objetivo: Calcular Imposto Composto
 * Data: 04/02/2026
 * Autor: Lucas
 * Versão: 1.0
 * **********************************************************************/

const readline = require('readline') 

const entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question('Digite seu nome: ', function(nome){
    let nomeCliente = nome 

    entradaDeDados.question('Digite o nome do produto: ', function(produto){
        let nomeProduto = produto

        entradaDeDados.question('Digite o valor da compra: ', function(valor){
            let valorProduto = valor
            
            entradaDeDados.question('Digite o tempo para completar o pagamento (Em meses): ', function(tempo){
                let meses = tempo
                
                
            })//Fecha Tempo
        })//Fecha Valor
    })//Fecha Produto    
})//Fecha Nome        
