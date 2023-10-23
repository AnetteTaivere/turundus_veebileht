function toggleMenu() {
    var menu = document.querySelector('.responsive-menu');
    menu.classList.toggle('visible');
}

// Hamburger menüü
document.querySelector('.hamburger').addEventListener('click', function() {
    var ul = document.querySelector('.header-index nav ul');
    if (ul.style.display === 'none' || ul.style.display === '') {
        ul.style.display = 'block';
    } else {
        ul.style.display = 'none';
    }
});
