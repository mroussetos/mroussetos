'use strict';

(function($) {
  $(document).ready(function() {

    $('#navbar').on('click', function(eventObject) {
      eventObject.preventDefault();
      $(this).toggleClass('active');
      $('#nav-toggle').toggleClass('active');
    });

    $('#header').stop().delay(2300).animate({'opacity': '0'}, 1500);
    $('#header').hover(
    function() {$('#header').stop().animate({'opacity': '1'}, 1000);},
    function() {$('#header').stop().animate({'opacity': '0'}, 1500);}
    );


  });
})(jQuery);

