
// CAMBIO DE LINK MOVIL U ORDENADOR

const linkComentarios = document.querySelector(".btn__comentarios");

window.addEventListener("resize", function() {
  if (window.innerWidth <= 768) {
    linkComentarios.href = "https://www.booking.com/hotel/es/the-boathouse.es.html?auth_success=1&activeTab=htReviews";
  }
});

// CERRAR NAVBAR AL HACER CLICK EN UN ELEMENTO

document.addEventListener("click", function(event) {
    const navbarCollapse = document.querySelector(".navbar-collapse");
    if (event.target.matches(".navbar-collapse.show a:not(.dropdown-toggle)")) {
      navbarCollapse.classList.remove("show");
    }
  });


  // REINICIO FORMULARIO
  const form = document.getElementById("form");
  
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    form.reset();
  });
  
