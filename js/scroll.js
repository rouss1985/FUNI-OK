function scrollIt(element) {
  window.scrollTo({
    'behavior': 'smooth',
    'left': 0,
    'top': element.offsetTop
  });
}

const btn = document.getElementById('js-btn');
const section = document.querySelector('.js-section');

btn.addEventListener('click', function() {
  scrollIt(section);
});
