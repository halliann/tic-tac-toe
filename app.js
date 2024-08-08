/* get array of name input */
const nameInput = document.getElementsByClassName('name-input');
const submitBtn = document.getElementById('submit-btn');
const selectedMsg = document.getElementById('selected-player-message');

let randomName;

function names() {
    let namesArr = []; // initialize empty array

    submitBtn.addEventListener('click', (event) => {
        event.preventDefault();

        // get name input values
        const nameA = document.getElementById('nameA').value;
        const nameB = document.getElementById('nameB').value;

        // push to array
        namesArr.push(nameA, nameB);

        // function to pick random name for player to go first
        function pickRandomName() {
            let randomIndex = Math.floor(Math.random() * namesArr.length);
            randomName = namesArr[randomIndex];

            if(randomName === namesArr[0]) {
                return selectedMsg.innerHTML = `${randomName} goes first! You'll be X's.`
            } else if(randomName === namesArr[1]) {
                return selectedMsg.innerHTML = `${randomName} goes first! You'll be X's.`
            } else {
                return 'Error: Please enter the player names.'
            }
        }
        console.log(namesArr);
        pickRandomName();
    })
};

console.log(randomName);
names();

/* alternate text color */


/* play the game */
const resultsMsg = document.getElementById('results-msg');
const tiles = document.getElementsByClassName('tile');

let players = ['X', 'O'];
let currentPlayer = players[0]; 
let winningCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

for(let i = 0; i < tiles.length; i++) {
    tiles[i].addEventListener('click', () => {
        if(tiles[i].textContent !== '') {
            return;
        }

        tiles[i].textContent = currentPlayer;
        if(checkWin(currentPlayer)) {
            resultsMsg.textContent = `Game over! ${currentPlayer} wins!`;
            return;
        }

        if(checkTie()) {
            resultsMsg.textContent = 'Game is tied!';
            return;
        }

        currentPlayer = (currentPlayer === players[0]) ? players[1] : players[0];
        if(currentPlayer === players[0]) {
            resultsMsg.textContent = "X's turn!";
        } else {
            resultsMsg.textContent = "O's turn!";
        }
    })
};

function checkWin() {
    for(let i = 0; i < winningCombos.length; i++) {
        const [a, b, c] = winningCombos[i];
        if (tiles[a].textContent === currentPlayer && tiles[b].textContent === currentPlayer && tiles[c].textContent === currentPlayer) {
            return true;
        }
    }
    return false;
};

function checkTie() {
    for(let i = 0; i < tiles.length; i++) {
        if(tiles[i].textContent === '') {
            return false;
        }
    }
    return true;
};


/* clear gameboard */
const restartBtn = document.getElementById('restart-btn');

restartBtn.addEventListener('click', () => {
    for(let i = 0; i < tiles.length; i++) {
        tiles[i].textContent = '';
    }
    selectedMsg.textContent = '';
    resultsMsg.textContent = '';
});