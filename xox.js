const X='X';
const O='O';
const player1 = '';
const player2 = '';
let currentPlayer = '';

const firstInput= document.getElementById('1')
const secondInput= document.getElementById('2')
const thirdInput= document.getElementById('3')
const fourthInput= document.getElementById('4')
const fifthInput= document.getElementById('5')
const sixthInput= document.getElementById('6')
const seventhInput= document.getElementById('7')
const eighthInput= document.getElementById('8')
const ninethInput= document.getElementById('9')

function getData({target}){
   currentPlayer = target.value;

   let myTable= [
        [firstInput.value,secondInput.value,thirdInput.value],
        [fourthInput.value,fifthInput.value,sixthInput.value],
        [seventhInput.value,eighthInput.value,ninethInput.value]
    ];

    if(isWinner(myTable)) {
        document.getElementById('winner-player').innerText = currentPlayer;
    };

};



function isWinner(gameBoard){
    
    if( gameBoard[0][0] && gameBoard[0][1] && gameBoard[0][2] && gameBoard[0][0]=== gameBoard[0][1] && gameBoard[0][0]=== gameBoard[0][2]) {
        
        return true;
    }; 

    if(gameBoard[1][0] && gameBoard[1][1] && gameBoard[1][2] && gameBoard[1][0]=== gameBoard[1][1] && gameBoard[1][0]=== gameBoard[1][2]){
        
        return true;
    };

    if(gameBoard[2][0] && gameBoard[2][1] && gameBoard[2][2] && gameBoard[2][0]=== gameBoard[2][1] && gameBoard[2][0] === gameBoard[2][2]){
        
        return true;
    };

    if(gameBoard[0][0] && gameBoard[1][0] && gameBoard[2][0] && gameBoard[0][0]=== gameBoard[1][0] && gameBoard[0][0]=== gameBoard[2][0]){
        
        return true;
    };

    if(gameBoard[0][1] && gameBoard[1][1] && gameBoard[2][1] && gameBoard[0][1]=== gameBoard[1][1] && gameBoard[0][1]=== gameBoard[2][1]){
        
        return true;
    };

    if(gameBoard[0][2] && gameBoard[1][2] && gameBoard[2][2] && gameBoard[0][2]=== gameBoard[1][2] && gameBoard[0][2]=== gameBoard[2][2]){
        
        return true;
    };

    if(gameBoard[0][0] && gameBoard[1][1] && gameBoard[2][2] && gameBoard[0][0]=== gameBoard[1][1] && gameBoard[0][0]=== gameBoard[2][2]){
        
        return true;
    };

    if(gameBoard[1][1] && gameBoard[0][2] && gameBoard[2][0] && gameBoard[0][2]=== gameBoard[1][1] && gameBoard[0][2] === gameBoard[2][0]){
        
        return true;
    };

    console.log('draw');
};