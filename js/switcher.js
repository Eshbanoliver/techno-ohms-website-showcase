/*==============================
	STYLE SWITCHER SCRIPT
 ===============================*/
 
(function($) {
	"use strict";

	$(".default-style" ).click(function(){
		$("#colors" ).attr("href", "css/colors/default.css" );
		return false;
	});

	$(".blue-style" ).click(function(){
		$("#colors" ).attr("href", "css/colors/blue.css" );
		return false;
	});

	$(".ciyan-style" ).click(function(){
		$("#colors" ).attr("href", "css/colors/ciyan.css" );
		return false;
	});

	$(".green-style" ).click(function(){
		$("#colors" ).attr("href", "css/colors/green.css" );
		return false;
	});

	$(".light-blue-style" ).click(function(){
		$("#colors" ).attr("href", "css/colors/light-blue.css" );
		return false;
	});

	$(".pink-style" ).click(function(){
		$("#colors" ).attr("href", "css/colors/pink.css" );
		return false;
	});

	$(".red-style" ).click(function(){
		$("#colors" ).attr("href", "css/colors/red.css" );
		return false;
	});

	$(".teal-style" ).click(function(){
		$("#colors" ).attr("href", "css/colors/teal.css" );
		return false;
	});
	
	// Style Switcher	
	$('#style-switcher').animate({
		left: '-220px'
	});

	$('#style-switcher h2 a').click(function(e){
		e.preventDefault();
		var div = $('#style-switcher');
		console.log(div.css('left'));
		if (div.css('left') === '-220px') {
			$('#style-switcher').animate({
				left: '0px'
			}); 
		} else {
			$('#style-switcher').animate({
				left: '-220px'
			});
		}
	});

	$('.colors li a').click(function(e){
		e.preventDefault();
		$(this).parent().parent().find('a').removeClass('active');
		$(this).addClass('active');
	});
    
})(jQuery);

