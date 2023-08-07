// get Elements
let prgress = document.querySelector(".container .prgress");
let prgressSpan = document.querySelector(".pro-s");
let buttonsContainer = document.querySelector(".buttons");
let previousBtn = buttonsContainer.querySelector(".previous");
let nextBtn = buttonsContainer.querySelector(".next");
let active = document.querySelector(".active");
let withPr = 0;
let prgressWidth = 96;
console.log(prgressWidth);
//
buttonsContainer.addEventListener("click", (e) => {
  if (e.target === previousBtn) {
    deF();
    switchToPrevious();
  } else if (e.target === nextBtn) {
    incrF();
    switchToNext();
  }
});
function incrF() {
  if (withPr <= 96) {
    withPr += 33;
    prgressSpan.style.width = withPr + "%";
  }
}
function deF() {
  if (withPr !== 0) {
    withPr -= 33;
    prgressSpan.style.width = withPr + "%";
  }
}
// functio
let spans = document.querySelectorAll(".container .prgress span");
let nextIndex = 0;
let activeSpan = document.querySelector("span.active");
let nextItem = document.querySelector("span:not(.active)");
console.log(nextItem);

function switchToNext() {
  nextIndex = (nextIndex + 1) % spans.length;
  console.log(`from switchToNext  ${nextIndex}`);
  spans.forEach((span, index) => {
    if (index === nextIndex) {
      span.classList.add("active");
    }
  });
}
function switchToPrevious() {
  nextIndex = (nextIndex - 1 + spans.length) % spans.length;
  console.log(`from switchToPrevious  ${nextIndex}`);
  spans.forEach((span, index) => {
    if (index === nextIndex) {
      span.classList.remove("active");
    }
  });
}
