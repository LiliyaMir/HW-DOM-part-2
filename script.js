let figure = document.querySelector('.figure');
let setFigure = document.querySelector('select');

let setedFigure = setFigure.selectedOptions;
setFigure.addEventListener('click', function () {
  let setFigLab = setedFigure[0].label;
  if (setFigLab === 'прямоугольник') {
    figure.setAttribute('class', 'rectangle')
  }
  else if (setFigLab === 'круг') {
    figure.setAttribute('class', 'circle')
  }
  else {
    figure.setAttribute('class', 'squere')
  }
})

let color = document.querySelector('input');
color.addEventListener('change', function () {
  let colVal = color.value;
  figure.style.background = colVal;
})

