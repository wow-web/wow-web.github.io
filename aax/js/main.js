$(function(){$(".go-to").click(function(){var e=$(this).attr("href");return $("html, body").animate({scrollTop:$(e).offset().top+"px"}),$("body").removeClass("open-menu"),!1})}),$(".top-line__menu-btn").click(function(){$("body").hasClass("open-menu")?$("body").removeClass("open-menu"):$("body").addClass("open-menu")}),$(".open-modal").click(function(e){e.preventDefault(),$(".modal").addClass("modal--active"),$(".modal__close").click(function(e){e.preventDefault(),$(".modal").removeClass("modal--active")}),$(".modal__wrapper").click(function(){$(".modal").removeClass("modal--active")})}),$(".accordion li h3").each(function(e,a){$(this).click(function(){$(this).parent().toggleClass("active")})}),$("form").on("submit",function(e){e.preventDefault();var a=$(this);a.addClass("sending"),$.ajax({type:"POST",url:"/send.php",data:a.serialize(),success:function(e){1==e&&($(".modal").removeClass("modal--active"),$("input, textarea",a).val(""),$(".success").css("display",""),$("body").click(function(){$(".success").css("display","none")}))}})});