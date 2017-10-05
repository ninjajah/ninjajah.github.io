$(window).on("scroll touchmove", function () {
    $('body').toggleClass('sticky', $(document).scrollTop() > 196);
});

$(".slider").slick({

    infinite: false,
    arrows: false,
    dots: true,
});

$(".slider-arrows").slick({

    infinite: false,
    arrows: true,
    dots: true,
});

$(document).ready(function () {
    $('.image-link').magnificPopup({type: 'image'});
    $('.open-popup-link').magnificPopup({
        type: 'inline',
        midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
    });
});