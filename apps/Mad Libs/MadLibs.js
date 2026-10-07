// State Variables
let currentStoryIndex = 0;
let currentLang = "en";
let isDarkMode = false;
let activeSpeechRecognition = null;

// Translation Dictionary for App UI Text
const i18n = {
	en: {
		appTitle:
			'Mad <span class="text-transparent bg-clip-text bg-gradient-to-r from-funPink via-funPurple to-funBlue">Scary Stories</span>',
		appSubtitle:
			'Fill in the word prompts below, then press "Generate Story" to read your funny tale!',
		storyBadge: (cur, total) => `Story ${cur} of ${total}`,
		filledCount: (count, total) => `${count} / ${total} filled`,
		btnGenerate: "Generate Story!",
		btnAutofill: "Auto-Fill Words",
		btnClear: "Clear",
		btnCopy: "Copy",
		btnListen: "Listen",
		btnEdit: "Edit / Play Again",
		btnNext: (num) => `Next: Story ${num}`,
		btnStartOver: "Start Over (Story 1)",
		themeDark: "Dark Mode",
		themeLight: "Light Mode",
		langSwitch: "English / 日本語",
		toastFilled: "Please fill in all word prompts! ✍️",
		toastAutofilled: "Random words auto-filled! 🎲",
		toastCleared: "Form cleared!",
		toastGenerated: "Story generated! 🎉",
		toastCopied: "Story copied to clipboard! 📋",
		toastReading: "Reading story aloud... 🔊",
		toastEdited: "You can now edit your words!",
		toastLoaded: (num) => `Loaded Story ${num}!`,
		listening: "Listening...",
	},
	ja: {
		appTitle:
			'クレイジー・<span class="text-transparent bg-clip-text bg-gradient-to-r from-funPink via-funPurple to-funBlue">マッドリブ！</span>',
		appSubtitle: "単語を入力欄にいれて「物語を作成」ボタンを押そう！",
		storyBadge: (cur, total) => `ストーリー ${cur} / ${total}`,
		filledCount: (count, total) => `${count} / ${total} 入力済み`,
		btnGenerate: "物語を作成する！",
		btnAutofill: "おまかせ自動入力",
		btnClear: "消去",
		btnCopy: "コピー",
		btnListen: "読み上げ",
		btnEdit: "もう一度やり直す",
		btnNext: (num) => `次の物語へ (ストーリー ${num})`,
		btnStartOver: "最初に戻る (ストーリー 1)",
		themeDark: "ダークモード",
		themeLight: "ライトモード",
		langSwitch: "日本語 / English",
		toastFilled: "すべての入力欄を記入してください！ ✍️",
		toastAutofilled: "単語を自動でセットしました！ 🎲",
		toastCleared: "入力内容を消去しました",
		toastGenerated: "物語が完成しました！ 🎉",
		toastCopied: "クリップボードにコピーしました！ 📋",
		toastReading: "物語を読み上げています... 🔊",
		toastEdited: "単語を編集できます！",
		toastLoaded: (num) => `ストーリー ${num} を読み込みました！`,
		listening: "音声聞き取り中...",
	},
};

document.addEventListener("DOMContentLoaded", () => {
	initTheme();
	renderStoryForm();
});

/* Dark Mode Controller */
function initTheme() {
	const saved = localStorage.getItem("madlibs_theme");
	const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
	if (saved === "dark" || (!saved && prefersDark)) {
		isDarkMode = true;
		document.documentElement.classList.add("dark");
	} else {
		isDarkMode = false;
		document.documentElement.classList.remove("dark");
	}
	updateThemeUI();
}

function toggleDarkMode() {
	isDarkMode = !isDarkMode;
	document.documentElement.classList.toggle("dark", isDarkMode);
	localStorage.setItem("madlibs_theme", isDarkMode ? "dark" : "light");
	updateThemeUI();
}

function updateThemeUI() {
	const icon = document.getElementById("theme-icon");
	const label = document.getElementById("theme-btn-label");
	if (isDarkMode) {
		icon.className = "fa-solid fa-sun text-funYellow text-base";
		label.textContent = i18n[currentLang].themeLight;
	} else {
		icon.className = "fa-solid fa-moon text-funYellow text-base";
		label.textContent = i18n[currentLang].themeDark;
	}
}

