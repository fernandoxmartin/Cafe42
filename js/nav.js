const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const body = document.getElementsByTagName('BODY')[0];

hamburger.addEventListener('click', () => {

    if (navLinks.classList.toggle('open')){
        body.style.overflow = "hidden";
    } else {
        body.style.overflow = "scroll";
    }
});
