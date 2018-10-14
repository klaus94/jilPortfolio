(function($){
  $(function(){

    $('.sidenav').sidenav();

  }); // end of document ready
})(jQuery); // end of jQuery name space

function slaveToggleClick() {
  $('#slaveShortInfo').toggle();
  $('#slaveMoreInfo').toggle();
}

$(".arrow-smoothScroll").click(function(e){
  var $anchor = $(this);
  $('html, body').stop().animate({
      scrollTop: $($anchor.attr('href')).offset().top - 120
  }, 500);
  e.preventDefault(); //this is the important line.
});

// scroll spy
$(document).ready(function(){
  $('.scrollspy').scrollSpy();
  $('.scrollspy').on('scrollSpy:enter', function() {
    $('.navbar').find('a[href="#'+$(this).attr('id')+'"]').parent().addClass('active');
  });
  $('scrollspy').on('scrollSpy:exit', function(){
    $('.navbar').find('a[href="#'+$(this).attr('id')+'"]').parent().removeClass('active');
  });
});


