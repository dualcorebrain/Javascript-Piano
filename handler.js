window.addEventListener('keydown', playSound);
window.addEventListener('click', playSoundMouse);
window.addEventListener('keyup', endWhiteAnimation);

function playSound(e){
    //SOUND FUNCTIONALITY
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    console.log(e);

    if(!audio) return;

    
    audio.currentTime = 0.4;
    audio.play();
    whiteAnimation(e);

}

function playSoundMouse(e){
 /* WAS GOING TO USE A SMIPLE SWITCH SWATEMENT, 
    BUT FOUND A BETTER WAY TO TARGET USING THE EVENT OBJECT PROPERTY   

    console.log(`audio[data-key="${e.target.id}"]`);

    let mouseKeyInput = e.target.id;

    /*switch(mouseKeyInput){
        case c4:

        case 
    }
*/
    
    /** NOTES ON THIS VARIABLE
     * 1. User clicks on a button and triggers the event
     * 2. uses event's DOM path property(which is an array)
     * 3. second element of that array is the parent node (which is the parent div)
     * 4. then it gets the "data-key" attribute (which is what we wanted)
     * 
     */
    let path = (e.path[1].getAttribute("data-key")); 
    let mouseAudio = document.querySelector(`audio[data-key="${path}"]`);


    mouseAudio.currentTime = 0.35;
    mouseAudio.play();


}

function whiteAnimation(e){
    //ANIMATION WHEN PRESSED
    let divKey = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    let button = divKey.childNodes[1];
    button.classList.add("white-pressed");
}


function endWhiteAnimation(e){
    //END ANIMATION FOR PRESSED KEY(S)
    let divKey = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    let button = divKey.childNodes[1];
    button.classList.remove("white-pressed");
}


