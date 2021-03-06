const testWrapper = document.querySelector(".test-wrapper")
const testArea = document.querySelector("#test-area")
const originText = document.querySelector("#origin-text p").innerHTML
const resetButton = document.querySelector("#reset")
const theTimer = document.querySelector(".timer")

var timer = [0, 0, 0, 0]
var interval
var timerRunning = false
// Adiciona zero inicial aos numeros <= 9

function leadingZero(time){
    if (time <= 9){
        time = "0" + time
    }
    return time
}

// Executa um timer padrão de minuto / segundo / centesimo

function runTimer(){
    let currentTimer = leadingZero(timer[0]) + ":" + leadingZero(timer[1]) + ":" + leadingZero(timer[2])  
    theTimer.innerHTML = currentTimer
    timer[3]++

    timer[0] = Math.floor((timer[3]/100)/60)
    timer[1] = Math.floor((timer[3]/100)) - (timer[0] * 60)
    timer[2] = Math.floor(timer[3] - (timer[1] * 100) - (timer[0] * 6000))

}

// Verifica o texto digitado com o fornecido na pasta

function spellCheck(){
    let textEntered = testArea.value
    let originTextMatch = originText.substring(0,textEntered.length)
    if (textEntered == originText){
        clearInterval(interval)
        testWrapper.style.borderColor = "#429890"
    } else {
        if (textEntered == originTextMatch){
            testWrapper.style.borderColor = "#65CCf3"
        } else  {
            testWrapper.style.borderColor = "#E95D0F"
        }
    }
}

// Inicia o cronometro

function start(){
    let textEnteredLength = testArea.value.length
    //console.log(textEnteredLength)
    if (textEnteredLength === 0 && !timerRunning){
        interval = setInterval(runTimer, 10)
        timerRunning = true
    }
}

// Recomecar o cronometro

function reset(){
    clearInterval(interval)
    interval = null
    timer = [0, 0, 0, 0]
    timerRunning = false
    testArea.value = ""
    theTimer.innerHTML = "00:00:00"
    testWrapper.style.borderColor = 'grey'
}

// Executa um timer padrão de minuto / segundo / centesimo

// Listener de eventos para entrada de teclado e o botao de recomecar

testArea.addEventListener("keypress", start, false)
testArea.addEventListener("keyup", spellCheck, false)
resetButton.addEventListener("click", reset, false)