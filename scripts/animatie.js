
var sunImage = document.getElementById('sunImage');
var moonImage = document.getElementById('moonImage');

var achtergrond = document.getElementById('achtergrond');

var today = new Date().getHours();

if (today >= 7 && today <= 22) {
  moonImage.classList.add('hidden');
  achtergrond.classList.add('licht');
} else {
  sunImage.classList.add('hidden');
}
