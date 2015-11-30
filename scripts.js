console.log('loaded...')



//gameState
  //board = 7across by 6high
  //default = empty
  //problem to solve: force checker to drop all the way to first open space from column bottom

//display
  //gameboard
  //scoreboard:
      //win counter
      //messages:
          //whose move?
          //"WINNER!"
  //click and slide lever under gameboard to start new game



  //Avi:
  //create clean board
  //start game   click start button
  //player1 plays - red always go first
  //problem to solve: force checker to drop all the way to first open space from column bottom
       //identify if space occupied or not occupied
       //
  //game displays chip in grid
  //check win conditions - 4 in row
  //cycle to next player1
  //display WINNER


function ConnectFourGame(){

alert ('Connect Four - Play with a friend!  Red goes first. Click on a square to place your piece.  Remember, you must play from the bottom up; meaning, you can only place your piece in the bottom-most available square of any column. First person to get four in a row (row, column, or diagonal) wins.')

  this.gameState = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g',
  'h', 'i', 'j', 'k', 'l', 'm', 'n',
  'o', 'p', 'q', 'r', 's', 't', 'u',
  'v', 'w', 'x', 'y', 'z', 'aa', 'bb',
  'cc', 'dd', 'ee', 'ff', 'gg', 'hh', 'ii',
  'jj', 'kk', 'll', 'mm', 'nn', 'oo', 'pp'
  ];

  this.currentPlayer = 1;


  this.playerOneSpaces = [];
  this.playerTwoSpaces = [];



};

// var gameboard = [
//   [0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0]
// ]




// horizontal - loop through each row
// diagonal up
// cell[5][0]
// cell[4][1]
// cell[3][2]
// cell[2][3]






ConnectFourGame.prototype.makeMove = function(cellNumber) {

  var cellId = '.cell-' + cellNumber;
  var cell = $(cellId).eq(0);

  cell.addClass('player-' + this.currentPlayer);
  var spaceName = cell.attr('id');


  // if player one
  if (this.currentPlayer === 1) {
  this.playerOneSpaces.push(spaceName)
  console.log(this.playerOneSpaces);
  this.gameState[cellNumber] = this.currentPlayer;
  }


  // if player two
  if (this.currentPlayer === 2) {
  this.playerTwoSpaces.push(spaceName)
  console.log(this.playerTwoSpaces);
  this.gameState[cellNumber] = this.currentPlayer;
  }

  this.currentPlayer = (this.currentPlayer%2) + 1;

};



ConnectFourGame.prototype.$el = $('<table>')



ConnectFourGame.prototype.render = function() {

  this.$el.empty();
  var row;
  var cell;
  var cellNumber = 0;

  for (var rowIdx = 0; rowIdx < 6; rowIdx++) {
    row = $('<tr>');

    for (var colIdx = 0; colIdx < 7; colIdx++) {
      cell = $('<td>');
      cell.addClass('cell');
      cell.addClass('row-' + rowIdx)
      cell.addClass('col-' + colIdx)
      cell.addClass('cell-' + cellNumber)
      cell.attr('id', this.gameState[cellNumber])
      cell.data('row', rowIdx);
      cell.data('col', colIdx);

      if (rowIdx === 5){
        cell.addClass('clickable');
      }

      cell.data('cell-number', cellNumber);
      row.append(cell);
      cellNumber++;
    }
  this.$el.append(row);
  }

};


ConnectFourGame.prototype.addEventListeners = function() {

  var scope = this;
  this.$el.on('click', 'td', function() {

    if ( $(this).hasClass('clickable') ){

        $(this).removeClass('clickable');
        var cellNumber = $(this).data('cell-number');
        var column = $(this).data('col');
        var row = $(this).data('row');

        var rowUp = row - 1;

        var finderString = ".row-" + rowUp + ".col-" + column;

        $(finderString).eq(0).addClass('clickable');

        scope.makeMove(cellNumber);
        // scope.render();
        var winner = scope.checkGameStatus();
        if (winner) {
          alert('great job ' + winner)
        }
        return this;
    } else {
      console.log('not clickable');
      alert ('Hey cheater, you can\'t go there!!!  Put your piece in the bottom-most available square of any column.')

    }


  });

}


