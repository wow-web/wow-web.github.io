$(function() {

	$('#btn-calculator').on('click', function() {
		$('html,body').animate({scrollTop:$('#s__calculator').offset().top+"px"},{duration:1E3});
	});

	$('#number').mask('+375 (99) 999-99-99');

	$('#popup').click(function(){
		$('.overlay').fadeIn();
	});
	$('.close').click(function(){
		$('.overlay').fadeOut();
	});

	$('#next').click(function(){
		$('.form-1').fadeOut();
		$('.form-2').fadeIn();
	});

	$('.topline').after('<div class="mobilemenu d-lg-none">');
	$('.info__menu-main').find('nav').clone().appendTo('.mobilemenu');
	$('.info__menu-btn').click(function(){
		$('.mobilemenu').stop().slideToggle();
	});

	$('form.formtodiscount').submit(function(){
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: th.serialize()
		}).done(function(){
			setTimeout(function(){
				th.trigger('reset');
			}, 1000);
		});
		return false;
	});

});
