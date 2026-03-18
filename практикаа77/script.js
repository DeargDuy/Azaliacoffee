const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');

if (burger && nav) {
  burger.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    burger.setAttribute('aria-expanded', String(open));
  });

  nav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      if (nav.classList.contains('is-open')) {
        nav.classList.remove('is-open');
        burger.setAttribute('aria-expanded', 'false');
      }
    });
  });
}

const testimonials = [
  {
    text: "Кофе превзошёл все ожидания. Попробовала эспрессо – напиток оказался насыщенным, с приятной горчинкой и богатым ароматом. Бариста порекомендовал попробовать их фирменный раф – и это было настоящим открытием!",
    name: "Лосев Илья",
    avatar: "images/orig.jpg"
  },
  {
    text: "Очень вкусный кофе и уютная атмосфера. Понравилось меню и быстрая подача. Вернусь ещё!",
    name: "Мария К.",
    avatar: "images/orig.jpg"
  },
  {
    text: "Отличный сервис, приятные цены. На сайте удобно выбрать напиток даже с телефона.",
    name: "Александр П.",
    avatar: "images/orig.jpg"
  }
];

let idx = 0;
const tText = document.getElementById('tText');
const tName = document.getElementById('tName');
const tAvatar = document.getElementById('tAvatar');

function render() {
  const t = testimonials[idx];
  if (tText) tText.textContent = t.text;
  if (tName) tName.textContent = t.name;
  if (tAvatar) tAvatar.src = t.avatar;
}

render();

document.querySelector('[data-prev]')?.addEventListener('click', () => {
  idx = (idx - 1 + testimonials.length) % testimonials.length;
  render();
});
document.querySelector('[data-next]')?.addEventListener('click', () => {
  idx = (idx + 1) % testimonials.length;
  render();
});

window.addEventListener("scroll", function(){
  const header = document.querySelector(".topbar");
  if(window.scrollY > 50){
    header.classList.add("scrolled");
  }else{
    header.classList.remove("scrolled");
  }
});