const progress = document.getElementById("progress");
const song = document.getElementById("song");
const ctrlIcon = document.getElementById("ctrlIcon");

// Set the maximum value of the progress bar to the total duration of the song
song.onloadedmetadata = function () {
	progress.max = song.duration;
	progress.value = song.currentTime; // Set the initial value of the progress bar
};

// Function to play or pause the song
function playPause() {
	if (ctrlIcon.classList.contains("fa-pause")) {
		song.pause();
		ctrlIcon.classList.remove("fa-pause");
		ctrlIcon.classList.add("fa-play");
	} else {
		song.play();
		ctrlIcon.classList.add("fa-pause");
		ctrlIcon.classList.remove("fa-play");
	}
}

if (song.play()) {
	setInterval(() => {
		progress.value = song.currentTime; // Update the progress bar value
	}, 500);
}

// Function to handle progress bar value change
progress.onchange = function () {
	song.play();
	song.currentTime = progress.value; // Set the current time of the song
	ctrlIcon.classList.add("fa-pause");
	ctrlIcon.classList.remove("fa-play");
};
