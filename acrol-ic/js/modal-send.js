$('form').on('submit', function(evt) { 
	evt.preventDefault();
	
	var $form = $(this); 
	$form.addClass('sending'); 
	
	if (!$form.hasClass("successful")) { 
		$.ajax({ 
			type: "POST",
			url: "/send.php",
			data: $form.serialize(),
			success: function(t) {
				//Success
				if (t == 1) { 
                    $('.popup').addClass('popup--active');

					$('.popup__form').slideUp(500, function() { 
						$('input, textarea', $form).val(''); 
					}); 
					
					$form.siblings('.popup__success').slideDown(500);
					
					$form.addClass('successful');
				} 
			} 
		}); 
	} 
});