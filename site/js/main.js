(function (window, document, $) {
  'use strict';
  var $window = $(window);

  // Set header's height to window's innerHeight.
  // Also, applies to sections
  var $header = $('header');
  var $sections = $('section');
  var setHeight = function setHeight ($els, $target) {
    $els.forEach(function ($el) {
      $el.css('height', $target.innerHeight() + 'px')
      .css('min-height', $target.innerHeight() + 'px');
    });
  };
  setHeight([$header, $sections], $window);
  $window.on('resize', setHeight.bind(this, [$header, $sections], $window));

  // Magic bg section.
  var $greeting = $('section#greetings');
  var $bgLeft = $greeting.find('#magic-bg-left');
  var $bgRight = $greeting.find('#magic-bg-right');
  var $avatarLeft = $greeting.find('#avatar-left');
  var $avatarRight = $greeting.find('#avatar-right');

  $bgLeft.css('width', $window.innerWidth() / 2 + 'px');
  $bgRight.css('width', $window.innerWidth() + 'px');

  var offset = 143 / 2;
  $avatarLeft.css('left', $window.innerWidth() / 2 - offset + 'px');
  $avatarRight.css('left', $window.innerWidth() / 2 - offset + 'px');

  var $content = $greeting.find('#section-content');
  var padding = 100;
  var setMagicHeight = function setMagicHeight () {
    var height = $content.innerHeight() + padding;
    $greeting.css('height', height + 'px');
    $bgLeft.css('height', height * 2 + 'px');
    $bgRight.css('height', height * 2 + 'px');

    $avatarLeft.css('left', $window.innerWidth() / 2 - offset + 'px');
    $avatarRight.css('left', $window.innerWidth() / 2 - offset + 'px');
  };
  setMagicHeight();
  $window.on('resize', setMagicHeight);

  // Register magic bg event.
  $greeting.on('mousemove', function (evt) {
    $bgLeft.css('width', evt.clientX + 'px');
  });


  // Set external links.
  var $externals = $('a[rel*=external]');
  $externals.each(function () {
    var $this = $(this);
    $this.attr('target', '_blank');
  });
})(window, document, jQuery);