const checkBishopMove = (coordinates) => {
    const bishopOrigin1 = coordinates[0];
    const bishopOrigin2 = coordinates[1];
    const bishopNumberColumn = Number(letter_to_coordinate(bishopOrigin1));
    const bishopNumberRow = Number(bishopOrigin2);
    var bishopMove = [];
    console.log(coordinate_to_letter(bishopNumberColumn), bishopNumberRow);

    // check if bishop can go there (diagonal)
    var i = bishopNumberColumn,
        j = bishopNumberRow;
    while (++i < 9 && ++j < 9) {
        if (document.getElementById(coordinate_to_letter(i) + j) && document.getElementById(coordinate_to_letter(i) + j).children.length > 0 && document.getElementById(coordinate_to_letter(i) + j).children[0].classList.contains(document.getElementById(coordinates).children[0].classList[1])) {
            break
        }
        if (document.getElementById(coordinate_to_letter(i) + j) && document.getElementById(coordinate_to_letter(i) + j).children.length > 0 && document.getElementById(coordinate_to_letter(i) + j).children[0].classList.contains("king")) {
            break
        }
        bishopMove.push(coordinate_to_letter(i) + j);
        if (document.getElementById(coordinate_to_letter(i) + j) && document.getElementById(coordinate_to_letter(i) + j).children.length > 0 && document.getElementById(coordinate_to_letter(i) + j).children[0].classList.contains(document.getElementById(coordinates).children[0].classList[1] == "white" ? "black" : "white")) {
            break
        }
    }

    var i = bishopNumberColumn,
        j = bishopNumberRow;
    while (--i >= 0 && ++j < 9) {
        if (document.getElementById(coordinate_to_letter(i) + j) && document.getElementById(coordinate_to_letter(i) + j).children.length > 0 && document.getElementById(coordinate_to_letter(i) + j).children[0].classList.contains(document.getElementById(coordinates).children[0].classList[1])) {
            break
        }
        if (document.getElementById(coordinate_to_letter(i) + j) && document.getElementById(coordinate_to_letter(i) + j).children.length > 0 && document.getElementById(coordinate_to_letter(i) + j).children[0].classList.contains("king")) {
            break
        }
        bishopMove.push(coordinate_to_letter(i) + j);
        if (document.getElementById(coordinate_to_letter(i) + j) && document.getElementById(coordinate_to_letter(i) + j).children.length > 0 && document.getElementById(coordinate_to_letter(i) + j).children[0].classList.contains(document.getElementById(coordinates).children[0].classList[1] == "white" ? "black" : "white")) {
            break
        }
    }

    var i = bishopNumberColumn,
        j = bishopNumberRow;
    while (++i < 9 && --j >= 0) {
        if (document.getElementById(coordinate_to_letter(i) + j) && document.getElementById(coordinate_to_letter(i) + j).children.length > 0 && document.getElementById(coordinate_to_letter(i) + j).children[0].classList.contains(document.getElementById(coordinates).children[0].classList[1])) {
            break
        }
        if (document.getElementById(coordinate_to_letter(i) + j) && document.getElementById(coordinate_to_letter(i) + j).children.length > 0 && document.getElementById(coordinate_to_letter(i) + j).children[0].classList.contains("king")) {
            break
        }
        bishopMove.push(coordinate_to_letter(i) + j);
        if (document.getElementById(coordinate_to_letter(i) + j) && document.getElementById(coordinate_to_letter(i) + j).children.length > 0 && document.getElementById(coordinate_to_letter(i) + j).children[0].classList.contains(document.getElementById(coordinates).children[0].classList[1] == "white" ? "black" : "white")) {
            break
        }
    }

    var i = bishopNumberColumn,
        j = bishopNumberRow;
    while (--i >= 0 && --j >= 0) {
        if (document.getElementById(coordinate_to_letter(i) + j) && document.getElementById(coordinate_to_letter(i) + j).children.length > 0 && document.getElementById(coordinate_to_letter(i) + j).children[0].classList.contains(document.getElementById(coordinates).children[0].classList[1])) {
            break
        }
        if (document.getElementById(coordinate_to_letter(i) + j) && document.getElementById(coordinate_to_letter(i) + j).children.length > 0 && document.getElementById(coordinate_to_letter(i) + j).children[0].classList.contains("king")) {
            break
        }
        bishopMove.push(coordinate_to_letter(i) + j);
        if (document.getElementById(coordinate_to_letter(i) + j) && document.getElementById(coordinate_to_letter(i) + j).children.length > 0 && document.getElementById(coordinate_to_letter(i) + j).children[0].classList.contains(document.getElementById(coordinates).children[0].classList[1] == "white" ? "black" : "white")) {
            break
        }
    }

    return bishopMove;

}