$(document).foundation();


$(document).ready(function() {
  // menu width, set off screen offset
  var width = $('aside.off-menu').css('width');
  $('aside.off-menu').css('left', '-'+width);
  //menu button toggle
  $('.menu-toggle').click(function() {
    $('header').toggleClass('active');
  });
});
