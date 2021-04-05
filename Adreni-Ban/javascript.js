"use strict";

$(document).ready(() => {
  $("#add").click(() => {
    agregarAlToDo();
    const NewID = parseInt($("#add").val());
    drag(NewID);
    limpiarCampos();
    
  });

});

/* Agregar ticket */
function agregarAlToDo() {

  if ($("#input-title").val() != "" && $("#input-descrip").val() != "") {
    var div = document.getElementById("DropToDo");

    var crearDiv = document.createElement("div");
    const NewID = parseInt($("#add").val());
    crearDiv.id = NewID;
    crearDiv.draggable = "true";
    crearDiv.className = "draggeable";
    crearDiv.style.borderRadius = "10px";
    crearDiv.style.border = "2px solid #0AA290";
    crearDiv.style.marginLeft = "50px";
    crearDiv.style.marginRight = "50px";
    crearDiv.style.marginTop = "10px";
    crearDiv.style.marginBottom = "10px";
    crearDiv.style.textAlign = "center";
    crearDiv.style.backgroundColor = "#FFFF";
    crearDiv.style.cursor = "grab";

    var crearH2 = document.createElement("h2");
    crearH2.innerText = $("#input-title").val();

    var descrip = document.createElement("p");
    descrip.innerText = $("#input-descrip").val();
    descrip.style.marginBottom = "0rem";

    var boton = document.createElement("button");
    boton.className = "Eliminar";
    boton.type = "submit";
    boton.innerText = "-";
    boton.style.borderRadius = "50%";
    boton.style.border = "1px solid red";
    boton.style.backgroundColor = "#dc3545";
    boton.style.color = "white";
    boton.title = "Eliminar";
    boton.style.marginLeft = "265px";
    boton.style.marginBottom = "5px";
    boton.onclick = eliminar(NewID);

    div.append(crearDiv);
    crearDiv.append(crearH2);
    crearDiv.append(descrip);
    crearDiv.append(boton);

  } else {
    if ($("#input-title").val() == "") {
      return alert("Debe ingresar un título");
    } else {
      return alert("Debe ingresar una descripción");
    }
  }
}

function drag(id) {
  const draggableElement = document.getElementById(id)
      draggableElement.addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("text/plain", draggableElement.id);
      });
  
      for (const dropZone of document.querySelectorAll(".dropzone")) {
        dropZone.addEventListener("dragover", (e) => {
          e.preventDefault();
        });
  
        dropZone.addEventListener("drop", (e) => {
          e.preventDefault();
  
          const droppedElementId = e.dataTransfer.getData("text/plain");
          const droppedElement = document.getElementById(droppedElementId);
          dropZone.appendChild(droppedElement);
        });
      }
  }


function generarIds() {
  var divs = parseInt($("#add").val());
  divs += 1;
  var val = document.getElementById("add");
  val.setAttribute("value",divs );

}

function eliminar(div) {
  console.log(div);
}

function limpiarCampos() {
  $("#input-title").val("");
  $("#input-descrip").val("");
}
