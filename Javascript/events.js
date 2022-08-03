var btn = document.getElementById('btn-click')


function onbtnClick(){
    // alert('button clicked')
    btn.style.backgroundColor = "red"
}

// btn.onclick = onbtnClick;

btn. addEventListener('click', function(){
    alert('Ananymous function called')
})