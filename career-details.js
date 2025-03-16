// انیمیشن برای تصویر شغل
const careerImage = document.querySelector('.career-details-image img');

careerImage.addEventListener('mouseenter', () => {
    careerImage.style.transform = 'scale(1.05)';
    careerImage.style.transition = 'transform 0.3s ease';
});

careerImage.addEventListener('mouseleave', () => {
    careerImage.style.transform = 'scale(1)';
});

// نمایش اطلاعات بیشتر (مثال)
const moreInfoButton = document.createElement('button');
moreInfoButton.textContent = 'اطلاعات بیشتر';
moreInfoButton.classList.add('more-info-button');
moreInfoButton.style.marginTop = '1rem';
moreInfoButton.style.padding = '0.75rem 1.5rem';
moreInfoButton.style.backgroundColor = '#3182ce';
moreInfoButton.style.color = 'white';
moreInfoButton.style.border = 'none';
moreInfoButton.style.borderRadius = '0.5rem';
moreInfoButton.style.cursor = 'pointer';
moreInfoButton.style.transition = 'background-color 0.3s';

moreInfoButton.addEventListener('mouseenter', () => {
    moreInfoButton.style.backgroundColor = '#2c5282';
});

moreInfoButton.addEventListener('mouseleave', () => {
    moreInfoButton.style.backgroundColor = '#3182ce';
});

moreInfoButton.addEventListener('click', () => {
    alert('اطلاعات بیشتر درباره این شغل به زودی اضافه می‌شود!');
});

// اضافه کردن دکمه به بخش جزئیات شغل
const careerDetailsInfo = document.querySelector('.career-details-info');
careerDetailsInfo.appendChild(moreInfoButton);