
let dicePicker1 = Math.floor((Math.random()*6)+1);
console.log(dicePicker1);
document.querySelectorAll(".dice img")[0].setAttribute("src","media/dice"+dicePicker1+".svg")

let dicePicker2 = Math.floor((Math.random()*6)+1);
console.log(dicePicker2);

var winner;
if(dicePicker1>dicePicker2)
{
    winner="Player 1";
}
else if(dicePicker2>dicePicker1)
{
    winner= "Player 2";
}
else{
    winner="Both ";
}


document.querySelectorAll(".dice img")[1].setAttribute("src","media/dice"+dicePicker2+".svg")
document.querySelector(".result h3").innerHTML=  winner + " is the winner!"


