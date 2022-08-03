console.log('JS  loaded')

// COUNTDOWN FUNCTION

var countDownElement = document.getElementById('countdown')
// console.log(countDownElement.innerHTML)

var initialCountdownVal = countDownElement.innerHTML

setInterval (function(){
    initialCountdownVal = initialCountdownVal > 0 ? initialCountdownVal - 1 : 0
    countDownElement.innerHTML = initialCountdownVal 
}, 1000)

