document.addEventListener('DOMContentLoaded', () => {
    const generateKeyBtn = document.getElementById('generateKeyBtn');
    const loader = document.getElementById('loader');
    const resultMessage = document.getElementById('resultMessage');
    const ZALO_DELAY_MS = 5000; // 5 giây

    generateKeyBtn.addEventListener('click', () => {
        // 1. Ẩn thông báo lỗi nếu có
        resultMessage.classList.add('message-hidden');

        // 2. Vô hiệu hóa nút và hiện vòng tròn loading
        generateKeyBtn.disabled = true;
        generateKeyBtn.textContent = 'Đang Tạo...';
        loader.classList.remove('loader-hidden');

        // 3. Thiết lập hẹn giờ để mô phỏng quá trình tạo key
        setTimeout(() => {
            // Sau 5 giây:

            // 4. Ẩn vòng tròn loading
            loader.classList.add('loader-hidden');

            // 5. Hiện thông báo lỗi
            resultMessage.classList.remove('message-hidden');

            // 6. Kích hoạt lại nút
            generateKeyBtn.disabled = false;
            generateKeyBtn.textContent = 'Tạo Key';

        }, ZALO_DELAY_MS);
    });
});