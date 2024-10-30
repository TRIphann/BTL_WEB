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

document.querySelectorAll('.product-block').forEach(product => {
    product.addEventListener('mouseenter', () => {
        product.querySelector('.step-1').style.display = 'none';
        product.querySelector('.step-2').style.display = 'block';
        product.querySelector('.hover-content').style.display = 'block';
    });

    product.addEventListener('mouseleave', () => {
        product.querySelector('.step-1').style.display = 'block';
        product.querySelector('.step-2').style.display = 'none';
        product.querySelector('.hover-content').style.display = 'none';
    });
});
