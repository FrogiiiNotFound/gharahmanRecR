// header button svg

const headerButton = document.querySelector('.header__button');
const headerButtonImage = document.querySelector('.header__button-image');

headerButton.addEventListener('mousedown', () => {
  const paths = headerButtonImage.querySelectorAll('path');

  paths.forEach((path) => {
    path.style.stroke = '#ff8d8d';
    path.style.fill = 'none';
  });

  const rects = headerButtonImage.querySelectorAll('rect');

  rects.forEach((rect) => {
    rect.style.stroke = '#ff8d8d';
    rect.style.fill = 'none';
  });
});

headerButton.addEventListener('mouseup', () => {
  const paths = headerButtonImage.querySelectorAll('path');
  paths.forEach((path) => {
    path.style.stroke = '#EDEDED';
  });

  const rects = headerButtonImage.querySelectorAll('rect');
  rects.forEach((rect) => {
    rect.style.stroke = '#EDEDED';
  });
});

// home button svg

const homeButton = document.querySelector('.home__button');
const homeButtonImage = document.querySelector('.home__button-image');

homeButton.addEventListener('mousedown', () => {
  const paths = homeButtonImage.querySelectorAll('path');

  paths.forEach((path) => {
    path.style.stroke = '#B81726';
    path.style.fill = 'none';
  });

  const rects = homeButtonImage.querySelectorAll('rect');

  rects.forEach((rect) => {
    rect.style.stroke = '#B81726';
    path.style.fill = 'none'; // Ошибка исправлена
  });
});

homeButton.addEventListener('mouseup', () => {
  const paths = homeButtonImage.querySelectorAll('path');
  paths.forEach((path) => {
    path.style.stroke = '#EDEDED';
  });

  const rects = homeButtonImage.querySelectorAll('rect');
  rects.forEach((rect) => {
    rect.style.stroke = '#EDEDED';
  });
});

// play button

function setupVideoPlayer(
  videoId,
  buttonSelector,
  reviewTextSelector,
  playButtonSvgSelector,
  reviewTemplateSelector,
) {
  const video = document.getElementById(videoId);
  const button = document.querySelector(buttonSelector);
  const reviewText = document.querySelector(reviewTextSelector);
  const playButtonSvg = document.querySelector(playButtonSvgSelector);
  const reviewTemplate = document.querySelector(reviewTemplateSelector);

  if (!video || !button || !reviewText || !playButtonSvg || !reviewTemplate) {
    console.warn(`One or more elements not found for videoId: ${videoId}`);
    return;
  }

  // Изначально скрываем видео и показываем блок с отзывами
  video.style.display = 'none';
  reviewTemplate.style.display = 'block';

  button.addEventListener('click', function () {
    if (video.paused) {
      // Скрываем блок с отзывами и показываем видео
      reviewTemplate.style.display = 'none';
      video.style.display = 'block';

      video.play();
      button.classList.add('playing');
      reviewText.style.display = 'none';
      playButtonSvg.style.opacity = '0.2';
    } else {
      // Останавливаем видео и показываем блок с отзывами
      video.pause();
      video.style.display = 'none';
      reviewTemplate.style.display = 'block';

      button.classList.remove('playing');
      reviewText.style.display = 'block';
      playButtonSvg.style.opacity = '1';
    }
  });

  // Обработчик события окончания видео
  video.addEventListener('ended', function () {
    // Скрываем видео и показываем блок с отзывами
    video.style.display = 'none';
    reviewTemplate.style.display = 'block';
    button.classList.remove('playing');
    reviewText.style.display = 'block';
    playButtonSvg.style.opacity = '1';
  });
}

// Используем универсальную функцию для всех шести видео-блоков
setupVideoPlayer(
  'myVideo',
  '#playPauseBtn',
  '.review-text1',
  '.play-button1',
  '.reviews__review-template',
);
setupVideoPlayer(
  'myVideo2',
  '.playPauseBtn2',
  '.review-text2',
  '.play-button2',
  '.reviews__review-template2',
);
setupVideoPlayer(
  'myVideo3',
  '.playPauseBtn3',
  '.review-text3',
  '.play-button3',
  '.reviews__review-template3',
);
setupVideoPlayer(
  'myVideo4',
  '.playPauseBtn4',
  '.review-text4',
  '.play-button4',
  '.reviews__review-template4',
);
setupVideoPlayer(
  'myVideo5',
  '.playPauseBtn5',
  '.review-text5',
  '.play-button5',
  '.reviews__review-template5',
);
setupVideoPlayer(
  'myVideo6',
  '.playPauseBtn6',
  '.review-text6',
  '.play-button6',
  '.reviews__review-template6',
);

