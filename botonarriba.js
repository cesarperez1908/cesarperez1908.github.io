$(document).ready(function(){
 
	$('.home').click(function(){
		$('body, html').animate({
			scrollTop: '6000px'
		}, 2000);
	});
 
	$(window).scroll(function(){
		if( $(this).scrollTop() > 6000 ){
			$('.home').slideDown(2000);
		} else {
			$('.home').slideUp(2000);
		}
	});
 
});

