const sliderVideos = document.querySelectorAll('.slider__video')

if (sliderVideos.length > 1) {
  const sliderDescriptions = document.querySelectorAll('.slider__description')

  sliderVideos[0].play()
  for (let i = 0; i < 4; i++) {
    sliderVideos[i].addEventListener('ended', () => {
      sliderVideos[i].classList.remove('slider__video--current')
      sliderDescriptions[i].classList.remove('slider__description--current')

      const nextIndex = i + 1 === 4 ? 0 : i + 1

      sliderVideos[nextIndex].classList.add('slider__video--current')
      sliderDescriptions[nextIndex].classList.add('slider__description--current')
      sliderVideos[nextIndex].play()
    })
  }
}

if (sliderVideos.length === 1) {
  const sliderDescriptions = document.querySelectorAll('.slider__description')

  sliderVideos[0].play()

  let currentDescriptionIndex = 0

  function activateNextDescription() {
    const nextIndex = currentDescriptionIndex + 1 === 4 ? 0 : currentDescriptionIndex + 1
    sliderDescriptions[currentDescriptionIndex].classList.remove('slider__description--current')
    sliderDescriptions[nextIndex].classList.add('slider__description--current')
    currentDescriptionIndex = nextIndex

    setTimeout(activateNextDescription, 3000)
  }

  setTimeout(activateNextDescription, 3000)
}

const mainOffsetTop = document.querySelector('.main').offsetTop
const videoWrapper = document.querySelector('.video')
const videoBgEl = document.querySelector('.main-header .video__media')

window.addEventListener('scroll', () => {
  if (window.pageYOffset >= mainOffsetTop) {
    videoBgEl.pause()
    videoWrapper.style.display = 'none'
  } else {
    videoBgEl.play()
    videoWrapper.style.display = ''
  }
})

