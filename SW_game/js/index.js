var qNum = 1;
var score = 0;

function rightAnswer() {
  alert("CORRECT!");

  qNum = qNum + 1;
  nextQuestion();
  score += 1;
  document.getElementById("score").innerHTML = score;
}

function wrongAnswer() {
  alert("OOPS Wrong Answer");
   qNum = qNum + 1;
  nextQuestion();
  score -= 1;
    document.getElementById("score").innerHTML = score;
}

function nextQuestion() {
  switch (qNum) {
    case 2:
      document.getElementById("q1").style.display = "none";
      document.getElementById("q2").style.display = "inherit";
      document.getElementById("answersOne").style.display = "none";
      document.getElementById("answersTwo").style.display = "inherit";
      break;
      
    case 3:
      document.getElementById("q2").style.display = "none";
      document.getElementById("q3").style.display = "inherit";
      document.getElementById("answersTwo").style.display = "none";
      document.getElementById("answersThree").style.display = "inherit";
      break;
      
    case 4:
      document.getElementById("q3").style.display = "none";
      document.getElementById("q4").style.display = "inherit";
      document.getElementById("answersThree").style.display = "none";
      document.getElementById("answersFour").style.display = "inherit";
      break;
    case 5:
      document.getElementById("q4").style.display = "none";
      document.getElementById("q5").style.display = "inherit";
      document.getElementById("answersFour").style.display = "none";
      document.getElementById("answersFive").style.display = "inherit";
      break;
    case 6:
      break;
  }
}