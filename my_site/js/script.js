/** https://owlcarousel2.github.io/OwlCarousel2/ **/
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        autoplay:true,
        autoplayTimeout:4000,
        autoplayHoverPause:true,
        margin:10,
        nav:true,
        merge:true,
        responsive:{ 
            0:{ items:1 }, 
            767:{ items:2 }, 
            991:{ items:3 },
            1200:{items:4 } 
        } 
    })
});