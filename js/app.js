$(document).foundation();

//menu button toggle
$('.menu-toggle').click(function() {
  $('header').toggleClass('active');
});

//fade title in/ out
$('.hero .title').headroom();

// waypoints fades
$('section.about').waypoint(function(direction) {
    if (direction == 'down') {
      $('.hero').addClass('fade-out');
    }
    else {
      $('.hero').removeClass('fade-out');
    }
  }, {
    offset: '20%'
  });
