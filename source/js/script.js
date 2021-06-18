// const videoMenuItems = document.querySelectorAll('.video-menu__item')

// const firstVideoEl = document.querySelector('.video-menu__item--current .video-menu__media')
// firstVideoEl.play()

// for (let i = 0; i < videoMenuItems.length; i++) {
//   const videoMenuItem = videoMenuItems[i]

//   videoMenuItem.addEventListener('click', function () {
//     previousVideoCurrent = document.querySelector('.video-menu__item--current')
//     const previousVideoEl = previousVideoCurrent.querySelector('.video-menu__media')
//     previousVideoEl.pause()
//     previousVideoCurrent.classList.remove('video-menu__item--current')
//     videoMenuItem.classList.add('video-menu__item--current')
//     const videoEl = videoMenuItem.querySelector('.video-menu__media')
//     videoEl.play()
//   })
// }

const sliderVideos = document.querySelectorAll('.slider__video')
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

