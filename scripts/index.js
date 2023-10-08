$(document).ready(function(){
    $('.slider').slick({
        dots: true, // slide navigtion dots
        infinite: true,
        speed: 400, // scroll speed (1000 - 1 sec)
        slidesToShow: 1,
        adaptiveHeight: true,
    })

    // Додання слухачів для подій "Попередній" та "Наступний" слайд
    // $('.prev').click(function(){
    //     $('.slider').slick('slickPrev')
    // })

    // $('.next').click(function(){
    //     $('.slider').slick('slickNext')
    // })
});