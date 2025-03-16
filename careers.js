// فیلتر کردن مشاغل
const filterButton = document.querySelector('.filter-button');
const categoryFilter = document.getElementById('category');
const salaryFilter = document.getElementById('salary');
const careerCards = document.querySelectorAll('.career-card');

filterButton.addEventListener('click', () => {
    const selectedCategory = categoryFilter.value;
    const selectedSalary = salaryFilter.value;

    careerCards.forEach(card => {
        const category = card.getAttribute('data-category');
        const salary = card.getAttribute('data-salary');

        const categoryMatch = selectedCategory === 'all' || category === selectedCategory;
        const salaryMatch = selectedSalary === 'all' || salary === selectedSalary;

        if (categoryMatch && salaryMatch) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});