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
});


