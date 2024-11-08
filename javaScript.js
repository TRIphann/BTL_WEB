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
        if (imgDefault) imgDefault.style.display = 'none';
        if (imgHover1) imgHover1.style.display = 'none';
        if (imgHover2) imgHover2.style.display = 'none';
        if (imgHover3) imgHover3.style.display = 'none';
        if (imgHover4) imgHover4.style.display = 'none';
        if (imgHover5) imgHover5.style.display = 'none';
        if (imgHover6) imgHover6.style.display = 'none';
    }

    // Hàm hiển thị hình ảnh dựa trên chỉ số màu sắc
    function showImage(index) {
        hideAllImages();
        if (index === 0 && imgHover2) imgHover2.style.display = 'block'; // Hiện ảnh 3
        else if (index === 1 && imgHover3) imgHover3.style.display = 'block'; // Hiện ảnh 4
        else if (index === 2 && imgHover5) imgHover5.style.display = 'block'; // Hiện ảnh 6
    }

    // Khi di chuột vào product-block
    block.addEventListener('mouseenter', () => {
        if (selectedColorIndex === null) {
            if (imgDefault) imgDefault.style.display = 'block'; // Hiện ảnh mặc định
            if (imgHover1) imgHover1.style.display = 'none'; // Ẩn ảnh 2
        } else {
            showImage(selectedColorIndex); // Hiện ảnh tương ứng nếu đã chọn màu
        }
    });

    // Khi rời khỏi product-block
    block.addEventListener('mouseleave', () => {
        hideAllImages(); // Ẩn tất cả ảnh hover
        if (imgDefault) imgDefault.style.display = 'block'; // Hiện ảnh mặc định
    });

    // Xử lý hover vào các tùy chọn màu sắc
    block.querySelectorAll('.color-option').forEach((option, index) => {
        option.addEventListener('mouseenter', () => {
            selectedColorIndex = index; // Lưu chỉ số ô màu sắc đã chọn
            if (imgDefault) imgDefault.style.display = 'none'; // Ẩn ảnh mặc định
            showImage(index); // Hiện ảnh tương ứng
        });

        option.addEventListener('mouseleave', () => {
            if (selectedColorIndex !== null) {
                showImage(selectedColorIndex); // Giữ ảnh đã chọn
            } else {
                if (imgDefault) imgDefault.style.display = 'block'; // Hiện ảnh mặc định nếu không có lựa chọn
            }
        });
    });

    // Khi di chuột vào Ảnh 1 (imgDefault) sẽ hiển thị Ảnh 2 (imgHover1) nếu chưa chọn màu
    if (imgDefault) imgDefault.addEventListener('mouseenter', () => {
        if (selectedColorIndex === null) {
            if (imgDefault) imgDefault.style.display = 'none'; // Ẩn ảnh mặc định
            if (imgHover1) imgHover1.style.display = 'block'; // Hiển thị ảnh 2
        }
    });
    // Khi rời khỏi Ảnh 2 (imgHover1)
    imgHover1.addEventListener('mouseleave', (event) => {
        if (event.relatedTarget && block.contains(event.relatedTarget)) {
            imgHover1.style.display = 'none'; // Ẩn ảnh 2
            imgHover2.style.display = 'block'; // Hiện ảnh 3 khi di chuyển chuột ra khỏi ảnh 2
        } else {
            // Nếu rời khỏi cả product-block thì hiện ảnh mặc định
            imgDefault.style.display = 'block'; // Hiện ảnh mặc định
        }
    });
    // Khi di chuột vào Ảnh 3 (imgHover2) sẽ hiển thị Ảnh 2 và Ẩn ảnh 3
    if (imgHover2) imgHover2.addEventListener('mouseenter', () => {
        if (imgHover1) imgHover1.style.display = 'block'; // Hiển thị ảnh 2 khi di chuột vào ảnh 3
        if (imgHover2) imgHover2.style.display = 'none';  // Ẩn ảnh 3 khi di chuột vào ảnh 3
    });

    // Khi di chuột vào Ảnh 4 (imgHover3) sẽ hiển thị Ảnh 5 và Ẩn ảnh 4
    if (imgHover3) imgHover3.addEventListener('mouseenter', () => {
        if (imgHover4) imgHover4.style.display = 'block'; // Hiển thị ảnh 5 khi di chuột vào ảnh 4
        if (imgHover3) imgHover3.style.display = 'none';  // Ẩn ảnh 4 khi di chuột vào ảnh 4
    });
    imgHover4.addEventListener('mouseleave', (event) => {
        if (event.relatedTarget && block.contains(event.relatedTarget)) {
            imgHover4.style.display = 'none';
            imgHover3.style.display = 'block'; // Hiện ảnh 4 khi rời khỏi ảnh 5
        }
    });
    // Khi di chuột vào Ảnh 6 (imgHover5) sẽ hiển thị Ảnh 7 và Ẩn ảnh 6
    if (imgHover5) imgHover5.addEventListener('mouseenter', () => {
        if (imgHover6) imgHover6.style.display = 'block'; // Hiển thị ảnh 7 khi di chuột vào ảnh 6
        if (imgHover5) imgHover5.style.display = 'none';  // Ẩn ảnh 6 khi di chuột vào ảnh 6
    });
    if (imgHover6) imgHover6.addEventListener('mouseleave', (event) => {
        if (event.relatedTarget && block.contains(event.relatedTarget)) {
            if (imgHover6) imgHover6.style.display = 'none';
            if (imgHover5) imgHover5.style.display = 'block'; // Hiện ảnh 6 khi rời khỏi ảnh 7
        }
    });
});













