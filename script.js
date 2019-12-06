$(document).ready(function () { 
    function showMessage(msg, duration){
        $('.status').text(msg).css({
			'color': 'red',
            'font-size': '250%',
            'text-align': 'center'
		}).show();
    }
     var credits = 100, bet, win;
     var pos1,pos2,pos3;
     var wildCard = 5;
    $(".button").on('click', function(e){
        e.preventDefault();
        $('.status').hide();
        bet = $("#bet").val();
        console.log(bet);
        if (bet > credits)
            showMessage('Insufficient funds',5000);
        else{
            if(bet <= 0)
                showMessage('Choose bet larger than 0',5000);
            else{
                credits -= bet;
                win=0;
                pos1=Math.floor(Math.random() * 3);
                pos2=Math.floor(Math.random() * 3);
                pos3=Math.floor(Math.random() * 3);

                if(pos1 === pos2 && pos2 === pos3 && credits < 50)
                    pos3=Math.floor(Math.random() * 3); //decreasing chance of winning
                $('#1').attr('src', pos1 +".png");
                $('#2').attr('src', pos2 +".png");
                $('#3').attr('src', pos3 +".png");
                $("#credits").text("Credits: " + credits);
                if(pos1 === pos2 && pos2 === pos3){
                    win=bet*10*(pos1+1);
                    $("#win").text("Win: " + win);
                    showMessage("You win : "+win, 5000);
                }
                else{
                    if (Math.floor(Math.random() * 50 > 48)) {
                        console.log(pos1,pos2,pos3);
                        if(pos1 === pos3){
                            $('#2').attr('src',"3.png");
                            win = bet*10*(pos1+1)*wildCard;
                            $("#win").text("Win: " + win);
                            showMessage("Big win : "+win, 5000);
                        }
                       else if(pos1 === pos2){
                            $('#3').attr('src',"3.png");
                            win = bet*10*(pos1+1)*wildCard;
                            $("#win").text("Win: " + win);
                            showMessage("Big win : "+win, 5000);
                        } 
                      else if(pos2 === pos3){
                            $('#1').attr('src',"3.png");
                            win = bet*10*(pos2+1)*wildCard;
                            $("#win").text("Win: " + win);
                            showMessage("Big win : "+win, 5000);
                        } 
                      else  if(pos1 !== pos2 && pos1 !== pos3 && pos2 !== pos3){
                            $('#1').attr('src', "3.png");
                            $('#2').attr('src', "3.png");
                            $('#3').attr('src', "3.png");
                            win = bet*wildCard*wildCard*wildCard;
                            $("#win").text("Win: " + win);
                            showMessage("Huge win : "+win, 5000);
                        
                    }
                }
            }
            credits+=win;
            $("#credits").text("Credits: " + credits);
            }
        }
    });
});