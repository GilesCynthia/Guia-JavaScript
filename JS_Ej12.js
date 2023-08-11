var dato = prompt("Ingrese dato: ");

let tipoDato = (dato) => {
    let resp = "";
    if (isNaN(dato)) {
        if (dato=="true" || dato=="false") {
            resp = "Boolean";
        } else {
            resp = "String";
        }
    } else {
        resp = "Numero";
    }
    document.getElementById("respuesta").innerHTML = resp;
}

tipoDato(dato);



