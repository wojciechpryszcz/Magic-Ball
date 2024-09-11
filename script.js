const ball = document.querySelector("img");
const input = document.querySelector("input");
const answer = document.querySelector(".answer");
const error = document.querySelector(".error");

console.log(ball);
const answerArr = [
  "Tak",
  "Nie",
  "Może",
  "Cięzko powiedzieć",
  "Nie chcesz znać odpowiedzi na to pytanie... :/",
];

const shakeBall = (params) => {
  ball.classList.add("shake-animation");
  setTimeout(checkInput, 1000);
};

const checkInput = (params) => {
  if (input.value !== "" && input.value.slice(-1) === "?") {
    generateAnswer();
    error.textContent = "";
    ball.classList.remove("shake-animation");
  } else if (input.value !== "" && input.value.slice(-1) !== "?") {
    error.textContent = 'Pytanie musi być zakończone znakiem "?". ';
    answer.textContent = "";
    ball.classList.remove("shake-animation");
  } else {
    error.textContent = "Musisz zadać jakieś pytanie";
    answer.textContent = "";
  }
};

const generateAnswer = (params) => {
  const number = Math.floor(Math.random() * 5);
  answer.innerHTML = `<span>Odpowiedź:</span> ${answerArr[number]}`;
};

ball.addEventListener("click", shakeBall);

input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    shakeBall();
  }
});
