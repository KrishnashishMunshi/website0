
document.addEventListener('DOMContentLoaded', function () {
    let sun = document.querySelector('.sun');
    let eclipse = document.querySelector('.eclipse');
    let body = document.querySelector('.body');
    let textElements = document.querySelectorAll('.text'); // Select all .text elements

    eclipse.addEventListener('click', function () {
        body.style.backgroundColor = 'black';
        textElements.forEach((element) => {
            element.style.setProperty('color', '#ff6200', 'important');
        });
    });

    sun.addEventListener('click', function () {
        body.style.backgroundColor = '#ff6200';
        textElements.forEach((element) => {
            element.style.setProperty('color', 'black', 'important');
        });
    });
});

