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
    });
  }
}

if (sliderVideos.length === 1) {
  const sliderDescriptions = document.querySelectorAll('.slider__description')

  sliderVideos[0].play()

  let currentDescriptionIndex = 0;

  function activateNextDescription() {
    const nextIndex = currentDescriptionIndex + 1 === 4 ? 0 : currentDescriptionIndex + 1
    sliderDescriptions[currentDescriptionIndex].classList.remove('slider__description--current')
    sliderDescriptions[nextIndex].classList.add('slider__description--current')
    currentDescriptionIndex = nextIndex

    setTimeout(activateNextDescription , 3000)
  }

  setTimeout(activateNextDescription, 3000)
}

const mainOffsetTop = document.querySelector('.main').offsetTop
const videoWrapper = document.querySelector('.video')
const videoBgEl = document.querySelector('.main-header .video__media')

window.addEventListener('scroll', () => {
  if (window.pageYOffset >= mainOffsetTop) {
    videoBgEl.pause()
    // videoWrapper.style.display = 'none'
  } else {
    videoBgEl.play()
    // videoWrapper.style.display = ''
  }
})
