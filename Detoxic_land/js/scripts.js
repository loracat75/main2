$(document).ready(function () {

    function countSlides(slider) {
        total = slider.slick("getSlick").slideCount;
        currentSlide = slider.slick('slickCurrentSlide');
        slide = currentSlide + 1;
        if (total > 1) {
            slider.next('.sl-count').children(".sl-count__current").text(slide);
            slider.next('.sl-count').children('.sl-count__total').text(total);
        }
        slider.on('afterChange', function (event, slick, currentSlide, nextSlide) {
            var currentSl = currentSlide + 1;
            slider.next('.sl-count').children(".sl-count__current").text(currentSl);
        });
    }


    var slider = $('.slider-signs');
    slider.slick({

        slidesToShow: 1,
        arrows: true,
        dots: false,
        infinite: true,
        adaptiveHeight: true,
        // autoplay: true,
    });

    var slider2 = $('.slider-reviews');
    slider2.slick({
        centerMode: true,
        centerPadding: 40,
        slidesToShow: 3,
        arrows: true,
        dots: false,
        infinite: true,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 1,
                    variableWidth: false,
                }
            }

        ],
    });

    countSlides(slider);
    countSlides(slider2);

    $(".b-load img").fadeIn(1000);
    setTimeout("$('.b-load').fadeOut(1000); ", 1300);
    setTimeout("$('body').removeClass('b-overflow'); ", 2300);

    $('a').click(function () {
        $("html, body").animate({scrollTop: $("form").offset().top - 300}, 1000);
        return false;
    });
    if ($(window).width() >= 991) {
        $(document).on('scroll', function () {

            scrollShow();
        });
    }
    let scrollShow = function () {

        let element = $('[data-unshow]'),
            scroll = $(document).scrollTop(),
            winHeight = $(window).height();

        element.each(function () {
            let self = $(this),
                elementPos = self.offset().top;

            if (scroll >= (elementPos - (winHeight / 1.2))) {
                self.addClass('show')
            }
        });
    };

    $('.switch').click(function () {
        var _btn = $(this).data('button'),
            _parent = $(this).parents('.block-switches'),
            _next = _parent.next('.b-bubbles');
        _parent.find('.switch').removeClass('active').text("+");
        $(this).addClass('active').text("-");
        _next.find('div:visible').hide();
        _next.children('div[data-item='+_btn+']').show();
    });

    $(".b-icons span").on("click", function () {
        var $index = $(this).data('img'),
            $img = $(this).parents(".b-icons").next(".b-images");
        $img.find("img[data-large="+$index+"]").show();
        $img.show();

    });
    $(".b-images").on("click", function () {
        $(this).hide();
        $(this).find("img").hide();
    })


});