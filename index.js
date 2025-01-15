var drums = document.querySelectorAll(".drum");


for (var i = 0; i < drums.length; i++) {
    drums[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML; // Correctly retrieve the button's innerHTML
        console.log(this);
        // Play the appropriate sound based on the button pressed
        playSound(buttonInnerHTML);
        cssAnimations(buttonInnerHTML);
    });
}

// Function to handle sound playback
function playSound(key) {
    var sound;
    switch (key) {
        case 'w':
            sound = new Audio('./sounds/crash.mp3');
            break;

        case 'a':
            sound = new Audio('./sounds/kick-bass.mp3');
            break;

        case 's':
            sound = new Audio('./sounds/snare.mp3');
            break;

        case 'd':
            sound = new Audio('./sounds/tom-1.mp3');
            break;

        case 'j':
            sound = new Audio('./sounds/tom-2.mp3');
            break;

        case 'k':
            sound = new Audio('./sounds/tom-3.mp3');
            break;

        case 'l':
            sound = new Audio('./sounds/tom-4.mp3');
            break;

        default:
            console.log("Sa Re Ga Ma Pa Dha Ni Sa");
            return; // Exit the function if no valid key is pressed
    }
    sound.play(); // Play the sound
}

addEventListener("keydown",function(event){
    playSound(event.key);
    cssAnimations(event.key);
})

function cssAnimations(currentKey){
    var image = document.querySelector("." + currentKey);
    image.classList.add("pressed"); 
    
    setTimeout(function() {
        image.classList.remove("pressed");
    },100);
}

