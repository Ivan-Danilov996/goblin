import goblin from '../image/goblin.png';

const cells = Array.from(document.querySelectorAll('.cell'));
let oldIndex;

function getIndex() {
  return Math.floor(Math.random() * cells.length);
}

function addGoblin(index) {
  if (oldIndex || oldIndex === 0) {
    cells[oldIndex].innerHTML = '';
  }
  cells[index].innerHTML = `<img src=${goblin}>`;
  oldIndex = index;
}

setInterval(() => {
  let index = getIndex();
  if (oldIndex === index) {
    do {
      index = getIndex();
    } while (oldIndex === index);
  }
  console.log(index);
  addGoblin(index);
}, 1000);
