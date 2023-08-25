function info() {
  let name = prompt("What is your name?");
  let message = "Hi, " + name + "!" + " Welcome!";

  // Adding the user's name to the HTML page
  document.getElementById("output-text").innerHTML = message;
}
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function showTime() {
  let date = new Date().toLocaleString("en-EN");
  document.getElementById("myClock").innerHTML = date;
  let day = new Date().getDay().toLocaleString("en-EN");
  document.getElementById("thisday").innerHTML = days[day];
}
setInterval(showTime, 1000);
