const sliderVideos = document.querySelectorAll('.slider__video')

sliderVideos.forEach((el) => {
  el.addEventListener('touchstart', () => {
    el.pause();
    el.addEventListener('touchend', () => {
      el.play();
    })
  })
})

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
  // Заголовок в хедере на Бизнесе (Бизнес как игра)
  headerTitleBusiness: 'Business like a game',
  // Заголовок в хедере на Главной (Развлечение нового формата)
  headerTitleIndex: 'A new format of entertainment',
  // кнопка Можно скачать в хедере
  canDownload: 'download here',
  // Заголовок главной страницы (Представь, что попал в сюжет невероятной истории через телефон)
  imagineThat: 'Imagine that ',
  hit: ' you&#39;ve found ',
  intoThePlot: ' yourself ',
  incredible: ' in an engaging ',
  story: ' story ',
  through: ' through ',
  yourSmartphone: ' your phone',
  //
  // Описание приложения на главной (Читаешь такой себе текст на экране)
  aboutDescription: 'You are reading the text on the screen, <br> tapping on it and the plot <br> starts unfolding in the reality!',
  //Заголовок страницы Бизнеса (Добавим игровые элементы в ваш бизнес, тем самым увеличим уровень продаж, лояльность, вовлеченность и узнаваемость бренда)
  topTitleBusiness: 'Let&#39;s add gamification elements to your <br> business <br> in order to <br> increase sales, loyalty, engagement <br> and brand awareness',
  // Текст с Бизнеса (Как это сделать? Очень просто, напишите нам! Опишите пожелания к сюжету, или просто расскажите про ваш бизнес - мы пришлем вам предложение за 24 часа!)
  howThatDo: 'How to do it? It&#39;s very simple. ',
  writeTo: 'Just write ',
  writeToUs: 'us! ',
  describeWishes: 'Describe your preferences about the plot or tell ',
  aboutBusiness: 'about your business and we will send you an offer in 24 hours',
  //
  // Заголовок Примеры Геймификаций
  examplesTitle: 'Examples of gamification',
  // Текст с Главной (Все так, это не шутки...)
  activityTitle: 'No kidding. 😈 <br> Check it out yourself:',
  // Текст с Главной (Возможность прожить в реальности сюжет который давно хотел.)
  abilityToLive: 'The opportunity to experience <br> the plot  that you&#39;ve wanted <br> for a long time in the real life.',
  // Текст с Главной (Ты сам выбираешь, что тебе подойдет)
  youChoose: 'You can choose <br> what suits you best',
  // Текст с Главной (Написать свой квест и заработать на этом.Если ты напишешь интересный квест — сразу переведём деньги!)
  activitySendUs: 'Write your own quest <br> and make money with it. <br> If you create <br> an interesting quest, <br> we&#39;ll send you <br> money <br> right away!',
  // Тексты в слайдере
  weWillWrite: 'We will write a unique quest especially for you',
  gamesBring: 'Games bring positive emotions &nbsp; <br> because of which the average check grows',
  questKnows: 'The quest knows how to determine the location of the player <br> - we can bring him to you!',
  wePlayWithLocation: 'We will play with the features of the location, and create <br> additional cost without investment in infrastructure',
  //
  // Тексты с баблов
  addEmotion: 'add emotions to the buying process',
  deliver: 'convey your educational material  in an entertaining way',
  leadBuyers: 'lead customers to the point of sale thanks to interactive.',
  showClients: 'show your clients all the locations on the particular territory',
  associateBrand: 'connect the brand image to the positive interaction experience',
  //
  // Кнопка Перейти ко всем квестам
  contentLink: 'Go to all the quests',
  // Заголовок на Главной (Гляди, что у нас уже есть)
  contentTitle: 'Look what we&#39;ve already got',
  // Подзаголовок на Главной (Проходи квесты не выходя из дома)
  contentTopText: 'Take quests <br> from the comfort of your home',
  // Подзаголовок на Главной (А если тебе не сидится на месте, то смотри вот сюда)
  contentMiddleText: 'And if you want <br> to get out, <br> look here:',
  // Сабмит фидбек формы
  send: 'Send',
  // Копирайт в футере
  copyright: '© 2021 WayMaker. <br> All rights reserved',
  // 'и подписаться'
  subscribe: 'subscribe',
  // Тексты для квестов с Главной
  firstContact: 'An incredible story about hyperreality. Immerse yourself in our "matrix" and help save the world!',
  inFrontOfPandemia: 'You managed to travel back to the beginning of 2019, when the world did not yet know about the word COVID-19. Will you prevent a pandemic?',
  simulatorOfPresident: 'Feel the power! Democracy or tyranny - it&#39;s up to you.',
  secretOfGeotorex: 'You are being introduced as an agent in medieval society. what could go wrong?',
  placesOfSmolensk: 'An interactive story that takes you through the best places in the city! Take a walk, eat, chat.',
  ghostPainter: 'Strange is happening in Gorky Park, and only you can figure it out.',
  breadCrumbsOfHistory: 'A walk through VDNKh through time.',
  // Заголовки квестов с Главной
  firstContactTitle: 'First contact',
  inFrontOfPandemiaTitle: 'In front of pandemia',
  simulatorOfPresidentTitle: 'Simulator of president',
  secretOfGeotorexTitle: 'Secret of Geotorex',
  placesOfSmolenskTitle: 'Interesting places of Smolensk',
  ghostPainterTitle: 'Ghost painter',
  breadCrumbsOfHistoryTitle: 'Bread crumbs of history',
  // Тексты для квестов с Бизнеса
  forGuestsOfSmolensk: 'He takes you to the sights of the city, after which he offers to stop by for a bite to eat at the &laquo;Mayakovsky&raquo; cafe',
  intoParkGorkogo: 'A detective story that will captivate the player right from the entrance to the park, and in the course of the plot will lead to the cafe of the &laquoGarage&raquo Museum',
  WalkAroundVDNKh: 'A quest that will tell about the history of the place, as well as show how it looked in the past.',
  // Заголовки квестов с Бизнеса
  forGuestsOfSmolenskTitle: 'Quest for guests of the city of Smolensk',
  intoParkGorkogoTitle: 'An exciting plot in Gorky Park',
  WalkAroundVDNKhTitle: 'Walk around VDNKh',
  // Плейсхолдеры в фидбек
  namePlaceholder: 'Your name',
  questionPlaceholder: 'Quest, offer',
  // Навигация в хедере
  goToQuests: 'Go to the quests',
  quests: 'Quests',
  business: 'For business',
  forPlayers: 'For players',
  // Навигация в футере
  conditions: 'Conditions',
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
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      el.setAttribute('placeholder', dict[el.getAttribute('text')])
    } else {
      el.innerHTML = dict[el.getAttribute('text')]
    }
  })

  localStorage.setItem('lang', lang)
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

const savedLanguage = localStorage.getItem('lang')

if (savedLanguage === 'en') {
  switchLanguage('en')
  ruSwitchers.forEach(sw => sw.classList.remove('language-switcher-button--active'))
  enSwitchers.forEach((el) => {
    el.classList.add('language-switcher-button--active')
  })
}
