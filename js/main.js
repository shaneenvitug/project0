$(document).ready(function () {


  let playerTurn = 'player1';
  let turns = 0;

  // Grid position Variables
  const grid1 = $('#top-left');
  const grid2 = $('#top-mid');
  const grid3 = $('#top-right');
  const grid4 = $('#mid-left');
  const grid5 = $('#mid-mid');
  const grid6 = $('#mid-right');
  const grid7 = $('#bottom-left');
  const grid8 = $('#bottom-mid');
  const grid9 = $('#bottom-right');


  // function to check who won or if draw

  function isWinner() {
    if ((grid1.text() === 'X') && (grid2.text() === 'X') && (grid3.text() === 'X') ||
      (grid4.text() === 'X') && (grid5.text() === 'X') && (grid6.text() === 'X') ||
      (grid7.text() === 'X') && (grid8.text() === 'X') && (grid9.text() === 'X') ||
      (grid1.text() === 'X') && (grid4.text() === 'X') && (grid7.text() === 'X') ||
      (grid2.text() === 'X') && (grid5.text() === 'X') && (grid8.text() === 'X') ||
      (grid3.text() === 'X') && (grid6.text() === 'X') && (grid9.text() === 'X') ||
      (grid1.text() === 'X') && (grid5.text() === 'X') && (grid9.text() === 'X') ||
      (grid3.text() === 'X') && (grid5.text() === 'X') && (grid7.text() === 'X')) {
      alert('Winner: X');
      $('.grid-item').text('');
      turns = 0;
    } else if ((grid1.text() === 'O') && (grid2.text() === 'O') && (grid3.text() === 'O') ||
      (grid4.text() === 'O') && (grid5.text() === 'O') && (grid6.text() === 'O') ||
      (grid7.text() === 'O') && (grid8.text() === 'O') && (grid9.text() === 'O') ||
      (grid1.text() === 'O') && (grid4.text() === 'O') && (grid7.text() === 'O') ||
      (grid2.text() === 'O') && (grid5.text() === 'O') && (grid8.text() === 'O') ||
      (grid3.text() === 'O') && (grid6.text() === 'O') && (grid9.text() === 'O') ||
      (grid1.text() === 'O') && (grid5.text() === 'O') && (grid9.text() === 'O') ||
      (grid3.text() === 'O') && (grid5.text() === 'O') && (grid7.text() === 'O')) {
      alert('Winner: O');
      $('.grid-item').text('');
      turns = 0;
    } else if (turns === 9) {
      alert('Tie');
      $('.grid-item').text('');
      turns = 0;
    }
  }

  // function to reset the game



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
      turns++;
    }
    isWinner();
  });












});