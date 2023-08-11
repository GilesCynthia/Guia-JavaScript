
var vectorcito = [];

do {
    var valor = parseInt(prompt("Ingrese un numero entero (0 para salir)"));
    vectorcito.push(valor);
} while (valor != 0)

vectorcito.pop();

function maximo() {
    let max = vectorcito[0];
    vectorcito.forEach((element) => {
        if(max<element) max = element;
    });
    
    document.getElementById("max").innerHTML = "El maximo es: " + max;
}


function minimo() {
    let min = Math.min.apply(null, vectorcito);
    //var min = Math.max(...array);

    document.getElementById("min").innerHTML = "El minimo es: " + min;
}

function promedio() {
    if (vectorcito.length === 0) {
        document.getElementById("prom").innerHTML = "El array se encuentra vacio"
    } else {
        let sum = 0;

        vectorcito.forEach((element) => {
            sum += element;
        });

        const promedio = sum / vectorcito.length;

        document.getElementById("prom").innerHTML = "El promedio del array es: " + promedio;


    }
}

minimo();
maximo();
promedio();
