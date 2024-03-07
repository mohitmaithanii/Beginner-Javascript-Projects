const lists = document.getElementsByClassName("list");
const rightBox = document.getElementById("right");
const leftBox = document.getElementById("left");

for (const list of lists) {
	// Add a "dragstart" event listener to each list element
	list.addEventListener("dragstart", function (e) {
		let selected = e.target;

		// Add a "dragover" event listener to the "right" box element
		rightBox.addEventListener("dragover", function (e) {
			e.preventDefault();
		});

		// Add a "drop" event listener to the "right" box element
		rightBox.addEventListener("drop", function (e) {
			// Append the "selected" element as a child of the "right" box element
			rightBox.appendChild(selected);
			selected = null;
		});

		// Add a "dragover" event listener to the "left" box element
		leftBox.addEventListener("dragover", function (e) {
			e.preventDefault();
		});

		leftBox.addEventListener("drop", function (e) {
			leftBox.appendChild(selected);
			selected = null;
		});
	});
}
