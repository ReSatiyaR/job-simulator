// تابع بررسی کد برای رفع باگ
function checkCode() {
    const fixedCode = document.getElementById('fixed-code').value;
    try {
        const func = new Function('a', 'b', fixedCode);
        const result = func(5, 3);
        if (result === 8) {
            document.getElementById('result').textContent = "آفرین! باگ رو درست کردی.";
        } else {
            document.getElementById('result').textContent = "هنوز باگ وجود داره. دوباره تلاش کن!";
        }
    } catch (error) {
        document.getElementById('result').textContent = `خطا: ${error.message}`;
    }
}

// تابع بررسی کد برای طراحی الگوریتم
function checkAlgorithm() {
    const userCode = document.getElementById('user-code').value;
    try {
        const func = new Function('numbers', userCode);
        const result = func([3, 7, 2, 9, 5]);
        if (result === 9) {
            document.getElementById('result').textContent = "آفرین! الگوریتم درست کار می‌کنه.";
        } else {
            document.getElementById('result').textContent = "الگوریتم درست کار نمی‌کنه. دوباره تلاش کن!";
        }
    } catch (error) {
        document.getElementById('result').textContent = `خطا: ${error.message}`;
    }
}