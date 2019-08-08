var price__slider = document.querySelector(".price__wrapper");
var slider__price1 = document.querySelector(".slider__price-btn-1");
var slider__price2 = document.querySelector(".slider__price-btn-2");
var slider__price3 = document.querySelector(".slider__price-btn-3");

slider__price1.addEventListener('click', function () {
    {
        price__slider.classList.remove('show__price-slide-3');
        price__slider.classList.add('show__price-slide-1');
    }

});


slider__price2.addEventListener('click', function () {
    {
        price__slider.classList.remove('show__price-slide-3');
        price__slider.classList.remove('show__price-slide-1');
    }

});


slider__price3.addEventListener('click', function () {
    {
        price__slider.classList.remove('show__price-slide-1');
        price__slider.classList.add('show__price-slide-3');
    }

});