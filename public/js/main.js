(function ($) {
  $(document).ready(function () {
    // you awesome code goes here
    var myLzld = lazyload({
	  container: document.body,
	  offset: 333,
	  src: 'data-src' // or function(elt) { return customSrc }
	});
  });
})(jQuery);
