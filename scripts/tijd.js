
function clockTime() {
  var hours = new Date().getHours();
  var minutes = new Date().getMinutes();
  var seconds = new Date().getSeconds();

  hours = checkTime(hours);
  minutes = checkTime(minutes);
  seconds = checkTime(seconds);

  var time = hours + ':' + minutes + ':' + seconds;

  document.getElementById('clock').innerHTML = time;

  var x = setTimeout(clockTime, 500);
}

function checkTime(i) {
  if(i < 10){
    i = '0' + i
  };
  return i;
}
