$(document).ready(function () {
    $(".toggle-button").click(function(){
         
        $(".hidden-nav").slideToggle();
        $(this).parents(".header-fixed").toggleClass("full-header");
        $(this).toggleClass("active-toggle");
       
    });
    $(".main-slider").slick(
            {
                dots: true
            });
    $(".product-carousel").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3
                }
            }, {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2
                }},
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
    $('#feedback').colorbox({inline: true, width: '100%', maxWidth: '450px'});
    
    $('ul.tabs-nav').on('click', 'li:not(.active)', function() {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('div.tabs').find('div.tab-content').removeClass('active').eq($(this).index()).addClass('active');
  });
});