/* Language Toggle */
function toggleLanguage() {
	currentLang = currentLang === "en" ? "ja" : "en";
	renderStoryForm();
	updateThemeUI();
}

/* Render Form Inputs with Mic Dictation Buttons */
function renderStoryForm() {
	const story = STORIES[currentStoryIndex];
	const t = i18n[currentLang];

	document.getElementById("app-title").innerHTML = t.appTitle;
	document.getElementById("app-subtitle").textContent = t.appSubtitle;
	document.getElementById("story-counter-badge").textContent = t.storyBadge(
		currentStoryIndex + 1,
		STORIES.length,
	);
	document.getElementById("lbl-btn-generate").textContent = t.btnGenerate;
	document.getElementById("lbl-btn-autofill").textContent = t.btnAutofill;
	document.getElementById("lbl-btn-clear").textContent = t.btnClear;
	document.getElementById("lbl-btn-copy").textContent = t.btnCopy;
	document.getElementById("lbl-btn-listen").textContent = t.btnListen;
	document.getElementById("lbl-btn-edit").textContent = t.btnEdit;

	// Header Title
	document.getElementById("story-theme-title").innerHTML = `
    <i class="fa-solid ${story.icon} text-funPink"></i>
    ${story.title[currentLang]}
  `;

	// Render Inputs
	const container = document.getElementById("dynamic-inputs-container");
	container.innerHTML = "";

	story.fields.forEach((field) => {
		const div = document.createElement("div");
		div.className = "flex flex-col gap-1.5";

		div.innerHTML = `
      <label for="input-${field.id}" class="text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-200 flex items-center justify-between">
        <span>${field.label[currentLang]}</span>
      </label>
      <div class="relative flex items-center">
        <input
          type="text"
          id="input-${field.id}"
          oninput="updateFilledCounter()"
          placeholder="${field.placeholder[currentLang]}"
          class="w-full pl-4 pr-10 py-3 rounded-2xl
            border border-funPurple/20 dark:border-purple-400/20
            bg-purple-50/70 dark:bg-slate-700/80
            text-slate-800 dark:text-slate-100
            text-sm font-semibold
            focus:outline-none focus:ring-2 focus:ring-funPurple/60
            focus:border-funPurple/50
            transition-all
            placeholder:font-normal
            placeholder:text-slate-400 dark:placeholder:text-slate-400
            shadow-sm"
        />
        <button
          type="button"
          onclick="startVoiceDictation('input-${field.id}')"
          title="Voice Dictation"
          class="absolute right-2.5 p-1.5 rounded-xl text-slate-400 hover:text-funPurple dark:hover:text-purple-300 transition-colors"
        >
          <i class="fa-solid fa-microphone text-sm"></i>
        </button>
      </div>
    `;
		container.appendChild(div);
	});

	updateFilledCounter();
}

/* Voice Dictation (Web Speech API) */
function startVoiceDictation(inputId) {
	const SpeechRecognition =
		window.SpeechRecognition || window.webkitSpeechRecognition;
	if (!SpeechRecognition) {
		showToast("Voice recognition not supported in this browser. 🎙️");
		return;
	}

	if (activeSpeechRecognition) {
		activeSpeechRecognition.stop();
	}

	const recognition = new SpeechRecognition();
	activeSpeechRecognition = recognition;
	recognition.lang = currentLang === "ja" ? "ja-JP" : "en-US";
	recognition.interimResults = false;

	const targetInput = document.getElementById(inputId);
	showToast(i18n[currentLang].listening);

	recognition.onresult = (event) => {
		const transcript = event.results[0][0].transcript;
		targetInput.value = transcript;
		updateFilledCounter();
	};

	recognition.onerror = () => {
		showToast("Could not recognize audio. Try again!");
	};

	recognition.start();
}

/* Input Progress Counter */
function updateFilledCounter() {
	const story = STORIES[currentStoryIndex];
	let filled = 0;
	story.fields.forEach((f) => {
		const input = document.getElementById(`input-${f.id}`);
		if (input && input.value.trim() !== "") filled++;
	});
	document.getElementById("completion-counter").textContent = i18n[
		currentLang
	].filledCount(filled, story.fields.length);
}

