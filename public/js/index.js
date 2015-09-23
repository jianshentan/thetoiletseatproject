$( document ).ready( function() {

  $( '.blog-title' ).each( function() {
    $( this ).click( function() {
      $( this ).siblings( '.blog-body' ).toggle( 'slow' );
    });
  });

});
