let seconds = 0,
	minutes = 0,
	hours = 0;
let displayTime = document.getElementById("displayTime");
let timer = null;

/* Increments the seconds and resets to 0 when it reaches 60.
 Also increments the minutes when seconds reaches 60 and hours when minutes reaches 60. */
function stopwatch() {
	seconds++; // Increment seconds

	if (seconds == 60) {
		seconds = 0;
		minutes++; // Increment minutes

		if (minutes == 60) {
			minutes = 0;
			hours++; // Increment hours
		}
	}

	// Add leading zero if the value is less than 10
	let h = hours < 10 ? "0" + hours : hours;
	let m = minutes < 10 ? "0" + minutes : minutes;
	let s = seconds < 10 ? "0" + seconds : seconds;

	// Update the display with the new time
	displayTime.innerHTML = `${h}:${m}:${s}`;
}

// Starts the stopwatch by setting an interval to call the stopwatch function every second.

function watchStart() {
	if (timer != null) {
		clearInterval(timer); // Reset timer if it's already running
	}
	timer = setInterval(stopwatch, 1000); // Start the timer
}

// Stops the stopwatch by clearing the interval.
function watchStop() {
	clearInterval(timer);
}

// Resets the stopwatch by clearing the interval, setting all the time variables to 0, and updating the display.
function watchReset() {
	clearInterval(timer);
	seconds = 0;
	minutes = 0;
	hours = 0;
	displayTime.innerHTML = "00:00:00";
}
