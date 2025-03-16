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
            document.getElementById('result').textContent = "هنوز اشتباهه. دوباره تلاش کن!";
        }
    } catch (error) {
        document.getElementById('result').textContent = `خطا: ${error.message}`;
    }
}

// تابع بررسی تشخیص بیماری
function checkDiagnosis() {
    const diagnosis = document.getElementById('diagnosis').value.toLowerCase();
    if (diagnosis.includes("آنفولانزا")) {
        document.getElementById('result').textContent = "آفرین! تشخیص درست بود.";
    } else {
        document.getElementById('result').textContent = "تشخیص اشتباهه. دوباره تلاش کن!";
    }
}

// تابع بررسی راه‌حل حقوقی
function checkSolution() {
    const solution = document.getElementById('solution').value.toLowerCase();
    if (solution.includes("شکایت") || solution.includes("دادگاه")) {
        document.getElementById('result').textContent = "آفرین! راه‌حل درست بود.";
    } else {
        document.getElementById('result').textContent = "راه‌حل اشتباهه. دوباره تلاش کن!";
    }
}

// تابع بررسی عیب‌یابی شبکه
function checkNetworkSolution() {
    const solution = document.getElementById('solution').value.toLowerCase();
    if (solution.includes("روتر") || solution.includes("کابل")) {
        document.getElementById('result').textContent = "آفرین! راه‌حل درست بود.";
    } else {
        document.getElementById('result').textContent = "راه‌حل اشتباهه. دوباره تلاش کن!";
    }
}