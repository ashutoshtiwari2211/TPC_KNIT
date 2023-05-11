/* Toggle dropdown menu */
document.querySelectorAll('.dropdown').forEach((item) => {
    item.addEventListener('click', (event) => {
        event.stopPropagation();
        item.querySelector('.dropdown-menu').classList.toggle('show');
    });
});


/* Close dropdown menu when clicking outside of it */
window.addEventListener('click', (event) => {
    document.querySelectorAll('.dropdown-menu').forEach((menu) => {
        if (!menu.contains(event.target)) {
            menu.classList.remove('show');
        }
    });
});

$(document).ready(function () {
    $('.carousel').carousel({
        interval: 5000 // Change the interval time (in milliseconds) for each slide
    });
});

