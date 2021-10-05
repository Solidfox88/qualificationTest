
let $ = document.querySelector('#menu');
document.querySelector('#menu').ready = function () {


    let nav = document.querySelector('.collapse');

    window.scroll(function () {
        if ($(this).scrollTop() > 136) {
            nav.addClass("f-nav");
        } else {
            nav.removeClass("f-nav");
        }
    });

});