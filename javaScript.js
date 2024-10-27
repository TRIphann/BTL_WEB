window.onscroll = function() {scrollFunction()};

var navbar = document.querySelector('.navbar');
var sticky = navbar.offsetTop;

function scrollFunction() {
    if (window.pageYOffset > sticky) {
        navbar.classList.add('fixed');
        navbar.classList.add('show');
    } else {
        navbar.classList.remove('fixed');
        navbar.classList.remove('show');
    }
}
