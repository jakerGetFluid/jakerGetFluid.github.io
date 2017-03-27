$(document).foundation();

//menu button toggle
$('.menu-toggle').click(function() {
  $('header').toggleClass('active');
});

$('.off-menu ul li a').click(function() {
  $('header').removeClass('active');
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
// hero section fade out, about fade in
$('section.about').waypoint(function(direction) {
  if (direction == 'down') {
    $('.hero').addClass('fade-out');
    $('section.about').addClass('fade-in');
  }
  else {
    $('.hero').removeClass('fade-out');
    $('section.about').removeClass('fade-in');
  }
}, {
  offset: '20%'
});

//about fade out, skillset fade in
$('section.skillset').waypoint(function(direction) {
  if (direction == 'down') {
    $('section.about').removeClass('fade-in');
    $('section.skillset').addClass('fade-in');
  }
  else {
    $('section.about').addClass('fade-in');
    $('section.skillset').removeClass('fade-in')
  }
}, {
  offset: '20%'
});

//skillset fade out, samples fade in
$('section.samples').waypoint(function(direction) {
  if (direction == 'down') {
    $('section.skillset').removeClass('fade-in');
    $('section.samples').addClass('fade-in');
  }
  else {
    $('section.skillset').addClass('fade-in');
    $('section.samples').removeClass('fade-in')
  }
}, {
  offset: '20%'
});
