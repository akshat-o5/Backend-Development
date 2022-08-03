// REDUCE THE FONTSIZE OF COUNTDOWN WITH EVERY COUNTDOWN


var countdownElement = document.getElementById('countdown')

var initialCountdownVal = countdownElement.innerHTML


var interval = setInterval(function(){
    initialCountdownVal = initialCountdownVal > 0 ? initialCountdownVal - 1 : 0
    countdownElement.innerHTML = initialCountdownVal 
    countdownElement.style.fontSize = initialCountdownVal * 100 + 'px'
    console.log(countdownElement.style.fontSize = initialCountdownVal * 100 + 'px')

    if (initialCountdownVal <= 0){
        clearInterval(interval)
    }

}, 1000)