const sound = document.getElementById("aud");

document.querySelectorAll(".butt").forEach(btn => {
    btn.addEventListener("mouseenter", () => {
        sound.currentTime = 0;
        sound.play();
    });
});