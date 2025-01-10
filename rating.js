document.addEventListener('DOMContentLoaded', function() {
    // بررسی اینکه کاربر قبلاً رای داده است یا نه
    if (!sessionStorage.getItem('hasVotedToday')) {
        let stars = document.querySelectorAll('.star');
        stars.forEach(function(star) {
            star.addEventListener('click', function() {
                let ratingValue = this.getAttribute('data-star');

                // ارسال درخواست به سرور برای افزایش تعداد بازدید
                fetch(`/increase-view/${ratingValue}`, {
                    method: 'GET',
                })
                    .then(response => response.json())
                    .then(data => {
                        // اگر موفقیت آمیز بود، ثبت رای در سشن
                        if (data.success) {
                            // در سشن ذخیره می‌کنیم که کاربر در این روز رای داده است
                            sessionStorage.setItem('hasVotedToday', 'true');

                            // نمایش پیام موفقیت
                            showMessage('رای شما با موفقیت ثبت شد!');
                        }
                    });
            });
        });
    }
});

// تابع برای نمایش پیام
function showMessage(message) {
    let messageBox = document.getElementById('message-box');
    messageBox.innerHTML = message; // پیام را به div می‌دهیم
    messageBox.style.display = 'block'; // نمایش دادن پیام

    // پس از 5 ثانیه پیام را مخفی می‌کنیم
    setTimeout(function() {
        messageBox.style.display = 'none';
    }, 5000);
}
