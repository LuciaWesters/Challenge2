
var sunImage = document.getElementById('sunImage');
var moonImage = document.getElementById('moonImage');

var today = new Date().getHours();

if (today >= 7 && today <= 22) {
  moonImage.classList.add('hidden');
} else {
  sunImage.classList.add('hidden');

}
