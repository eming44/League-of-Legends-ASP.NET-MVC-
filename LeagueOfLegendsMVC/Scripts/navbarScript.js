var imageIcon = document.getElementById("imageIcon");
var navbarOptions = document.getElementById("navbarOptions");

$(window).on("scroll", function () {
    if ($(window).scrollTop()) {
        imageIcon.style.opacity = 1;
        imageIcon.style.width = "100%";
        navbarOptions.style.marginLeft = "0%";
    }
    else {
        imageIcon.style.opacity = 0;
        imageIcon.style.width = "0%";
        navbarOptions.style.marginLeft = "-3%";
    }
});