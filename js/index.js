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