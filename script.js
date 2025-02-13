// Play Music
function playMusic() {
    document.getElementById("bg-music").play();
    document.querySelector(".play-button").style.display = "none";
    document.querySelector(".letters").style.display = "block";
}

// Page Flip Effect
function nextLetter(current) {
    document.getElementById("letter" + current).classList.remove("active");
    document.getElementById("letter" + (current + 1)).classList.add("active");
}