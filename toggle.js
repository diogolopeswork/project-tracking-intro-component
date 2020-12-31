const btn = document.getElementById('hamburger');
const nav = document.getElementById('nav')
const close = document.getElementById('close')

btn.addEventListener('click', () => {
    nav.classList.toggle('active');
    btn.classList.toggle('close');
})