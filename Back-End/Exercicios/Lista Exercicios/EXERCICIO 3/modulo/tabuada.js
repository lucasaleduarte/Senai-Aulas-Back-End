/*********************************************************************************************
- Objetivo: Arquivo responsável por gerar a tabuada de um número inicial e final
- Data: 05/03/2026
- Autor: Lucas
- Versão: 1.0
- *****************************************************************************************/

const validarVazio = function(tabInicial, tabFinal, contInicial, contFinal){
    if(
        tabInicial.trim() === '' ||
        tabFinal.trim() === '' ||
        contInicial.trim() === '' ||
        contFinal.trim() === ''
    ){
        return false
    }
    return true
}

const validacaoContador = function(contadorInicial, contadorFinal){
    if(contadorInicial)

}

const gerarTabuada = function(tabInicial, tabFinal, contInicial, contFinal){
    let tabuadaInicial = Number(tabInicial)
    let tabuadaFinal   = Number(tabFinal)
    

    while(tabuadaInicial <= tabuadaFinal){

        let contadorInicial = Number(contInicial)
        let contadorFinal   = Number(contFinal)
        let resultadoCont

        console.log(`\nTabuada do [${tabuadaInicial}]\n`)

        while(contadorInicial <= contadorFinal){
            resultadoCont = (contadorInicial * tabuadaInicial)
            console.log(`${tabuadaInicial} X ${contadorInicial} = ${resultadoCont}`)
            
            contadorInicial++
        }
        tabuadaInicial++
    }
}

gerarTabuada(5, 8, 3, 6)

