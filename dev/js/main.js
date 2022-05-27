
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
        
        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },
        
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        
        
    });
    
    
    
    
    
    