$(document).ready(function() {
    $('.mobile-menu a').click(function() {
        $(this).next('.mobile-submenu').slideToggle();
    });
    $('#menu_toggle').click(function() {
        $('#mobile_menu').fadeIn(300);
        $('body').css('overflow', 'hidden'); 
        $('body').css('background', '#cfcfcf'); 
    });
    $('#menu-close').click(function() {
        $('#mobile_menu').fadeOut(300);
        $('body').css('overflow', 'auto'); 
        $('body').css('background', 'unset'); 
    });

    // Frequently_Questions
    $('.button_one').click(function() {
        $('#box_one').show();
        $('#box_two').hide();
        $('#box_three').hide();
    });
    $('.button_two').click(function() {
        $('#box_two').show();
        $('#box_one').hide();
        $('#box_three').hide();
    });
    $('.button_three').click(function() {
        $('#box_three').show();
        $('#box_two').hide();
        $('#box_one').hide();
    });




    // accordion
    $('.accordion-item').find('.accordion-button').click(function(){
        $(this).next('.accordion-box').slideToggle()
    })


    $('.open_menu').click(function(){
        $('.news_article').slideToggle()
        $(this).find('.fa-chevron-up').toggle()
        $(this).find('.fa-chevron-down').toggle()
    })
    $('.open_menu_two').click(function(){
        $('.news_article_two').slideToggle()
        $(this).find('.fa-chevron-up').toggle()
        $(this).find('.fa-chevron-down').toggle()
    })
    $('.open_menu_three').click(function(){
        $('.news_article_three').slideToggle()
        $(this).find('.fa-chevron-up').toggle()
        $(this).find('.fa-chevron-down').toggle()
    })
    $('.sub-cat').click(function(){
        $(this).find('div').slideToggle()
        $(this).find('span').toggleClass('min-show');
    })
});

// HeroSection_carousel
$('.hero_section').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
	autoplay:true,
	autoplayTimeout:4000,
    autoplayHoverPause:true,
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
})
// Courses_carousel
$('.courses-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
})
// Courses_carousel
$('.rel_product').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
    autoplayTimeout:4000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
})