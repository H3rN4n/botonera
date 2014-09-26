var sfwList = [];

(function ($) {
  $(document).ready(function () {
    // you awesome code goes here
    var myLzld = lazyload({
	  container: document.body,
	  offset: 333,
	  src: 'data-src' // or function(elt) { return customSrc }
	});
    
	
	$( "iframe" ).each(function() {
	  var url = $( this ).attr( "data-src" );
	  sfwList.push(url);
	  $( this ).before('<a href="' + url + '" download>download</a>');
	});

  });
})(jQuery);
