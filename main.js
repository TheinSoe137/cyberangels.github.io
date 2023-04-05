const mintday = new Date();
mintday.setDate(mintday.getDate() + 1);
mintday.setHours(0, 0, 0, 0);

const month = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let monthName = month[mintday.getMonth()];

document.getElementById("date").innerText = mintday.getDate() + "/" + monthName;

function countdown() {
  const today = new Date();
  var timeRemaining = mintday.getTime() - today.getTime();
  var seconds = Math.floor((timeRemaining / 1000) % 60);
  var minutes = Math.floor((timeRemaining / 1000 / 60) % 60);
  var hours = Math.floor((timeRemaining / 1000 / 3600) % 24);

  document.querySelector(".time").innerText =
    hours + "h " + minutes + "m " + seconds + "s ";
  console.log(timeRemaining);
}

setInterval(countdown, 1000);
