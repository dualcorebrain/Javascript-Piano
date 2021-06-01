/**How this works
 *  Adds event listener for 'keyup', 'keyDown' and 'mousedown'/'mouseup'
 * 
 * 1. SCENARIO 'KEYDOWN/KEYUP' EVENTS GET FIRED:
 
 * 1.1 - 'keydown' events firing is recorded first and leads to function 'playSound'{
    
    * playSound(e)
        * - playSound(e){} function takes the event information as a parameter
        
        * - 'audio' variable uses querySelector to locate the HTML <audio> element with corresponding data-key (taken from the event being fired)
        * - Be careful with back-ticks (called template-literalls). It is essentially a string but we can have a query placed under ${query} as opposed to using -
        * - the traditional method of "hello my name is" + name + "Thanks for contacting". Instead using `"Hello my name is ${name} Thanks for contacting"`
        
        * - declare a blackAudio variable
        * - if audio variable is empty then return nothing (stops the code from running further)
        
        * - if(shiftKey is pressed and something is in audio variable) else(move on, shiftKey not pressed then it means a white key has been pressed, no need to 'fake' key-codes)
        * - then blackAudio querySelector has a different data-key of the first 5 numbers on the keyboard
        * - audio.currentTime and audio.play() are provided by HTML's <audio> events
        * - calls the function pressedAnimation(with the event) to start the animation on the UI
    
    
    * pressedAnimation(e)
        * - if(key-code is a white key number but shiftKey was held down, it means a black-key was meant to be pressed)
        * - if else statements for all 5 black keys and their corresponding fake key-codes
        * - blackKeyDiv variable get the corresponding <div> with matching (fake) 'data-key' for black keys
        * - add a "black-pressed" class to the second child of the <div> (which is the <button> element), "black-pressed" is a CSS class
        * - at the end is the else{} statement, executes if previous else-if statements fail to match, if this happens it means a white-key was pressed since shiftKey wasnt pressed
 * }
 * 
 * 
 * 1.2 - 'keyup' event firing is is known afterwards and leads to the function 'endPressedAnimation'{
    
    * endPressedAnimation(e){
        * - very similar to pressedAnimation(e) but the only difference is that it removes the "black-pressed" class from the <button> element 
        *  - otherwise remove the "white-pressed" class
     }
    
*   
* 2. SCENARIO 'MOUSEDOWN/MOUSEUP' EVENTS GET FIRED:

* 2.1 'mousedown' event is recorded first and firing leads to the function 'playSoundMouse'
    * playSoundMouse(e)
        * - the 'path' variable's explanation is done above the element
        * - this 'mouseAudio' variable assigns the 'path variable' in order to find the correct <audio> HTML element to be played
        * - then it proceeds to play that HTML <audio> element
        * - NOTE- If confused use console.log one by one on the 'path' element
        * - NOTE- No animation functions are called when piano's key is clicked. Animations are only when piano is played keyboard inputs
        * - NOTE- With mouse all animations that you see are handled using CSS
    
        
* 
* 
* 
* 
* 
* 
* 
* 
* 
*
* 
*  
 * }
 * 
 * 
 */







window.addEventListener('keydown', playSound);
window.addEventListener('keyup', endPressedAnimation);

window.addEventListener('mousedown', playSoundMouse);
//window.addEventListener('mouseup', endBlackAnimation);  NOT NEEDED 


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
            audio.currentTime = 0.4;
            blackAudio.play();
            pressedAnimation(e);
        }
        else if(audio.getAttribute("data-key") == 68){
            blackAudio = document.querySelector(`audio[data-key="50"]`);
            audio.currentTime = 0.4;
            blackAudio.play();
            pressedAnimation(e);
        }

        else if(audio.getAttribute("data-key") == 70){
            blackAudio = document.querySelector(`audio[data-key="51"]`);
            audio.currentTime = 0.4;
            blackAudio.play();
            pressedAnimation(e);     }

        else if(audio.getAttribute("data-key") == 71){
            blackAudio = document.querySelector(`audio[data-key="52"]`);
            audio.currentTime = 0.4;
            blackAudio.play();
            pressedAnimation(e);     }

        else if(audio.getAttribute("data-key") == 65){
            blackAudio = document.querySelector(`audio[data-key="53"]`);
            audio.currentTime = 0.4;
            blackAudio.play();
            pressedAnimation(e);     }

    }
    else{
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

        //If no shiftKey is held then a white key is pressed and the final thing to do if no 'else-if' matches
        }else{     
            let divKey = document.querySelector(`.key[data-key="${e.keyCode}"]`);
            let button = divKey.childNodes[1];
            button.classList.add("white-pressed");
        }
}


function endPressedAnimation(e){
    //END ANIMATION FOR PRESSED KEY

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
         }
        //If no shiftKey is held then a white key is pressed and the final thing to do if no 'else-if' matches
         else{      
            let divKey = document.querySelector(`.key[data-key="${e.keyCode}"]`);
            let button = divKey.childNodes[1];
            button.classList.remove("white-pressed");
        }

}







/**
 * blackAnimation(e) and endBlackAnimation(e) FUNCTIONS EMBEDDED INTO 'pressedAnimation(e)' AND 'endPressedANimation' THEREFORE THESE FUNCTION NOT NEEDED ANYMORE




 /*function blackAnimation(e){
    let blackDivKey = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    console.log(e);

    if(e.keyCode == 67){
        let blackDivKey = document.querySelector(`.key[data-key="49"]`);
        blackDivKey.childNodes[1].classList.add("black-pressed");
    }

    let blackButton = blackDivKey.childNodes[1];
    blackButton.classList.add("black-pressed");

}


function blackAnimation(fakeBlackNumberKey){
    let blackDivkey = document.querySelector(`.key[data-key='${fakeBlackNumberKey}']`);
    let blackButton = blackDivkey.childNodes[1];
    blackButton.classList.add("black-pressed");

}

/*function endBlackAnimation(e){


    //console.log("EndBlackAnimation fired")
}

*/