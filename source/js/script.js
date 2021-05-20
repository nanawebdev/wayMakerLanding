const videoMenuItems = document.querySelectorAll('.video-menu__item')
// const videoMenuItemCurrent = document.querySelectorAll('.video-menu__item--current')

for (let i = 0; i < videoMenuItems.length; i++) {
  const videoMenuItem = videoMenuItems[i]

  videoMenuItem.addEventListener('click', function ()  {
    previosVideoCurrent = document.querySelector('.video-menu__item--current')
    previosVideoCurrent.classList.remove('video-menu__item--current')
    videoMenuItem.classList.add('video-menu__item--current')
  })
}
