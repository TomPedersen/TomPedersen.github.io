var $window = $(window);
var windowHeight = $window.height();
var $firstBG = $('#intro');
var $secondBG = $('#second');
var $thirdBG = $('#third');
var $fourthBG = $('#fourth');

$(document).ready(function(){
	$('.jobsection').hover(
		function() { 
			$(this).stop(true, true).fadeTo('fast', 1); 
		},
   		function() { 
   			$(this).stop(true, true).fadeTo('fast', 0.5); 
   	});

	$('#intro, #second, #third, #fourth').bind('inview', function (event, visible) {
    	if (visible == true) {
        	$(this).addClass("inview");
    	}else{
      		$(this).removeClass("inview");
    	}
	});

	/*To keep the UL vertically aligned in the browser window. Takes the height of the list and divides by 2
	to find center. Then finds center of window in similar fashion. Subtracts one from other to find new
	top position of UL.*/

	function RepositionNav(){
	    var windowHeight = $window.height();
	    var navHeight = $('#nav').height() / 2;
	    var windowCenter = (windowHeight / 2);
	    var newtop = windowCenter - navHeight;
	    $('#nav').css({"top": newtop});
	}

});




