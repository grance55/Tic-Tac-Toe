var allBoxes, boxes, activePlayer, counter, playerX, playerO, finalScore, blockPlay;

init();


function nextPlayer() {
    activePlayer++;
    counter++;
    document.querySelector('.player-0').classList.toggle('active');
    document.querySelector('.player-1').classList.toggle('active');
}

function init() {
    allBoxes = [
        document.getElementById('box1'),
        document.getElementById('box2'),
        document.getElementById('box3'),
        document.getElementById('box4'),
        document.getElementById('box5'),
        document.getElementById('box6'),
        document.getElementById('box7'),
        document.getElementById('box8'),
        document.getElementById('box9')
    ];

    for (var i = 0; i < 9; i++) {
        allBoxes[i].textContent = '';
        allBoxes[i].style.color = '#555';
    };

    counter = 0;
    activePlayer = 0;
    playerO = 0;
    playerX = 0;
    blockPlay = 0;
    document.querySelector('.playerScore-1').textContent = playerO;
    document.querySelector('.playerScore-0').textContent = playerX;
    document.querySelector('.final-score').value = "";
    document.querySelector('.player-1').classList.remove('RoundWinner');
    document.querySelector('.player-0').classList.remove('RoundWinner');
    document.querySelector('.player-0').classList.add('active');
    document.querySelector('.player-1').classList.remove('active');
};

function Winner(str1, str2, str3) {
    finalScore = document.querySelector('.final-score').value;
    blockPlay++;
    var winningScore;
    if (finalScore) {
        winningScore = finalScore;
    } else {
        winningScore = 3;
    }

    str1.style.color = '#EB4D4D';
    str2.style.color = '#EB4D4D';
    str3.style.color = '#EB4D4D';

    document.querySelector('.player-' + (activePlayer - 1) % 2).classList.add('RoundWinner');
    //document.querySelector('.playerScore-' + (activePlayer - 1) % 2).classList.add('winner');
    if (str1.textContent === 'X') {
        playerX++;
        document.querySelector('.playerScore-0').textContent = playerX;
        if (playerX >= winningScore) {
            alert('igrac X je pobjedia!');

        }
    } else {
        playerO++;
        document.querySelector('.playerScore-1').textContent = playerO;
        if (playerO >= winningScore) {
            alert('igrac O je pobjedia!');

        }
    }
}

function isWinner() {
    if (allBoxes[0].textContent !== "" && allBoxes[0].textContent === allBoxes[1].textContent && allBoxes[0].textContent === allBoxes[2].textContent) {
        Winner(allBoxes[0], allBoxes[1], allBoxes[2]);
    } else if (allBoxes[0].textContent !== "" && allBoxes[0].textContent === allBoxes[3].textContent && allBoxes[0].textContent === allBoxes[6].textContent) {
        Winner(allBoxes[0], allBoxes[3], allBoxes[6]);
    } else if (allBoxes[0].textContent !== "" && allBoxes[0].textContent === allBoxes[4].textContent && allBoxes[0].textContent === allBoxes[8].textContent) {
        Winner(allBoxes[0], allBoxes[4], allBoxes[8]);
    } else if (allBoxes[1].textContent !== "" && allBoxes[1].textContent === allBoxes[4].textContent && allBoxes[1].textContent === allBoxes[7].textContent) {
        Winner(allBoxes[1], allBoxes[4], allBoxes[7]);
    } else if (allBoxes[2].textContent !== "" && allBoxes[2].textContent === allBoxes[5].textContent && allBoxes[2].textContent === allBoxes[8].textContent) {
        Winner(allBoxes[2], allBoxes[5], allBoxes[8]);
    } else if (allBoxes[3].textContent !== "" && allBoxes[3].textContent === allBoxes[4].textContent && allBoxes[3].textContent === allBoxes[5].textContent) {
        Winner(allBoxes[3], allBoxes[4], allBoxes[5]);
    } else if (allBoxes[6].textContent !== "" && allBoxes[6].textContent === allBoxes[7].textContent && allBoxes[6].textContent === allBoxes[8].textContent) {
        Winner(allBoxes[6], allBoxes[7], allBoxes[8]);
    } else if (allBoxes[2].textContent !== "" && allBoxes[2].textContent === allBoxes[4].textContent && allBoxes[2].textContent === allBoxes[6].textContent) {
        Winner(allBoxes[2], allBoxes[4], allBoxes[6]);
    } else if (counter > 8) {
        console.log('nerjeseno');
    }

};

boxes = document.querySelectorAll('.box');

for (var i = 0; i < boxes.length; i++) {
    boxes[i].onclick = function () {
        if (activePlayer % 2 === 0 && this.innerHTML === "" && blockPlay === 0) {
            this.innerHTML = 'X';
            nextPlayer()
            isWinner();
        } else if (this.innerHTML === "" && blockPlay === 0) {
            this.innerHTML = 'O';
            nextPlayer()
            isWinner();
        }

    }
}

document.querySelector('.nextRound').addEventListener('click', function () {
    for (var i = 0; i < 9; i++) {
        allBoxes[i].textContent = '';
        allBoxes[i].style.color = '#555';
    };
    counter = 0;
    blockPlay = 0;
    document.querySelector('.player-1').classList.remove('RoundWinner');
    document.querySelector('.player-0').classList.remove('RoundWinner');

});



document.querySelector('.btn-new').addEventListener('click', init);