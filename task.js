const sliderArrowNext = document.querySelector('.slider__arrow_next'); // стрелка вперед
const sliderArrowPrev = document.querySelector('.slider__arrow_prev'); // стрелка назад

const arrSliderItem = Array.from(document.getElementsByClassName('slider__item')); // массив изображений
let activeSlide = arrSliderItem.findIndex((slider) => slider.classList.contains('slider__item_active')); // поиск индекса активного слайда 

const arrDotstyle = Array.from(document.getElementsByClassName('slider__dot')); // массив навигационных точек
arrDotstyle[0].classList.add('slider__dot_active'); // при загрузке страницы активна первая навигационная точка

sliderArrowNext.onclick = function() { // обработчик событий стрелки вперед
    DeleteSlide (activeSlide); // удаление настоящего слайда и активной точки
    if (activeSlide < arrSliderItem.length - 1) { // если найденный индекс меньше длинны массива слайдов
        ++activeSlide;
        NewSlide(activeSlide); // вызвать следующий слайд и выставить активную точку
    } else {
        activeSlide = 0; // переопределить индекс активного слайда на первый
        NewSlide(activeSlide); // вызвать первый слайд и выставить активную точку
    } 
}

sliderArrowPrev.onclick = function() { // обработчик событий стрелки назад
    DeleteSlide (activeSlide); // удаление настоящего слайда и активной точки
    if (activeSlide > 0) { // если найденный индекс больше 0
        --activeSlide;
        NewSlide(activeSlide); // вызвать предыдущий слайд
    } else {
        activeSlide = arrSliderItem.length - 1; // переопределить индекс активного слайдерера на последний
        NewSlide(activeSlide); // вызвать последний слайд и выставить активную точку
     }
}

arrDotstyle.forEach((dot, indx) => // итерация по массиву точек
    dot.onclick = function() { // обработчик событий точки
        DeleteSlide (activeSlide); // удаление настоящего слайда и активной точки
        dot.classList.add('slider__dot_active'); // добавление активной точки 
        activeSlide = indx; // переопределение активного слайда
        NewSlide(activeSlide); // вызвать слайд по индексу точки
    }
)

function DeleteSlide (index) {
    arrSliderItem[index].classList.remove('slider__item_active'); // удаление класса с найденного слайда с помощью индекса
    arrDotstyle[index].classList.remove('slider__dot_active'); // удалить активную точку 
}

function NewSlide (index) {
    arrSliderItem[index].classList.add('slider__item_active'); // тогда добавить к предыдущему слайду класс 
    arrDotstyle[index].classList.add('slider__dot_active');  // добавить активную точку в массив по активному слайду
}