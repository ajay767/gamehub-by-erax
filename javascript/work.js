if( confirm("want to play game") )
{



alert("This game is developed to shortout regular Family matters, Hope you will love it! BY AJU YADUVANSHI")

var player1=prompt("Input first player name");
var player2=prompt("Input second player name");
document.querySelector(".player_1 h4").innerHTML=player1;
document.querySelector(".player_2 h4").innerHTML=player2;
function through()
{
    let dicePicker1 = Math.floor((Math.random()*6)+1);
console.log(dicePicker1);
document.querySelectorAll(".dice img")[0].setAttribute("src","media/dice"+dicePicker1+".svg")

let dicePicker2 = Math.floor((Math.random()*6)+1);
console.log(dicePicker2);

var winner;
if(dicePicker1>dicePicker2)
{
    winner=player1;
}
else if(dicePicker2>dicePicker1)
{
    winner= player2;
}
else{
    winner="Both";
}


document.querySelectorAll(".dice img")[1].setAttribute("src","media/dice"+dicePicker2+".svg")
document.querySelector(".result h3").innerHTML=  winner + " is the winner!"


}


document.querySelector(".reload button").addEventListener("click",through);

}
else
{








for (let i = 0; i < 5; i++) {


    document.querySelectorAll(".tune")[i].addEventListener("click", function () {
        var innerbutton = this.innerHTML;
        switch (innerbutton) {
            case "W":
                var audio = new Audio("sounds/tom-1.mp3");
                audio.play();
                break;
            case "S":
                var audio = new Audio("sounds/tom-2.mp3");
                audio.play();
                break;
            case "X":
                var audio = new Audio("sounds/tom-3.mp3");
                audio.play();
                break;
            case "E":
                var audio = new Audio("sounds/tom-4.mp3");
                audio.play();
                break;
            case "Z":
                var audio = new Audio("sounds/kick-bass.mp3");
                audio.play();
                break;

            default:
                alert("press right key");

        }

    });
}
};
