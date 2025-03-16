// اسلایدر نظرات کاربران
const testimonials = document.querySelectorAll('.testimonial-card');

if (testimonials.length > 0) {
    let currentTestimonial = 0;

    function showTestimonial(index) {
        testimonials.forEach((testimonial, i) => {
            testimonial.style.display = i === index ? 'block' : 'none';
        });
    }

    function nextTestimonial() {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(currentTestimonial);
    }

    // نمایش اولین نظر
    showTestimonial(currentTestimonial);

    // تغییر نظر هر ۵ ثانیه
    setInterval(nextTestimonial, 5000);
}

// سیستم امتیازدهی
(function() {
    let userScore = localStorage.getItem('userScore') ? parseInt(localStorage.getItem('userScore')) : 0;
    let userLevel = localStorage.getItem('userLevel') || "تازه‌کار";

    function increaseScore(points) {
        userScore += points;
        localStorage.setItem('userScore', userScore);
        updateUserPanel();
        checkUserLevel();
    }

    function updateUserPanel() {
        if (document.getElementById('userScore')) {
            document.getElementById('userScore').textContent = userScore;
        }
        if (document.getElementById('userLevel')) {
            document.getElementById('userLevel').textContent = userLevel;
        }
    }

    function checkUserLevel() {
        if (userScore >= 50) {
            userLevel = "استاد";
        } else if (userScore >= 20) {
            userLevel = "حرفه‌ای";
        } else {
            userLevel = "تازه‌کار";
        }
        localStorage.setItem('userLevel', userLevel);
        updateUserPanel();
    }

    document.addEventListener('DOMContentLoaded', () => {
        if (document.getElementById('userScore') && document.getElementById('userLevel')) {
            updateUserPanel();
        }

        // اتصال دکمه به تابع increaseScore
        const increaseScoreBtn = document.getElementById('increaseScoreBtn');
        if (increaseScoreBtn) {
            increaseScoreBtn.addEventListener('click', () => {
                increaseScore(10); // 10 امتیاز به کاربر اضافه می‌شه
            });
        }
    });

    // در معرض قرار دادن توابع مورد نیاز برای صفحات دیگه
    window.increaseScore = increaseScore;
})();