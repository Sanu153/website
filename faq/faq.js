$(document).ready(function () {
    $('.question').click(function () {
        $(this).parent('.faq').toggleClass('active').siblings().removeClass('active');
    });
});
