$('form.page-main__calculation').on('submit', function(evt) { 
	evt.preventDefault(); 
	
	var $form = $(this); 
	$form.addClass('sending'); 
	
	if (!$form.hasClass("successful")) { 
		$.ajax({ 
			type: "POST",
			url: "/send.php",
			data: $form.serialize(),
			success: function(t) { 
				console.log('t=', t);
				//Success 
				if (t == 1) { 
					$('.page-main__calculation').slideUp(500, function() { 
						$('input, textarea', $form).val(''); 
					}); 
					
					$form.siblings('.form-success').slideDown(500);
					
					$form.addClass('successful');
				} 
			} 
		}); 
	} 
});