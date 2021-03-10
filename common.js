$(function(){

    $('.menu-trigger').on('click',function(){
        $(this).toggleClass('active');
        $('.sub').toggleClass('active');
    })


    $('.contents figure a').on('click',function(){
        $('.pop').css({display: 'block'})
    })
    $('.pop button').on('click',function(){
        $('.pop').css({display: 'none'})
    })










})