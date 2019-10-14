$(document).ready(function () {


  let playerTurn = 'player1';

  // function to check who won or if draw
  function checkWinner() {
    $('.grid-item').text()
  }

  // function to show X or O on clicked grid
  $('.grid-item').click(function (event) {
    if ($(this).text().length == 0) {
      if (playerTurn === 'player1') {
        $(this).append('X');
        playerTurn = 'player2';
      } else {
        $(this).append('O');
        playerTurn = 'player1';
      }
    }
    checkWinner();
  });












});