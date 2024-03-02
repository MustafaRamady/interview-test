let btnOne = document.querySelector(".btnOne");
let btnTwo = document.querySelector(".btnTwo");
let btnThree = document.querySelector(".btnThree");
let result = document.querySelector(".result");
let timer = document.querySelector(".timer");

let showTwo = () => {
  btnOne.style.display = "none";
  btnTwo.style.display = "block";
};
let showThree = () => {
  btnTwo.style.display = "none";
  btnThree.style.display = "block";
};
let showResult = () => {
  btnTwo.style.display = "none";
  result.style.display = "block";
};

function countDown() {
  let startingMinutes = 2;
  let time = startingMinutes * 60;
  let timeInterval = setInterval(() => {
    let minutes = Math.floor(time / 60);
    let seconds = time % 60;
    seconds < 10 ? `0` + seconds : seconds;
    timer.textContent = `${minutes} : ${seconds}`;
    if (time === 0) {
      clearInterval(timeInterval);
      timer.textContent = "00:00";
    }
    time--;
  }, 1000);
}
