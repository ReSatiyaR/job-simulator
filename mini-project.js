document.addEventListener('DOMContentLoaded', () => {
    // نمایش بخش پروژه پس از کلیک روی دکمه شروع
    document.getElementById('startProject').addEventListener('click', () => {
        document.querySelector('.tutorial').style.display = 'none';
        document.querySelector('.project').style.display = 'block';
    });

    // بررسی کد پروژه
    document.getElementById('runProject').addEventListener('click', () => {
        const projectCode = document.getElementById('projectCode').value;

        try {
            // ایجاد یک تابع امن با استفاده از Function Constructor
            const safeFunction = new Function('a', 'b', `
                // غیرفعال کردن توابع خطرناک
                const print = () => { throw new Error("دسترسی به تابع print غیرفعال شده است."); };
                const alert = () => { throw new Error("دسترسی به تابع alert غیرفعال شده است."); };
                const prompt = () => { throw new Error("دسترسی به تابع prompt غیرفعال شده است."); };

                // کد کاربر
                ${projectCode}

                // بررسی وجود توابع
                if (typeof add !== 'function' || typeof subtract !== 'function' || typeof multiply !== 'function' || typeof divide !== 'function') {
                    throw new Error("لطفاً همه توابع را تعریف کنید.");
                }

                // بازگرداندن نتایج
                return {
                    add: add(2, 3),
                    subtract: subtract(5, 3),
                    multiply: multiply(2, 3),
                    divide: divide(6, 3)
                };
            `);

            // تست توابع
            const results = safeFunction();

            if (results.add === 5 && results.subtract === 2 && results.multiply === 6 && results.divide === 2) {
                document.getElementById('projectOutput').textContent = "تبریک! پروژه با موفقیت تکمیل شد.";
            } else {
                document.getElementById('projectOutput').textContent = "پروژه هنوز کامل نیست. دوباره تلاش کنید!";
            }
        } catch (error) {
            document.getElementById('projectOutput').textContent = `خطا: ${error.message}`;
        }
    });
});