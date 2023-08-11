
var num = prompt("Ingrese un numero")

esPar(num);

function esPar(num){
    res = num % 2;
    if(num==0) 
    document.getElementById("res").innerHTML = "No es par ni impar"
    else if(res == 0)
    document.getElementById("res").innerHTML = "Es par"
    else
    document.getElementById("res").innerHTML = "Es impar"
}