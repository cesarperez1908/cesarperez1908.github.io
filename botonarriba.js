$(document).ready(function(){
 
	$('.home').click(function(){
		$('body, html').animate({
			scrollTop: '1500vw'
		}, 2000);
	});
 
	$(window).scroll(function(){
		if( $(this).scrollTop() > 1500 ){
			$('.home').slideDown(2000);
		} else {
			$('.home').slideUp(2000);
		}
	});
 
});

