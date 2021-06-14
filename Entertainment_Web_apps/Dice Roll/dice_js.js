var ply1=prompt("Enter Player 1 name");
var ply2=prompt("Enter Player 2 name");
document.getElementById("refresh_button").addEventListener("click",function(){ button_clicked();});
document.getElementById("ply1").innerHTML=ply1;
document.getElementById("ply2").innerHTML=ply2;



function button_clicked()
    {
        var number1=((Math.random()*6)+1); // Random Number 1 
        number1=Math.floor(number1)

        var number2=((Math.random()*6)+1); /// Random number 2
        number2=Math.floor(number2)


        dice_image_changer(1,number1)
        dice_image_changer(2,number2)
        if(number1>number2)
            {
                document.getElementById("refresh_button").innerHTML="Player 1 win";              
                              
            }
        else if(number2>number1)
            {
                document.getElementById("refresh_button").innerHTML="Player 2 win";              

            }
        else
            {
                document.getElementById("refresh_button").innerHTML="Game Draw";              
                
            }
    } 

function dice_image_changer(dice_no,key)
    {
        var name_image="img"+dice_no;
        var image_location="images/dice"+key+".png"
        document.querySelector("."+name_image).setAttribute("src",image_location)   

        
            
    }