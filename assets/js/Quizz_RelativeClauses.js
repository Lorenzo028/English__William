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
  "The subject of the sentence explain about a certain<br>time (spring),therefore the usage of 'when'<br> is the most suitable", // 1
  "The subject referring to an 'unliving object',and<br>explainig about certain condition,therefore the<br>usage of 'that' is the most suitable", // 2
  "The subject referring to a person that followed<br>by the ownership of an object that owned by that<br>person,therefore the usage of 'which' is the most suitable", // 3
  "The subject referring to a person,followed by an<br>action that done by that person,therefore the usage of<br>'who' is the most suitable.", // 4
  "The subject referring to a certain place,followed<br>by a person,the 'belong' word explain where's that person<br>used to live,therefore the usage of 'who' is<br>the most suitable", //5
  "The existence of 'who' relative pronoun are necessary<br>because if that pronoun was removed,<br>the sentence won't make any sense.", //6 
  "The subject of the sentence is referring to place<br>followed by an event that already happen<br>in that place,therefore the usage of 'where' is the<br>most suitable.", //7
  "The subject reffering to an object,followed by the object<br>about item composition,therefore<br>the usage of 'which' is the most suitable.", //8
  "In this sentence, “whose” refers to the unspecified owner<br>of the phone, a<br>person and possessor.", // 9
  "In this sentence, 'who' refers to Zeus, a god, not a thing.<br>Zeus is also the subject of the sentence.", // 10
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