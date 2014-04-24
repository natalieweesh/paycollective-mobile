$('.accordion').on('click', function(){
    $(this).toggleClass('expanded');
});
 
$('.toggle-pop-up').on('click', function(){
    $('body').toggleClass('show-pop-up');
});

$('.swipebox').swipebox({
    beforeOpen: function() {$('.content').css('position', 'fixed');}, // called before opening
    afterClose: function() {$('.content').css('position', 'static');} // called after closing
});

$('.hamburger').on('click', function(){
    $('.header-menu').toggleClass('expanded');
});
