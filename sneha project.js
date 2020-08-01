console.log("hi")

var x;
var startstop = 0;

function startStop() { /* Toggle StartStop */

  startstop = startstop + 1;

  if (startstop === 1) {
    start();
    document.getElementById("start").innerHTML = "Stop";
  } else if (startstop === 2) {
    document.getElementById("start").innerHTML = "Start";
    startstop = 0;
    stop();
  }

}


function start() {
  x = setInterval(timer, 10);
} /* Start */

function stop() {
  clearInterval(x);
} /* Stop */

var millisec = 0;
var sec = 0; /* holds incrementing value */
var min = 0;
var hour = 0;

/* Contains and outputs returned value of  function checkTime */

var milliSecOut = 0;
var secOut = 0;
var minOut = 0;
var hourOut = 0;

/* Output variable End */


function timer() {
  /* Main Timer */


  milliSecOut = checkTime(millisec);
  secOut = checkTime(sec);
  minOut = checkTime(min);
  hourOut = checkTime(hour);

  millisec = ++millisec;

  if (millisec === 100) {
    millisec = 0;
    sec = ++sec;
  }

  if (sec == 60) {
    min = ++min;
    sec = 0;
  }

  if (min == 60) {
    min = 0;
    hour = ++hour;

  }


  document.getElementById("millisec").innerHTML = milliSecOut;
  document.getElementById("sec").innerHTML = secOut;
  document.getElementById("min").innerHTML = minOut;
  document.getElementById("hour").innerHTML = hourOut;

}


/* Adds 0 when value is <10 */


function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

function reset() {


  /*Reset*/

  millisec = 0;
  sec = 0;
  min = 0
  hour = 0;

  document.getElementById("millisec").innerHTML = "00";
  document.getElementById("sec").innerHTML = "00";
  document.getElementById("min").innerHTML = "00";
  document.getElementById("hour").innerHTML = "00";

}