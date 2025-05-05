// Sticky header on scroll

// let header = document.getElementById('header')
// let sticky = header.offsetTop;

// const stickyHeader = () => {
//   if (window.pageYOffset > sticky) {
//     header.classList.add('sticky')
//   }

//   else {
//     header.classList.remove('sticky')
//   }
// }

// Current year copyright
let currentYear = new Date().getFullYear()
let footerYear = document.getElementById('footer-year')

footerYear.textContent = currentYear

// Back to top
const backToTopBtn = document.getElementById('back-to-top')

const scrollToTop = () => {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    backToTopBtn.style.display = 'block'
  } else {
    backToTopBtn.style.display = 'none'
  }
}

const toTopFunction = () => {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0
}

backToTopBtn.addEventListener('click', () => toTopFunction())

window.onscroll = () => scrollToTop()

// Accordion
const accordion = document.querySelectorAll('.website-title-accordion')

accordion.forEach((acc) => {
  acc.addEventListener('click', (e) => {
    e.target.classList.toggle('active')

    const panel = e.target.nextElementSibling

    if (e.target.classList.contains('active')) {
      panel.style.gridTemplateRows = '1fr'
    } else {
      panel.style.gridTemplateRows = '0fr'
    }

    // e.target.classList.contains('active') ? panel.style.gridTemplateRows = '1fr' : panel.style.gridTemplateRows = '0fr';

    // if (e.target.classList.contains('active')) {
    // panel.style.opacity = '1';
    // panel.style.height = '20%';
    // panel.style.overflowY = 'scroll';
    // }

    // else {
    // panel.style.opacity = '0';
    // panel.style.height = '0';
    // }
  })
})

window.onscroll = () => {
  // stickyHeader()
  scrollToTop()
}
