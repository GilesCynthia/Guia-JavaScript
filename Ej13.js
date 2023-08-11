let persona = new Object();
persona.nombre = "Homero";
persona.edad = 45;
persona.sexo = 'H';
persona.esMayor = esMayor;

let persona1 = {
  nombre1 : "Otro",
  edad1 : 50, 
};

document.getElementById("objecto").innerHTML = `Nombre: ${persona.nombre}</br>Mayor de Edad:${persona.esMayor()}`;


function esMayor(){
    let respuesta = (this.edad>=12) ? "Es mayor de 12" : "Es menor de 12"
    return respuesta;
}
