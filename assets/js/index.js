'use strict';
const menuIcon = document.querySelector('.menu-icon');
const navList = document.querySelector('.nav-list');
const valueDisplays = document.querySelectorAll('.stat-number');
const totalDuration = 2000; // 2 seconds for fast counting


menuIcon.addEventListener('click', function() {
    console.log('Menu icon clicked'); 
    menuIcon.classList.toggle('active');
    navList.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', function() {
    menuIcon.classList.remove('active');
    navList.classList.remove('active');
}));

document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq-item');
  
    faqItems.forEach(item => {
      const question = item.querySelector('.faq-question');
  
      question.addEventListener('click', () => {
        item.classList.toggle('active');
      });
    });
});

const startCounting = (entries, observer) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            let startValue = 0;
            let endValue = parseInt(entry.target.getAttribute("data-val"));
            let increment = Math.ceil(endValue / (totalDuration / 25)); 
            let counter = setInterval(() => {
                startValue += increment;
                if (startValue > endValue) startValue = endValue;
                entry.target.textContent = startValue.toLocaleString();
                if (startValue === endValue) {
                    clearInterval(counter);
                }
            }, 25);
            observer.unobserve(entry.target); 
        }
    });
};

const observer = new IntersectionObserver(startCounting, { threshold: 0.5 });

valueDisplays.forEach((valueDisplay) => {
    observer.observe(valueDisplay);
});

