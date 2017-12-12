$(document).ready(function(){
 
	$('.home').click(function(){
		$('body, html').animate({
			scrollTop: '700vw'
		}, 2000);
	});
 
	$(window).scroll(function(){
		if( $(this).scrollTop() > 700 ){
			$('.home').slideDown(2000);
		} else {
			$('.home').slideUp(2000);
		}
	});
 
});

