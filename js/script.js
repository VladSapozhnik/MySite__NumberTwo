$(document).ready(function () {
    $('.nav__burger').click(function (event) {
        $('.nav__burger, .nav__body').toggleClass('active');
        $('body').toggleClass('lock');
    });
});