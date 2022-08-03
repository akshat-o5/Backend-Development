var username = document.getElementById('username')
var loginForm = document.getElementById('login-form')

// console.log(username)


//CHANGE
username.addEventListener('input', function(event) {
    // console.log(event.target.value)
    var currentValue = event.target.value
    currentValue = currentValue.toUpperCase()
    console.log(currentValue)
    username.value = currentValue
})


//FOCUS
username.addEventListener('focus', function(){
    console.log('Element FOCUSED')
})


//BLUR
username.addEventListener('blur', function(){
    console.log('Element lost focus');
})


//LISTEN
loginForm.addEventListener('submit', function(){
    alert('Submit button clicked')
})