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
    const imgDefault = block.querySelector('.img-default'); // Ảnh 1
    const imgHover1 = block.querySelector('.img-hover-1');   // Ảnh 2
    const imgHover2 = block.querySelector('.img-hover-2');   // Ảnh 3
    const imgHover3 = block.querySelector('.img-hover-3');   // Ảnh 4
    const imgHover4 = block.querySelector('.img-hover-4');   // Ảnh 5
    const imgHover5 = block.querySelector('.img-hover-5');   // Ảnh 6
    const imgHover6 = block.querySelector('.img-hover-6');   // Ảnh 7

    let selectedColorIndex = null; // Biến lưu trữ chỉ số ô màu sắc đã chọn

    // Khi di chuột vào product-block, hiển thị ảnh 3 (nếu không có màu nào được chọn)
    block.addEventListener('mouseenter', () => {
        if (selectedColorIndex === null) {
            imgDefault.style.display = 'none';  // Ẩn ảnh 1
            imgHover1.style.display = 'none';
            imgHover2.style.display = 'block'; // Hiện ảnh 3
        } else {
            updateDisplayedImage(); // Hiển thị ảnh tương ứng
        }
    });

    // Khi rời khỏi product-block, kiểm tra trạng thái ô màu sắc đã chọn
    block.addEventListener('mouseleave', () => {
        imgDefault.style.display = 'block'; // Hiện ảnh 1
        imgHover1.style.display = 'none';
        imgHover2.style.display = 'none';
        imgHover3.style.display = 'none';
        imgHover4.style.display = 'none';
        imgHover5.style.display = 'none';
        imgHover6.style.display = 'none';
        selectedColorIndex = null; // Reset selection when leaving
    });

    // Xử lý hover vào các tùy chọn màu sắc
    block.querySelectorAll('.color-option').forEach((option, index) => {
        option.addEventListener('mouseenter', () => {
            selectedColorIndex = index; // Lưu chỉ số ô màu sắc đã chọn
            imgDefault.style.display = 'none'; // Ẩn ảnh mặc định
            imgHover1.style.display = 'none';   // Ẩn ảnh 2

            if (index === 0) { // Màu sắc 1
                imgHover2.style.display = 'block'; // Hiện ảnh 3
                imgHover3.style.display = 'none';
                imgHover4.style.display = 'none';
                imgHover5.style.display = 'none';
                imgHover6.style.display = 'none';
            } else if (index === 1) { // Màu sắc 2
                imgHover3.style.display = 'block'; // Hiện ảnh 4
                imgHover2.style.display = 'none';
                imgHover4.style.display = 'none';
                imgHover5.style.display = 'none';
                imgHover6.style.display = 'none';
            } else if (index === 2) { // Màu sắc 3
                imgHover5.style.display = 'block'; // Hiện ảnh 6
                imgHover2.style.display = 'none';
                imgHover3.style.display = 'none';
                imgHover4.style.display = 'none';
                imgHover6.style.display = 'none';
            }
        });

        option.addEventListener('mouseleave', () => {
            // Giữ ảnh hiển thị khi rời khỏi ô màu sắc
            if (selectedColorIndex === 0) { // Màu sắc 1
                imgHover2.style.display = 'block'; // Giữ ảnh 3
            } else if (selectedColorIndex === 1) { // Màu sắc 2
                imgHover3.style.display = 'block'; // Giữ ảnh 4
            } else if (selectedColorIndex === 2) { // Màu sắc 3
                imgHover5.style.display = 'block'; // Giữ ảnh 6
            }
        });
    });

    // Hàm cập nhật ảnh hiển thị dựa trên ô màu sắc đã chọn
    function updateDisplayedImage() {
        imgDefault.style.display = 'none'; // Ẩn ảnh 1
        imgHover1.style.display = 'none';
        imgHover2.style.display = 'none';
        imgHover3.style.display = 'none';
        imgHover4.style.display = 'none';
        imgHover5.style.display = 'none';
        imgHover6.style.display = 'none';

        if (selectedColorIndex === 0) {
            imgHover2.style.display = 'block'; // Hiện ảnh 3
        } else if (selectedColorIndex === 1) {
            imgHover3.style.display = 'block'; // Hiện ảnh 4
        } else if (selectedColorIndex === 2) {
            imgHover5.style.display = 'block'; // Hiện ảnh 6
        }
    }

    // Khi di chuột vào ảnh 1 (ảnh mặc định), hiển thị ảnh 2 và ẩn ảnh khác
    imgDefault.addEventListener('mouseenter', () => {
        imgDefault.style.display = 'none';
        imgHover1.style.display = 'block';
        imgHover2.style.display = 'none';
    });

    // Khi rời khỏi ảnh 2 nhưng vẫn trong product-block, quay lại ảnh 3
    imgHover1.addEventListener('mouseleave', (event) => {
        if (event.relatedTarget && block.contains(event.relatedTarget)) {
            imgHover1.style.display = 'none';
            imgHover2.style.display = 'block'; // Quay lại ảnh 3
        }
    });

    // Khi di chuột vào ảnh 3, hiển thị ảnh 2
    imgHover2.addEventListener('mouseenter', () => {
        imgHover2.style.display = 'none';
        imgHover1.style.display = 'block';
    });

    // Khi di chuột vào ảnh 4 từ màu sắc 2, hiển thị ảnh 5
    imgHover3.addEventListener('mouseenter', () => {
        imgHover3.style.display = 'none';
        imgHover4.style.display = 'block';
    });

    // Khi rời khỏi ảnh 5 nhưng vẫn trong product-block, quay lại ảnh 4
    imgHover4.addEventListener('mouseleave', (event) => {
        if (event.relatedTarget && block.contains(event.relatedTarget)) {
            imgHover4.style.display = 'none';
            imgHover3.style.display = 'block';
        }
    });

    // Khi di chuột vào ảnh 6 từ màu sắc 3, hiển thị ảnh 7
    imgHover5.addEventListener('mouseenter', () => {
        imgHover5.style.display = 'none';
        imgHover6.style.display = 'block'; // Hiện ảnh 7
    });

    // Khi rời khỏi ảnh 7 nhưng vẫn trong product-block, quay lại ảnh 6
    imgHover6.addEventListener('mouseleave', (event) => {
        if (event.relatedTarget && block.contains(event.relatedTarget)) {
            imgHover6.style.display = 'none';
            imgHover5.style.display = 'block'; // Quay lại ảnh 6
        }
    });

    // Xử lý hover ra khỏi màu sắc 3
    block.querySelectorAll('.color-option')[2].addEventListener('mouseleave', () => {
        imgHover5.style.display = 'none'; // Ẩn ảnh 6 khi rời khỏi màu sắc 3
    });

    // Xử lý di chuột vào ô màu sắc 6
    block.querySelectorAll('.color-option')[5].addEventListener('mouseenter', () => {
        imgHover6.style.display = 'block'; // Hiện ảnh 7
    });

    // Khi rời khỏi ô màu sắc 6, quay lại ảnh 6
    block.querySelectorAll('.color-option')[5].addEventListener('mouseleave', (event) => {
        if (event.relatedTarget && block.contains(event.relatedTarget)) {
            imgHover6.style.display = 'none'; // Ẩn ảnh 7
            imgHover5.style.display = 'block'; // Quay lại ảnh 6
        }
    });
});
