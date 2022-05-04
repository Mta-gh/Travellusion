
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


//Cursor test//

const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {
	cursor.setAttribute(
		'style',
		'top:' + (e.pageY) + 'px; left:' + (e.pageX) + 'px;'
	);
});

document.addEventListener('click', () => {
	cursor.classList.add('expand');

	setTimeout(() => {
		cursor.classList.remove('expand');
	}, 500);
});