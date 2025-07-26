
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
        autoplaySpeed: 10000,
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

function enviarWhatsApp(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    const numeroWhatsApp = '5591940028922'; // Substitua pelo número desejado (com DDI e DDD, sem + ou espaços)
    const texto = `Olá, meu nome é ${nome} (%0AEmail: ${email})%0A${mensagem}`;
    const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURI(texto)}`;

    // Abre o WhatsApp com a mensagem
    window.open(url, '_blank');

    // Limpa os campos do formulário
    document.getElementById('formContato').reset();
}