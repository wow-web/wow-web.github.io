$(document).ready(function() {

	$("body").css("display", "none");

  $("body").fadeIn(2000);
    
	$("a").click(function(event){
		event.preventDefault();
		linkLocation = this.href;
		$("body").fadeOut(1000, redirectPage);
	});
		
	function redirectPage() {
		window.location = linkLocation;
	}
	$(window).scroll(function() {
 
		if ($(this).scrollTop() != 0) { $('.top').fadeIn(); }
		else { $('.top').fadeOut(); }
	});

	$('.top').click(function() {
		$('body, html').animate({scrollTop:0}, 800);
	});

	//Настраиваем instafeed
	var feed = new Instafeed({
		clientId: '97ae5f4c024c4a91804f959f43f2635f',
		target: 'instafeed',
		get: 'tagged',
		tagName: 'photographyportfolio',
		links: true,
		limit: 9,
		sortBy: 'most-recent',
		resolution: 'standard_resolution',
		template: '<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3"><div class="photo-box"><div class="image-wrap"><a href="{{link}}"><img src="{{image}}"></a><div class="likes">{{likes}} Likes</div></div><div class="description">{{caption}}<div class="date">{{model.date}}</div></div></div></div>'
});
feed.run();

$(".wrapper ul").wrap("<section class='pagegallery'></section>");

});

$(window).load(function() {

	$('.grid').packery({
		itemSelector: '.grid-item',
		gutter: 10
	});

});