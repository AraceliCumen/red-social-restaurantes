// Splash
$(document).ready(function() {
  /* animacion el titulo Bienvenido */
  $('#title-welcome').fadeToggle(3500);
  /* Despues de unos segundo pasa a la sgt. vista */
  setTimeout(function() {
    window.location.href = 'views/login.html';
  }, 3000);
});

