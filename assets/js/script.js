const navbar = document.querySelector('nav');
window.addEventListener('scroll', function () {
  if (window.scrollY > 0) {
    navbar.classList.replace('bg-transparent', 'bg-dark');
  } else {
    navbar.classList.replace('bg-dark', 'bg-transparent');
  }
  navbar.classList.toggle('scrolled', this.window.scrollY > 0);
});

const moreBtn = document.getElementById('more-btn');
const imgs = document.querySelector('section#galeri div.container div.images');

moreBtn.addEventListener('click', function () {
  imgs.classList.toggle('images-all');
  if (moreBtn.innerHTML.startsWith('Lebih banyak')) {
    moreBtn.innerHTML = 'Lebih sedikit <i class="bi bi-caret-up-fill"></i>';
    moreBtn.removeAttribute('href');
  } else {
    moreBtn.innerHTML = 'Lebih banyak <i class="bi bi-caret-down-fill"></i>';
    moreBtn.setAttribute('href', '#galeri');
  }
});

const scriptURL = 'https://script.google.com/macros/s/AKfycbwQCctICVSKUjp9Cb27aN5a94nfgj08kM37K9NexqP_5DXA94iLcptqFxgIh9YVIpmB-Q/exec';
const form = document.forms['submit-to-google-sheet'];
const btnKirim = document.querySelector('.btn-kirim');
const btnMengirim = document.querySelector('.btn-mengirim');
const msg = document.querySelector('.msg'); 

form.addEventListener('submit', e => {
  e.preventDefault();
  if (msg.classList != 'd-none') msg.classList.add('d-none');
  btnKirim.classList.toggle('d-none');
  btnMengirim.classList.toggle('d-none');
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      console.log('Success!', response);
      btnKirim.classList.toggle('d-none');
      btnMengirim.classList.toggle('d-none');
      msg.classList.toggle('d-none');
      form.reset();
      msg.innerHTML = 'Terkirim, Terima Kasih';
    })
    .catch(error => {
      console.error('Error!', error.message);
      btnKirim.classList.toggle('d-none');
      btnMengirim.classList.toggle('d-none');
      msg.classList.toggle('d-none');
      msg.innerHTML = 'Gagal Mengirim, Coba Lagi';
    })
});