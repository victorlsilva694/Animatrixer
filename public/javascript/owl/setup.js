function carouselSetup () {
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav: true,
    dots: false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
  });
}