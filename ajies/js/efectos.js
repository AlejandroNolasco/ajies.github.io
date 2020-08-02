$(document).ready(function () {

    $('.menu a').each(function (index,elemento) {
        $(this).css({
            'top':'-200px'
        });
        $(this).animate({
            top:'0'
        },2000 + (index*500));
    });

    if($(window).width()>800){
        $('header .textos').css({
            opacity:0, marginTop:0
        });
        $('header .textos').animate({
            opacity:1, marginTop:'-52px'
        },1500);
    }

    var aceDe = $('#acerca-de').offset().top;//calc la pos ded pantalla de acerca d
    var pla = $('#platillos').offset().top;
    var gall = $('#galeria').offset().top;
    var ubi = $('#ubicacion').offset().top;


    $('#btn-acercaDe').on('click',function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop:aceDe
        },500)


    });

    $('#btn-ubi').on('click',function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop:ubi
        },500)


    });

    $('#btn-menu').on('click',function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop:pla
        },500)


    });

    $('#btn-galeria').on('click',function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop:gall
        },500)


    });



});