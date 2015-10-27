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

	$('#intro, #second, #third, #fourth, #fifth').bind('inview', function (event, visible) {
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
	};

	/*When the function is called, 5 arguments are provided: x = x position of page, windowHeight = height of
	window, pos = position of scrollbar, adjuster = value that moved the bg into position, inertia = speed at
	which bg image moves in relation to scrollbar*/

	function newPos(x, windowHeight, pos, adjuster, inertia){
		return x + "% " + (-((windowHeight + pos) - adjuster) * inertia)  + "px";
	};

	/*Move() function to be called whenever user moves scrollbar or resizes browser. It begins by working out
	the position of the scrollbar, then going through if statements to see which article is "in view".*/

	function Move(){
    	var pos = $window.scrollTop();

    	if($firstBG.hasClass("inview")){
    		$firstBG.css({'backgroundPosition': newPos(50, windowHeight, pos, 900, 0.3)});
		}
		if($secondBG.hasClass("inview")){
    		$secondBG.css({'backgroundPosition': newPos(50, windowHeight, pos, 900, 0.3)});
		}
		if($thirdBG.hasClass("inview")){
    		$thirdBG.css({'backgroundPosition': newPos(50, windowHeight, pos, 900, 0.3)});
		}
		if($fourthBG.hasClass("inview")){
    		$fourthBG.css({'backgroundPosition': newPos(50, windowHeight, pos, 900, 0.3)});
		}
		if($fifthBG.hasClass("inview")){
    		$fifthBG.css({'backgroundPosition': newPos(50, windowHeight, pos, 900, 0.3)});
		}		
	};

	$window.resize(function(){
    	Move();
    	RepositionNav();
	});

	$window.bind('scroll', function(){
    	Move();
	});

});




