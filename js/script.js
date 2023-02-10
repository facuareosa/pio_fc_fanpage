
// CAMBIO DE LINK MOVIL U ORDENADOR

const linkComentarios = document.querySelector(".btn__comentarios");

window.addEventListener("resize", function() {
  if (window.innerWidth <= 768) {
    linkComentarios.href = "https://www.booking.com/hotel/es/the-boathouse.es.html?auth_success=1&activeTab=htReviews";
  }
});
