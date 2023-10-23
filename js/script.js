function toggleMenu() {
    var menu = document.querySelector('.responsive-menu');
    menu.classList.toggle('visible');
}

document.getElementById("pilte").addEventListener("click", function() {
    var extraImages = document.querySelector(".portfell-imgs-extra");
    var button = document.getElementById("pilte");

    if (extraImages.style.display === "none") {
        extraImages.style.display = "block";
        button.innerText = "Vaadake Vähem";
    } else {
        extraImages.style.display = "none";
        button.innerText = "Vaadake Rohkem";
    }
});


document.querySelector('.hamburger').addEventListener('click', function() {
    var ul = document.querySelector('.header-index nav ul');
    if (ul.style.display === 'none' || ul.style.display === '') {
        ul.style.display = 'block';
    } else {
        ul.style.display = 'none';
    }
});