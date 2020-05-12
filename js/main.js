$(document).ready(function () {

  // object to push player's name, character, wins
  const game = {
    players: [
      {
        name: "Player 1",
        character: "X",
        wins: 0
      },
      {
        name: "Player 2",
        character: "O",
        wins: 0
      }
    ]
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

  // function to show message
  const showMessage = function () {
    $('#message').css('visibility', 'visible');
    $('#container').css('visibility', 'hidden');
  };

  // function to check who won or if draw
  function isWinner(player0 = 'X', player1 = 'O') {

    let playerOne = game.players[0] && game.players[0].character || player0;
    let playerTwo = game.players[1] && game.players[1].character || player1;

    if (playerOne.length == 0 ? playerOne = player0 : playerOne) {

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

        $('#message h1').text(playerOne);
        $('#message h3').text(game.players[0].name);
        $('.grid-item').text(''); //reset the game board
        turns = 0;
        showMessage();

      }
    }
    if (playerTwo.length == 0 ? playerTwo = player1 : playerTwo) {

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

        $('#message h1').text(playerTwo);
        $('#message h3').text(game.players[1].name);

        $('.grid-item').text(''); //reset the game board
        turns = 0;
        showMessage();

      }
    }
    if (turns === 9) {
      $('#message h1').text(playerOne + ' ' + playerTwo);
      $('#message h3').text("");
      $('#message p').text('Tie!');
      $('.grid-item').text(''); //reset the game board
      turns = 0;
      showMessage();
    }
  }

  // function to show X or O on clicked grid
  $('.grid-item').click(function (event) {
      if ($(this).text().length == 0) {
        if (playerTurn === 'player1') {
          $(this).append(game.players[0] && game.players[0].character || 'X');
          playerTurn = 'player2';
        } else {
          $(this).append(game.players[1] && game.players[1].character || 'O');
          playerTurn = 'player1';
        }
        turns++;
      }

    isWinner();
  });

  // function to add player and character once add player button is clicked
  $('#addPlayerButton').click(function (event) {
    if (game.players[0].name === "Player 1") {
      game.players[0].name = $('#addPlayerName').val()
      $('#player1 h3').text(game.players[0].name);
    } else if (game.players[1].name === "Player 2") {
      game.players[1].name = $('#addPlayerName').val()
      $('#player2 h3').text(game.players[1].name);
    }

    if (game.players[0].character === "X") {
      game.players[0].character = $('#addPlayerCharacter').val()
      $('#player1 h1').text((game.players[0].character));
    } else if (game.players[1].character === "O") {
      game.players[1].character = $('#addPlayerCharacter').val()
      $('#player2 h1').text((game.players[1].character));
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
    // game.players = [];
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

  //f unction to close message once clicked
  $('#message').click(function () {
    $('#message').css('visibility', 'hidden');
    $('#container').css('visibility', 'visible');
  })
});