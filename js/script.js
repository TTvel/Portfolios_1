/*=====Toggle Icon Navbar===== */
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.nav');

menu.onclick = () => {

    menu.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
};

/*=====Scroll Selection active link===== */

let sections = document.querySelectorAll('section');
let navs = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top + height) {
            navs.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']')
                    .classList.add('active');
                
            });
        };
    });
       /*====== Sticky navbar ======*/
       
       let header = document.querySelector('header');

       header.classList.toggle('sticky',window.scrollY > 100);
       
       //remove toggle icon and nav........
       menu.classList.remove('fa-xmark');
       navbar.classList.remove('active')
};

//....Scroll Reveal.....

ScrollReveal({
    reset: true, 
    distance:'60px', 
    duration:2500, 
    delay:80 
});

ScrollReveal().reveal('h2, .skill-cont', { origin: 'top' });
ScrollReveal().reveal('.home-content, .about-img, .card1, .info, .form', { origin: 'left' });
ScrollReveal().reveal('.home-img, .h22, .about-cont, .card2, form', { origin: 'right' });
ScrollReveal().reveal('.card', { origin: 'bottom' });

//........Typed js............

 var typed = new Typed('.typing', {
      strings: ['Frontend Developer','Backend Developer'],
      typeSpeed:200,
      backspeed:100,
      backDelay:1000,
      loop: true
    });