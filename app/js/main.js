$( function() {

    // init slicknav menu
    $('#header-menu').slicknav({

        appendTo: '.header-top',
        label: '' 
    });

    // init services tab
    $( '.services-tabs' ).tabs();

    // init portfolio tab
    $( '.portfolio-tabs' ).tabs();

    // init reviews-carousel 
    $( '.slider-init' ).slick({
        dots: true,
        arrows: true,
        autoplay: true,
        infinite: true,
        autoplaySpeed: 3000,
        prevArrow: '<div class="slick-prev slick-arrow"><div class="carousel-button"><i class="fa fa-chevron-left"></i></div></div>', 
        nextArrow: '<div class="slick-next slick-arrow"><div class="carousel-button"><i class="fa fa-chevron-right"></i></div></div>'
    });

    // sroll to top
    $(function() {
 
        $(window).scroll(function() {
         
        if($(this).scrollTop() != 0) {
         
        $('#toTop').fadeIn();
         
        } else {
         
        $('#toTop').fadeOut();
         
        }
         
        });
         
        $('#toTop').click(function() {
         
        $('body,html').animate({scrollTop:0},1000);
         
        });
         
    });


const header = $('#header');
const windowHeight = $(window).height();
const headerHeight = header.outerHeight();
const scrollTop = $('.scroll-top');

function onScroll(e) {
    let pos = $(window).scrollTop(); 

    if (pos > headerHeight + 100) {
        header.css({
            'position': 'fixed',
            'top': - (headerHeight + 50),
            'background-color': '#000'
        });
    }
    if (pos > windowHeight) {
        header.css({
            'top': '0',
            'transition': 'top .3s ease-out'
        });

        scrollTop.css({
            'display': 'block'
        });
    }

    if (pos < headerHeight + 100) {
        header.css({
            'position': 'absolute',
            'top': '0',
            'background-color': 'transparent',
            'transition': 'none'
        });

        scrollTop.css({
            'display': 'none'
        });
    }
}

$(window).on('scroll', onScroll);

// Scroll to element
function scrollTo() {
    const scrollBtn = $('[data-scroll]');

    function onScroll(e) {
        e.preventDefault();
        
        const target = $(this).attr('data-scroll');
        const dist = $(target).offset().top;
        $('html, body').animate({ scrollTop: dist }, 1000, 'swing');
    }

    scrollBtn.on('click', onScroll);
}

$(window).on('load', scrollTo);



});