var frase = prompt("Ingrese una frase");

function separador() {
    let aux = "";
    for (let i = 0; i < frase.length; i++) {
        aux += frase.substring(i, i + 1) + " ";

    }
    document.getElementById("frase").innerHTML = aux;
}

separador();