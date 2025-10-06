import { getLevels } from "./fetchLevels.js";

export async function buildLevels() {
  let levels = await getLevels();
 

  let levelsContainer = document.querySelector(".levels-container");

  for (let i = 0; i < levels.length; i++) {
    let cell = levelCreate(levels[i]);

    levelsContainer.append(cell);
  }

  console.log(levelsContainer)
}

function levelCreate(level) {
  let cell = document.createElement("div");
  cell.className = "full-view-level-cell";
  let img = document.createElement('img')
  img.className = 'level-icon'
  let lev = document.createElement('span')
  lev.className = 'level-number'
  lev.textContent = `${level.level}`


  if (level.active === 'true') {
    cell.classList.add("valid");
    img.src = '../assets/icons/lock-open-alt.png'
    lev.style.color = 'rgb(128, 244, 142)'
    cell.append(img)
  } else if(level.active == 'false') {
    cell.classList.add("invalid");
    img.src = '../assets/icons/lock.png'
    lev.style.color = 'rgb(244, 128, 128)'
    cell.append(img)
  }

  cell.append(lev);
  cell.style.left = `${level.x}px`
  cell.style.top = `${level.y}px`
  console.log(level.x, level.y)

  return cell;
}
