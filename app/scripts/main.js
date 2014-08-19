'use strict';

(function($) {
  $(document).ready(function() {

    $('#navbar').on('click', function(eventObject) {
      eventObject.preventDefault();
      $(this).toggleClass('active');
      $('#nav-toggle').toggleClass('active');
    });

  });
})(jQuery);

