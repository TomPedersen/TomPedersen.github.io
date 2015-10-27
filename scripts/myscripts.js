var $window = $(window);
var windowHeight = $window.height();
var $firstBG = $('#intro');
var $secondBG = $('#second');
var $thirdBG = $('#third');
var $fourthBG = $('#fourth');
var $fifthBG = $('#fifth');


$(document).ready(function(){
	$('.jobsection').hover(
		function() { 
			$(this).stop(true, true).fadeTo('fast', 1); 
		},
   		function() { 
   			$(this).stop(true, true).fadeTo('fast', 0.5); 
   	});

   	$('section[data-type="background"]').each(function(){
     	var $bgobj = $(this); // assigning the object

     	$(window).scroll(function() {
   			var yPos = -($window.scrollTop() / $bgobj.data('speed'));
			
			var coords = '50% '+ yPos + 'px';

			$bgobj.css({ backgroundPosition: coords });

		});
	});
});


