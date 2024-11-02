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












document.querySelectorAll('.product-img').forEach(imgContainer => {
    imgContainer.addEventListener('mouseover', () => {
        imgContainer.querySelector('.hover-overlay').style.display = 'block';
    });
    imgContainer.addEventListener('mouseout', () => {
        imgContainer.querySelector('.hover-overlay').style.display = 'none';
    });
});
