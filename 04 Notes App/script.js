const noteContainer = document.querySelector(".notesContainer");
const createBtn = document.querySelector(".btn");

// display notes from local storage
function showNotes() {
	const savedNotes = localStorage.getItem("notes");
	if (savedNotes) {
		noteContainer.innerHTML = savedNotes;
	}
}
showNotes();

// update the local storage with the current notes
function updateStorage() {
	localStorage.setItem("notes", noteContainer.innerHTML);
}

// create new note
createBtn.addEventListener("click", () => {
	const inputBox = document.createElement("p");
	inputBox.className = "inputBox";
	inputBox.contentEditable = true;

	const deleteIcon = document.createElement("img");
	deleteIcon.src = "img/delete.png";
	deleteIcon.className = "deleteIcon";

	// remove note
	deleteIcon.addEventListener("click", () => {
		inputBox.remove();
		updateStorage();
	});

	inputBox.appendChild(deleteIcon);
	noteContainer.appendChild(inputBox);

	inputBox.focus();
});

noteContainer.addEventListener("input", updateStorage);

document.addEventListener("keydown", (event) => {
	// Insert a line break at the current cursor position
	if (event.key === "Enter") {
		document.execCommand("insertLineBreak", false, null);
		event.preventDefault();
	}
});

noteContainer.addEventListener("click", (event) => {
	if (event.target.classList.contains("deleteIcon")) {
		// Get the note paragraph element that contains the delete icon
		const inputBox = event.target.parentElement;

		// Remove the note paragraph element from the DOM
		inputBox.remove();
		updateStorage();
	}
});
