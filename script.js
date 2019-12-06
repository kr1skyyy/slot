$(document).ready(function () { 
    function showMessage(msg, duration){
        $('.status').text(msg).css({
			'color': 'red',
            'font-size': '250%',
            'text-align': 'center'
		}).show();
    }
    function wild(chance){
        return Math.floor(Math.random() * chance+1);
    }
     var credits = 100, bet, win;
     var pos1,pos2,pos3;
     var wildCard = 10;
     var bonusGame;
    $(".button").on('click', function(e){
        e.preventDefault();
        $('.status').hide();
        bet = $("#bet").val();
        if (bet > credits)
            showMessage('Insufficient funds',5000);
        else{
            if(bet <= 0)
                showMessage('Choose bet larger than 0',5000);
            else{
                credits -= bet;
                win=0;
                $('#win').text("Win: 0");
                pos1=Math.floor(Math.random() * 3);
                pos2=Math.floor(Math.random() * 3);
                pos3=Math.floor(Math.random() * 3);

                if(pos1 === pos2 && pos2 === pos3 && credits < 200)
                    pos3=Math.floor(Math.random() * 3); //decreasing chance of winning
                $('#1').attr('src', pos1 +".png");
                $('#2').attr('src', pos2 +".png");
                $('#3').attr('src', pos3 +".png");
                $("#credits").text("Credits: " + credits.toFixed(2));
                if(pos1 === pos2 && pos2 === pos3){
                    win=bet*3*(pos1+1);
                    $("#win").text("Win: " + win.toFixed(2));
                    showMessage("You win : "+win.toFixed(2), 5000);
                }
                else{
                    if(credits<200){
                        bonusGame = wild(50);
                    }
                    else{
                        bonusGame = wild(150);
                    }
                    console.log(bonusGame);
                    if (bonusGame === 1){
                        if(pos1 === pos3){
                            $('#2').attr('src',"3.png");
                            win = bet*3*(pos1+1)*wildCard;
                            $("#win").text("Win: " + win.toFixed(2));
                            showMessage("Big win : "+win.toFixed(2), 5000);
                        }
                    else if(pos1 === pos2){
                            $('#3').attr('src',"3.png");
                            win = bet*3*(pos1+1)*wildCard;
                            $("#win").text("Win: " + win.toFixed(2));
                            showMessage("Big win : "+win.toFixed(2), 5000);
                        } 
                    else if(pos2 === pos3){
                            $('#1').attr('src',"3.png");
                            win = bet*3*(pos2+1)*wildCard;
                            $("#win").text("Win: " + win.toFixed(2));
                            showMessage("Big win : "+win.toFixed(2), 5000);
                        } 
                    else  if(pos1 !== pos2 && pos1 !== pos3 && pos2 !== pos3){
                            $('#1').attr('src', "3.png");
                            $('#2').attr('src', "3.png");
                            $('#3').attr('src', "3.png");
                            win = bet*wildCard*wildCard*wildCard;
                            $("#win").text("Win: " + win.toFixed(2));
                            showMessage("Huge win : "+win.toFixed(2), 5000);
                    }
                }
            }
            credits+=win;
            $("#credits").text("Credits: " + credits.toFixed(2));
            }
        }
    });
});