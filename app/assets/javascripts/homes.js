$(document).ready(function() {
    $('.resume').hide();
    $('.projects').hide();

});

$(function() {
    $('.about-btn').click(function(){
        $('.resume').hide();
        $('.projects').hide();
        $('.about-me').show();
    });
    $('.resume-btn').click(function(){
        $('.about-me').hide();
        $('.projects').hide();
        $('.resume').show();
    });
    $('.projects-btn').click(function(){
        $('.about-me').hide();
        $('.resume').hide();
        $('.projects').show();
    });
});