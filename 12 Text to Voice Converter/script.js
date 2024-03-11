let speech = new SpeechSynthesisUtterance();

// Initialize an empty array to store the voices
let voices = [];
let voiceSelect = document.querySelector("select");

// When the voices have changed, populate the voices array and set the default voice
window.speechSynthesis.onvoiceschanged = () => {
	voices = window.speechSynthesis.getVoices();
	speech.voice = voices[0];

	// Loop through the voices array and add each voice as an option in the <select> element
	voices.forEach(
		(voice, i) => (voiceSelect.options[i] = new Option(voice.name, i))
	);
};

// When the selection in the <select> element changes, update the speech object's voice
voiceSelect.addEventListener("change", () => {
	speech.voice = voices[voiceSelect.value];
});

// When the button is clicked, set the speech object's text to the value of the <textarea>, and speak the text
document.querySelector("button").addEventListener("click", () => {
	speech.text = document.querySelector("textarea").value;
	window.speechSynthesis.speak(speech);
});
