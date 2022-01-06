$(document).ready(function(){
	var slider = $('.bnr ul').bxSlider({
		mode: 'horizontal',    
		auto: true,
		pause: 4000,
		controls: true,
		easing: 'easeOutQuint',
		speed: 500,
		pager: false
	});
});

$(document).ready(function(){
	$('.slider').bxSlider({
		mode: 'fade',
		captions: true,
		slideWidth: 600
		});	
});
