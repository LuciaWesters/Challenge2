
var sunImage = document.getElementById('sunImage');
var moonImage = document.getElementById('moonImage');

var achtergrond = document.getElementById('achtergrond');

var today = new Date().getHours();

if (today >= 7 && today <= 10) {
  moonImage.classList.add('hidden');
  achtergrond.classList.add('ochtend');
} else if (today >= 11 && today <= 18) {
  moonImage.classList.add('hidden');
  achtergrond.classList.add('licht');
} else if (today >= 19 && today <= 21) {
  moonImage.classList.add('hidden');
  achtergrond.classList.add('avond');
} else{
  sunImage.classList.add('hidden');
}
