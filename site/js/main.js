(function (window, document, $) {
  'use strict';
  var $window = $(window);

  // Set header's height to window's innerHeight.
  // Also, applies to sections
  var $header = $('header');
  var $sections = $('section');
  var setHeight = function setHeight ($els, $target) {
    $els.forEach(function ($el) {
      $el.css('height', $target.innerHeight())
      .css('min-height', $target.innerHeight());
    });
  };
  setHeight([$header, $sections], $window);
  $window.on('resize', setHeight.bind(this, [$header, $sections], $window));


  // Set external links.
  var $externals = $('a[rel*=external]');
  $externals.each(function () {
    var $this = $(this);
    $this.attr('target', '_blank');
  });
})(window, document, jQuery);