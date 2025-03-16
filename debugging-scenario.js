document.addEventListener('DOMContentLoaded', () => {
    // نمایش بخش رفع باگ پس از کلیک روی دکمه شروع
    document.getElementById('startDebugging').addEventListener('click', () => {
        document.querySelector('.tutorial').style.display = 'none';
        document.querySelector('.debugging').style.display = 'block';
    });

    // بررسی کد اصلاح‌شده
    document.getElementById('submitFix').addEventListener('click', () => {
        const fixedCode = document.getElementById('fixedCode').value;

        try {
            // ایجاد یک تابع امن با استفاده از Function Constructor
            const safeFunction = new Function('a', 'b', `
                // غیرفعال کردن توابع خطرناک
                const print = () => { throw new Error("دسترسی به تابع print غیرفعال شده است."); };
                const alert = () => { throw new Error("دسترسی به تابع alert غیرفعال شده است."); };
                const prompt = () => { throw new Error("دسترسی به تابع prompt غیرفعال شده است."); };

                // کد کاربر
                ${fixedCode}

                // بررسی وجود تابع add
                if (typeof add !== 'function') {
                    throw new Error("تابع add تعریف نشده است.");
                }

                // بازگرداندن نتیجه تابع add
                return add(a, b);
            `);

            // تست تابع با ورودی‌های ۲ و ۳
            const result = safeFunction(2, 3);

            if (result === 5) {
                document.getElementById('debugOutput').textContent = "تبریک! باگ با موفقیت رفع شد.";
            } else {
                document.getElementById('debugOutput').textContent = "کد هنوز درست نیست. دوباره تلاش کنید!";
            }
        } catch (error) {
            document.getElementById('debugOutput').textContent = `خطا: ${error.message}`;
        }
    });
});