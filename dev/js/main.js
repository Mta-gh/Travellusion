
let link = document.querySelector(".elBurgerito")
let contact = document.querySelector(".burger-popup")
let overlay = document.querySelector(".overloff")

// 2 fonctions pour utiliser le burger et l'overlay pour toggle le menu

// Burger
link.addEventListener('click', function() {
    contact.classList.toggle("active");
    link.classList.toggle("active");
    overlay.classList.toggle("overlon");
    
});

// Overlay
overlay.addEventListener('click', function() {
    contact.classList.toggle("active");
    link.classList.toggle("active");
    overlay.classList.toggle("overlon");
});


// Sticky Nav
let headNav = document.querySelector('.head-nav');
let theTop = 0;
let hidePoint = 300

document.addEventListener('scroll', () => {
    let top = document.documentElement.scrollTop;
    if (theTop < top) {
        headNav.classList.remove('sticky');
    } 
    // Point à partir du moment duquel la nav se remet a sa place de départ
    else if (top < hidePoint) {
        headNav.classList.remove('sticky');
    }
    else {
        headNav.classList.add('sticky');
    }
    theTop = top;
}
);

//////////////////Cursor TEST//
document.onmousemove = function (e) {
    document.body.style.setProperty('--x', e.pageX + 'px');
    document.body.style.setProperty('--y', e.pageY + 'px');
};

let links = document.querySelectorAll('a');

let cursorito = document.querySelector('.cursor');

links.forEach(link => {
    link.addEventListener('mouseenter', e => {
        cursorito.classList.add('enlarged')
    })
    link.addEventListener('mouseout', e => {
        cursorito.classList.remove('enlarged')
    })
});

document.addEventListener('mousemove', (e) => {
    cursorito.setAttribute(
        'style',
        'top: ' + e.pageY + 'px; left: ' + e.pageX + 'px;'
        );
    });
    
    
    
    
    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        
        
        
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        
        
    });