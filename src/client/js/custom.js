/* 
 Project - Learn Education Template
 */

$(document).ready(function () {

    function openNav() {
        document.getElementById("mySidenav").style.width = "250px";
    }

    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
    }

    var g = new JustGage({
        id: "gauge",
        value: getRandomInt(0, 100),
        min: 0,
        max: 100,
        title: "Student Credit Score",
        donut: true,
        pointer: true,
        levelColors: ['#c64411', '#c6b611','#98c611','#5dc611'  ],
        levelColorsGradient: true,
        pointerOptions: {
            bottomwidth: 8,
            toplength: 10,
            bottomlength: 5
        },
        startAnimationTime: 2000,
        startAnimationType: ">",
        refreshAnimationTime: 1000,
        refreshAnimationType: "bounce",
        showInnerShadow: true,
        titleFontColor: "#3f3e3b",
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

    setInterval(function() {
        g.refresh(getRandomInt(0, 100));

    }, 1000);
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
