$(document).ready(function(){
    
$('.accordion').on('click', function(){
    $(this).toggleClass('expanded');
});
 
$('.toggle-pop-up').on('click', function(){
    $('body').toggleClass('show-pop-up');
});

if ($('.swipebox').length != 0) {
    $('.swipebox').swipebox({
        beforeOpen: function() {$('.content').css('position', 'fixed');}, // called before opening
        afterClose: function() {$('.content').css('position', 'static');} // called after closing
    });
}

$('.hamburger').on('click', function(){
    alert('hamburger clicked!');
    $('.header-menu').toggleClass('expanded');
});

$('#add-another-photo').on('click', function(){
  $(this).before('<input type="file">');
});

$( ".calendar" ).on( "swipeleft", function(){
    alert('change to previous days');
});

$( ".calendar" ).on( "swiperight", function(){
    alert('change to following days');
});

$('.calendar td').on('click', function(){
    $(this).toggleClass('highlighted');
});

$('.toggle-images').on('click', function(){
  $('.images').toggleClass('view-all');
});

alert('in main.js');

});
