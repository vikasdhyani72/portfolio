const navToggler = document.querySelector('.nav-toggler')
const navMenu = document.querySelector('#nav-menu')
const dropdownToggle = document.querySelector('#dropdownToggle')
const dropdownItem = document.querySelector('.dropdown')

navToggler.addEventListener('click', () => {
  navMenu.classList.toggle('show')
})

dropdownToggle.addEventListener('click', (e) => {
  e.preventDefault()
  dropdownItem.classList.toggle('active')
})
