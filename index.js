console.log('Вёрстка соответствует макету. Ширина экрана 768px +26\nНи на одном из разрешений до 640px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +12\nНа ширине экрана 768рх реализовано адаптивное меню +12\n');

const burger = document.querySelector(".burger");
const navlist = document.querySelector(".navbar");

// Burger menu
burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    navlist.classList.toggle("active");
})

navlist.addEventListener('click', () => {
    document.getElementById('nav-links').classList.add('closed');
  });

document.querySelectorAll(".nav-links").forEach(n => n.addEventListener("click", () => {
    burger.classList.remove("active");
    navlist.classList.remove("active");
}));


// Carousel
