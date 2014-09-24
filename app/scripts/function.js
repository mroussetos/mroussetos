'use strict';

$(document).ready( function() {

  // store the removed DIV
  var myItem;

  $('#add_li').click( function() {
    if (myItem) {
      // append the DIV to UL.ADD
      myItem.appendTo($('ul.add'));
    }
  });

  $('#remove_li').click( function() {
    // remove the DIV and store into myItem
    myItem = $('ul.add div.work').detach();
  });

});