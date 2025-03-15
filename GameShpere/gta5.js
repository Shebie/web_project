const video = document.getElementById("gameVideo");
const playButton = document.getElementById("playButton");
const videoWrapper = document.querySelector(".video-wrapper");

// Function to play video and hide button
playButton.addEventListener("click", () => {
    video.play();
    hidePlayButton();
});

// Hide button when video starts playing
video.addEventListener("play", hidePlayButton);

// Hide button when user seeks the video
video.addEventListener("seeking", hidePlayButton);

// Function to hide play button
function hidePlayButton() {
    videoWrapper.classList.add("playing"); // Hide button
}
