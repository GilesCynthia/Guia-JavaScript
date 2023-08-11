var palabra = prompt("Ingrese una palabra")

let reversar = (pal) => {
    let aux = "";
    for (let i = pal.length; i > 0 ; i--) {
        aux += pal.substring(i, i - 1);
    }
    document.getElementById("frase").innerHTML = aux;

}

reversar(palabra);