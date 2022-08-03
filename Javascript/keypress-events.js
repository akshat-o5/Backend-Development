
// KEYDOWN
document.body.addEventListener('keydown', function(e){
    // e dontes the event parameter
    // Keycode tells us the number of ker which was pressed
    var keyCode = e.keyCode
    if(keyCode === 13){
        console.log('Keydown for => ' +keyCode)
    }
})



// KEYPRESS
document.body.addEventListener('keypress', function(e){
    // e dontes the event parameter
    // Keycode tells us the number of ker which was pressed
    var keyCode = e.keyCode
    if(keyCode === 13){
        console.log('Keypress for => ' +keyCode)
    }
})



// KEYUP
document.body.addEventListener('keyup', function(e){
    // e dontes the event parameter
    // Keycode tells us the number of ker which was pressed
    var keyCode = e.keyCode
    if(keyCode === 13){
        console.log('Keyup for => ' +keyCode)
    }
})