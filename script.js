// Lấy form, input tìm kiếm và các nút môn học
const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');
const subjectButtons = document.querySelectorAll('.subject-button');

// Lắng nghe sự kiện submit của form
searchForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Ngăn chặn form gửi đi mặc định

    // Lấy từ khóa tìm kiếm và chuyển sang chữ thường
    const query = searchInput.value.trim().toLowerCase();

    // Nếu từ khóa rỗng, hiển thị lại tất cả các nút
    if (!query) {
        subjectButtons.forEach(button => {
            button.style.display = 'inline-block';
        });
    } else {
        // Nếu có từ khóa, chỉ hiển thị các nút khớp với từ khóa
        subjectButtons.forEach(button => {
            const subjectName = button.textContent.toLowerCase();
            // Hiển thị nút nếu tên môn học chứa từ khóa, ẩn nếu không khớp
            if (subjectName.includes(query)) {
                button.style.display = 'inline-block';
            } else {
                button.style.display = 'none';
            }
        });
    }
});
