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
      $('html,body').animate({scrollTop: target.offset().top}, 1200); // Set scroll speed here
      return false;
    }
  }
});

//fade title in/ out
$('.hero .title').headroom();

if (Foundation.MediaQuery.atLeast('medium')) {
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
    offset: '40%'
  });
  //individual samples fade in - cole west
  $('.samples-wrap .sample.cw').waypoint(function(direction) {
    if (direction == 'down') {
      $('.samples-wrap .sample.cw, .samples-wrap .sample.bsmith').addClass('swoop');
    }
    else {
      $('.samples-wrap .sample.cw, .samples-wrap .sample.bsmith').removeClass('swoop');
    }
  }, {
    offset: '70%'
  });
  //individual samples fade in - maschoff
  $('.samples-wrap .sample.maschoff').waypoint(function(direction) {
    if (direction == 'down') {
      $('.samples-wrap .sample.maschoff, .samples-wrap .sample.redd').addClass('swoop');
    }
    else {
      $('.samples-wrap .sample.maschoff, .samples-wrap .sample.redd').removeClass('swoop');
    }
  }, {
    offset: '70%'
  });

  //individual samples fade in - zamp
  $('.samples-wrap .sample.zamp').waypoint(function(direction) {
    if (direction == 'down') {
      $('.samples-wrap .sample.zamp, .samples-wrap .sample.mc2b').addClass('swoop');
    }
    else {
      $('.samples-wrap .sample.zamp, .samples-wrap .sample.mc2b').removeClass('swoop');
    }
  }, {
    offset: '70%'
  });

  //resume fade in
  $('section.resume').waypoint(function(direction) {
    if (direction == 'down') {
      $('section.resume').addClass('fade-in');
    }
    else {
      $('section.resume').removeClass('fade-in');
    }
  }, {
    offset: '15%'
  });

  // outro fades in
  //resume fade in
  $('section.outro').waypoint(function(direction) {
    if (direction == 'down') {
      $('section.outro').addClass('fade-in');
    }
    else {
      $('section.outro').removeClass('fade-in');
    }
  }, {
    offset: '40%'
  });
}

//samples grid on click expand, show inner
$('.samples .sample .open-inner').click(function() {
  $(this).next('.inner').toggleClass('active');
  $(this).toggleClass('active');
});
