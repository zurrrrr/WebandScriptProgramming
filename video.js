function playpause() {
    const video = document.getElementById("video");

    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
}