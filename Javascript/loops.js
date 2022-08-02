// LOOPS IN JAVASCRIPT


     //FOR LOOP

var arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr);
for (var i=0; i<arr.length; i++){
    console.log(arr[i])
}



     //FOR EACH LOOP  

arr.forEach(function(element){
    console.log(element)
})       



      //WHILE LOOP

let j = 0;
while(j<arr.length){
    console.log(arr[j]);
    j++;
}



          //DO WHILE LOOP
          
do{
    console.log(arr[j]);
    j++;
} while(j<arr.length);  

