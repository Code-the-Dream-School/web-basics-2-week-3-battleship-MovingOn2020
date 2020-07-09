const battleship = () => {
//I am assigning the player #1 a name of the World War II AXIS battlehsip from Japan.
  const Yamato = {
    name: prompt ('Player #1 Your Name is Yamato Battleship'),
    shipCount: 4,
    gameBoard: [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ]
  }
  //I am assigning the player #2 a name of the World War II AXIS battleship from Germany.
  const Bismarck = {
    name: prompt ('Player #2 Your Name is Bismarck Battleship'),
    shipCount: 4,
    gameBoard: [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0]
    ]
  }
  /*This commences step 2 below.
  Now I am assigning a function that will allow the program to 
  randomly assign Yamato's fleet*/
let YamatoFleet = 0;
do {
  let x = Math.floor(Math.random()*3)+0;
  let y = Math.floor(Math.random()*3)+0;
    if ( Yamato.gameBoard[x][y] === 0){
      Yamato.gameBoard[x][y] = 1;
      YamatoFleet++;
    } else {
      continue;
    }
} while (YamatoFleet<4);

/*Now I am assigning a function that will allow the program to 
randomly assign Bismarck's fleet.*/
let BismarckFleet = 0;
do {
  let x = Math.floor(Math.random()*3)+0;
  let y = Math.floor(Math.random()*3)+0;
    if ( Bismarck.gameBoard[x][y] === 0){
      Bismarck.gameBoard[x][y] = 1;
      BismarckFleet++;
    } else {
      continue;
    }
} while (BismarckFleet<4);

/*The codes below focuses on gameplay (step 3 of instructions). 
It creates a while true with if else that dicates if a hit, then... 
or if a miss, then...*/
let playerInTurn = Yamato;
let message;
  while (true) {
    if (playerInTurn === Yamato){
      let hitX = +prompt(`Yamato, enter X coordinates between number 0-3 ${playerInTurn.name}`)
      let hitY = +prompt(`Yamato, enter X coordinates between number 0-3 ${playerInTurn.name}`)
        if ( Bismarck.gameboard[hitX] [hitY] === 1 ){
          Bismarck.gameBoard[hitX] [hitY] = 0;
          Bismarck.shipCount -= 1;
          alert (`HIT!`);
          if (Bismarck.shipCount = 0) {
            alert(`Yamato! Congratulations, you sunk Bismarck's Fleet!`)
            break;
          }
        } else {
          alert(`You missed!`)
        }

        playerInTurn = Bismarck;
          if (playerInTurn === Bismarck) {
            let hitX = +prompt(`Yamato, enter X coordinates between number 0-3 ${playerInTurn.name}`)
            let hitY = +prompt(`Yamato, enter X coordinates between number 0-3 ${playerInTurn.name}`)
              if ( Yamato.gameboard[hitX] [hitY] === 1 ){
                Yamato.gameBoard[hitX] [hitY] = 0;
                Yamato.shipCount -= 1;
                alert (`HIT!`);
                if (Yamato.shipCount = 0) {
                  alert(`Bismarck! Congratulations, you sunk Yamato's Fleet!`)
                  break;
                }
              } else {
                alert(`You missed!`)
              }
              playerInTurn = Yamato;
            }
console.log(playerInTurn.name)

  function showBoard(player) {
    console.log(player.name);
    for(let i = 0; i < player.gameBoard.length; i++) {
      console.log(player.gameBoard[i].toString());
    }
  }
}
const gameResult = battleship()
const htmlTarget = document.getElementById('result')
htmlTarget.innerHTML = gameResult
