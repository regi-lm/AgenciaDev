
$('.container-slider').slick({
        dots: true,
        arrows: false,
        infinite: true,
        centerMode: true,
        centerPadding: 0,
        speed: 1000,
        slidesToShow: 3,
        slideToScroll: 3,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false,
        responsive: [{
                breakpoint: 768,
                settings: {
                        slidesToShow: 1,
                        slideToScroll: 1
                }
        }]
});

var menuBtn = document.querySelector('.items-menu-mobile i');
        menuBtn.addEventListener('click',() => {
        let itemsMenu = document.querySelector('.menu-mobile');
                if (itemsMenu.classList.contains('show')){
                    itemsMenu.classList.remove('show');
                    itemsMenu.classList.add('hide');
                } else {
                    itemsMenu.classList.remove('hide');
                    itemsMenu.classList.add('show');
                }
});