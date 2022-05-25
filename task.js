const sliderArrowNext = document.querySelector('.slider__arrow_next'); // стрелка вперед
const sliderArrowPrev = document.querySelector('.slider__arrow_prev'); // стрелка назад

const arrSliderItem = Array.from(document.getElementsByClassName('slider__item')); // массив изображений
let activeSlide = arrSliderItem.findIndex((slider) => slider.classList.contains('slider__item_active')); // поиск индекса активного слайда 

const arrDotstyle = Array.from(document.getElementsByClassName('slider__dot')); // массив навигационных точек
arrDotstyle[0].classList.add('slider__dot_active'); // при загрузке страницы активна первая навигационная точка

sliderArrowNext.onclick = function() { // обработчик событий стрелки вперед
    arrSliderItem[activeSlide].classList.remove('slider__item_active'); // удаление класса с найденного слайда с помощью индекса
    arrDotstyle[activeSlide].classList.remove('slider__dot_active'); // удалить активную точку 

    if (activeSlide < arrSliderItem.length - 1) { // если найденный индекс меньше длинны массива слайдов
        arrSliderItem[++activeSlide].classList.add('slider__item_active'); // тогда добавить к следующему слайду класс 
        arrDotstyle[activeSlide].classList.add('slider__dot_active'); // добавить активную точку в массив по активному слайду
    } else {
        activeSlide = 0; // переопределить индекс активного слайда на первый
        arrSliderItem[activeSlide].classList.add('slider__item_active');// добавить класс к первому слайду
        arrDotstyle[activeSlide].classList.add('slider__dot_active'); // добавить активную точку в массив по активному слайду
    } 
}

sliderArrowPrev.onclick = function() { // обработчик событий стрелки назад
    arrSliderItem[activeSlide].classList.remove('slider__item_active'); // удаление класса с найденного слайда с помощью индекса
    arrDotstyle[activeSlide].classList.remove('slider__dot_active'); // удалить активную точку 

    if (activeSlide > 0) { // если найденный индекс больше 0
        arrSliderItem[--activeSlide].classList.add('slider__item_active'); // тогда добавить к предыдущему слайду класс 
        arrDotstyle[activeSlide].classList.add('slider__dot_active'); // добавить активную точку в массив по активному слайду
    } else {
        activeSlide = arrSliderItem.length - 1; // переопределить индекс активного слайдерера на последний
        arrSliderItem[activeSlide].classList.add('slider__item_active'); // добавить класс к последнему слайду
        arrDotstyle[activeSlide].classList.add('slider__dot_active');  // добавить активную точку в массив по активному слайду
     }
}

arrDotstyle.forEach((dot, indx) => // итерация по массиву точек
    dot.onclick = function() { // обработчик событий точки
        arrSliderItem[activeSlide].classList.remove('slider__item_active'); // удаление класса со слайда
        arrDotstyle[activeSlide].classList.remove('slider__dot_active'); // удалить активную точку 
        dot.classList.add('slider__dot_active'); // добавление активной точки 
        activeSlide = indx; // переопределение активного слайда
        arrSliderItem[activeSlide].classList.add('slider__item_active'); // добавить класс к слайду
    }
)

