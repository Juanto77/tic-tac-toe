const playerOne = 'X';
const playerTwo = 'O';
let currentMarker;
let previousMarker;

//GUI that will passthru to the gameBoard logic
const displayController = (id, value) => {
  const cell = document.getElementsByClassName('cell');
  const marker = (id, value) => (cell[id].innerHTML = value);
  gameBoard.play(id, value);
  return { marker };
};

//Click Event for each cell to pass thru the div number to the displayController & play function
const clickEvent = (() => {
  const cell = document.querySelectorAll('.cell');
  cell.forEach((i) =>
    i.addEventListener('click', () => {
      id = i.id;
      displayController(id, currentMarker).marker(id, currentMarker);
    })
  );
})();

const gameBoard = (() => {
  const array = [[0], [1], [2], [3], [4], [5], [6], [7], [8]];
  const play = (id, value) => (array[id] = [...array[id], value]);
  const check = () => {
    for (const [key, value] of array) {
      console.log(key, value);
    }
  };
  return { play, check };
})();
