$(document).foundation();


//Tabs
var tabFinish = 0;
$('.tt-nav-tab-item').on('click', function(){
    var $t = $(this);
    if(tabFinish || $t.hasClass('active')) return false;
    tabFinish = 1;
    $t.closest('.tt-nav-tab').find('.tt-nav-tab-item').removeClass('active');
    $t.addClass('active');
    var index = $t.parent().parent().find('.tt-nav-tab-item').index(this);
    $t.parents('.tt-tab-nav-wrapper').find('.tt-tab-select select option:eq('+index+')').prop('selected', true);
    $t.closest('.tt-tab-wrapper').find('.tt-tab-info:visible').fadeOut(500, function(){
        var $tabActive  = $t.closest('.tt-tab-wrapper').find('.tt-tab-info').eq(index);
        $tabActive.css('display','block').css('opacity','0');
        tabReinit($tabActive.parents('.tt-tab-wrapper'));
        $tabActive.animate({opacity:1});
        tabFinish = 0;
    });
});
$('.tt-tab-select select').on('change', function(){
    var $t = $(this);
    if(tabFinish) return false;
    tabFinish = 1;
    var index = $t.find('option').index($(this).find('option:selected'));
    $t.closest('.tt-tab-nav-wrapper').find('.tt-nav-tab-item').removeClass('active');
    $t.closest('.tt-tab-nav-wrapper').find('.tt-nav-tab-item:eq('+index+')').addClass('active');
    $t.closest('.tt-tab-wrapper').find('.tt-tab-info:visible').fadeOut(500, function(){
        var $tabActive  = $t.closest('.tt-tab-wrapper').find('.tt-tab-info').eq(index);
        $tabActive.css('display','block').css('opacity','0');
        tabReinit($tabActive.parents('.tt-tab-wrapper'));
        $tabActive.animate({opacity:1});
        tabFinish = 0;
    });
});
function tabReinit($tab){
    $tab.find('.swiper-container').each(function(){
        var thisSwiper = swipers['swiper-'+$(this).attr('id')];
        thisSwiper.update();
    });
}




// header navigation active state

$('nav li a').click(function(e) {
    e.preventDefault();
    $('a').removeClass('active');
    $(this).addClass('active');
});


$(".tt-offer-link").on({
    mouseenter: function () {
        $(this).closest('.row').find('.tt-offer-screen').attr('style', $(this).attr('data-img'));
    },
    mouseleave: function () {

    }
});

// drop down menu click

$(function() {
    menu = $('nav ul');

    $('#openup').on('click', function(e) {
        e.preventDefault(); menu.slideToggle();
    });

    $(window).resize(function(){
        var w = $(this).width(); if(w > 480 && menu.is(':hidden')) {
            menu.removeAttr('style');
        }
    });

    $('nav li a').on('click', function(e) {
        var w = $(window).width(); if(w < 480 ) {
            menu.slideToggle();
        }
    });


    $('.open-menu').height($(window).height());
});

// slow motion scroll

$(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top -100
                }, 1000);
                return false;
            }
        }
    });
});

