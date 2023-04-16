var imagenPrincipal = document.getElementById("imagen_principal");

imagenPrincipal.addEventListener("click", function() {
  var imagenAmpliada = document.createElement("img");
  imagenAmpliada.setAttribute("src", "../Imagenes/Santorosario/cartel.jpeg");
  imagenAmpliada.setAttribute("id", "imagen_ampliada");
  imagenAmpliada.addEventListener("click", function() {
    document.body.removeChild(imagenAmpliada);
  });
  document.body.appendChild(imagenAmpliada);
});