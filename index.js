

const stars = document.querySelectorAll('.star');
const shapes = document.querySelectorAll(".shape");
const landingpage = document.querySelector('#landing');
const modalbody = document.querySelector('.modal__body');
const modalabout = document.querySelector('.modal__about');
const modalcontact = document.querySelector('.modal__contact');



AOS.init({
  duration: 800
});

function toggleTheme() {
  document.documentElement.classList.toggle('dark');
}

function toggleMenu() {
  document.body.classList.toggle('open');
}

function toggleContact() {
  document.body.classList.remove('open')
  document.body.classList.toggle('contact')
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'instant'
  })
  setTimeout(() => window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'instant'
  }), 100)
}

stars.forEach(function(star) {
  star.setAttribute('directionX', Math.random());
  star.setAttribute('directionY', Math.random());
})

landingpage.addEventListener('mousemove', function(e) {
    e.preventDefault();
    let x = e.clientX / 64;
    let y = e.clientY / 64;

    stars.forEach(function(star) {
        const directionX = Number(star.getAttribute('directionX')) > 0.5 ? 1 : -1;
        const directionY = Number(star.getAttribute('directionY')) > 0.5 ? 1 : -1;
        star.style.transform = `translateX(${2 * x * directionX}px) translateY(${2 * y * directionY}px) `;
    })
    
})

// EmailJS

async function contact(event) {
  event.preventDefault();
  const loading = document.querySelector('.modal__loading');
  const success = document.querySelector('.modal__success');
  loading.classList.add('modal__loading--visible');
 
  try {
    await emailjs.sendForm(
      'service_x7p8zps',
      'template_3mb51vn',
        event.target,
      'zOk9HKruBwUrh7I1I'
    )
    document.body.classList.add('checkmark');
    setTimeout(() => {
        document.body.classList.remove('checkmark');
        loading.classList.remove('modal__loading--visible');
        success.classList.add('modal__success--visible');
    }, 2000)
    setTimeout(() => {
      document.body.classList.add('checkmark');
    }, 2000)
    setTimeout(() => {
      loading.classList.remove('modal__loading--visible');
      success.classList.add('modal__success--visible');
    }, 2000)
  } catch (error) {
    console.log(error)
    loading.classList.remove('modal__loading--visible');
    alert("The email service is unavailable right now. Please contact me at almoe099@gmail.com.")
    return;
  }

}

// Swiper

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  slidesPerView: 'auto',
  centeredSlides: true,
  loopedSlides: 0,
  slidesPerGroup: 1,
  spaceBetween: 16,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});