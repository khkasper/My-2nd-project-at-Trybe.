// Definiçãp cores
const colors = document.querySelectorAll('.color');
colors[0].style.backgroundColor = 'black';
// colors[1].style.backgroundColor = 'red';
// colors[2].style.backgroundColor = 'green';
// colors[3].style.backgroundColor = 'blue';
colors[1].style.backgroundColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 254})`;
colors[2].style.backgroundColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 254})`;
colors[3].style.backgroundColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 254})`;

// Criação quadro de pixels
// https://stackoverflow.com/questions/14643617/create-table-using-javascript/14644462
// Optei por criar alguns elementos diretamente no HTML para facilitar visualização
const boardPixels = document.querySelector('#pixel-board');
function pixelsBoard(boardSize) {
  // var boardSize = 5;
  for (let line = 0; line < boardSize; line += 1) {
    const lines = document.createElement('tr');
    boardPixels.appendChild(lines);
    for (let column = 0; column < boardSize; column += 1) {
      const columns = document.createElement('td');
      lines.appendChild(columns);
      columns.className = 'pixel';
      columns.style.backgroundColor = 'white';
    }
  }
}
pixelsBoard(5);

// Definir cor preta como a selecionada ao carregar a página
// https://stackoverflow.com/questions/588040/window-onload-vs-document-onload

window.addEventListener('load', () => {
  colors[0].classList.add('selected');
});

// Remover a classe 'selected' de uma cor e adiciona a uma nova clicada
// https://www.w3schools.com/howto/howto_js_remove_class.asp
// https://www.w3schools.com/howto/howto_js_add_class.asp
function colorSelector() {
  const selectedColor = document.querySelector('#color-palette');
  selectedColor.addEventListener('click', (event) => {
    document.querySelector('.selected').classList.remove('selected');
    event.target.classList.add('selected');
  });
}
colorSelector();

// Alterar a cor do pixel selecionado
// Definir const para manipular os valores do quadro de pixels
// Adicionar um eventlistener a esta const, para executar a função de mudar cor ao clicar
// Definir const dentro da função para armazenar a nova cor de fundo selecionada, utilizando a classe selecionada (única)
// Definir que o pixel "alvo" receberá a cor de fundo definida, quando selecionada
function colorFill() {
  const pixelsFill = document.querySelector('#pixel-board');
  pixelsFill.addEventListener('click', (event) => {
    const newColor = document.querySelector('.selected').style.backgroundColor;
    event.target.style.backgroundColor = newColor;
  });
}
colorFill();

// Botão para limpar o quadro de pixels
function clearBoard() {
  const pixelBoard = document.querySelectorAll('.pixel');
  for (let index = 0; index < pixelBoard.length; index += 1) {
    pixelBoard[index].style.backgroundColor = 'white';
  }
}
const clearBoardButton = document.querySelector('#clear-board');
clearBoardButton.addEventListener('click', clearBoard);

// https://stackoverflow.com/questions/20115337/limiting-number-value-in-an-input-tag-with-javascript/20115428
// Const para o botão
// Const para o input
// Condicionais
// Resetar quadro anterior
// Adicionar novo valor a função existente que cria o quadro
function generateBoard() {
  const vqvButton = document.querySelector('#generate-board');
  const inputV = document.querySelector('#board-size');
  vqvButton.addEventListener('click', () => {
    if (inputV.value == '') {
      alert('Board inválido!');
    }
    if (inputV.value < 5) {
      inputV.value = 5;
    }
    if (inputV.value > 50) {
      inputV.value = 50;
    }
    boardPixels.innerHTML = '';
    pixelsBoard(inputV.value);
  });
}
generateBoard();
