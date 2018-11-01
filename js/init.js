(function($){
  $(function(){

    $('.sidenav').sidenav();

  }); // end of document ready
})(jQuery); // end of jQuery name space

function slaveToggleClick() {
  $('#slaveShortInfo').toggle();
  $('#slaveMoreInfo').toggle();
}

function warumToggleClick() {
  $('#warumShortInfo').toggle();
  $('#warumMoreInfo').toggle();
}

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

window.onscroll = function (e) {
  // called when the window is scrolled.
  // document.documentElement.scrollTop
  if (window.pageYOffset === 0) {
    $('.navbar').addClass('mytop');
  } else {
    $('.navbar').removeClass('mytop');
  }
}
