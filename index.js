const number=Math.floor(Math.random() * 100) + 1
//l//et k=prompt("enter the number")
let chances=0

while(number>0)
{
    k=prompt("enter the number")
    if(number>k)
    {
        alert("number is greater than the guessed number")
        chances++;
        

    }
    else if(number<k)
    {
        alert("number is less than the guessed number")
        chances++;
        
    }
    else{
        alert("you wonn!!!!");
        break;
    }
   
        

}
alert("you are lucky at "+chances+ "time")
alert(`your have earned  ${100-chances}  points`)

