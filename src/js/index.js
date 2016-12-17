$(function() {

    $('.nav-top-item').on('click', function () {
        $(this).addClass('active').parent().siblings().children('a').removeClass('active');
        $(this).next('ul').slideDown().parents().siblings('li').children('ul').slideUp();
    });
    $("a[target='leftFrame']").parent().on('click',function(){
        $("a[target='leftFrame']").parent().removeClass('active');
        $(this).addClass('active');
    })
});
