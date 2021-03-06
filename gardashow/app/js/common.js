$(function() {

	$(document).ready(function () {
        $('#fullpage').fullpage({
            sectionsColor: ['#017cbd', '#017cbd', '#017cbd', '#017cbd', '#017cbd', '#017cbd', '#017cbd', '#017cbd', '#017cbd', '#017cbd'],
            anchors: ['home', 'about', 'services', 'experience', 'advantages', 'events', 'partners', 'clients', 'faq', 'contacts'],
            menu: '#menu',
            scrollingSpeed: 1000,
            fitToSection: false,
            slidesNavigation: true
        });

        $(document).on('click', '.nav-up, .nav-down', function () {
            $.fn.fullpage.moveTo($(this).data("moveto"), 0);
        });

        $(document).on('click', '.nav-right', function () {
            $.fn.fullpage.moveSlideRight();
        });

        $(document).on('click', '.nav-left', function () {
            $.fn.fullpage.moveSlideLeft();
        });

    });

});
