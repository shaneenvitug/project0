$(document).ready(function () {

  //object to push player's name, character, wins
  const game = {
    players: []
  }

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
  function isWinner(player0 = 'X', player1 = 'O') {
    console.log("grid.text()", grid1.text());
    console.log("game.players[0].character", game.players[0].character);

    let playerOne = game.players[0].character;
    let playerTwo = game.players[1].character;
    console.log('playerOne', playerOne);
    console.log('playerOnelength', playerOne.length);
    console.log("condition", playerOne.length < 1);


    if (playerOne.length == 0) {
      playerOne = player0;


      console.log("===>>>", playerOne);

      if ((grid1.text() === playerOne) && (grid2.text() === playerOne) && (grid3.text() === playerOne) ||
        (grid4.text() === playerOne) && (grid5.text() === playerOne) && (grid6.text() === playerOne) ||
        (grid7.text() === playerOne) && (grid8.text() === playerOne) && (grid9.text() === playerOne) ||
        (grid1.text() === playerOne) && (grid4.text() === playerOne) && (grid7.text() === playerOne) ||
        (grid2.text() === playerOne) && (grid5.text() === playerOne) && (grid8.text() === playerOne) ||
        (grid3.text() === playerOne) && (grid6.text() === playerOne) && (grid9.text() === playerOne) ||
        (grid1.text() === playerOne) && (grid5.text() === playerOne) && (grid9.text() === playerOne) ||
        (grid3.text() === playerOne) && (grid5.text() === playerOne) && (grid7.text() === playerOne)) {

        game.players[0].wins++
        $('#player1 p').text('Wins: ' + game.players[0].wins);

        $('.grid-item').text(''); //reset the game board
        turns = 0;

      }
    }
    if (playerTwo.length < 1) {
      playerTwo = player1;
      if ((grid1.text() === playerTwo) && (grid2.text() === playerTwo) && (grid3.text() === playerTwo) ||
        (grid4.text() === playerTwo) && (grid5.text() === playerTwo) && (grid6.text() === playerTwo) ||
        (grid7.text() === playerTwo) && (grid8.text() === playerTwo) && (grid9.text() === playerTwo) ||
        (grid1.text() === playerTwo) && (grid4.text() === playerTwo) && (grid7.text() === playerTwo) ||
        (grid2.text() === playerTwo) && (grid5.text() === playerTwo) && (grid8.text() === playerTwo) ||
        (grid3.text() === playerTwo) && (grid6.text() === playerTwo) && (grid9.text() === playerTwo) ||
        (grid1.text() === playerTwo) && (grid5.text() === playerTwo) && (grid9.text() === playerTwo) ||
        (grid3.text() === playerTwo) && (grid5.text() === playerTwo) && (grid7.text() === playerTwo)) {

        game.players[1].wins++
        $('#player2 p').text('Wins: ' + game.players[1].wins);

        $('.grid-item').text(''); //reset the game board
        turns = 0;

      }
    } else if (turns === 9) {
      $('.grid-item').text(''); //reset the game board
      turns = 0;
    }
  }

  // function to show X or O on clicked grid
  $('.grid-item').click(function (event) {

    if (game.players.length === 2) {
      if ($(this).text().length == 0) {
        if (playerTurn === 'player1') {
          $(this).append(game.players[0].character || 'X');
          playerTurn = 'player2';
        } else {
          $(this).append(game.players[1].character || 'O');
          playerTurn = 'player1';
        }
        turns++;
      }

    }
    isWinner();
  });



  // function to add player and character once add player button is clicked
  $('#addPlayerButton').click(function (event) {
    game.players.push({
      name: $('#addPlayerName').val(),
      character: $('#addPlayerCharacter').val(),
      wins: 0
    });

    $('#player1 h3').text(game.players[0].name);
    $('#player1 h1').text((game.players[0].character) || 'X');

    if (game.players[1]) {
      $('#player2 h3').text(game.players[1].name);
      $('#player2 h1').text((game.players[1].character) || 'O');
    }

  });

  //function to reset everything or new game
  $('#newGameButton').click(function () {
    $('.grid-item').text('');
    $('#player1 h3').text('Player 1');
    $('#player1 h1').text('X');
    $('#player1 p').text('Wins: 0');
    $('#player2 h3').text('Player 2');
    $('#player2 h1').text('O');
    $('#player2 p').text('Wins: 0');
    $('#addPlayerName').val('');
    $('#addPlayerCharacter').val('');
    game.players = [];
    playerTurn = 'player1';
    turns = 0;
  })

  //function to reset wins
  $('#resetWinsButton').click(function () {
    $('.grid-item').text('');
    game.players[0].wins = 0;
    game.players[1].wins = 0;
    $('#player1 p').text('Wins: 0');
    $('#player2 p').text('Wins: 0');
  })














});