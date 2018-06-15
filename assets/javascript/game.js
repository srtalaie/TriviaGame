$(document).ready(function(){
    let right = 0;
    let wrong = 0;
    let count = 300;
    let timer;
    
    let userAnswer = []

    $("input[type=radio]").click(function(){
        userAnswer.push($(this).val());
    });
    
    $('#submit').on('click', function(){
        if (count === 300){
            alert("You didn't click the begin the quiz button did ya");
        } else {
            checkAnswers(userAnswer);
            checkScore();
            clearInterval(timer);
        }
    });

    function checkAnswers(arr){
        for (let i = 0; i < arr.length; i++){
            if (arr[i] === 'Right-Answer'){
                right++;
                console.log(right);
            } else {
                wrong++;
                console.log(wrong);
            }
        }
    }

    function checkScore(){
        $('.score').html(`
            <p>You got ${right} questions right!</p>
            <p>You got ${wrong} questions wrong.</p>
            <p>Your score is ${100 * (right/(right + wrong))}%</p> 
        `)
    }

    function quizzTimer(){
        if (count > 0){
            timer = setInterval(timerFunction, 1000);
        } 
    }

    function timerFunction(){
        count--;
        $('#timer').text('Time: ' + count)
        gameEnd();
    }

    function gameEnd(){
        if (count < 0){
            $('#timer').html('<p>Timer: Times Up!<p>');
            checkAnswers(userAnswer);
            checkScore();
            clearInterval(timer);
        }
    }

    $('#quizz-timer-button').on('click',quizzTimer);
});