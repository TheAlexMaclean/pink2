var reviews__slider = document.querySelector(".reviews__slider");
var slider1 = document.querySelector(".slider-btn-1");
var slider2 = document.querySelector(".slider-btn-2");
var slider3 = document.querySelector(".slider-btn-3");

slider1.addEventListener('click', function () {
    {
        reviews__slider.classList.remove('show-slide-3');
        reviews__slider.classList.remove('show-slide-2');
    }

});


slider2.addEventListener('click', function () {
     {
        reviews__slider.classList.remove('show-slide-3');
        reviews__slider.classList.add('show-slide-2');
    }

});


slider3.addEventListener('click', function () {
     {
        reviews__slider.classList.remove('show-slide-2');
        reviews__slider.classList.add('show-slide-3');
    }

});