document.getElementById('key-generator-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Ngăn chặn form submit mặc định

    // Ẩn kết quả cũ (nếu có)
    document.getElementById('key-result').classList.add('hidden');
    document.getElementById('generated-key').textContent = '';

    // Lấy các giá trị nhập vào
    const name = document.getElementById('name').value;
    const password = document.getElementById('password').value;
    const expiry = document.getElementById('expiry').value;

    // Hiển thị loading overlay
    const loadingOverlay = document.getElementById('loading-overlay');
    loadingOverlay.classList.remove('hidden');
    document.getElementById('generate-button').disabled = true; // Vô hiệu hóa nút

    let countdown = 60;
    const countdownElement = document.getElementById('countdown');
    countdownElement.textContent = countdown;

    // Thiết lập đếm ngược
    const timer = setInterval(() => {
        countdown--;
        countdownElement.textContent = countdown;

        if (countdown <= 0) {
            clearInterval(timer);
            
            // Ẩn loading overlay
            loadingOverlay.classList.add('hidden');
            document.getElementById('generate-button').disabled = false; // Kích hoạt lại nút

            // Tạo một Key giả (dựa trên thông tin nhập vào)
            const generatedKey = `KEY-${btoa(name + password + expiry)}-${Date.now()}`;

            // Hiển thị Key
            document.getElementById('generated-key').textContent = generatedKey;
            document.getElementById('key-result').classList.remove('hidden');

            alert('Tạo Key thành công!');
        }
    }, 1000); // Cập nhật mỗi 1 giây
});

/** * Ghi chú: Hàm btoa() trong JavaScript dùng để mã hóa Base64 đơn giản.
 * Trong thực tế, bạn cần gọi API Server để tạo key an toàn và hợp lệ.
 */