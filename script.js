//create a function

function digitalClock() {
  var date = new Date(); //Date object

  var hours = date.getHours() + "";
  var minutes = date.getMinutes() + "";
  var seconds = date.getSeconds() + "";
  var weekDay = date.getDay() + "";

  if (hours.length < 2) {
    hours = "0" + hours;
  }
  if (minutes.length < 2) {
    minutes = "0" + minutes;
  }
  if (seconds.length < 2) {
    seconds = "0" + seconds;
  }

  //an array for day else var will give the index only

  var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  var clock = days[weekDay] + " " + hours + ":" + minutes + ":" + seconds;

  document.getElementById('clock').innerHTML = clock;

  console.log(clock); //print the time
}

digitalClock(); // call the function

setInterval(digitalClock, 1000); // set the time to change dynamically
