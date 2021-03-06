const board = document.querySelector('#board');
const colors = ['#CD5C5C', '#FFA07A', '#B22222', '#FFC0CB', '#FF69B4', '#C71585', '#FFA07A', '#FF6347']
const SQUARES_NUMBER = 600;

for (let i=0; i<SQUARES_NUMBER; i++) {
  const square = document.createElement('div');
  square.classList.add('square')
  square.addEventListener('mouseover', setColor)
  square.addEventListener('mouseleave', removeColor)
  board.append(square);

}
function setColor(event) {
  const element = event.target;
  const color=getRandomColor()
  element.style.backgroundColor = color;
  element.style.boxShadow = `0 0 4px ${color}, 0 0 20px ${color}`
}

function removeColor(event) {
  const element = event.target;
  element.style.backgroundColor = '#1d1d1d';
  element.style.boxShadow = `0 0 2px #000`
}
function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)]
}
