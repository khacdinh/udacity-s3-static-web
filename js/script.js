document.addEventListener('DOMContentLoaded', function() {
    const benefitsList = document.getElementById('benefits-list');
    const benefits = [
        'Cost-effective hosting solution',
        'High availability and durability',
        'Easy to set up and manage',
        'Scalable to handle traffic spikes'
    ];

    benefits.forEach(benefit => {
        const li = document.createElement('li');
        li.textContent = benefit;
        benefitsList.appendChild(li);
    });

    const currentYearSpan = document.getElementById('current-year');
    currentYearSpan.textContent = new Date().getFullYear();
});