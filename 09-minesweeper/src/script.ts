// Display/UI

import {
    TILE_STATUSES,
    createBoard,
    markTile,
    revealTile,
    checkWin,
    checkLose,
    positionMatch,
    markedTilesCount,
    Tile,
} from "./minesweeper.ts";

const BOARD_SIZE = 10;
const NUMBER_OF_MINES = 10;

let board = createBoard(BOARD_SIZE, getMinePositions(BOARD_SIZE, NUMBER_OF_MINES));
/*
    <body>
        <h3 class="title">Minesweeper</h3>
        <div class="subtext">Mines Left: <span data-mine-count></span></div>
        <div class="board"></div>
    </body>
*/
const boardElement = document.querySelector<HTMLDivElement>(".board")!;
const minesLeftText = document.querySelector<HTMLSpanElement>("[data-mine-count]")!;
const messageText = document.querySelector<HTMLDivElement>(".subtext")!;

function render() {
    boardElement.innerHTML = "";
    checkGameEnd();

    getTileElements().forEach((element) => {
        boardElement.append(element);
    });

    listMinesLeft();
}

function getTileElements() {
    return board.flatMap((row) => {
        return row.map(tileToElement);
    });
}

function tileToElement(tile: Tile) {
    const element = document.createElement("div");
    element.dataset.status = tile.status;
    element.dataset.x = tile.x.toString();
    element.dataset.y = tile.y.toString();
    const newContent = tile.adjacentMinesCount ? tile.adjacentMinesCount.toString() : "";
    element.textContent = newContent;
    return element;
}

boardElement.addEventListener("click", (e) => {
    // Type Guard to check if the target is an HTMLElement and if it matches the selector
    // Type narrowing
    if (
        !(e.target instanceof HTMLElement) ||
        !e.target.matches("[data-status]") ||
        e.target.dataset.x == null ||
        e.target.dataset.y == null
    ) {
        return;
    }
    board = revealTile(board, {
        x: parseInt(e.target.dataset.x),
        y: parseInt(e.target.dataset.y),
    });
    render();
});

boardElement.addEventListener("contextmenu", (e) => {
    if (
        !(e.target instanceof HTMLElement) ||
        !e.target.matches("[data-status]") ||
        e.target.dataset.x == null ||
        e.target.dataset.y == null
    ) {
        return;
    }

    e.preventDefault();
    board = markTile(board, {
        x: parseInt(e.target.dataset.x),
        y: parseInt(e.target.dataset.y),
    });
    render();
});

boardElement.style.setProperty("--size", BOARD_SIZE);
render();

function listMinesLeft() {
    minesLeftText.textContent = NUMBER_OF_MINES - markedTilesCount(board);
}

function checkGameEnd() {
    const win = checkWin(board);
    const lose = checkLose(board);

    if (win || lose) {
        boardElement.addEventListener("click", stopProp, { capture: true });
        boardElement.addEventListener("contextmenu", stopProp, { capture: true });
    }

    if (win) {
        messageText.textContent = "You Win";
    }
    if (lose) {
        messageText.textContent = "You Lose";
        board.forEach((row) => {
            row.forEach((tile) => {
                if (tile.status === TILE_STATUSES.MARKED) board = markTile(board, tile);
                if (tile.mine) board = revealTile(board, tile);
            });
        });
    }
}

function stopProp(e) {
    e.stopImmediatePropagation();
}

function getMinePositions(boardSize, numberOfMines) {
    const positions = [];

    while (positions.length < numberOfMines) {
        const position = {
            x: randomNumber(boardSize),
            y: randomNumber(boardSize),
        };

        if (!positions.some(positionMatch.bind(null, position))) {
            positions.push(position);
        }
    }

    return positions;
}

function randomNumber(size) {
    return Math.floor(Math.random() * size);
}
