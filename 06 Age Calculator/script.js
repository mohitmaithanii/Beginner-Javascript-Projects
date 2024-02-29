let userInput = document.getElementById("date");

userInput.max = new Date().toISOString().split("T")[0];

let result = document.getElementById("result");

function calculateAge() {
	let birthDate = new Date(userInput.value);

	let birthDay = birthDate.getDate();
	let birthMonth = birthDate.getMonth() + 1;
	let birthYear = birthDate.getFullYear();

	let currentDate = new Date();

	let curDay = currentDate.getDate();
	let curMonth = currentDate.getMonth() + 1;
	let curYear = currentDate.getFullYear();

	let calDay, calMonth, calYear;

	calYear = curYear - birthYear;

	if (curMonth >= birthMonth) {
		calMonth = curMonth - birthMonth;
	} else {
		calYear--;
		calMonth = 12 + curMonth - birthMonth;
	}

	if (curDay >= birthDay) {
		calDay = curDay - birthDay;
	} else {
		calMonth--;
		calDay = getDaysInMonth(birthYear, birthMonth) + curDay - birthDay;
	}

	if (calMonth < 0) {
		calMonth = 11;
		calYear--;
	}
	console.log(calYear, calMonth, calDay);
	result.innerHTML = `Your are <span>${calYear}</span> years, <span>${calMonth}</span> months and <span>${calDay}</span> days old.`;
}

function getDaysInMonth(year, month) {
	return new Date(year, month, 0).getDate();
}
