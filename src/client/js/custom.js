/* 
 Project - Learn Education Template
 */

$(document).ready(function () {

    var g = new JustGage({
        id: "gauge",
        value: 51,
        min: 0,
        max: 100,
        title: "Student Credit Score",
        donut: true,
        pointer: true,
        levelColors: ['#CE1B21', '#D0532A', '#FFC414', '#85A137'],
        levelColorsGradient: true,
        pointerOptions: {
            bottomwidth: 8,
            toplength: 10,
            bottomlength: 10
        },

        counter:true

    });

// site preloader -- also uncomment the div in the header and the css style for #preloader
$(window).load(function(){
	$('#preloader').fadeOut('slow',function(){$(this).remove();});
});



// search form toggle
$(".search-toggle a").click(function(){
    $(".search-form").slideToggle();
});
    //nav hover dropdown
    $('.js-activated').dropdownHover({
        instantlyCloseOthers: false,
        delay: 0
    }).dropdown();
    //parallax
    $.stellar();
    //courses carousel
    $("#item-slider").owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
});
    //courses carousel
    $(".testi-slider").owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});
    //video carousel
    $(".video-slider").owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

});
