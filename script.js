document.addEventListener('DOMContentLoaded', function () {
  const dropdowns = document.querySelectorAll('.dropdown')

  dropdowns.forEach((dropdown) => {
    const toggleButton = dropdown.querySelector('.dropdown-toggle')

    toggleButton.addEventListener('click', function (event) {
      event.preventDefault()
      const dropdownMenu = dropdown.querySelector('.dropdown-menu')
      dropdownMenu.classList.toggle('show')

      dropdowns.forEach((otherDropdown) => {
        if (otherDropdown !== dropdown) {
          const otherMenu = otherDropdown.querySelector('.dropdown-menu')
          otherMenu.classList.remove('show')
        }
      })
    })
  })

  document.addEventListener('click', function (event) {
    if (!event.target.closest('.dropdown')) {
      dropdowns.forEach((dropdown) => {
        const dropdownMenu = dropdown.querySelector('.dropdown-menu')
        dropdownMenu.classList.remove('show')
      })
    }
  })
})
