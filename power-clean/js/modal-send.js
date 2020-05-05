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
					
                    $('.popup__success').slideDown(500);
                    
                    $('.popup__close').click(function(e) {
                        e.preventDefault();
                        $('.popup').removeClass('popup--active');
                    });
                
                    $('.popup__wrapper').click(function() {
                        $('.popup').removeClass('popup--active');
                    });
					
					$form.addClass('successful');
				}
			}
		});
	}
});