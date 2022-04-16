//Media
var video = document.querySelector('#main-video');
var music = document.querySelector('#music');
var audio1 = document.querySelector('#audio1');
var audio2 = document.querySelector('#audio2');
var audio3 = document.querySelector('#audio3');
var audio4 = document.querySelector('#audio4');
var audio5 = document.querySelector('#audio5');
var audio6 = document.querySelector('#audio6');
var current_section = 1;


//Intro
$('#button-no').click(function(){
    $(this).addClass('active-button');
    $('#intro-later').slideDown(800);
});

$('#button-yes').click(function(){
    $('#intro').fadeOut(function(){
        $('#home h2, #home p, #home a').css({'opacity':'1'});
    });
    music.play();
    audio1.play();
});

//Sections
$('#start-button').click(function(){
    $('#home').fadeOut(function(){
        $('#home h2, #home p, #home a').css({'opacity':'0'});
        current_section = 2;
        audio2.play();
        video.play();
    });
});

//Video control
setInterval(function(){

    if( video.currentTime > 2.4 && current_section == 2 ){
        $('#letter1').addClass('letter-visible');
        video.pause();
    }

    if( video.currentTime > 9.2 && current_section == 3 ){
        $('#letter2').addClass('letter-visible');
        video.pause();
    }

    if( video.currentTime > 15.5 && current_section == 4 ){
        $('#letter3').addClass('letter-visible');
        video.pause();
    }

    if( video.currentTime > 23.2 && current_section == 5 ){
        $('#letter4').addClass('letter-visible');
        video.pause();
    }

    if( video.currentTime > 28 && current_section == 6 ){
        $('#end').fadeIn();
    }

} , 50);

$(document).on('keydown' , function(e){

    if( e.key == 's' && current_section == 5){
        $('.letter').removeClass('letter-visible');
        current_section = 6;
        audio6.play();
        video.play();
    }

    if( e.key == 'p' && current_section == 4){
        $('.letter').removeClass('letter-visible');
        current_section = 5;
        audio5.play();
        video.play();
    }

    if( e.key == 'p' && current_section == 3){
        $('.letter').removeClass('letter-visible');
        current_section = 4;
        audio4.play();
        video.play();
    }

    if( e.key == 'a' && current_section == 2){
        $('.letter').removeClass('letter-visible');
        current_section = 3;
        audio3.play();
        video.play();
    }

});

$('#restart-button').click(function(){

    video.currentTime = 0;
    $('#end').hide();
    $('#home').show();
    $('#home h2, #home p, #home a').css({'opacity':'1'});
    music.play();
    audio1.play();

});
