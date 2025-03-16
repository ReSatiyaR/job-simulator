document.addEventListener('DOMContentLoaded', () => {
    // نمایش بخش طراحی الگوریتم پس از کلیک روی دکمه شروع
    document.getElementById('startAlgorithm').addEventListener('click', () => {
        document.querySelector('.tutorial').style.display = 'none';
        document.querySelector('.algorithm').style.display = 'block';
    });

    // بررسی کد الگوریتم
    document.getElementById('submitAlgorithm').addEventListener('click', () => {
        const algorithmCode = document.getElementById('algorithmCode').value;
        try {
            const findMax = eval(`(${algorithmCode})`); // تبدیل کد به تابع
            const testArray = [3, 7, 2, 9, 5];
            const result = findMax(testArray);
            if (result === 9) {
                document.getElementById('algorithmOutput').textContent = "تبریک! الگوریتم شما صحیح است.";
            } else {
                document.getElementById('algorithmOutput').textContent = "الگوریتم شما نادرست است. دوباره تلاش کنید!";
            }
        } catch (error) {
            document.getElementById('algorithmOutput').textContent = `خطا: ${error.message}`;
        }
    });
});