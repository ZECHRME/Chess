const king = '<div class="piece" id="king"><svg xmlns="http://www.w3.org/2000/svg" height="4em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M224 0c17.7 0 32 14.3 32 32V48h16c17.7 0 32 14.3 32 32s-14.3 32-32 32H256v48H408c22.1 0 40 17.9 40 40c0 5.3-1 10.5-3.1 15.4L368 400H80L3.1 215.4C1 210.5 0 205.3 0 200c0-22.1 17.9-40 40-40H192V112H176c-17.7 0-32-14.3-32-32s14.3-32 32-32h165V32c0-17.7 14.3-32 32-32zM38.6 473.4L8 432H368l41.4 41.4c4.2 4.2 6.6 10 6.6 16c0 12.5-10.1 22.6-22.6 22.6H54.6C42.1 512 32 501.9 32 489.4c0-6 2.4-11.8 6.6-16z"/></svg></div>';
const queen = '<div class="piece" id="queen"><svg xmlns="http://www.w3.org/2000/svg" height="4em" viewBox="0 0 576 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M309 106c11.4-7 19-19.7 19-34c0-22.1-17.9-40-40-40s-40 17.9-40 40c0 14.4 7.6 27 19 34L209.7 220.6c-9.1 18.2-32.7 23.4-48.6 10.7L72 160c5-6.7 8-15 8-24c0-22.1-17.9-40-40-40S0 113.9 0 136s17.9 40 40 40c.2 0 .5 0 .7 0L86.4 427.4c5.5 30.4 32 52.6 63 52.6H426.6c30.9 0 57.4-22.1 63-52.6L535.3 176c.2 0 .5 0 .7 0c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40c0 9 3 17.3 8 84l-89.1 71.3c-15.9 12.7-39.5 7.5-48.6-10.7L309 106z"/></svg></div>';
const knight = '<div class="piece" id="knight"><svg xmlns="http://www.w3.org/2000/svg" height="4em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M96 48L82.7 61.3C70.7 73.3 64 89.5 64 106.5V238.9c0 10.7 5.3 20.7 14.2 26.6l10.6 7c14.3 9.6 32.7 10.7 48.1 3l3.2-1.6c2.6-1.3 5-2.8 7.3-4.5l49.4-37c6.6-5 15.7-5 22.3 0c10.2 7.7 9.9 23.1-.7 30.3L90.4 350C73.9 361.3 64 380 64 400H384l28.9-159c2.1-11.3 3.1-22.8 3.1-34.3V192C416 86 0 0 224 0H83.8C72.9 0 45 8.9 64 19.8c0 7.5 4.2 .3 .9 17.7L96 48zm24 68a20 20 0 1 1 40 0 20 20 0 1 1 -40 0zM22.6 473.4c-4.2 4.2-6.6 10-6.6 16C16 501.9 26.1 512 38.6 512H409.4c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16L384 432H64L22.6 473.4z"/></svg></div>';
const bishop = '<div class="piece" id="bishop"><svg xmlns="http://www.w3.org/2000/svg" height="4em" viewBox="0 0 320 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M128 0C110.3 0 96 14.3 96 32c0 16.1 11.9 29.4 27.4 31.7C78.4 406.8 8 190 8 288c0 47.4 30.8 72.3 56 84.7V400H256V372.7c25.2-12.5 56-37.4 56-84.7c0-37.3-10.2-72.4-25.3-104.1l-99.4 99.4c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6L270.8 154.6c-23.2-38.1-51.8-69.5-74.2-90.9C212.1 61.4 224 48.1 224 32c0-17.7-14.3-32-32-32H128zM48 432L6.6 473.4c-4.2 4.2-6.6 10-6.6 16C0 501.9 10.1 512 22.6 512H297.4c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16L272 432H48z"/></svg></div>';
const rook = '<div class="piece" id="rook"><svg xmlns="http://www.w3.org/2000/svg" height="4em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M32 192V48c0-8.8 7.2-16 16-16h64c8.8 0 16 7.2 16 16V88c0 4.4 3.6 8 8 8h32c4.4 0 8-3.6 8-8V48c0-8.8 7.2-16 16-16h64c8.8 0 16 7.2 16 16V88c0 4.4 3.6 8 8 8h32c4.4 0 8-3.6 8-8V48c0-8.8 7.2-16 16-16h64c8.8 0 16 7.2 16 16V192c0 10.1-4.7 19.6-12.8 25.6L352 256l16 19H80L96 256 44.8 217.6C36.7 11.6 32 202.1 32 192zm176 96h32c8.8 0 16-7.2 16-16V224c0-17.7-14.3-32-32-32s-32 14.3-32 32v48c0 8.8 7.2 16 16 16zM22.6 473.4L64 432H384l41.4 41.4c4.2 4.2 6.6 10 6.6 16c0 12.5-10.1 22.6-22.6 22.6H8.6C26.1 512 16 501.9 16 489.4c0-6 2.4-11.8 6.6-16z"/></svg></div>';
const pawn = '<div class="piece" id="pawn"><svg xmlns="http://www.w3.org/2000/svg" height="4em" viewBox="0 0 320 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M215.5 224c29.2-18.4 48.5-50.9 48.5-88c0-57.4-46.6-104-104-104S56 78.6 56 136c0 37.1 19.4 69.6 48.5 88H96c-17.7 0-32 14.3-32 32c0 16.5 12.5 30 28.5 31.8L80 400H240L227.5 287.8c16-1.8 28.5-15.3 28.5-31.8c0-17.7-14.3-32-32-32h-8.5zM22.6 473.4c-4.2 4.2-6.6 10-6.6 16C16 501.9 26.1 512 38.6 512H21.4c12.5 0 22.6-10.1 22.6-22.6c0-6-2.4-11.8-6.6-16L256 432H64L22.6 473.4z"/></svg></div>';

