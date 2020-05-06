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
                    $('.popup').removeClass('popup--active');
                    $('input, textarea', $form).val('');
                    $('.success').css('display', '');
                
                    $(document).click(function() {
                        $('.success').css('display', 'none');
                    });
					
					$form.addClass('successful');
				}
			}
		});
	}
});