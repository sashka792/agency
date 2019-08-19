$(document).ready(function () {
    $('.partners-inner').slick({
        autoplay: true,
        autoplaySpeed: 2500,
        arrows: false,
        dots: true
    });

    var navItems = document.querySelectorAll(".mobile-bottom-nav__item");
    navItems.forEach(function (e, i) {
        e.addEventListener("click", function (e) {
            navItems.forEach(function (e2, i2) {
                e2.classList.remove("mobile-bottom-nav__item--active");
            })
            this.classList.add("mobile-bottom-nav__item--active");
        });
    });
    // $('.menu-item a').on('click', function(e){
    //     e.preventDefault();
    //     $('.menu-item li').removeClass('active');
    //     $(this).parent('li').addClass('active');
    // });
});