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












document.querySelectorAll('.product-block').forEach(block => {
    const imgDefault = block.querySelector('.img-default');
    const imgHover1 = block.querySelector('.img-hover-1');
    const imgHover2 = block.querySelector('.img-hover-2');
    const imgHover3 = block.querySelector('.img-hover-3'); // Ảnh số 4
    const imgHover4 = block.querySelector('.img-hover-4'); // Ảnh số 5

    // Hiển thị ảnh thứ 2 khi di chuột vào `product-img`
    block.querySelector('.product-img').addEventListener('mouseenter', () => {
        imgDefault.style.display = 'none';
        imgHover1.style.display = 'block';
        imgHover2.style.display = 'none';
        imgHover3.style.display = 'none';
        imgHover4.style.display = 'none';
    });

    // Khi rời khỏi imgHover1, hiển thị ảnh thứ ba
    imgHover1.addEventListener('mouseleave', (event) => {
        if (event.relatedTarget && block.contains(event.relatedTarget)) {
            imgHover1.style.display = 'none';
            imgHover2.style.display = 'block';
        }
    });

    // Hiển thị ảnh thứ 5 khi di chuột vào ảnh 4
    imgHover3.addEventListener('mouseenter', () => {
        imgHover4.style.display = 'block';
    });

    imgHover3.addEventListener('mouseleave', () => {
        imgHover4.style.display = 'none';
    });

    // Quay lại ảnh mặc định khi rời khỏi product-block
    block.addEventListener('mouseleave', () => {
        imgDefault.style.display = 'block';
        imgHover1.style.display = 'none';
        imgHover2.style.display = 'none';
        imgHover3.style.display = 'none';
        imgHover4.style.display = 'none';
    });
});

// Xử lý hover vào các tùy chọn màu
document.querySelectorAll('.color-option').forEach((option, index) => {
    option.addEventListener('mouseenter', () => {
        const productBlock = option.closest('.product-block');
        
        // Kiểm tra nếu là màu thứ hai
        if (index === 1) {
            const imgHover3 = productBlock.querySelector('.img-hover-3');
            imgHover3.style.display = 'block'; // Hiển thị ảnh 4 khi hover vào màu 2
        }
    });

    option.addEventListener('mouseleave', () => {
        const productBlock = option.closest('.product-block');
        
        // Kiểm tra nếu là màu thứ hai
        if (index === 1) {
            const imgHover3 = productBlock.querySelector('.img-hover-3');
            imgHover3.style.display = 'none'; // Ẩn ảnh 4 khi chuột rời khỏi màu 2
        }
    });
});















