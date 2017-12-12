$(document).ready(function(){
 
	$('.home').click(function(){
		$('body, html').animate({
			scrollTop: '10px'
		}, 2000);
	});
 
	$(window).scroll(function(){
		if( $(this).scrollTop() > 10 ){
			$('.home').slideDown(2000);
		} else {
			$('.home').slideUp(2000);
		}
	});
 
});

