/*
NEWTOPIC 
1. Write a funtion to display date and time on the website acc. to locale, using the INTL function
2. display a numeric figure in differnet international formatts using Intl api
3. Make a funtion to display a countdown timer
*/

const output1 = document.querySelector(".Output1");
const output2 = document.querySelector(".Output2");
const output3 = document.querySelector(".Output3");

//CASE 1
const date = new Date();
output1.textContent = new Intl.DateTimeFormat("en-GB", {
  day: "numeric",
  month: "long",
  year: "numeric",
  weekday: "long",
}).format(date);

const options = {
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
};

setInterval(() => {
  output2.textContent = new Intl.DateTimeFormat(
    navigator.language,
    options
  ).format(new Date());
}, 1000);
// we can either declare the options to show inside the intl function or outside as an sepate variable

//CASE 2

const amount = 42343533;

const locale = {
  local: "en-GB",
  currencyType: "USD",
};

const formatAmount = new Intl.NumberFormat(locale.local, {
  style: "currency",
  currency: locale.currencyType,
}).format(amount);

console.log(formatAmount);
//CASE 3        TIMER

const setTimer = (timer) => {
  const countdown = setInterval(() => {
    const min = String(Math.floor(timer / 60)).padStart(2, 0);
    const sec = String(Math.floor(timer % 60)).padStart(2, 0);

    if (timer > 0) {
      timer--;
      output3.textContent = `${min}:${sec}`;
    } else {
      output3.textContent = `${min}:${sec} TIMEOUT`;
      clearInterval(countdown);
    }
  }, 1000);
};
setTimer(10); //setting the timmer in seconds
