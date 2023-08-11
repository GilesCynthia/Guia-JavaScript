/*
Crear un objeto libro que contenga las siguientes propiedades: ISBN, Título, Autor,
Número de páginas. Crear un método para cargar un libro pidiendo los datos al usuario
y luego informar mediante otro método el número de ISBN, el título, el autor del libro y el
numero de páginas.
*/


// Manana viernes tenemos que ver bien esta funcion(Cyn)
// sugiero hacer probar otra forma mas facil tambien


function cargarLibro() {
    var form = document.getElementById("form");
    var formData = new FormData(form);
    var Libro = {};
    formData.forEach(function (value, key) {
        Libro[key] = value;
    });
    var json = JSON.stringify(Libro);
    imprimir(json);



    // let Libro = new Object();
    // Libro.ISBN= document.getElementByID("isbn");
    // Libro.Titulo = document.getElementsById("titulo");
    // imprimir(Libro.ISBN);
    // imprimir(Libro.Titulo);   
}

function imprimir(dato) {
    document.getElementById("objeto").innerHTML = dato;
}


// El siguiente codigo lo encontro Mateo y lo usamos para crear el 
//la funcion cargarDatos()


/* <form id="myForm">
  <label for="name">Nombre:</label>
  <input type="text" id="name" name="name"><br><br>
  <label for="email">Email:</label>
  <input type="email" id="email" name="email"><br><br>
  <button type="button" onclick="submitForm()">Enviar</button>
</form>

<script>
function submitForm() {
  var form = document.getElementById("myForm");
  var formData = new FormData(form);
  var object = {};
  formData.forEach(function(value, key){
      object[key] = value;
  });
  var json = JSON.stringify(object);
  console.log(json);
}
</script> */