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
  "'So' is the most suitable word,because the word<br>paired with an adjective,that giving impression<br>of 'extremes' condition.",
  "'Such' is the most suitable word,because the<br>sentence explain about an opinion or extreme feeling<br>about something.",
  "'So few': explain about extreme condition<br>'that' explain about an event. (Most suitable)",
  "'So': paired with adverb,explaining about<br>a certain extreme condition.",
  "'Such': The most suitable word among others<br>explaining about an extreme condition.",
  "'Such': paired with adverb,used to point at certain thing<br>'So': paired with adjective,explaining about an<br>extreme condition",
  "'So': paired with adjective,used<br>to explain extreme condition<br>'Such': paired with adverb,pointing<br>at some certain things.",
  "There's two So | Such in that sentence:<br>'So gorgeous' & 'Such a ...'.",
  "'Such': paired with adverb,explain about<br>certain condition.",
  "'So much': explain about extreme amount of money<br>that brian took<br>'that': explain about brian condition after<br>he stole the money.",
  "'So': paired with adjective,explain about extreme condition<br>'that': pointing to the effect of someone action."
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