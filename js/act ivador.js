$(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
        $('nav').hide();
    } else {
        $('nav').show();
    }
});