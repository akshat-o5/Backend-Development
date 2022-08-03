var btn = document.getElementById('top-btn')


// MOUSE DOWN
btn.addEventListener('mousedown', function(){
    console.log('Mouse down event')
})


// MOUSE UP
btn.addEventListener('mouseup', function(){
    console.log('Mouse up event')
})


// CLICK
btn.addEventListener('click', function(){
    console.log('Click event')
})


// DOUBLE CLICK
btn.addEventListener('dblclick', function(){
    console.log('Double click event')
})



var over = document.getElementById('over')


// MOUSE OVER
over.addEventListener('mouseover', function(){
    console.log('Mouse Over event')
})


// UPDATE THE COUNT BY 1
var overCount = 0
over.addEventListener('mouseover', function(){
    var countElement = document.querySelector('#over > p')
    overCount += 1
    countElement.innerHTML = overCount
    // console.log('Mouse over event')
})


// MOUSE ENTER
var enter = document.getElementById('enter')

enter.addEventListener('mouseenter', function(){
    console.log('Mouse Enter event')
})


// UPDATE THE COUNT BY 1
var enterCount = 0
enter.addEventListener('mouseenter', function(){
    var countElement = document.querySelector('#enter > p')
    enterCount += 1
    countElement.innerHTML = enterCount
    // console.log('Mouse up event')
})


// MOUSE MOVE
var moveElement = document.getElementById('move')

moveElement.addEventListener('mousemove', function(){
    console.log("Mouse Move event")
})


// UPDATE THE COUNT BY 1
var moveCount = 0
moveElement.addEventListener('mousemove', function(){
    var countElement = document.querySelector('#move > p')
    moveCount += 1
    countElement.innerHTML = moveCount
    // console.log("Mouse Move event")
})