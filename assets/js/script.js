
let intelligenceSwiper = new Swiper(".intelligence-slider", {
    slidesPerView: 3,
    spaceBetween: 60,
    pagination: {
        el: ".intel-pagination",
        clickable: true,
    },
    breakpoints: {
        1299: {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 60,
        },
        1199: {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 40,
        },

        1020: {
            slidesPerView: 3,
            slidesPerGroup: 1,
            spaceBetween: 10,
            loop: true,

        },
        660: {
            slidesPerView: 2,
            slidesPerGroup: 1,
            spaceBetween: 10,
            loop: true,

        },

        320: {
            slidesPerView: 1,
            slidesPerGroup: 1,
            spaceBetween: 10,
            loop: true,
        },
    },
});









