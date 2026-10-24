
console.log("Individual Assignment: Tasks 6–10");

// ========================================
// TASK 6
// ========================================

let count = 0;

const counter = document.getElementById("counter");
const increaseBtn = document.getElementById("increaseBtn");
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");

function updateCounter() {
    counter.textContent = count;
}

increaseBtn.addEventListener("click", function () {
    count++;
    updateCounter();
});

decreaseBtn.addEventListener("click", function () {
    if (count > 0) {
        count--;
    }

    updateCounter();
});

resetBtn.addEventListener("click", function () {
    count = 0;
    updateCounter();
});


// ========================================
// TASK 7
// ========================================

const textInput = document.getElementById("textInput");
const textPreview = document.getElementById("textPreview");
const charCount = document.getElementById("charCount");
const clearBtn = document.getElementById("clearBtn");

function updateTextPreview() {
    const text = textInput.value;

    if (text.length === 0) {
        textPreview.textContent = "Your text will appear here";
    } else {
        textPreview.textContent = text;
    }

    charCount.textContent = text.length;
}

textInput.addEventListener("input", updateTextPreview);

clearBtn.addEventListener("click", function () {
    textInput.value = "";
    updateTextPreview();
    textInput.focus();
});


// ========================================
// TASK 8
// ========================================


const imageSelect = document.getElementById("imageSelect");
const carImage = document.getElementById("carImage");
const imageCaption = document.getElementById("imageCaption");

const cars = {
    bmw: {
        src: "bmw.jpg",
        alt: "BMW car",
        caption: "BMW — a well-known German car brand."
    },
    mercedes: {
        src: "mercedes.jpg",
        alt: "Mercedes-Benz car",
        caption: "Mercedes-Benz — a German luxury car brand."
    },
    toyota: {
        src: "toyota.jpg",
        alt: "Toyota car",
        caption: "Toyota — a popular Japanese car brand."
    }
};

function updateCar() {
    const selectedCar = cars[imageSelect.value];

    carImage.src = selectedCar.src;
    carImage.alt = selectedCar.alt;
    imageCaption.textContent = selectedCar.caption;
}

imageSelect.addEventListener("change", updateCar);
updateCar();

// ========================================
// TASK 9
// ========================================

const keyboardInput = document.getElementById("keyboardInput");
const keyStatus = document.getElementById("keyStatus");
const keyResult = document.getElementById("keyResult");

keyboardInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();

        keyStatus.textContent = "You pressed: Enter";
        keyResult.textContent = keyboardInput.value;
    } else if (event.key === "Escape") {
        event.preventDefault();

        keyboardInput.value = "";
        keyResult.textContent = "";
        keyStatus.textContent = "Input and result cleared.";
    } else {
        keyStatus.textContent = "You pressed: " + event.key;
    }
});


// ========================================
// TASK 10
// ========================================

const interactiveCard = document.getElementById("interactiveCard");
const cardInstruction = document.getElementById("cardInstruction");

function highlightCard() {
    interactiveCard.classList.add("highlight");
    cardInstruction.textContent = "The card is highlighted!";
}

function removeCardHighlight() {
    interactiveCard.classList.remove("highlight");
    cardInstruction.textContent =
        "Move your mouse over the card or use Tab to focus it.";
}

interactiveCard.addEventListener("mouseenter", highlightCard);
interactiveCard.addEventListener("mouseleave", removeCardHighlight);

interactiveCard.addEventListener("focus", highlightCard);
interactiveCard.addEventListener("blur", removeCardHighlight);
