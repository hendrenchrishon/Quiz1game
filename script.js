let score = 0;
let correct;
let score2 = 0;
let questionsN = 4;


let btn0 = document.getElementById("btn0");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");


let createQuestion = function(questionText, choice, choice2, choice3, choice4, correctChoice){

let MoneyMitch = function(){

    btn0.onclick = function(){createCreed(this)};
    btn1.onclick = function(){createCreed(this)};
    btn2.onclick = function(){createCreed(this)};
    btn3.onclick = function(){createCreed(this)};

    if(score === 0)
        createQuestion("Who is my favorite Marvel character?", "Thor", "Captain America", "Iron Man", "HULK")

    }else if(score === 1){
        createQuestion("Who is my favorite DC character?","Batman","Flash","Superman","Wonder Woman")
    }else if (score === 2){
        createQuestion("Who's not in Marvel?","Hulk","Aquaman","Iron Fist","Luke Cage")
    }else{
        let question = document.getElementById("question");
        question.innerText = "You got "+ score2 + "correct out of " + questionsN;
        document.getElementById("buttons").innerHTML = " ";
    }
        document.getElementById("progress").innerText = "Question" + (score + 1) + "of" + questionsN;
};

let createCreed = function(buttons){
    if (buttons === correct) {
        score2++;
    }
        score++;
        MoneyMitch();
};