document.querySelectorAll('.color-option').forEach(item => {
    item.addEventListener('mouseenter', function () {
        // Hiển thị phần size ngay khi di chuột vào ô màu
        document.querySelector('.product-sizes').style.display = 'block';
        
        // Loại bỏ lớp active khỏi tất cả ô màu sắc
        document.querySelectorAll('.color-option').forEach(option => {
            option.classList.remove('active');
        });

        // Thêm lớp active cho ô màu sắc hiện tại khi hover vào
        item.classList.add('active');
    });

    item.addEventListener('mouseleave', function () {
        // Không làm gì khi chuột di chuyển ra ngoài ô màu, vì bạn muốn giữ size hiển thị
    });
    
});

document.querySelectorAll('.size-option').forEach(item => {
    item.addEventListener('mouseenter', function () {
        // Hiển thị phần size ngay khi di chuột vào
        document.querySelector('.product-sizes').style.display = 'block';
        
        // Đảm bảo tất cả các size không được chọn trước đó
        document.querySelectorAll('.size-option').forEach(option => {
            option.classList.remove('selected');
        });

        // Thêm lớp selected cho size hiện tại khi hover vào
        item.classList.add('selected');
    });

    item.addEventListener('mouseleave', function () {
        // Không làm gì khi chuột di chuyển ra ngoài ô kích thước
    });
});


$(document).ready(function() {
    const swiper = new Swiper('.swiper', {
        loop: true,
        centeredSlides: true,
        slidesPerView: 1.46,
        slidesPerGroup: 1, // Di chuyển từng slide mỗi lần
        spaceBetween: 165,
        pagination: {
            el: '.swiper-pagination', // Bỏ qua phân trang mặc định
            type: 'none', // Tắt phân trang mặc định
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    swiper.on('slideChange', function () {
        const bullets = document.querySelectorAll('.custom-bullet');
        bullets.forEach((bullet, index) => {
            bullet.classList.remove('active');
            if (index === swiper.realIndex) {
                bullet.classList.add('active');
            }
        });
    });
    

    // Khởi tạo lần đầu khi swiper đã được tạo
    swiper.emit('slideChange');
});



const productCards = document.querySelectorAll('.product-card');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const productList = document.querySelector('.h5_image');

let currentIndex = 0;

// Hàm để cập nhật hiển thị sản phẩm
function updateProducts() {
  // Ẩn tất cả các sản phẩm
  productCards.forEach((card) => {
    card.classList.add('hidden');
  });

  // Hiển thị 4 sản phẩm tiếp theo
  for (let i = currentIndex; i < currentIndex + 4; i++) {
    if (productCards[i]) {
      productCards[i].classList.remove('hidden');
    }
  }
}

// Chuyển sang nhóm sản phẩm tiếp theo
nextButton.addEventListener('click', () => {
  currentIndex += 4; // Tăng 4 mỗi lần nhấn "next"
  if (currentIndex >= productCards.length) {
    currentIndex = 0; // Quay lại đầu danh sách khi đến cuối
  }
  updateProducts();
});

// Chuyển về nhóm sản phẩm trước đó
prevButton.addEventListener('click', () => {
  currentIndex -= 4; // Giảm 4 mỗi lần nhấn "prev"
  if (currentIndex < 0) {
    currentIndex = productCards.length - 4; // Quay lại cuối danh sách nếu index âm
  }
  updateProducts();
});

// Hiển thị sản phẩm ban đầu
updateProducts();