// menu burger

const body = document.querySelector('body');
const menuIcon = document.querySelector('.icon-menu');
const menuBody = document.querySelector('.menu__body');

menuIcon.addEventListener('click', (e) => {
  menuIcon.classList.toggle('_active');
  menuBody.classList.toggle('_active');
  body.classList.toggle('_active');
});

// slider

const swiper = new Swiper('.info__slider', {
  navigation: {
    nextEl: '.info__button-next',
    prevEl: '.info__button-prev',
  },
  fadeEffect: {
    crossFade: true,
  },
  spaceBetween: 20, // расстояние между слайдами
  slidesPerView: 1.7, // показываем полтора слайда (центральный и половинки боковых)
  centeredSlides: true, // центрируем активный слайд
  speed: 500,
  initialSlide: 1,
});

// form

const form = document.querySelector('.form__Aside');
const submitBtn = document.querySelector('.form__button');

// Функция для обработки изменения значения input
const handleInputChange = (input) => {
    if (input.value.trim()) {
      input.classList.remove('error');
      input.style.setProperty('--placeholder-color', ''); // Сбрасываем цвет placeholder
    }
};

submitBtn.addEventListener('click', () => {
  let isValid = true;

  const requiredFields = form.querySelectorAll('.form__link[required]');

  requiredFields.forEach((input) => {
    if (!input.value.trim()) {
      input.classList.add('error');
      input.style.setProperty('--placeholder-color', 'red'); // Устанавливаем цвет placeholder
      isValid = false;
    } else {
      input.classList.remove('error');
      input.style.setProperty('--placeholder-color', ''); // Сбрасываем цвет placeholder
    }
  });

  if (isValid) {
    form.submit(); // Отправляем форму, если все поля заполнены
  }
});

// Добавляем слушатель события input к каждому обязательному полю
const requiredFields = form.querySelectorAll('.form__link[required]');
requiredFields.forEach((input) => {
  input.addEventListener('input', () => {
    handleInputChange(input);
  });
});


// menu

document.addEventListener('DOMContentLoaded', function () {
  function scrollToElement(triggerElementSelector, targetElementSelector) {
    const triggerElement = document.querySelector(triggerElementSelector);
    const targetElement = document.querySelector(targetElementSelector);

    if (triggerElement && targetElement) {
      triggerElement.addEventListener('click', function (event) {
        event.preventDefault();

        const targetElementPosition =
          targetElement.offsetTop - window.innerHeight / 2 + targetElement.offsetHeight / 2;

        window.scrollTo({
          top: targetElementPosition,
          behavior: 'smooth',
        });

        // Удаляем класс _active у menu__body после прокрутки
        const menuBody = document.querySelector('.menu__body');
        if (menuBody && menuBody.classList.contains('_active')) {
          menuBody.classList.remove('_active');
        }

        // Удаляем класс _active у menu__icon после прокрутки
        const menuIcon = document.querySelector('.menu__icon');
        if (menuIcon && menuIcon.classList.contains('_active')) {
          menuIcon.classList.remove('_active');
        }
      });
    } else {
      console.error(
        `Элементы с классами ${triggerElementSelector} или ${targetElementSelector} не найдены.`,
      );
    }
  }

  scrollToElement('.menu-link1', '.about');
  scrollToElement('.menu-link2', '.reviews');
  scrollToElement('.menu-link3', '.plan');
  scrollToElement('.header__button', '.form');
});

// form svg button

const formButton = document.querySelector('.form__button');
const formButtonImage = document.querySelector('.form__button-svg');

formButton.addEventListener('mousedown', () => {
  const paths = formButtonImage.querySelectorAll('path');

  paths.forEach((path) => {
    path.style.stroke = '#B81726';
    path.style.fill = 'none';
  });

  const rects = formButtonImage.querySelectorAll('rect');

  rects.forEach((rect) => {
    rect.style.stroke = '#B81726';
    rect.style.fill = 'none';
  });
});

formButton.addEventListener('mouseup', () => {
  const paths = formButtonImage.querySelectorAll('path');
  paths.forEach((path) => {
    path.style.stroke = '#EDEDED';
  });

  const rects = formButtonImage.querySelectorAll('rect');
  rects.forEach((rect) => {
    rect.style.stroke = '#EDEDED';
  });
});
