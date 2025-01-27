"use strict";

const imageEl = document.querySelector(".image");
const titleEl = document.querySelector(".title");
const promptEl = document.querySelector(".prompt");
const startEl = document.querySelector(".start");
const retryEl = document.querySelector(".retry");
const humanBtnEl = document.querySelector(".human-btn");
const aiBtnEl = document.querySelector(".ai-btn");
const crtAnsEl = document.querySelector(".crt-ans");
const wrgAnsEl = document.querySelector(".wrg-ans");
const nxtBtnEl = document.querySelector(".nxt-btn");
const finBtnEl = document.querySelector(".fin-btn");
const finGrdEl = document.querySelector(".fin-grid");
const grdImg1El = document.getElementById("grid-img-1");
const grdImg2El = document.getElementById("grid-img-2");
const grdImg3El = document.getElementById("grid-img-3");
const grdImg4El = document.getElementById("grid-img-4");
const grdImg5El = document.getElementById("grid-img-5");
const grdImg6El = document.getElementById("grid-img-6");
const grdImg7El = document.getElementById("grid-img-7");
const grdImg8El = document.getElementById("grid-img-8");
const grdImg9El = document.getElementById("grid-img-9");
const grdImg10El = document.getElementById("grid-img-10");
const grdH1El = document.getElementById("grid-h-1");
const grdH2El = document.getElementById("grid-h-2");
const grdH3El = document.getElementById("grid-h-3");
const grdH4El = document.getElementById("grid-h-4");
const grdH5El = document.getElementById("grid-h-5");
const grdH6El = document.getElementById("grid-h-6");
const grdH7El = document.getElementById("grid-h-7");
const grdH8El = document.getElementById("grid-h-8");
const grdH9El = document.getElementById("grid-h-9");
const grdH10El = document.getElementById("grid-h-10");

let imgs = [
    [1, "human"],
    [2, "human"],
    [3, "ai"],
    [4, "human"],
    [5, "ai"],
    [6, "ai"],
    [7, "human"],
    [8, "human"],
    [9, "ai"],
    [10, "ai"],
  ],
  btnPressed = false,
  score = 0,
  imgCurrent = 0;

function init() {
  titleEl.textContent = `Human vs AI Artwork Game`;
  imageEl.classList.add("hidden");
  titleEl.classList.remove("hidden");
  promptEl.classList.add("hidden");
  startEl.classList.remove("hidden");
  retryEl.classList.add("hidden");
  humanBtnEl.classList.add("hidden");
  aiBtnEl.classList.add("hidden");
  crtAnsEl.classList.add("hidden");
  wrgAnsEl.classList.add("hidden");
  nxtBtnEl.classList.add("hidden");
  finBtnEl.classList.add("hidden");
  finGrdEl.classList.add("hidden");
  imgCurrent = 0;
  const shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };
  imgs = shuffle(imgs);
}

function crtAnswerDsp() {
  crtAnsEl.classList.remove("hidden");
  wrgAnsEl.classList.add("hidden");
  nxtBtnEl.classList.remove("hidden");
  score++;
  imgs[imgCurrent].push(true);
}

function wrgAnswerDsp() {
  crtAnsEl.classList.add("hidden");
  wrgAnsEl.classList.remove("hidden");
  nxtBtnEl.classList.remove("hidden");
  imgs[imgCurrent].push(false);
}

function imgChange() {
  imageEl.src = `/images/img${imgs[imgCurrent][0]}.webp`;
  imageEl.classList.remove("hidden");
  titleEl.classList.add("hidden");
  promptEl.classList.remove("hidden");
  startEl.classList.add("hidden");
  retryEl.classList.add("hidden");
  humanBtnEl.classList.remove("hidden");
  aiBtnEl.classList.remove("hidden");
  crtAnsEl.classList.add("hidden");
  wrgAnsEl.classList.add("hidden");
  nxtBtnEl.classList.add("hidden");
  finBtnEl.classList.add("hidden");
  finGrdEl.classList.add("hidden");
}

init();

