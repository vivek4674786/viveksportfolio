
 /*===========toggle icon navbar===========*/

 let menuIcon = document.querySelector('#menu-icon');
 let navbar = document.querySelector('.navbar');

 menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
 }

 /*===========scroll section active link===========*/

let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        };
    });

    /*===========sicky navbar===========*/

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /*=======remove toggle icon and navbar when click navbar link (scroll) ===================*/

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');


    
};

/*========Scroll Revel ============*/
ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 100
});

ScrollReveal().reveal('.intro-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.intro-img, .container .box, .resume', { origin: 'bottom' });
ScrollReveal().reveal('.card-box-left, .intro-content h1', { origin: 'left' });
ScrollReveal().reveal('.card-box-right, .social-media', { origin: 'rignt' });


