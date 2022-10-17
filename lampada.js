const turnOn = document.getElementById('turnOn');
const turnOf = document.getElementById('turnOf');
const lamp = document.getElementById('lamp');

function lampOn() {
    lamp.src = './img/ligada.jpg';
}
function lampOff() {
    lamp.src = './img/desligada.jpg'
}
function isLampBroken() {
    return lamp.src.indexOf('quebrada') > -1
  }
  function lampBroken() {
    lamp.src = './img/quebrada.jpg';
  }

turnOn.addEventListener('click', lampOn);
turnOf.addEventListener('click', lampOff)
lamp.addEventListener('mouseover', lampOn);
lamp.addEventListener('mouseleave', lampOff);
lamp.addEventListener('dblclick', lampBroken);