function finImgChange() {
  grdImg1El.src = `/images/img${imgs[0][0]}.webp`;
  grdImg2El.src = `/images/img${imgs[1][0]}.webp`;
  grdImg3El.src = `/images/img${imgs[2][0]}.webp`;
  grdImg4El.src = `/images/img${imgs[3][0]}.webp`;
  grdImg5El.src = `/images/img${imgs[4][0]}.webp`;
  grdImg6El.src = `/images/img${imgs[5][0]}.webp`;
  grdImg7El.src = `/images/img${imgs[6][0]}.webp`;
  grdImg8El.src = `/images/img${imgs[7][0]}.webp`;
  grdImg9El.src = `/images/img${imgs[8][0]}.webp`;
  grdImg10El.src = `/images/img${imgs[9][0]}.webp`;
}

finImgChange();

startEl.addEventListener("click", imgChange);

humanBtnEl.addEventListener("click", function () {
  if (!btnPressed) {
    btnPressed = true;
    if (imgs[imgCurrent][1] === "human") {
      crtAnswerDsp();
    } else {
      wrgAnswerDsp();
    }
  }
});

aiBtnEl.addEventListener("click", function () {
  if (!btnPressed) {
    btnPressed = true;
    if (imgs[imgCurrent][1] === "ai") {
      crtAnswerDsp();
    } else {
      wrgAnswerDsp();
    }
  }
});

nxtBtnEl.addEventListener("click", function () {
  if (imgCurrent == 0) {
    if (imgs[imgCurrent][2]) {
      grdH1El.textContent = "✅";
    } else {
      grdH1El.textContent = "❌";
    }
  }

  if (imgCurrent == 1) {
    if (imgs[imgCurrent][2]) {
      grdH2El.textContent = "✅";
    } else {
      grdH2El.textContent = "❌";
    }
  }
  if (imgCurrent == 2) {
    if (imgs[imgCurrent][2]) {
      grdH3El.textContent = "✅";
    } else {
      grdH3El.textContent = "❌";
    }
  }
  if (imgCurrent == 3) {
    if (imgs[imgCurrent][2]) {
      grdH4El.textContent = "✅";
    } else {
      grdH4El.textContent = "❌";
    }
  }
  if (imgCurrent == 4) {
    if (imgs[imgCurrent][2]) {
      grdH5El.textContent = "✅";
    } else {
      grdH5El.textContent = "❌";
    }
  }
  if (imgCurrent == 5) {
    if (imgs[imgCurrent][2]) {
      grdH6El.textContent = "✅";
    } else {
      grdH6El.textContent = "❌";
    }
  }
  if (imgCurrent == 6) {
    if (imgs[imgCurrent][2]) {
      grdH7El.textContent = "✅";
    } else {
      grdH7El.textContent = "❌";
    }
  }
  if (imgCurrent == 7) {
    if (imgs[imgCurrent][2]) {
      grdH8El.textContent = "✅";
    } else {
      grdH8El.textContent = "❌";
    }
  }
  if (imgCurrent == 8) {
    if (imgs[imgCurrent][2]) {
      grdH9El.textContent = "✅";
    } else {
      grdH9El.textContent = "❌";
    }
  }
  if (imgCurrent == 9) {
    if (imgs[imgCurrent][2]) {
      grdH10El.textContent = "✅";
    } else {
      grdH10El.textContent = "❌";
    }
  }

  if (imgCurrent < 9) {
    imgCurrent++;
    imgChange();
    btnPressed = false;
    console.log(imgCurrent);
  } else if (imgCurrent === 9) {
    imgCurrent++;
    nxtBtnEl.classList.add("hidden");
    finBtnEl.classList.remove("hidden");
    btnPressed = false;
    console.log(imgCurrent);
  }
});

retryEl.addEventListener("click", init);

finBtnEl.addEventListener("click", function () {
  titleEl.textContent = `You got ${score} out of 10 correct`;
  imageEl.classList.add("hidden");
  titleEl.classList.remove("hidden");
  promptEl.classList.add("hidden");
  startEl.classList.add("hidden");
  retryEl.classList.remove("hidden");
  humanBtnEl.classList.add("hidden");
  aiBtnEl.classList.add("hidden");
  crtAnsEl.classList.add("hidden");
  wrgAnsEl.classList.add("hidden");
  nxtBtnEl.classList.add("hidden");
  finBtnEl.classList.add("hidden");
  finGrdEl.classList.remove("hidden");
});
