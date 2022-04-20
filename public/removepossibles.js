const removePossibles = () => {
    const board = document.getElementById('container');
    console.log(board, board.children);
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            const cell = board.children[i].children[j];
            if (cell.classList.contains('possible')) {
                cell.classList.remove('possible');
            }
        }
    }

    console.log(board, board.children);
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            const cell = board.children[i].children[j];
            if (cell.classList.contains('possible-b')) {
                cell.classList.remove('possible-b');
            }
        }
    }
}