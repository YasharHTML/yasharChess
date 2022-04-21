const checkRookMove = (coordinates) => {
    const rookMove = [];
    const x = coordinates[0];
    const y = coordinates[1];
    const rookNumberColumn = Number(letter_to_coordinate(x));
    const rookNumberRow = Number(y);
    //find places where a rook can go js
    for (let i = rookNumberColumn + 1; i <= 8; i++) {
        if (document.getElementById(coordinate_to_letter(i) + rookNumberRow) && document.getElementById(coordinate_to_letter(i) + rookNumberRow).children.length > 0 && document.getElementById(coordinate_to_letter(i) + rookNumberRow).children[0].classList.contains(document.getElementById(coordinates).children[0].classList[1])) {
            break
        }
        if (document.getElementById(coordinate_to_letter(i) + rookNumberRow) && document.getElementById(coordinate_to_letter(i) + rookNumberRow).children.length > 0 && document.getElementById(coordinate_to_letter(i) + rookNumberRow).children[0].classList.contains("king")) {
            break
        }
        rookMove.push(coordinate_to_letter(i) + rookNumberRow);
        if (document.getElementById(coordinate_to_letter(i) + rookNumberRow) && document.getElementById(coordinate_to_letter(i) + rookNumberRow).children.length > 0 && document.getElementById(coordinate_to_letter(i) + rookNumberRow).children[0].classList.contains(document.getElementById(coordinates).children[0].classList[1] == "white" ? "black" : "white")) {
            break
        }
    }
    for (let i = rookNumberColumn - 1; i >= 0; i--) {
        if (document.getElementById(coordinate_to_letter(i) + rookNumberRow) && document.getElementById(coordinate_to_letter(i) + rookNumberRow).children.length > 0 && document.getElementById(coordinate_to_letter(i) + rookNumberRow).children[0].classList.contains(document.getElementById(coordinates).children[0].classList[1])) {
            break
        }
        if (document.getElementById(coordinate_to_letter(i) + rookNumberRow) && document.getElementById(coordinate_to_letter(i) + rookNumberRow).children.length > 0 && document.getElementById(coordinate_to_letter(i) + rookNumberRow).children[0].classList.contains("king")) {
            break
        }
        rookMove.push(coordinate_to_letter(i) + rookNumberRow);
        if (document.getElementById(coordinate_to_letter(i) + rookNumberRow) && document.getElementById(coordinate_to_letter(i) + rookNumberRow).children.length > 0 && document.getElementById(coordinate_to_letter(i) + rookNumberRow).children[0].classList.contains(document.getElementById(coordinates).children[0].classList[1] == "white" ? "black" : "white")) {
            break
        }
    }
    for (let j = rookNumberRow + 1; j <= 8; j++) {
        if (document.getElementById(coordinate_to_letter(rookNumberColumn) + j) && document.getElementById(coordinate_to_letter(rookNumberColumn) + j).children.length > 0 && document.getElementById(coordinate_to_letter(rookNumberColumn) + j).children[0].classList.contains(document.getElementById(coordinates).children[0].classList[1])) {
            break
        }
        if (document.getElementById(coordinate_to_letter(rookNumberColumn) + j) && document.getElementById(coordinate_to_letter(rookNumberColumn) + j).children.length > 0 && document.getElementById(coordinate_to_letter(rookNumberColumn) + j).children[0].classList.contains("king")) {
            break
        }
        rookMove.push(coordinate_to_letter(rookNumberColumn) + j);
        if (document.getElementById(coordinate_to_letter(rookNumberColumn) + j) && document.getElementById(coordinate_to_letter(rookNumberColumn) + j).children.length > 0 && document.getElementById(coordinate_to_letter(rookNumberColumn) + j).children[0].classList.contains(document.getElementById(coordinates).children[0].classList[1] == "white" ? "black" : "white")) {
            break
        }
    }
    for (let j = rookNumberRow - 1; j > 0; j--) {
        if (document.getElementById(coordinate_to_letter(rookNumberColumn) + j) && document.getElementById(coordinate_to_letter(rookNumberColumn) + j).children.length > 0 && document.getElementById(coordinate_to_letter(rookNumberColumn) + j).children[0].classList.contains(document.getElementById(coordinates).children[0].classList[1])) {
            break
        }
        if (document.getElementById(coordinate_to_letter(rookNumberColumn) + j) && document.getElementById(coordinate_to_letter(rookNumberColumn) + j).children.length > 0 && document.getElementById(coordinate_to_letter(rookNumberColumn) + j).children[0].classList.contains("king")) {
            break
        }
        rookMove.push(coordinate_to_letter(rookNumberColumn) + j);
        if (document.getElementById(coordinate_to_letter(rookNumberColumn) + j) && document.getElementById(coordinate_to_letter(rookNumberColumn) + j).children.length > 0 && document.getElementById(coordinate_to_letter(rookNumberColumn) + j).children[0].classList.contains(document.getElementById(coordinates).children[0].classList[1] == "white" ? "black" : "white")) {
            break
        }
    }
    console.log(rookMove);
    return rookMove;
}