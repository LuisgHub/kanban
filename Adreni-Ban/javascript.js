"use strict";

$(document).ready(() => {
  $("#add").click(() => {
    agregarAlToDo();
    drag();
    limpiarCampos();
    
  });
});

/* Agregar ticket */
function agregarAlToDo() {

  if ($("#input-title").val() != "" && $("#input-descrip").val() != "") {
    var div = document.getElementById("DropToDo");

    var crearDiv = document.createElement("div");
    crearDiv.id = parseInt($("#add").val());
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

    div.append(crearDiv);
    crearDiv.append(crearH2);
    crearDiv.append(descrip);
  } else {
    if ($("#input-title").val() == "") {
      return alert("Debe ingresar un título");
    } else {
      return alert("Debe ingresar una descripción");
    }
  }
}

function drag() {
  const draggableElement = document.querySelector(".draggeable");
      draggableElement.addEventListener("dragstart", (e) => {
        console.log(e);
        e.dataTransfer.setData("text/plain", draggableElement.id);
      });
  
      for (const dropZone of document.querySelectorAll(".dropzone")) {
        dropZone.addEventListener("dragover", (e) => {
          e.preventDefault();
        });
  
        dropZone.addEventListener("drop", (e) => {
          e.preventDefault();
  
          const droppedElementId = e.dataTransfer.getData("text/plain");
          console.log(document.getElementById(droppedElementId));
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

function limpiarCampos() {
  $("#input-title").val("");
  $("#input-descrip").val("");
}