/* Auto-Fill & Clear */
function randomizeWords() {
	const story = STORIES[currentStoryIndex];
	story.fields.forEach((f) => {
		const pool = f.pool[currentLang];
		const randomVal = pool[Math.floor(Math.random() * pool.length)];
		const input = document.getElementById(`input-${f.id}`);
		if (input) input.value = randomVal;
	});
	updateFilledCounter();
	showToast(i18n[currentLang].toastAutofilled);
}

function clearForm() {
	const story = STORIES[currentStoryIndex];
	story.fields.forEach((f) => {
		const input = document.getElementById(`input-${f.id}`);
		if (input) input.value = "";
	});
	updateFilledCounter();
	showToast(i18n[currentLang].toastCleared);
}

/* Story Generation & Explosive Confetti */
function generateStory() {
	const story = STORIES[currentStoryIndex];
	const userWords = {};
	let missing = false;

	story.fields.forEach((f) => {
		const val = document.getElementById(`input-${f.id}`).value.trim();
		if (!val) missing = true;

		// Wrap user words in styled glassmorphic badges
		userWords[f.id] =
			`<span class="word-badge ${f.bg}">${val || "(...)"}</span>`;
	});

	if (missing) {
		showToast(i18n[currentLang].toastFilled);
	}

	document.getElementById("story-output").innerHTML = story.render(userWords);

	// Update Next Button Label
	const nextBtnText = document.getElementById("next-btn-text");
	if (currentStoryIndex + 1 < STORIES.length) {
		nextBtnText.textContent = i18n[currentLang].btnNext(currentStoryIndex + 2);
	} else {
		nextBtnText.textContent = i18n[currentLang].btnStartOver;
	}

	// View Switch
	document.getElementById("form-section").classList.add("hidden");
	document.getElementById("story-section").classList.remove("hidden");

	// Trigger Confetti Pop
	fireConfettiPops();
	showToast(i18n[currentLang].toastGenerated);
}

/* Confetti Explosion Effect */
function fireConfettiPops() {
	if (typeof confetti === "function") {
		confetti({
			particleCount: 80,
			spread: 70,
			origin: { y: 0.6 },
			colors: ["#EF476F", "#FFD166", "#06D6A0", "#118AB2", "#8338EC"],
		});
	}
}

/* Edit / Reset & Next Story Navigation */
function resetCurrentStory() {
	document.getElementById("story-section").classList.add("hidden");
	document.getElementById("form-section").classList.remove("hidden");
	showToast(i18n[currentLang].toastEdited);
}

function goToNextStory() {
	currentStoryIndex = (currentStoryIndex + 1) % STORIES.length;
	renderStoryForm();
	document.getElementById("story-section").classList.add("hidden");
	document.getElementById("form-section").classList.remove("hidden");
	showToast(i18n[currentLang].toastLoaded(currentStoryIndex + 1));
}

/* Copy to Clipboard */
function copyToClipboard() {
	const output = document.getElementById("story-output");
	const plainText = output.innerText;
	navigator.clipboard.writeText(plainText).then(() => {
		showToast(i18n[currentLang].toastCopied);
	});
}

/* Text-To-Speech (Web Speech API) */
function readAloud() {
	if (!("speechSynthesis" in window)) {
		showToast("Text-to-speech not supported in this browser.");
		return;
	}
	window.speechSynthesis.cancel();

	const text = document.getElementById("story-output").innerText;
	const utterance = new SpeechSynthesisUtterance(text);
	utterance.lang = currentLang === "ja" ? "ja-JP" : "en-US";
	utterance.rate = 0.95;

	window.speechSynthesis.speak(utterance);
	showToast(i18n[currentLang].toastReading);
}

/* Toast Message Helper */
function showToast(msg) {
	const toast = document.getElementById("toast");
	const toastMsg = document.getElementById("toast-message");
	toastMsg.textContent = msg;
	toast.classList.remove("hidden");

	setTimeout(() => {
		toast.classList.add("hidden");
	}, 3000);
}
