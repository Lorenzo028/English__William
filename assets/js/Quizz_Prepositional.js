// DOM Variables
let loadingContainer = document.querySelector("div.loadingContainer");
let finalResultContainer = document.querySelector("div.finalResultContainer");
var backgroundMusic = new Audio('Quizz_Assets/BGMusic.mp3');
let finalResultValue = document.querySelector("div.finalResultContainer p.finalResult_Value");
var wrongAudio = new Audio('Quizz_Assets/wrongAnswerSFX.wav');
var backgroundAudio = new Audio('Quizz_Assets/wrongAnswerSFX.wav');
var rightAudio = new Audio('Quizz_Assets/rightAnswerSFX.wav');
let musicIcon = document.querySelector("i.icon");
let closeAnswerMenuP = document.querySelector("div.answerRevealContainer p.closeMenu");
let questionNumberP = document.querySelector("div.questionNumContainer p.questionNum");
let answerMenuBG = document.querySelector("div.answerRevealBG");
let answerMenuContainer = document.querySelector("div.answerRevealContainer");
let questionList = document.querySelectorAll("div.questionsContainer");
let answerRevealP = document.querySelector("div.answerRevealContainer p.answerReveal");
let trueAnswer = 0;
let questionNum = 1;
let isClicking = false;
let playMusic = false;

let answerList = [
  "around the field is decided as the right answer<br>because the words explain the whole meaning of<br>the sentence And cant be divided<br>into few pieces,such as,around,etc.",
  "Use 'instead of' when stating<br>your preferences for one over other.",
  "Use 'by means of' when explaining what<br>you have used to accomplish something.",
  "From that sentence we can find two<br>prepositional phrase that being used<br><br>1.'at a nuclear factory': adverb of place<br>2.'near the place': adverb of place.",
  "Use the phrase 'apart from' to<br>state who or what does not follow the norm.",
  "Use 'on behalf of' when speaking for other people in<br>formal situations such as presentation.",
  "Use the phrase 'as for'<br>to state your opinion in an informal manner.",
  "Use 'in common with' when stating that you<br>share something with someone else.",
  "Use 'in common with' when stating that you<br>share something with someone else.",
  "To be in favor of something means that you<br>approve or agree with an action."
];

setTimeout(function() {
  loadingContainer.style.animationName = "loadingFadeOut";
}, 1500);

setTimeout(function() {
  loadingContainer.style.display = "none";
}, 2500);

function changeQuestion() {
  if (questionNum !== 10) {
    questionNum++;
    isClicking = false;
    questionNumberP.innerHTML = `${questionNum} | 10`;
    visibleQuestion();
  }
}

function finishedTest() {
  if (questionNum == 10) {
    finalResultContainer.style.display = "block";
    answerMenuBG.style.animationName = "loadingBGFadeIn";
    finalResultValue.innerHTML = `${(trueAnswer+1)*10} | 100`;
  }
}

function rightAnswer(buttonClass, textClass) {
  if (isClicking == false) {
    rightAudio.play();
    trueAnswer += 1;
    setTimeout(changeQuestion(), 5000);
    finishedTest();
    document.querySelector(buttonClass).style.backgroundColor = "#04AA6D";
    document.querySelector(textClass).style.color = "#fff";
    document.querySelector(textClass).fontWeight = "600";
    isClicking = true;
    finalResultContainer.style.display = "block";
    answerMenuBG.style.animationName = "loadingBGFadeIn";
    finalResultValue.innerHTML = `${(trueAnswer+1)*10} | 100`;
  }
}

function wrongAnswer(buttonClass, textClass) {
  if (isClicking == false) {
    wrongAudio.play();
    document.querySelector(buttonClass).style.backgroundColor = "#DC3545";
    document.querySelector(textClass).style.color = "#fff";
    document.querySelector(textClass).fontWeight = "600";
    isClicking = true;
    answerRevealP.innerHTML = answerList[questionNum - 1];
    answerMenuBG.style.animationName = "loadingBGFadeIn";
    answerMenuContainer.style.animationName = "loadingContainerFadeIn";
  }
}

function closeAnswerMenu() {
  finishedTest();
  answerMenuBG.style.animationName = "loadingBGFadeOut";
  answerMenuContainer.style.animationName = "loadingContainerFadeOut";
  setTimeout(changeQuestion(), 1000);
}

closeAnswerMenuP.addEventListener("click", function() {
  closeAnswerMenu();
})

function visibleQuestion() {
  for (let i = 0; i <= questionList.length - 1; i++) {
    if (i == questionNum - 1) {
      questionList[i].style.display = "block";
      questionList[i].style.animationName = "loadingFadeIn";
      setTimeout(function() {
        questionList[i].style.display = "block";
      }, 1000);
    } else {
      questionList[i].style.display = "block";
      questionList[i].style.animationName = "loadingFadeOut";
      setTimeout(function() {
        questionList[i].style.display = "none";
      }, 1000);
    }
  }
}

function changeMusic() {
  playMusic = !playMusic;
  if (playMusic) {
    backgroundMusic.play();
  } else {
    backgroundMusic.stop();
  }
}
visibleQuestion();