
do {
    var limite = parseInt(prompt("Ingrese valor limite positivo"));
} while (limite < 0)

function sumar() {
    let sum = 0;
    do {
        aux = parseInt(prompt("Ingrese un valor"));
        sum += aux;
    } while (sum <= limite)

 document.getElementById("res").innerHTML = "El valor que supero a " + limite + " es " + sum;
}

sumar();