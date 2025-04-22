'use strict';
const menuIcon = document.querySelector('.menu-icon');
const navList = document.querySelector('.nav-list');


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
  