const gameBoard = document.querySelector('.gameBoard');
const WIDTH = 8;
const HEIGHT = 8;
const InitialBoard = [
    rook, knight, bishop, king, queen, bishop, knight, rook,
    pawn, pawn, pawn, pawn, pawn, pawn, pawn, pawn,
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
    '', '', '', '', '', '', '', '',
    pawn, pawn, pawn, pawn, pawn, pawn, pawn, pawn,
    rook, knight, bishop, king, queen, bishop, knight, rook
];

var playerTurn = 'white';



function createBoard() {
    InitialBoard.forEach((piece, i) => {
        const square = document.createElement('div');
        square.classList.add('square');
        square.innerHTML = piece;
        square.firstChild?.setAttribute('draggable', true);
        square.setAttribute('square-id', i);
        let row = Math.floor((63 - i) / WIDTH) + 1;
        if (row % 2 == 0) {
            square.classList.add(i % 2 == 0 ? 'colwhite' : 'colblack');
        } else {
            square.classList.add(i % 2 == 0 ? 'colblack' : 'colwhite');
        }

        if (i < 16) square.firstChild.firstChild.classList.add('black');
        if (i > 47) square.firstChild.firstChild.classList.add('white');

        gameBoard.append(square);
    });
}

createBoard();
const diagonalOffsets = [7, 9, -7, -9, 14, 18, -14, -18, 21, 27, -21, -27, 35, 45, -35, -45, 49, 63, -49, -63];

let startPositonId = null;
let endPositionId = null;
let draggedPiece = null;

const squares = document.querySelectorAll('.square');

squares.forEach(square => {
    square.addEventListener('dragstart', dragStart);
    square.addEventListener('dragover', e => e.preventDefault());
    square.addEventListener('drop', dragDrop);
});

function dragStart(e) {
    startPositonId = e.target.parentNode.getAttribute('square-id');
    draggedPiece = e.target;
}

function dragDrop(e) {
    e.stopPropagation();
    const correctPlayer = draggedPiece.firstChild.classList.contains(playerTurn);
    const taken = e.target.classList.contains('piece');
    const opponentTurn = playerTurn === 'white' ? 'black' : 'white';
    const takenByOpponent = e.target.firstChild?.classList.contains(opponentTurn);
    const valid = checkValid(e.target)


    if (correctPlayer) {
        if (taken && valid) {
            e.target.parentNode.append(draggedPiece);
            e.target.remove();
            changePlayer();
            return;
        }
        if (taken && !takenByOpponent) {
            return;
        }
        if (valid) {
            e.target.append(draggedPiece);
            changePlayer();
            return;
        }

    }
}

