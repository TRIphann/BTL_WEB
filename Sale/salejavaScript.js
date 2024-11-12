document.querySelectorAll('.product-block').forEach(block => {
    const imgDefault = block.querySelector('.img-default'); // Ảnh 1
    const imgHover1 = block.querySelector('.img-hover-1');   // Ảnh 2
    const imgHover2 = block.querySelector('.img-hover-2');   // Ảnh 3
    const imgHover3 = block.querySelector('.img-hover-3');   // Ảnh 4
    const imgHover4 = block.querySelector('.img-hover-4');   // Ảnh 5
    const imgHover5 = block.querySelector('.img-hover-5');   // Ảnh 6
    const imgHover6 = block.querySelector('.img-hover-6');   // Ảnh 7

    let selectedColorIndex = null;

    // Hàm ẩn tất cả các hình ảnh
    function hideAllImages() {
        [imgDefault, imgHover1, imgHover2, imgHover3, imgHover4, imgHover5, imgHover6].forEach(img => {
            if (img) img.style.display = 'none';
        });
    }

    // Hàm hiển thị hình ảnh dựa trên chỉ số màu sắc
    function showImage(index) {
        hideAllImages();
        const images = [imgHover2, imgHover3, imgHover5, imgHover6];
        if (images[index]) {
            images[index].style.display = 'block';
        }
    }

    block.addEventListener('mouseenter', () => {
        if (selectedColorIndex === null) {
            imgDefault.style.display = 'block';
            imgHover1.style.display = 'none';
        } else {
            showImage(selectedColorIndex);
        }
    });

    block.addEventListener('mouseleave', () => {
        hideAllImages();
        if (selectedColorIndex !== null) {
            showImage(selectedColorIndex); // Hiển thị ảnh tương ứng với màu đã chọn
        } else {
            imgDefault.style.display = 'block'; // Nếu không có màu sắc nào được chọn, hiển thị ảnh mặc định
        }
    });

    block.querySelectorAll('.color-option').forEach((option, index) => {
        option.addEventListener('mouseenter', () => {
            selectedColorIndex = index;
            if (imgDefault) imgDefault.style.display = 'none';
            showImage(index);
        });

        option.addEventListener('mouseleave', () => {
            if (selectedColorIndex !== null) {
                showImage(selectedColorIndex);
            } else {
                if (imgDefault) imgDefault.style.display = 'block';
            }
        });
    });

    if (imgDefault) {
        imgDefault.addEventListener('mouseenter', () => {
            if (selectedColorIndex === null) {
                imgDefault.style.display = 'none';
                imgHover1.style.display = 'block';
            }
        });
    }

    if (imgHover1) {
        imgHover1.addEventListener('mouseleave', (event) => {
            if (event.relatedTarget && block.contains(event.relatedTarget)) {
                imgHover1.style.display = 'none';
                imgHover2.style.display = 'block';
            } else {
                imgDefault.style.display = 'block';
            }
        });
    }

    if (imgHover2) {
        imgHover2.addEventListener('mouseenter', () => {
            imgHover1.style.display = 'block';
            imgHover2.style.display = 'none';
        });
    }

    if (imgHover3) {
        imgHover3.addEventListener('mouseenter', () => {
            imgHover4.style.display = 'block';
            imgHover3.style.display = 'none';
        });
    }

    if (imgHover4) {
        imgHover4.addEventListener('mouseleave', (event) => {
            if (event.relatedTarget && block.contains(event.relatedTarget)) {
                imgHover4.style.display = 'none';
                imgHover3.style.display = 'block';
            }
        });
    }

    if (imgHover5) {
        imgHover5.addEventListener('mouseenter', () => {
            imgHover6.style.display = 'block';
            imgHover5.style.display = 'none';
        });
    }

    if (imgHover6) {
        imgHover6.addEventListener('mouseleave', (event) => {
            if (event.relatedTarget && block.contains(event.relatedTarget)) {
                imgHover6.style.display = 'none';
                imgHover5.style.display = 'block';
            }
        });
    }
});


