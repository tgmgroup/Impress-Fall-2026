function OpenQuizModal(audioId, modalId, playBtnId) {
	// If you have a general modal display function like PlayAndShowWithNav, call it here:
	const modal = document.getElementById(modalId);
	if (modal) {
		modal.classList.remove("hidden-text");
		modal.style.display = "flex";
	}

	// Optional: Reload iframe so the quiz starts fresh every time it's opened
	const iframe = document.getElementById("quiz-frame");
	if (iframe) {
		iframe.src = iframe.src;
	}
}

function ResetQuizModal(audioId, modalId, playBtnId) {
	const modal = document.getElementById(modalId);
	if (modal) {
		modal.classList.add("hidden-text");
		modal.style.display = "none";
	}

	// Pause background audio if playing
	const audio = document.getElementById(audioId);
	if (audio && typeof audio.pause === "function") {
		audio.pause();
	}
}
