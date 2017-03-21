$(document).foundation();

//menu button toggle
$('.menu-toggle').click(function() {
  $('header').toggleClass('active');
});

//smooth scroll
$('.ss').click(function() {
  if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    if (target.length) {
      $('html,body').animate({scrollTop: target.offset().top}, 1000); // Set scroll speed here
      return false;
    }
  }
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

$('a[name="about"]').waypoint(function(direction) {
  if (direction == 'down') {
    $('section.about').addClass('fade-in');
  }
  else {
    $('section.about').removeClass('fade-in');
  }
  }, {
    offset: '55%'
});
