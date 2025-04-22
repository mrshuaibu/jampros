'use strict';
const menuIcon = document.querySelector('.menu-icon');
const navList = document.querySelector('.nav-list');
const valueDisplays = document.querySelectorAll('.stat-number');
const totalDuration = 2000; // 2 seconds for fast counting

const startCounting = (entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            let startValue = 0;
            let endValue = parseInt(entry.target.getAttribute("data-val"));
            let increment = Math.ceil(endValue / (totalDuration / 25)); // Ensures fast counting
            let counter = setInterval(() => {
                startValue += increment;
                if (startValue > endValue) startValue = endValue;
                entry.target.textContent = startValue.toLocaleString(); // Adds commas
                if (startValue === endValue) {
                    clearInterval(counter);
                }
            }, 25); // Updates every 25ms for smooth animation
            observer.unobserve(entry.target); // Stops observing after animation starts
        }
    });
};

const observer = new IntersectionObserver(startCounting, { threshold: 0.5 });

valueDisplays.forEach((valueDisplay) => {
    observer.observe(valueDisplay);
});

menuIcon.addEventListener('click', function() {
    console.log('Menu icon clicked'); 
    menuIcon.classList.toggle('active');
    navList.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', function() {
    menuIcon.classList.remove('active');
    navList.classList.remove('active');
}));