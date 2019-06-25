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

  //individual samples fade in - veggie tracker
  $('.samples-wrap .sample.vt').waypoint(function(direction) {
    if (direction == 'down') {
      $('.samples-wrap .sample.vt, .samples-wrap .sample.bm').addClass('swoop');
    }
    else {
      $('.samples-wrap .sample.vt, .samples-wrap .sample.bm').removeClass('swoop');
    }
  }, {
    offset: '70%'
  });
  //individual samples fade in - cultureiq
  $('.samples-wrap .sample.js').waypoint(function(direction) {
    if (direction == 'down') {
      $('.samples-wrap .sample.js, .samples-wrap .sample.ciq').addClass('swoop');
    }
    else {
      $('.samples-wrap .sample.js, .samples-wrap .sample.ciq').removeClass('swoop');
    }
  }, {
    offset: '70%'
  });
  //individual samples fade in - cole west
  $('.samples-wrap .sample.skyward').waypoint(function(direction) {
    if (direction == 'down') {
      $('.samples-wrap .sample.skyward, .samples-wrap .sample.bpa').addClass('swoop');
    }
    else {
      $('.samples-wrap .sample.skyward, .samples-wrap .sample.bpa').removeClass('swoop');
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
