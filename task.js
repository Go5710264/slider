const sliderArrowNext = document.querySelector('.slider__arrow_next'); // стрелка вперед
const sliderArrowPrev = document.getElementsByClassName('slider__arrow_prev'); // стрелка назад

const arrSliderItem = Array.from(document.getElementsByClassName('slider__item')); // массив изображений

// sliderArrowNext.onclick = function() { // обработчик событий стрелки вперед
//     arrSliderItem.forEach((pictureNumber) => {
//         if (pictureNumber <= arrSliderItem.length - 2) {
//             pictureNumber++;
//         } else {
//             pictureNumber[0];
//         }
//     })
// }

// sliderArrowNext.onclick = function() { // обработчик событий стрелки назад
    
// }

arrSliderItem.forEach((pictureNumber, idx) => { // итерация по массиву изображений
    sliderArrowNext.onclick = function() { // обработчик событий стрелки вперед
        if (idx <= arrSliderItem.length - 2) {
            pictureNumber++;
        } else {
            pictureNumber[0];
        }
    }
})