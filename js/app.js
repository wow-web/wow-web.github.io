// import Swiper, { EffectFade, Navigation, Pagination } from "swiper";
// import "swiper/scss";

let slider1 = document.querySelector(".slider1"),
  slider2 = document.querySelector(".slider2"),
  slider3 = document.querySelector(".slider3")
  sliderMob = document.querySelector(".slider-mob");

const options1 = {
        freeMode: true,
        loop: true,
        centeredSlides: true,
        direction: 'vertical',
        slidesPerView: 1,
        autoplay: {
            delay: 1,
            disableOnInteraction: true,
        },
        speed: 25000,
        parallax: true,
        preventInteractionOnTransition: true,
        spaceBetween: 200,
        on: {
            init: function () {
                let ik = this;
                ik.autoplay.stop();

                setTimeout(function(){
                    slider1.classList.add("is-load");
                    setTimeout(function(){
                        ik.autoplay.start();
                    }, 5500);
                }, 2000);
            },
        },
    },
    options2 = {
        freeMode: true,
        loop: true,
        centeredSlides: true,
        direction: 'vertical',
        mousewheel: false,
        slidesPerView: 1,
        autoplay: {
          delay: 1,
          disableOnInteraction: true,
        },
        speed: 25000,
        parallax: true,
        preventInteractionOnTransition: true,
        spaceBetween: 250,
        on: {
          init: function () {
            let ik = this;
            ik.autoplay.stop();

            setTimeout(function(){
                slider2.classList.add("is-load");
                setTimeout(function(){
                    ik.autoplay.start();
                }, 5500);
            }, 2000);
          },
        },
    },
    options3 = {
        freeMode: true,
        loop: true,
        centeredSlides: true,
        direction: 'vertical',
        mousewheel: false,
        slidesPerView: 1,
        autoplay: {
          delay: 1,
          disableOnInteraction: true,
        },
        speed: 25000,
        parallax: true,
        preventInteractionOnTransition: true,
        spaceBetween: 200,
        on: {
          init: function () {
            let ik = this;
            ik.autoplay.stop();

            setTimeout(function(){
                slider3.classList.add("is-load");
                setTimeout(function(){
                    ik.autoplay.start();
                }, 5500);
            }, 2000);
          },
        },
    };

    if (window.matchMedia("(min-width: 1024px)").matches) {
        new Swiper(".slider1", options1);
        new Swiper(".slider2", options2);
        new Swiper(".slider3", options3);
    }
    else {
        new Swiper(".slider-mob", {
            // lazy: true,
            effect: "fade",
            loop: true,
            slidesPerView: 1,
            autoplay: {
                delay: 1700,
                disableOnInteraction: true,
            },
            preventInteractionOnTransition: true,
            on: {
                init: function () {
                    sliderMob.classList.add("is-load");
                },
            },
        })
    }

setTimeout(function(){
	document.querySelector(".main-wrapper").classList.add("visible");
	document.querySelector(".center-top").classList.add("visible");
}, 1000);

let modal = document.querySelector(".modal"),
    openModalBtn = document.querySelector(".open-modal")
    modalClose = modal.querySelector(".modal__close");

openModalBtn.addEventListener("click", function() {
    modal.classList.add("opened");
    modalClose.addEventListener("click", function() {
        modal.classList.remove("opened");
    });
});
