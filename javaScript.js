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


let currentPosition = 0;

function slideLeft() {
    const products = document.querySelector('.products');
    const productWidth = document.querySelector('.product-card').offsetWidth + 20; // card width + margin
    currentPosition += productWidth;

    // Limit sliding left beyond the first item
    currentPosition = Math.min(currentPosition, 0);
    products.style.transform = `translateX(${currentPosition}px)`;
}

function slideRight() {
    const products = document.querySelector('.products');
    const productWidth = document.querySelector('.product-card').offsetWidth + 20; // card width + margin
    const maxPosition = -(products.scrollWidth - products.parentElement.offsetWidth);
    currentPosition -= productWidth;

    // Limit sliding right beyond the last item
    currentPosition = Math.max(currentPosition, maxPosition);
    products.style.transform = `translateX(${currentPosition}px)`;
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

