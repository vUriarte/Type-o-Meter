const testWrapper = document.querySelector(".test-wrapper")
const testArea = document.querySelector("#test-area")
const originText = document.querySelector("#origin-text p").innerHTML
const resetButton = document.querySelector("#reset")
const theTimer = document.querySelector(".timer")

var timer = [0, 0, 0, 0]

// Adiciona zero inicial aos numeros <= 9

// Executa um timer padrão de minuto / segundo / centesimo

function runTimer(){
    let currentTimer = timer[0] + ":" + timer[1] + ":" + timer[2]  
    theTimer.innerHTML = currentTimer
    timer[3]++

    timer[0] = Math.floor((timer[3]/100)/60)
    timer[1] = Math.floor((timer[3]/100)) - (timer[0] * 60)
    timer[2] = Math.floor(timer[3] - (timer[1] * 100) - (timer[0] * 6000))

}

// Verifica o texto digitado com o fornecido na pasta

function spellCheck(){
    let textEntered = testArea.value
    console.log(textEntered)
}

// Inicia o cronometro

function start(){
    let textEnteredLength = testArea.value.length
    //console.log(textEnteredLength)
    if (textEnteredLength === 0){
        setInterval(runTimer, 10)

    }
}

// Recomecar o cronometro

function reset(){
    console.log("botao pressionado")
}

// Executa um timer padrão de minuto / segundo / centesimo

// Listener de eventos para entrada de teclado e o botao de recomecar

testArea.addEventListener("keypress", start, false)
testArea.addEventListener("keyup", spellCheck, false)
resetButton.addEventListener("click", reset, false)