// Current year copyright
let currentYear = new Date().getFullYear()
let footerYear = document.getElementById('footer-year')

// Convert year to roman numerals
const numberToNumeral = (number) => {
  let numeral = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  }

  let string = ''

  for (let l of Object.keys(numeral)) {
    let j = Math.floor(number / numeral[l])
    number -= j * numeral[l]
    string += l.repeat(j)
  }

  return string
}

footerYear.textContent = numberToNumeral(currentYear)

// Back to top
const backToTopBtn = document.getElementById('back-to-top')

const scrollToTop = () => {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    backToTopBtn.style.display = 'block'
  } else {
    backToTopBtn.style.display = 'none'
  }
}

const toTopFunction = () => {
  document.body.scrollTop = 0
  document.documentElement.scrollTop = 0

  if (window.location.hash) {
    history.replaceState('', document.title, window.location.pathname)
  }
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
