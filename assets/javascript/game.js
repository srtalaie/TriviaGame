$(document).ready(function(){
    let right = 0;
    let wrong = 0;
    let count = 60;
    let timer;
    
    let userAnswer = []

    $("input[type=radio]").click(function(){
        userAnswer.push($(this).val());
        console.log(userAnswer);
    });
    
    $('#submit').on('click', function(){
        checkAnswers(userAnswer);
        checkScore();
        clearInterval(timer);
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
        if (count >= 1){
            timer = setInterval(timerFunction, 1000);
        } else {
            clearInterval(timer);
            $('#timer').text('Timer: Times Up!')
            checkAnswers(userAnswer);
            checkScore()
        }
    }

    function timerFunction(){
        count--;
        $('#timer').text('Time: ' + count)
    }

    $('#quizz-timer-button').click(quizzTimer);
});