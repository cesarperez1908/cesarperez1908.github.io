$(document).ready(function(){
 
	$('.home').click(function(){
		$('body, html').animate({
			scrollTop: '2000vw'
		}, 2000);
	});
 
	$(window).scroll(function(){
		if( $(this).scrollTop() > 2000 ){
			$('.home').slideDown(2000);
		} else {
			$('.home').slideUp(2000);
		}
	});
 
});

