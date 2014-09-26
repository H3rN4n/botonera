var sfwList = [];
var titleList = [];
var btnsList = [];

(function ($) {
  $(document).ready(function () {
    // you awesome code goes here
    /*
    var myLzld = lazyload({
	  container: document.body,
	  offset: 333,
	  src: 'data-src' // or function(elt) { return customSrc }
	});
  	*/
    
	
	$( 'iframe' ).each(function() {
	  var url = $( this ).attr( 'data-src' );
	  sfwList.push(url);
	  //$( this ).before('<a href="' + url + '" download>download</a>');
	});

	$( 'span.title' ).each(function() {
	  var title = $( this ).text();
	  titleList.push(title);
	  //$( this ).before('<a href="' + url + '" download>download</a>');
	});

	/*
	for (i=0; i < sfwList.length; i++){
		var title = titleList[i];
		var url = sfwList[i];
		btnsList.push({ 'title': title, 'url': url });
	}
	*/
	/*
	for (i=0; i < sfwList.length; i++){
		var url = sfwList[i];
		var link = $('<a class="sfwDownload" href="' + url +'" download>download</a><br/>');
		$('body').prepend(link);
	}

	for (i=0; i < sfwList.length; i++){
		var url = sfwList[i];
		window.open(url);
	}
	*/
  });
})(jQuery);
