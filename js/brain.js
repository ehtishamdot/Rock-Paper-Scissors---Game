const score = document.querySelector(".scoreboard__score-box__main-score");
const result = document.querySelector(".result");

const hands = document.querySelector(".hands");
const picked = document.querySelector(".picked");

const playagain = document.querySelector(".playagain-btn");

const mypick = document.querySelector(".your-img");
const housepick = document.querySelector(".house-img");

const random = () => Math.floor(Math.random() * 3) + 1;

const resultText = (condition) => {
  result.textContent = condition;
};

let houseimg,curScore=0;

const totalScore = (val) => {
    score.textContent = val;
};


hands.addEventListener("click", (e) => {
    
    //default text
     resultText("");
     totalScore(0);
     
  if (!e.target.classList.contains("hands")) {

    const compchoice = random();
    const mychoice = Number(e.target.dataset.set);

    houseimg = document.querySelector(`.hand-${compchoice}`);

    hands.classList.add("display");
    picked.classList.remove("display");
    mypick.src = e.target.getAttribute("src");
    housepick.src = houseimg.getAttribute("src");

    //conditions
    if (mychoice === compchoice) {
      resultText("Draw");
    } else if (compchoice === 1) {
      if (mychoice === 2) {
        resultText("YOU WON");
           totalScore(curScore+1)
      } else {
        resultText("YOU LOOSE");
      }
    } else if (mychoice !== 2 && compchoice === 2) {
      if (mychoice === 1) {
        resultText("YOU LOOSE");
      } else {
        resultText("YOU WON");
        totalScore(curScore + 1);
      }
    } else if (mychoice !== 3 && compchoice === 3) {
      if (mychoice === 1) {
        resultText("YOU WON");
        totalScore(curScore + 1);
      } else {
        resultText("YOU LOOSE");
      }
    }
  }

});

playagain.addEventListener("click", (e) => {
  hands.classList.remove("display");
  picked.classList.add("display");
});


