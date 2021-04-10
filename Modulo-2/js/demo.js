// Creación del objeto Hotel
let hotel = {
  name: "Palace",
  location: "Madrid",
  image:
    "https://upload.wikimedia.org/wikipedia/commons/a/a8/Palace_Hotel_%28Madrid%29_03.jpg",
};

// Recogemos el contenido HTML
let hotelName = document.getElementById("name-hotel");
let hotellocation = document.getElementById("location-hotel");
let hotelImage = document.getElementById("img-hotel");
let hotelRating = document.getElementById("rating");

// Insertamos contenido HTML desde JS
hotelName.innerHTML = `Hotel ${hotel.name}`;
hotellocation.innerHTML = `${hotel.location}`;
hotelImage.src = `${hotel.image}`;

// Recogemos la puntuación mediante un prompt y la mostramos en el HTML
let puntuacion = prompt("Puntuación: del 1 al 5");
hotelRating.innerHTML = `${puntuacion} estrellas`;

// Recogemos la información de la reseña anónima
let anonimo = confirm("¿Deseas realizar la reseña de forma anónima");

document.getElementById("anonymous").checked = anonimo;
