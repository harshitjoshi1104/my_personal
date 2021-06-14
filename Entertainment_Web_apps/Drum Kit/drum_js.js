var i;
for(i=0;i<7;i++)
    {
        document.querySelectorAll("button")[i].addEventListener("click",function(){
            var buttonInnerClicked=this.innerHTML;
             makeSound(buttonInnerClicked);
             buttonAnimation(buttonInnerClicked);
        });

    }


document.addEventListener("keypress",function(event) {makeSound(event.key);buttonAnimation(event.key)});

function makeSound(key)
    {
        switch(key)
        {
            case "w": var audio_value = new Audio("sounds/kick-bass.mp3"); audio_value.play();
            break;
    
            case "a":var audio_value = new Audio("sounds/tom-1.mp3"); audio_value.play();
                break;
            
            case "s":var audio_value = new Audio("sounds/tom-2.mp3"); audio_value.play();
                break;
    
            case "d":var audio_value = new Audio("sounds/tom-3.mp3"); audio_value.play();
                break;
    
            case "j": var audio_value = new Audio("sounds/tom-4.mp3"); audio_value.play() ;
                break;
    
            case "k":var audio_value = new Audio("sounds/k.mp3"); audio_value.play();
                break;
    
            case "l":var audio_value = new Audio("sounds/snare.mp3"); audio_value.play();
                break;
    
            default: break;
        }
    }

function buttonAnimation(currentKey)
    {
        var button_clickAnimaion=document.querySelector("."+currentKey)
        button_clickAnimaion.classList.add("pressed");
        setTimeout(function(){button_clickAnimaion.classList.remove("pressed")},200);
    }


