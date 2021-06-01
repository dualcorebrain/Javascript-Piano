/**How this works
 * 1. Adds event listener for 'keyup' 'keyDown'
 */







window.addEventListener('keydown', playSound);
window.addEventListener('keyup', endWhiteAnimation);

window.addEventListener('mousedown', playSoundMouse);
window.addEventListener('mouseup', endBlackAnimation);


function playSound(e){
    //SOUND FUNCTIONALITY
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    let blackAudio = null;

    if(!audio) return; //If no 'audio' variable then stop and dont proceed (by returning nothing)
    //console.log(e);
    
    /**FOR BLACK KEY'S AUDIO
     * Check if the shiftKey has been pressed and there is something in the audio variable. 
     * If shiftKey was not pressed then a white key has been pressed and move to the 'else' statement
     * Assigns a different key-code number since a black keys has been pressed (key-codes[49-51] are first 5 numbers on the keyboard)
     */
    if(e.shiftKey == true && audio){
     if(audio.getAttribute("data-key") == 67){
        blackAudio = document.querySelector(`audio[data-key="49"]`);
        blackAudio.play();
        pressedAnimation(e);
     }
     else if(audio.getAttribute("data-key") == 68){
        blackAudio = document.querySelector(`audio[data-key="50"]`);
        blackAudio.play();
        pressedAnimation(e);
     }

     else if(audio.getAttribute("data-key") == 70){
        blackAudio = document.querySelector(`audio[data-key="51"]`);
        blackAudio.play();
        pressedAnimation(e);     }

     else if(audio.getAttribute("data-key") == 71){
        blackAudio = document.querySelector(`audio[data-key="52"]`);
        blackAudio.play();
        pressedAnimation(e);     }

     else if(audio.getAttribute("data-key") == 65){
        blackAudio = document.querySelector(`audio[data-key="53"]`);
        blackAudio.play();
        pressedAnimation(e);     }

    }else{
        audio.currentTime = 0.4;
        audio.play();
        pressedAnimation(e);     }
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
     * This works for black key without modification
     * This has nothing to do with 'faking' key-codes we did for keyboard input only
     */
    let path = (e.path[1].getAttribute("data-key")); 
    //console.log(path);
    let mouseAudio = document.querySelector(`audio[data-key="${path}"]`);


    mouseAudio.currentTime = 0.35;
    mouseAudio.play();
}


function pressedAnimation(e){
    //ANIMATION WHEN PRESSED

    console.log(e);

    if(e.keyCode==67 && e.shiftKey == true){
            let blackDivKey = document.querySelector(`.key[data-key="49"]`);
            console.log(blackDivKey);
            blackDivKey.childNodes[1].classList.add("black-pressed");
        }
        else if(e.keyCode==68 && e.shiftKey == true){
            let blackDivKey = document.querySelector(`.key[data-key="50"]`);
            console.log(blackDivKey);
            blackDivKey.childNodes[1].classList.add("black-pressed");
        }
        else if(e.keyCode==70 && e.shiftKey == true){
            let blackDivKey = document.querySelector(`.key[data-key="51"]`);
            console.log(blackDivKey);
            blackDivKey.childNodes[1].classList.add("black-pressed");
        }
        else if(e.keyCode==71 && e.shiftKey == true){
            let blackDivKey = document.querySelector(`.key[data-key="52"]`);
            console.log(blackDivKey);
            blackDivKey.childNodes[1].classList.add("black-pressed");
        }
        else if(e.keyCode==65 && e.shiftKey == true){
            let blackDivKey = document.querySelector(`.key[data-key="53"]`);
            console.log(blackDivKey);
            blackDivKey.childNodes[1].classList.add("black-pressed");

    }else{      //If no shiftKey is held then a white key is pressed
        let divKey = document.querySelector(`.key[data-key="${e.keyCode}"]`);
        //console.log(divKey);


        let button = divKey.childNodes[1];
        button.classList.add("white-pressed");
    }
}


function endWhiteAnimation(e){
    //END ANIMATION FOR PRESSED KEY(S)

    if(e.keyCode==67 && e.shiftKey == true){
        let blackDivKey = document.querySelector(`.key[data-key="49"]`);
        console.log(blackDivKey);
        blackDivKey.childNodes[1].classList.remove("black-pressed");
    }
    else if(e.keyCode==68 && e.shiftKey == true){
        let blackDivKey = document.querySelector(`.key[data-key="50"]`);
        console.log(blackDivKey);
        blackDivKey.childNodes[1].classList.remove("black-pressed");
    }
    else if(e.keyCode==70 && e.shiftKey == true){
        let blackDivKey = document.querySelector(`.key[data-key="51"]`);
        console.log(blackDivKey);
        blackDivKey.childNodes[1].classList.remove("black-pressed");
    }
    else if(e.keyCode==71 && e.shiftKey == true){
        let blackDivKey = document.querySelector(`.key[data-key="52"]`);
        console.log(blackDivKey);
        blackDivKey.childNodes[1].classList.remove("black-pressed");
    }
    else if(e.keyCode==65 && e.shiftKey == true){
        let blackDivKey = document.querySelector(`.key[data-key="53"]`);
        console.log(blackDivKey);
        blackDivKey.childNodes[1].classList.remove("black-pressed");

}else{      //If no shiftKey is held then a white key is pressed
    let divKey = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    //console.log(divKey);


    let button = divKey.childNodes[1];
    button.classList.remove("white-pressed");
}






/*    let divKey = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    let button = divKey.childNodes[1];
    button.classList.remove("white-pressed");

    */
}


/**
 * NEED TO ADD KEYBOARD ANIMATIONS FOR BLACK KEYS
 *  
 */


 function blackAnimation(e){
  /*  let blackDivKey = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    console.log(e);

    if(e.keyCode == 67){
        let blackDivKey = document.querySelector(`.key[data-key="49"]`);
        blackDivKey.childNodes[1].classList.add("black-pressed");
    }

    let blackButton = blackDivKey.childNodes[1];
    blackButton.classList.add("black-pressed");
*/
}

/*
function blackAnimation(fakeBlackNumberKey){
    let blackDivkey = document.querySelector(`.key[data-key='${fakeBlackNumberKey}']`);
    let blackButton = blackDivkey.childNodes[1];
    blackButton.classList.add("black-pressed");

}
*/
function endBlackAnimation(e){
    //console.log("EndBlackAnimation fired")
}