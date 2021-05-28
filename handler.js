window.addEventListener('keydown', playSound);
window.addEventListener('click', playSoundMouse);

function playSound(e){
    //SOUND FUNCTIONALITY
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    //console.log(audio);

    if(!audio) return;
    audio.currentTime = 0.35;
    audio.play();

    //ANIMATION WHEN PRESSED
    let key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    console.log(key);
    key.classList.add("white-pressed"); //NOT APPLYING PROPERLY
}

function playSoundMouse(e){
 /* WAS GOING TO USE A SWITCH SWATEMENT, 
    BUT FOUND A BETTER WAY TO TARGET USING THE EVENT OBJECT PROPERTY   

    console.log(`audio[data-key="${e.target.id}"]`);

    let mouseKeyInput = e.target.id;

    /*switch(mouseKeyInput){
        case c4:

        case 
    }
*/
    
    /**
     * 1. User clicks on a button and triggers the event
     * 2. uses event's path property(which is an array)
     * 3. second element of that array is the parent node (which is the parent div)
     * 4. then it gets the "data-key" attribute (which is what we wanted)
     * 
     */
    let path = (e.path[1].getAttribute("data-key")); 

    let mouseAudio = document.querySelector(`audio[data-key="${path}"]`);


    mouseAudio.currentTime = 0.35;
    mouseAudio.play();


}