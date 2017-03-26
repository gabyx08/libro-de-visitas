
function mostrar(){
  var texto = document.getElementById("escribirComentario").value;
  document.getElementById("comentarioPrevio").innerHTML=texto;
}

function tamanoTexto(caso){
  switch (caso) {
    case 1:
      document.getElementById("comentarioPrevio").style.fontSize="45px";
      break;
    case 2:
      document.getElementById("comentarioPrevio").style.fontSize="30px";
      break;
    case 3:
      document.getElementById("comentarioPrevio").style.fontSize="20px";
      break;
  }
}

function alinearTexto(caso){
  switch (caso) {
    case 1:
      document.getElementById("comentarioPrevio").style.textAlign = "left";
      break;
    case 2:
      document.getElementById("comentarioPrevio").style.textAlign = "center";
      break;
    case 3:
      document.getElementById("comentarioPrevio").style.textAlign = "right";
      break;
  }
}

function cambiarColor(caso){
  switch (caso){
    case 1:
      var colorTexto= prompt("Ingresa el codigo de color (hexadecimal) para cambiar el color letra")
      document.getElementById("comentarioPrevio").style.color = colorTexto;
      break;
    case 2:
      var colorFondo= prompt("Ingresa el codigo de color (hexadecimal) para cambiar el fondo")
      document.getElementById("comentarioPrevio").style.backgroundColor = colorFondo;
      break;
  }
}

function crearLista(){
  var numeroLista = prompt("Ingresa cuantos elementos quieres en tu lista");
  var i = 1;
  var ol = document.createElement("OL");
  while(i <= numeroLista){
    var li= document.createElement("LI");
    var contenidoLi=prompt("Contenido " + i);
    li.appendChild(document.createTextNode(contenidoLi));
    ol.appendChild(li);
    i++;  
  }
  document.getElementById("comentarioPrevio").appendChild(ol);
}

function enviar() {
  // se crea etiqueta <p> y <hr> con .createElement
  var crearP= document.createElement("P");
  var crearhr= document.createElement("HR");
  // se guarda el contenido del elemento p con id=comentarioPrevio en una nueva variable llamada comentarioFinal
  var comentarioFinal= document.getElementById("comentarioPrevio").innerHTML;
  // al elemento p creado se le añade el contenido guardado en comentarioFinal como un nodotexto 
  // (comentarioFinal ahora es hijo de p)
  crearP.appendChild(document.createTextNode(comentarioFinal));
  // se guarda en una variable el elemento <p> en la posicion 0 ubicado en el <div> con id=mostrarComentario 
  var primerP= document.getElementById("mostrarComentario").getElementsByTagName("P")[0];
  // se indica que se va añadir los elementos <p>(crearP) y <hr>(crearHr) antes del elemento <p> mencionado en la linea anterior
  document.getElementById("mostrarComentario").insertBefore(crearP,primerP);
  document.getElementById("mostrarComentario").insertBefore(crearhr,primerP);
  // se vacia el elemento <textarea> con id=escribirComentario y el elemento <p> con id=comentarioPrevio
  document.getElementById("escribirComentario").value="";
  document.getElementById("comentarioPrevio").innerHTML="";
}

