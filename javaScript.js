window.onscroll = function() { scrollFunction() };

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
    const imgDefault = block.querySelector('.img-default'); // Ảnh 1
    const imgHover1 = block.querySelector('.img-hover-1');   // Ảnh 2
    const imgHover2 = block.querySelector('.img-hover-2');   // Ảnh 3
    const imgHover3 = block.querySelector('.img-hover-3');   // Ảnh 4
    const imgHover4 = block.querySelector('.img-hover-4');   // Ảnh 5
    const imgHover5 = block.querySelector('.img-hover-5');   // Ảnh 6
    const imgHover6 = block.querySelector('.img-hover-6');   // Ảnh 7

    let selectedColorIndex = null; // Biến lưu trữ chỉ số ô màu sắc đã chọn

    // Hàm ẩn tất cả các hình ảnh
    function hideAllImages() {
        imgDefault.style.display = 'none';
        imgHover1.style.display = 'none';
        imgHover2.style.display = 'none';
        imgHover3.style.display = 'none';
        imgHover4.style.display = 'none';
        imgHover5.style.display = 'none';
        imgHover6.style.display = 'none';
    }

    // Hàm hiển thị hình ảnh dựa trên chỉ số màu sắc
    function showImage(index) {
        hideAllImages();
        if (index === 0) imgHover2.style.display = 'block'; // Hiện ảnh 3
        else if (index === 1) imgHover3.style.display = 'block'; // Hiện ảnh 4
        else if (index === 2) imgHover5.style.display = 'block'; // Hiện ảnh 6
    }

    // Khi di chuột vào product-block
    block.addEventListener('mouseenter', () => {
        if (selectedColorIndex === null) {
            imgDefault.style.display = 'none'; // Hide default image
            imgHover2.style.display = 'block'; // Hiện ảnh 3
        } else {
            showImage(selectedColorIndex);
        }
    });

    // Khi rời khỏi product-block
    block.addEventListener('mouseleave', () => {
        hideAllImages(); // Ẩn tất cả ảnh hover
        imgDefault.style.display = 'block'; // Hiện ảnh mặc định
    });

    // Xử lý hover vào các tùy chọn màu sắc
    block.querySelectorAll('.color-option').forEach((option, index) => {
        option.addEventListener('mouseenter', () => {
            selectedColorIndex = index; // Lưu chỉ số ô màu sắc đã chọn
            imgDefault.style.display = 'none'; // Ẩn ảnh mặc định
            showImage(index); // Hiện ảnh tương ứng
        });

        option.addEventListener('mouseleave', () => {
            if (selectedColorIndex !== null) {
                showImage(selectedColorIndex); // Giữ ảnh đã chọn
            } else {
                imgDefault.style.display = 'block'; // Hiện ảnh mặc định nếu không có lựa chọn
            }
        });
    });

    // Xử lý hover cho các ảnh
    imgDefault.addEventListener('mouseenter', () => {
        imgDefault.style.display = 'none';
        imgHover1.style.display = 'block'; // Hiện ảnh 2
    });

    imgHover1.addEventListener('mouseleave', (event) => {
        if (event.relatedTarget && block.contains(event.relatedTarget)) {
            imgHover1.style.display = 'none';
            imgHover2.style.display = 'block'; // Hiện ảnh 3 khi rời khỏi ảnh 2
        }
    });

    imgHover2.addEventListener('mouseenter', () => {
        imgHover2.style.display = 'none';
        imgHover1.style.display = 'block'; // Hiện ảnh 2 khi vào ảnh 3
    });

    imgHover3.addEventListener('mouseenter', () => {
        imgHover3.style.display = 'none';
        imgHover4.style.display = 'block'; // Hiện ảnh 5
    });

    imgHover4.addEventListener('mouseleave', (event) => {
        if (event.relatedTarget && block.contains(event.relatedTarget)) {
            imgHover4.style.display = 'none';
            imgHover3.style.display = 'block'; // Hiện ảnh 4 khi rời khỏi ảnh 5
        }
    });

    imgHover5.addEventListener('mouseenter', () => {
        imgHover5.style.display = 'none';
        imgHover6.style.display = 'block'; // Hiện ảnh 7
    });

    imgHover6.addEventListener('mouseleave', (event) => {
        if (event.relatedTarget && block.contains(event.relatedTarget)) {
            imgHover6.style.display = 'none';
            imgHover5.style.display = 'block'; // Hiện ảnh 6 khi rời khỏi ảnh 7
        }
    });
});


