var frase = prompt("Ingrese una frase")

let mayorPalabra = (fra) => {
    let pos = fra.indexOf(" ", 0);
    let mayor = fra.substring(0, pos - 1);

    /* esto se puede hacer con .split */
    for (let i = pos + 1; i < fra.length; i++) {
        pos = fra.indexOf(" ", i);
        aux = fra.substring(i, pos - 1);
        tam = aux.length;
        if (tam > mayor.length) mayor = aux;
    }
    document.getElementById("frase").innerHTML = "La palabra de mayor longitus es: " + mayor;

}

mayorPalabra(frase);