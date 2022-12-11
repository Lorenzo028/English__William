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
  "'Will be' become the answer,because the sentence<br>explaining about something that still not happen<br>,therefore that sentence can be classified<br>as first type of conditional sentence.",
  "'Hadn\'t rained' become the answer,because the<br>sentence explaining about someone regret about an<br>event that already happen,therefore that sentence<br>can be classified as third conditional sentences.",
  "That sentence classified as first conditional,because<br>the sentence explaining about something that still<br>not happened. (proofed by word 'will' in the sentence)",
  "'Would you have been' become the answer,because<br>the sentence is a type of rethorical sentence,who's<br>asking about someone's regret for something that<br>they had done.Therefore the sentence can<br>be classified as third type conditional sentence.",
  "That sentence classified as first type of<br>conditional sentence because the sentence talking<br>about something that will happen due to other action.<br>Therefore the usage of Verb-1 is<br>the most appropriate",
  "The sentence asking someone about their action in<br>the future if an event would happen,that's mean<br>there's probability for an event would happen in the<br>future.Can be classified as first type of conditional<br>'will you' is the most suitable word for the sentence.",
  "Simplified,that sentence explain about something that<br>would happen in the past if someone choose the<br>other action in the past,therefore the sentence can be<br>classified as third type of conditional sentence.",
  "There's probability in the future if that person gonna<br>get a million dollar.Therefore that sentence can<br>be classified as second type of conditonal sentence.",
  "That sentence explain about some event that would 100%<br>occur due the other event,Therefore that sentence can<br>classified as zero type of conditional sentence.",
  "That sentence explain about some probability of event<br>that would be happen in the future,<br>therefore the sentence can be classified as first type<br>of conditional sentence.",
  "That sentence explain about some probability of event<br>that would be happen in the future,<br>therefore the sentence can be classified as first type<br>of conditional sentence."
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