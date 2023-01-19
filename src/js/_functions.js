// Данный файл - лишь собрание подключений готовых компонентов.
// Рекомендуется создавать отдельный файл в папке components и подключать все там

// Определение операционной системы на мобильных
import { mobileCheck } from "./functions/mobile-check";
console.log(mobileCheck())

// Определение ширины экрана
// import { isMobile, isTablet, isDesktop } from './functions/check-viewport';
// if (isDesktop()) {
//   console.log('...')
// }

// Троттлинг функции (для ресайза, ввода в инпут, скролла и т.д.)
// import { throttle } from './functions/throttle';
// let yourFunc = () => { console.log('throttle') };
// let func = throttle(yourFunc);
// window.addEventListener('resize', func);

// Фикс фулскрин-блоков
// import './functions/fix-fullheight';

// Реализация бургер-меню
import { burger } from './functions/burger';

// Реализация остановки скролла (не забудьте вызвать функцию)
// import { disableScroll } from './functions/disable-scroll';

// Реализация включения скролла (не забудьте вызвать функцию)
// import { enableScroll } from './functions/disable-scroll';

// Реализация модального окна
import GraphModal from 'graph-modal';
const modal = new GraphModal();

// Реализация табов
import GraphTabs from 'graph-tabs';
const tabsProduct = new GraphTabs('productTabs');

// Получение высоты шапки сайта (не забудьте вызвать функцию)
// import { getHeaderHeight } from './functions/header-height';

// Подключение плагина кастом-скролла
// import 'simplebar';

// Подключение плагина для позиционирования тултипов
// import { createPopper, right} from '@popperjs/core';
// createPopper(el, tooltip, {
//   placement: 'right'
// });

// Подключение свайпера
import Swiper, { Navigation, Pagination, Scrollbar, Thumbs, FreeMode } from 'swiper';
Swiper.use([Navigation, Pagination, Scrollbar, Thumbs, FreeMode]);
/*const swiper = new Swiper('.gallery__slider', {
  slidesPerView: '4',
  pagination: {
    el: ".swiper-pagination",
  },
  spaceBetween: 22
});*/

const swiperOptions = {
    slidesPerView: '4',
    spaceBetween: 22,
    // custom pagination
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function(i, className) {
            return `
   <button class="${className}">
  <svg class="progress" width="41" height="41"><circle class="circle-origin" r="20" cx="20.5" cy="20.5"></circle></svg><span>${i + 1
        }</span>
</button>
      `;
        }
    },
    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
            pagination: {
                el: ".swiper-pagination",
            },
        },
        // when window width is >= 480px
        768: {
            slidesPerView: 2,
            spaceBetween: 22
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 22
        },
        // when window width is >= 640px
        1200: {
            slidesPerView: 4,
            spaceBetween: 22
        }
    }
};

const swiperGallery = new Swiper(".gallery__slider", swiperOptions);


// breakpoint where swiper will be destroyed
// and switches to a dual-column layout
const breakpoint = window.matchMedia('(min-width:768px)');
// keep track of swiper instances to destroy later
let swiperHero;
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
const breakpointChecker = function() {
    // if larger viewport and multi-row layout needed
    if (breakpoint.matches === true) {
        // clean up old instances and inline styles when available
        if (swiperHero !== undefined) swiperHero.destroy(true, true);
        // or/and do nothing
        return;
        // else if a small viewport and single column layout needed
    } else if (breakpoint.matches === false) {
        // fire small viewport version of swiper
        return enableSwiper();
    }
};
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
const enableSwiper = function() {
    swiperHero = new Swiper('.hero__slider', {
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
            renderBullet: function(i, className) {
                return `
   <button class="${className}">
  <svg class="progress" width="41" height="41"><circle class="circle-origin" r="20" cx="20.5" cy="20.5"></circle></svg><span>${i + 1
        }</span>
  </button>
      `;
            }
        },
        autoHeight: true,
        spaceBetween: 30
    });
};


const sliderThumbs = new Swiper('.single-product__thumbs .swiper-container', { // ищем слайдер превью по селектору
    // задаем параметры
    direction: 'vertical', // вертикальная прокрутка
    slidesPerView: 3, // показывать по 3 превью
    spaceBetween: 9, // расстояние между слайдами
    navigation: { // задаем кнопки навигации
        nextEl: '.single-product__next', // кнопка Next
        prevEl: '.single-product__prev' // кнопка Prev
    },
    freeMode: true, // при перетаскивании превью ведет себя как при скролле
    breakpoints: { // условия для разных размеров окна браузера
        0: { // при 0px и выше
            direction: 'horizontal', // горизонтальная прокрутка
            slidesPerView: 2,
        },
        768: { // при 768px и выше
            direction: 'vertical', // вертикальная прокрутка
        }
    }
});
// Инициализация слайдера изображений
const sliderImages = new Swiper('.single-product__images .swiper-container', { // ищем слайдер превью по селектору
    // задаем параметры
    direction: 'vertical', // вертикальная прокрутка
    slidesPerView: 1, // показывать по 1 изображению
    spaceBetween: 32, // расстояние между слайдами
    mousewheel: true, // можно прокручивать изображения колёсиком мыши
    navigation: { // задаем кнопки навигации
        nextEl: '.single-product__next', // кнопка Next
        prevEl: '.single-product__prev' // кнопка Prev
    },
    grabCursor: true, // менять иконку курсора
    thumbs: { // указываем на превью слайдер
        swiper: sliderThumbs // указываем имя превью слайдера
    },
    breakpoints: { // условия для разных размеров окна браузера
        0: { // при 0px и выше
            direction: 'horizontal', // горизонтальная прокрутка
        },
        768: { // при 768px и выше
            direction: 'vertical', // вертикальная прокрутка
        }
    }
});





//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////
// keep an eye on viewport size changes
breakpoint.addListener(breakpointChecker);
// kickstart
breakpointChecker();

// Подключение анимаций по скроллу
// import AOS from 'aos';
// AOS.init();

// Подключение параллакса блоков при скролле
// import Rellax from 'rellax';
// const rellax = new Rellax('.rellax');

// Подключение плавной прокрутки к якорям
// import SmoothScroll from 'smooth-scroll';
// const scroll = new SmoothScroll('a[href*="#"]');

// Подключение событий свайпа на мобильных
// import 'swiped-events';
// document.addEventListener('swiped', function(e) {
//   console.log(e.target);
//   console.log(e.detail);
//   console.log(e.detail.dir);
// });

// import { validateForms } from './functions/validate-forms';
// const rules1 = [...];

// const afterForm = () => {
//   console.log('Произошла отправка, тут можно писать любые действия');
// };

// validateForms('.form-1', rules1, afterForm);
import { accordion } from './functions/gianniAccordion.min';
let faq = new gianniAccordion({
    elements: ".faq__accordion .faq__item",
    trigger: "[data-accordion-element-trigger]",
    content: "[data-accordion-element-content]",
    openAtLandingIndex: 0,
});
let table = new gianniAccordion({
    elements: ".tabs__accardion .tabs__tpanel",
    trigger: "[data-accordion-element-trigger]",
    content: "[data-accordion-element-content]",
});
