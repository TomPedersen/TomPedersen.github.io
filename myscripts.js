$(document).ready(function(){
	$('.jobsection').hover(
		function() { $(this).stop(true, true).fadeTo('fast', 1); },
   		function() { $(this).stop(true, true).fadeTo('fast', 0.5); }
   	);
});