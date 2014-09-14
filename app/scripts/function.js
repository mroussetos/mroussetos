'use strict';

$(document).ready( function() {

  $('#add_li').click( function() {
    $('.add').append('<ul><li></li></ul>');
  });

  $('#remove_li').click( function() {
    $('ul:last').remove();
  });

});