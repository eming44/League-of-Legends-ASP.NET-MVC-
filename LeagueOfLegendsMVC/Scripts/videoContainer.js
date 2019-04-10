var video1 = document.getElementById("videoKatarina");
var video2 = document.getElementById("videoEzreal");
var video3 = document.getElementById("videoSona");

video1.onended = function () {
    video1.style.opacity = 0;
    video2.style.opacity = 1;
    video2.play();
};
video2.onended = function () {
    video2.style.opacity = 0;
    video3.style.opacity = 1;
    video3.play();
};
video3.onended = function () {
    video3.style.opacity = 0;
    video1.style.opacity = 1;
    video1.play();
};