const engDictionary = {
  // Заголовок в хедере на Бизнесе
  headerTitleBusiness: 'Business like a game',
  // Заголовок в хедере на Главной
  headerTitleIndex: 'New way of entertainment',
  // кнопка Можно скачать в хедере
  canDownload: 'download',
 // Описание приложения на главной (Читаешь такой себе текст на экране)
  aboutDescription: 'You read such a text on the screen, <br> click on it - and the plot <br> unfolds in real life!',
  //Заголовок страницы Бизнеса
  topTitleBusiness: 'Let&#39;s add game elements to your <br> business,<br> sowe will <br> increase the level, loyalty, engagement <br> and brand awareness',
  // Заголовок главной страницы
   imagineThat: 'Imagine that',
   hit: 'hit',
   intoThePlot: 'into the plot',
   incredible: 'incredible',
   story: 'story',
   through: 'through',
   yourSmartphone: 'your smartphone',
  //
  // Текст напишите нам
  sendUsTitle: 'Write to us! <br> Describe your wishes for the plot, or just tell us <br> about your business - we will send you an offer in 24 hours!',
  // Заголовок Примеры Геймификаций
  examplesTitle: 'Examples of gamification',
  // Текст с Главной (Все так, это не шутки...)
  activityTitle: 'Surely, <br> this is not a joke 😈 <br> See for yourself:',
  // Текст с Главной (Возможность прожить...)
  abilityToLive: 'The ability to live <br> in reality a plot <br> that has long wanted.',
  // Текст с Главной (Ты сам выбираешь...)
  youChoose: 'You choose <br> what suits you',
  // Тексты в слайдере
  activitySendUs: 'Write your quest <br> and make money on it. <br> If you write <br> an interesting quest,<br> we will immediately <br> transfer <br> the money!',
  weWillWrite: 'We will write a unique quest especially for you',
  gamesBring: 'Games bring positive emotions &nbsp; <br> because of which the average check grows',
  questKnows : 'The quest knows how to determine the location of the player <br> - we can bring him to you!',
  wePlayWithLocation : 'We will play with the features of the location, and create <br> additional cost without investment in infrastructure',
  //
  // Тексты с баблов
  addEmotion : 'add emotion to the shopping process',
  deliver: 'deliver educational material in a playful way',
  leadBuyers: 'lead buyers to the point of sale through interactive',
  showClients: 'show clients all locations in a certain territory',
  associateBrand : 'associate brand image with positive interaction experiences',
  //
  // Кнопка Перейти ко всем квестам
  contentLink : 'Go to all quests',
  // Заголовок на Главной (Смотри, что у нас...)
  contentTitle : 'Look what we already have',
  // Подзаголовок на Главной (Проходи квесты, не...)
  contentTopText : 'Complete quests <br> without leaving home',
  // Подзаголовок на Главной (А если тебе не сидится...)
  contentMiddleText : 'And if you do not sit on <br> location, <br> then look here',
  // Сабмит фидбек формы
  send : 'Send',
  // Копирайт в футере
  copyright : '© 2021 WayMaker. <br> All rights reserved',
   // 'и подписаться'
  subscribe: 'subscribe',
  // Тексты для квестов с Главной
  firstContact : 'An incredible story about hyperreality. Immerse yourself in our "matrix" and help save the world!',
  inFrontOfPandemia : 'You managed to travel back to the beginning of 2019, when the world did not yet know about the word COVID-19. Will you prevent a pandemic?',
  simulatorOfPresident : 'Feel the power! Democracy or tyranny - it&#39;s up to you.',
  secretOfGeotorex : 'You are being introduced as an agent in medieval society. what could go wrong?',
  placesOfSmolensk : 'An interactive story that takes you through the best places in the city! Take a walk, eat, chat.',
  ghostPainter : 'Strange is happening in Gorky Park, and only you can figure it out.',
  breadCrumbsOfHistory : 'A walk through VDNKh through time.',
  // Заголовки квестов с Главной
  firstContactTitle : 'First contact',
  inFrontOfPandemiaTitle : 'In front of pandemia',
  simulatorOfPresidentTitle: 'Simulator of president',
  secretOfGeotorexTitle : 'Secret of Geotorex',
  placesOfSmolenskTitle: 'Interesting places of Smolensk',
  ghostPainterTitle : 'Ghost painter',
  breadCrumbsOfHistoryTitle : 'Bread crumbs of history',
  // Тексты для квестов с Бизнеса
  forGuestsOfSmolensk : 'He takes you to the sights of the city, after which he offers to stop by for a bite to eat at the &laquo;Mayakovsky&raquo; cafe',
  intoParkGorkogo : 'A detective story that will captivate the player right from the entrance to the park, and in the course of the plot will lead to the cafe of the &laquoGarage&raquo Museum',
  WalkAroundVDNKh : 'A quest that will tell about the history of the place, as well as show how it looked in the past.',
  // Заголовки квестов с Бизнеса
  forGuestsOfSmolenskTitle : 'Quest for guests of the city of Smolensk',
  intoParkGorkogoTitle : 'An exciting plot in Gorky Park',
  WalkAroundVDNKhTitle : 'Walk around VDNKh',
  // Плейсхолдеры в фидбек
  namePlaceholder : 'Your name',
  questionPlaceholder : 'Quest, offer',
  // Навигация в хедере
  goToQuests : 'Go to quests',
  quests : 'Quests',
  business : 'For business',
  forPlayers : 'For players',
  // Навигация в футере
  conditions : 'Conditions',
}

const ruDictionary = {}

const enSwitchers = document.querySelectorAll('.language-switcher-button--en')
const ruSwitchers = document.querySelectorAll('.language-switcher-button--ru')
const textElements = document.querySelectorAll('[text]');

textElements.forEach((el) => {
  if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
    ruDictionary[el.getAttribute('text')] = el.getAttribute('placeholder')
  } else {
    ruDictionary[el.getAttribute('text')] = el.innerHTML
  }
})

const switchLanguage = (lang) => {
  const dict = lang === 'ru' ? ruDictionary : engDictionary

  textElements.forEach((el) => {
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' ) {
      el.setAttribute('placeholder', dict[el.getAttribute('text')])
    } else {
      el.innerHTML = dict[el.getAttribute('text')]
    }
  })
}


enSwitchers.forEach((el) => {
  el.addEventListener('click', () => {
    ruSwitchers.forEach(sw => sw.classList.remove('language-switcher-button--active'))
    el.classList.add('language-switcher-button--active')
    switchLanguage('en')
  })
})

ruSwitchers.forEach((el) => {
  el.addEventListener('click', () => {
    enSwitchers.forEach(sw => sw.classList.remove('language-switcher-button--active'))
    el.classList.add('language-switcher-button--active')
    switchLanguage('ru')
  })
})


