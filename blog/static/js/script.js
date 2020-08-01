// burger menu

const openBtn = document.querySelector('.open')
const closeBtn = document.querySelector('.close')
const navSection = document.querySelector('nav')

const openFunc = () => {
    navSection.style.top = '0'
    openBtn.style.display = 'none'
    closeBtn.style.display = 'block'
}

const closeFunc = () => {
    navSection.style.top = '-100%'
    openBtn.style.display = 'block'
    closeBtn.style.display = 'none'
}

openBtn.addEventListener('click', openFunc)
closeBtn.addEventListener('click', closeFunc)