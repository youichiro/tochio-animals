'use strict';

const map = document.getElementById('map');

map.onload = () => {
  const mapWidth = map.naturalWidth;
  const mapHeight = map.naturalHeight;
  const ratio = window.innerHeight / mapHeight;
  map.height = mapHeight * ratio;
  map.width = mapWidth * ratio;
}

let whaleInfoShow = false;
const whale = document.getElementById('whale');
const whaleInfo = document.getElementById('whale-info');
whale.onclick = () => {
  whaleInfoShow = !whaleInfoShow;
  if (whaleInfoShow) {
    whaleInfo.style.display = 'block';
  } else {
    whaleInfo.style.display = 'none';
  }
}