ConnectFourGame.prototype.checkGameStatus = function() {

  var winningCombinations = [

    //horizontal win combinations
    ['a','b','c','d'],
    ['b','c','d','e'],
    ['c','d','e','f'],
    ['d','e','f','g'],
    ['h','i','j','k'],
    ['i','j','k','l'],
    ['j','k','l','m'],
    ['k','l','m','n'],
    ['o','p','q','r'],
    ['p','q','r','s'],
    ['q','r','s','t'],
    ['r','s','t','u'],
    ['v','w','x','y'],
    ['w','x','y','z'],
    ['x','y','z','aa'],
    ['y','z','aa','bb'],
    ['cc','dd','ee','ff'],
    ['dd','ee','ff','gg'],
    ['ee','ff','gg','hh'],
    ['ff','gg','hh','ii'],
    ['jj','kk','ll','mm'],
    ['kk','ll','mm','nn'],
    ['ll','mm','nn','oo'],
    ['mm','nn','oo','pp'],

    //veritcal win combinations
    ['a','h','o','v'],
    ['h','o','v','cc'],
    ['o','v','cc','jj'],
    ['b','i','p','w'],
    ['i','p','w','dd'],
    ['p','w','dd','kk'],
    ['c','j','q','x'],
    ['j','q','x','ee'],
    ['q','x','ee','ll'],
    ['d','k','r','y'],
    ['k','r','y','ff'],
    ['r','y','ff','mm'],
    ['e','l','s','z'],
    ['l','s','z','gg'],
    ['s','z','gg','nn'],
    ['f','m','t','aa'],
    ['m','t','aa','hh'],
    ['t','aa','hh','oo'],
    ['g','n','u','bb'],
    ['n','u','bb','ii'],
    ['u','bb','ii','pp'],

    //diagonal right win combinations
    ['o','w','ee','mm'],
    ['h','p','x','ff'],
    ['p','x','ff','nn'],
    ['a','i','q','y'],
    ['i','q','y','gg'],
    ['q','y','gg','oo'],
    ['b','j','r','z'],
    ['j','r','z','hh'],
    ['r','z','hh','pp'],
    ['c','k','s','aa'],
    ['k','s','aa','ii'],
    ['d','l','t','bb'],

    //diagonal left win combinations
    ['d','j','p','v'],
    ['e','k','q','w'],
    ['k','q','w','cc'],
    ['f','l','r','x'],
    ['l','r','x','dd'],
    ['r','x','dd','jj'],
    ['g','m','s','y'],
    ['m','s','y','ee'],
    ['s','y','ee','kk'],
    ['n','t','z','ff'],
    ['t','z','ff','ll'],
    ['u','aa','gg','mm']

  ];



  // Check Winner
  for (var i = 0; i < winningCombinations.length; i++) {



      var test1 = this.playerOneSpaces.indexOf(winningCombinations[i][0]);
      var test2 = this.playerOneSpaces.indexOf(winningCombinations[i][1]);
      var test3 = this.playerOneSpaces.indexOf(winningCombinations[i][2]);
      var test4 = this.playerOneSpaces.indexOf(winningCombinations[i][3]);

      var test5 = this.playerTwoSpaces.indexOf(winningCombinations[i][0]);
      var test6 = this.playerTwoSpaces.indexOf(winningCombinations[i][1]);
      var test7 = this.playerTwoSpaces.indexOf(winningCombinations[i][2]);
      var test8 = this.playerTwoSpaces.indexOf(winningCombinations[i][3]);

      if ((test1 !== -1 && test2 !== -1 && test3 !== -1 && test4 !== -1)){
        console.log('winner - player1');
        alert ('Player 1 Wins!!!!!  Refresh the page to play again.')


      }


      else if ((test5 !== -1 && test6 !== -1 && test7 !== -1 && test8 !== -1)){
        console.log('winner - player2');
        alert ('Player 2 Wins!!!!!  Refresh the page to play again.')


      }



}




var playerSpaces = (this.playerOneSpaces.length + this.playerTwoSpaces.length);
    if (playerSpaces == 42) {
      console.log('draw');
      alert ('It\'s a draw.  Refresh the page to play again.');


}





};






var game = new ConnectFourGame();
game.render();
$('#game-board').append(game.$el);
game.addEventListeners();
