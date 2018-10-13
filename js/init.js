(function($){
  $(function(){

    $('.sidenav').sidenav();

  }); // end of document ready
})(jQuery); // end of jQuery name space

// <body onscroll="scroll()">
// function scroll() {
//   // test: find y-position during scroll
//   console.log($(window).scrollTop());
// }

function slaveToggleClick() {
  $('#slaveShortInfo').toggle();
  $('#slaveMoreInfo').toggle();
}

$(".navbar a, .smoothScroll").click(function(e){
  var $anchor = $(this);
  $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top
  }, 500);
  e.preventDefault(); //this is the important line.
});