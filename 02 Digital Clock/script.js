// Get the HTML elements that will display the hours, minutes, and seconds
let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");

// Set an interval to update the time every 1000 milliseconds (or 1 second)
setInterval(() => {
	// Create a new Date object to get the current time
	let currentTime = new Date();

	// Format the hours,min and sec by adding a leading zero if it's less than 10
	hrs.innerHTML =
		(currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours();

	min.innerHTML =
		(currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();

	sec.innerHTML =
		(currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();
}, 1000);
