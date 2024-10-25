// Lấy navbar
const navbar = document.getElementById("navbar");

// Lưu vị trí ban đầu của navbar
const sticky = navbar.offsetTop;

// Thêm sự kiện cuộn để thay đổi lớp của navbar
window.onscroll = function() {
    // Kiểm tra xem cuộn xuống có vượt quá vị trí ban đầu của navbar hay không
    if (window.pageYOffset > sticky + navbar.offsetHeight) {
        navbar.classList.add("fixed", "show"); // Thêm lớp fixed và show khi cuộn xuống
    } else {
        navbar.classList.remove("fixed", "show"); // Xóa lớp fixed và show khi cuộn lên
    }
};
