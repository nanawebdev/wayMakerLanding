const sliderVideos = document.querySelectorAll('.slider__video')

if (sliderVideos.length > 0) {
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

const mainOffsetTop = document.querySelector('.main').offsetTop
const videoWrapper = document.querySelector('.video')
const videoBgEl = document.querySelector('.video__media')

window.addEventListener('scroll', () => {
  if (window.pageYOffset >= mainOffsetTop) {
    videoBgEl.pause()
    videoWrapper.style.position = 'absolute'
  } else {
    videoBgEl.play()
    videoWrapper.style.position = 'fixed'
  }
})
