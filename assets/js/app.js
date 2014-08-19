
// nav dropdown hover
$(document).ready(function() {

    $('.js-activated').dropdownHover({
        instantlyCloseOthers: false,
        delay: 0
    }).dropdown();

});


// flex slider
$('.main-flex-slider,.testimonials').flexslider({
    slideshowSpeed: 5000,
    directionNav: false,
    animation: "fade"
});

// appications
$('#grid').mixitup();



$("[data-toggle=popover]").popover();

$("[data-toggle=tooltip]").tooltip();


// flex gallery
$(window).load(function() {
    $('.flexslider').flexslider({
        directionNav: false,
        slideshowSpeed: 3000,
        animation: "fade"
    });
});


// sticky nav
$(function() {

    var stickyHeaderTop = $('.sticky-nav').offset().top;

    $(window).scroll(function() {
        if ($(window).scrollTop() > stickyHeaderTop) {
            $('.sticky-nav').css({position: 'fixed', top: '0px'});
            $('.sticky-nav').css('display', 'block');
        } else {
            $('.sticky-nav').css({position: 'static', top: '0px'});

        }
    });
});