import { circularBars, threeDots, movingSquareLine, nestedCircles, squareGrid } from "./loaders";
import './style.css';

function loadHtml(html) {
  const contentDiv = document.getElementById("app");
  if (contentDiv)
    contentDiv.innerHTML += html;
}

const loaders = [
  circularBars, 
  threeDots, 
  movingSquareLine, 
  nestedCircles,
  squareGrid
];

for (const path of loaders) {
  loadHtml(path);
}
