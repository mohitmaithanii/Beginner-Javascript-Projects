// Array of question objects
const questions = [
	{
		question: "What is the capital of India?",
		answers: [
			{ text: "Mumbai", correct: false },
			{ text: "New Delhi", correct: true },
			{ text: "Kolkata", correct: false },
			{ text: "Chennai", correct: false },
		],
	},
	{
		question: "Which river is considered the holiest river in India?",
		answers: [
			{ text: "Yamuna", correct: false },
			{ text: "Brahmaputra", correct: false },
			{ text: "Ganga", correct: true },
			{ text: "Indus", correct: false },
		],
	},
	{
		question: "Who was the first Prime Minister of India?",
		answers: [
			{ text: "Indra Gandhi", correct: false },
			{ text: "Mahatma Gandhi", correct: false },
			{ text: "Sardar Vallabhbhai patel", correct: false },
			{ text: "Jawaharlal Nehru", correct: true },
		],
	},
	{
		question: "Which Indian festival is known as the Festival of Lights?",
		answers: [
			{ text: "Diwali", correct: true },
			{ text: "Holi", correct: false },
			{ text: "Eid", correct: false },
			{ text: "Navratri", correct: false },
		],
	},
	// ... more questions
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

// Start the quiz by initializing the current question and score
function startQuiz() {
	currentQuestionIndex = 0;
	score = 0;
	nextButton.innerHTML = "Next";
	showQuestion();
}

// Display the current question and answer choices
function showQuestion() {
	resetState();
	let currentQuestion = questions[currentQuestionIndex];
	let questionNo = currentQuestionIndex + 1;
	questionElement.innerText = `${questionNo} . ${currentQuestion.question}`;

	currentQuestion.answers.forEach((answer) => {
		const button = document.createElement("button");
		button.innerHTML = answer.text;
		button.classList.add("btn");
		answerButtons.appendChild(button);

		if (answer.correct) {
			button.dataset.correct = answer.correct;
		}
		button.addEventListener("click", selectAnswer);
	});
}

// Reset the UI to prepare for a new question
function resetState() {
	nextButton.style.display = "none";
	while (answerButtons.firstChild) {
		answerButtons.removeChild(answerButtons.firstChild);
	}
}

// Handle user selecting an answer
function selectAnswer(e) {
	const selectBtn = e.target;
	const isCorrect = selectBtn.dataset.correct === "true";

	if (isCorrect) {
		selectBtn.classList.add("correct");
		score++;
	} else {
		selectBtn.classList.add("incorrect");
	}

	// Disable all buttons and add correct/incorrect classes to them
	Array.from(answerButtons.children).forEach((button) => {
		if (button.dataset.correct === "true") {
			button.classList.add("correct");
		}
		button.disabled = "true";
	});
	// Prepare to move on to the next question
	nextButton.style.display = "block";
}

// Display the user's score and the option to restart the quiz
function showScore() {
	resetState();
	questionElement.innerHTML = `You scored ${score}/${questions.length}`;
	nextButton.innerHTML = "Play Again";
	nextButton.style.display = "block";
}

// Move on to the next question or show the score if at the end
function handleNextButton() {
	currentQuestionIndex++;
	if (currentQuestionIndex < questions.length) {
		showQuestion();
	} else {
		showScore();
	}
}

// Set up event listener for the "Next" button
nextButton.addEventListener("click", () => {
	if (currentQuestionIndex < questions.length) {
		handleNextButton();
	} else {
		startQuiz();
	}
});
// Start the quiz
startQuiz();