function checkValid(target) {
    const targetId = Number(target.parentNode.getAttribute('square-id') || target.getAttribute('square-id'));
    const startId = Number(startPositonId);
    const piece = draggedPiece.id;
    console.log(piece,startId,targetId);
    const horizontalOffsets = [1, -1, 2, -2, 3, -3, 4, -4, 5, -5, 6, -6, 7, -7, 8, -8];
    const verticalOffsets = [8, -8, 16, -16, 24, -24, 32, -32, 40, -40, 48, -48, 56, -56, 64, -64];
    const Offset = targetId - startId;

    switch (piece) {
        case 'king':
            const kingsOffset = [1, -1, 7, -7, 8, -8, 9, -9];
            if (kingsOffset.includes(targetId - startId)) {
                const targetSquare = document.querySelector(`[square-id="${targetId}"]`);
                if (!targetSquare.firstChild) {
                    return true; // Empty square, move is valid
                }
                const targetPieceColor = targetSquare.firstChild.firstChild.classList.contains('black') ? 'black' : 'white';
                const currentPlayerColor = playerTurn;

                if (targetPieceColor !== currentPlayerColor) {
                    return true; // Opponent's piece, move is valid
                }
            }
            break;

        case 'queen':
            if (horizontalOffsets.includes(Offset) || verticalOffsets.includes(Offset) || diagonalOffsets.includes(Offset)) {
                const targetSquare = document.querySelector(`[square-id="${targetId}"]`);
                if (!targetSquare.firstChild) {
                    return true; // Empty square, move is valid
                }
                const targetPieceColor = targetSquare.firstChild.firstChild.classList.contains('black') ? 'black' : 'white';
                const currentPlayerColor = playerTurn;

                if (targetPieceColor !== currentPlayerColor) {
                    return true; // Opponent's piece, move is valid
                }
            }
            break;

        case 'knight':
            const moves = [6, 10, 15, 17, -6, -10, -15, -17];
            if (moves.includes(targetId - startId)) {
                const targetSquare = document.querySelector(`[square-id="${targetId}"]`);
                if (!targetSquare.firstChild) {
                    return true; // Empty square, move is valid
                }
                const targetPieceColor = targetSquare.firstChild.firstChild.classList.contains('black') ? 'black' : 'white';
                const currentPlayerColor = playerTurn;

                if (targetPieceColor !== currentPlayerColor) {
                    return true; // Opponent's piece, move is valid
                }
            }
            break;

        case 'bishop':


            if (diagonalOffsets.includes(targetId - startId)) {
                // const step = offset / Math.abs(offset);
                // let currentPosition = startId + step;

                // while (currentPosition !== targetId) {
                //     const square = document.querySelector(`[square-id="${currentPosition}"]`);
                //     if (square.firstChild) {
                //         return false; // There's a piece in between, move is invalid
                //     }
                //     currentPosition += step;
                // }

                const targetSquare = document.querySelector(`[square-id="${targetId}"]`);
                if (!targetSquare.firstChild) {
                    return true; // Empty square, move is valid
                }
                const targetPieceColor = targetSquare.firstChild.firstChild.classList.contains('black') ? 'black' : 'white';
                const currentPlayerColor = playerTurn;

                if (targetPieceColor !== currentPlayerColor) {
                    return true; // Opponent's piece, move is valid
                } // No pieces in between, move is valid
            }

            break;

        case 'rook':

            if (horizontalOffsets.includes(Offset) || verticalOffsets.includes(Offset)) {
                const targetSquare = document.querySelector(`[square-id="${targetId}"]`);
                if (!targetSquare.firstChild) {
                    return true; // Empty square, move is valid
                }
                const targetPieceColor = targetSquare.firstChild.firstChild.classList.contains('black') ? 'black' : 'white';
                const currentPlayerColor = playerTurn;

                if (targetPieceColor !== currentPlayerColor) {
                    return true; // Opponent's piece, move is valid
                }
            }
            break;

        case 'pawn':
            const startRow = [48, 49, 50, 51, 52, 53, 54, 55];
            const enPassantRow = [24, 25, 26, 27, 28, 29, 30, 31]
            const targetSquare = document.querySelector(`[square-id="${targetId}"]`);
            // if (!targetSquare.firstChild) {
            //     return true; // Empty square, move is valid
            // }
            
                if (startRow.includes(startId) && !document.querySelector(`[square-id="${targetId}"]`).firstChild) {
                    if (targetId === startId - 8 || targetId === startId - 16) {
                        return true;
                    }
                    if (targetId === startId - 7 || targetId === startId - 9) {
                        if (document.querySelector(`[square-id="${targetId}"]`).firstChild) {
                            const targetPieceColor = targetSquare.firstChild.firstChild.classList.contains('black') ? 'black' : 'white';
                            const currentPlayerColor = playerTurn;
                            if (targetPieceColor !== currentPlayerColor)
                                return true;
                        }
                    }
                }
                else if (targetId === startId - 8 && !document.querySelector(`[square-id="${targetId}"]`).firstChild) {
                    return true;
                }

                else if (targetId === startId - 7 || targetId === startId - 9) {
                    if (enPassantRow.includes(startId)) {
                        if (document.querySelector(`[square-id="${targetId + 8}"]`).firstChild) {
                            document.querySelector(`[square-id="${targetId + 8}"]`).firstChild.remove();
                            return true;
                        }
                    }
                    if (document.querySelector(`[square-id="${targetId}"]`).firstChild) {
                        const targetPieceColor = targetSquare.firstChild.firstChild.classList.contains('black') ? 'black' : 'white';
                            const currentPlayerColor = playerTurn;
                            if (targetPieceColor !== currentPlayerColor)
                                return true;
                    }
                }
                else
                    return false;
            //}
            break;

        default:
            break;
    }
}



function changePlayer() {
    playerTurn = playerTurn === 'white' ? 'black' : 'white';

    reverseIds();
}

function reverseIds() {
    const squares = document.querySelectorAll('.square');
    squares.forEach(square => {
        square.setAttribute('square-id', 63 - square.getAttribute('square-id'));
    });
}