let userInput = document.getElementById("date");

// Set the maximum date for the input field to the current date
userInput.max = new Date().toISOString().split("T")[0];

let result = document.getElementById("result");

function calculateAge() {
	// Get the birth date from the user input
	let birthDate = new Date(userInput.value);

	let birthDay = birthDate.getDate();
	let birthMonth = birthDate.getMonth() + 1;
	let birthYear = birthDate.getFullYear();

	// Get the current date
	let currentDate = new Date();

	let curDay = currentDate.getDate();
	let curMonth = currentDate.getMonth() + 1;
	let curYear = currentDate.getFullYear();

	// Store the calculated age in years, months, and days
	let calDay, calMonth, calYear;

	// Calculate the age in years
	calYear = curYear - birthYear;

	// Calculate the age in months
	if (curMonth >= birthMonth) {
		calMonth = curMonth - birthMonth;
	} else {
		calYear--;
		calMonth = 12 + curMonth - birthMonth;
	}

	// Calculate the age in days
	if (curDay >= birthDay) {
		calDay = curDay - birthDay;
	} else {
		calMonth--;
		calDay = getDaysInMonth(birthYear, birthMonth) + curDay - birthDay;
	}

	// If the calculated month is less than 0, decrement the year and month
	if (calMonth < 0) {
		calMonth = 11;
		calYear--;
	}
	// console.log(calYear, calMonth, calDay);

	result.innerHTML = `Your are <span>${calYear}</span> years, <span>${calMonth}</span> months and <span>${calDay}</span> days old.`;
}

// Get the number of days in a given month and year
function getDaysInMonth(year, month) {
	return new Date(year, month, 0).getDate();
}
