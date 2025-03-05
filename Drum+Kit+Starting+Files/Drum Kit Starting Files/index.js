var buttons = document.querySelectorAll("button");

// Function to play the corresponding sound
function playSound(key) {
    switch (key) {
        case "w":
            var audio = new Audio('sounds/tom-1.mp3');
            audio.play();
            break;
        case "a":
            var audio = new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
        case "s":
            var audio = new Audio('sounds/tom-3.mp3');
            audio.play();
            break;
        case "d":
            var audio = new Audio('sounds/tom-4.mp3');
            audio.play();
            break;
        case "j":
            var audio = new Audio('sounds/snare.mp3');
            audio.play();
            break;
        case "k":
            var audio = new Audio('sounds/kick-bass.mp3');
            audio.play();
            break;
        case "l":
            var audio = new Audio('sounds/crash.mp3');
            audio.play();
            break;
        default:
            console.log("Button not mapped to a sound: " + key);
    }
}

// Function to handle animations
function buttonAnimation(key) {
    var activeButton = document.querySelector("." + key);
    if (activeButton) {
        activeButton.classList.add("pressed");
        setTimeout(function() {
            activeButton.classList.remove("pressed");
        }, 100);
    }
}

// Add click event listeners to buttons
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        var buttontap = this.innerHTML;
        playSound(buttontap);
        buttonAnimation(buttontap);
    });
}

// Add keydown event listener to the document
document.addEventListener("keydown", function(event) {
    playSound(event.key);
    buttonAnimation(event.key);
});