$(function () {
    $('nav .menubox li').mouseenter(function () {
        $(this).addClass('hover flipInX animated').siblings().removeClass('hover flipInX animated');
    });
    $('nav .menubox').mouseleave(function () {
        $('nav .menubox li').removeClass('hover flipInX animated');
    });
});
