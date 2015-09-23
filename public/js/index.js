$( document ).ready( function() {

  $( '.blog-title' ).each( function() {
    $( this ).click( function() {
      $( this ).siblings( '.blog-body' ).toggle( 'slow' );
    });
  });


  // sticky nav bar
  var nav = $(".blog-header");
  var navPosition = nav.position().top;

  var positionNav = function() {
    if ($(window).scrollTop() > $(window).height() ) {
      nav.css("position", "fixed");
      nav.css("top", "0");
    } else {
      nav.css("position", "absolute");
    }
  }
  
  positionNav();
  window.onscroll = function() {
    positionNav();
  };

});
