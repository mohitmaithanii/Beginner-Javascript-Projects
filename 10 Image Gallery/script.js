const scrollContainer = document.querySelector(".gallery");
const backBtn = document.getElementById("backBtn");
const nextBtn = document.getElementById("nextBtn");

// Add an event listener to the scroll container for the wheel event
scrollContainer.addEventListener("wheel", (e) => {
	e.preventDefault();

	// Update the scroll position based on the deltaY value of the wheel event
	scrollContainer.scrollLeft += e.deltaY;
	scrollContainer.style.scrollBehavior = "auto";
});

nextBtn.addEventListener("click", () => {
	scrollContainer.style.scrollBehavior = "smooth";

	// Update the scroll position by adding 900 to the current scrollLeft value
	scrollContainer.scrollLeft += 900;
});

backBtn.addEventListener("click", () => {
	scrollContainer.style.scrollBehavior = "smooth";

	// Update the scroll position by subtracting 900 from the current scrollLeft value
	scrollContainer.scrollLeft -= 900;
});
