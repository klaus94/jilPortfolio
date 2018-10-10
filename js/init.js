(function($){
  $(function(){

    $('.sidenav').sidenav();

  }); // end of document ready
})(jQuery); // end of jQuery name space

function scroll() {
  // test: find y-position during scroll
  console.log($(window).scrollTop());
}
