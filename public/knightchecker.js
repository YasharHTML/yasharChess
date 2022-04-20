const findKnightMoves = (cell) => {
    var possibleCoordinates = [];
    var xCoordinates = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
    var cellX = xCoordinates.indexOf(cell[0]) + 1;
    var cellY = parseInt(cell[1]);

    var cellXpositions = [cellX + 2, cellX - 2, cellX + 1, cellX - 1].filter(function(cellPosition) {
        return (cellPosition > 0 && cellPosition < 9);
    })

    var cellYpositions = [cellY + 2, cellY - 2, cellY + 1, cellY - 1].filter(function(cellPosition) {
        return (cellPosition > 0 && cellPosition < 9);
    })

    for (var i = 0; i < cellXpositions.length; i++) {
        for (var j = 0; j < cellYpositions.length; j++) {
            if (Math.abs(cellX - cellXpositions[i]) + Math.abs(cellY - cellYpositions[j]) === 3) {
                if (!possibleCoordinates.includes([cellXpositions[i], cellYpositions[j]])) {
                    possibleCoordinates.push(coordinate_to_letter(cellXpositions[i] - 1) + cellYpositions[j]);
                }
            }
        }
    }
    return possibleCoordinates;
}

const checkKnightMove = (coordinate) => {
    console.log(coordinate);
    const knight = document.getElementById(coordinate);
    const knightColor = knight.children[0].classList[1];
    const knightRow = coordinate.charAt(1);
    const knightColumn = coordinate.charAt(0);
    const knightRowNumber = Number(knightRow);
    const knightColumnNumber = Number(letter_to_coordinate(knightColumn));
    var knightMove = [];
    // check if knight can go there
    var t = findKnightMoves(coordinate);
    console.log(t);
    t.forEach(element => {
        if (typeof(document.getElementById(element).children[0]) != "undefined" && document.getElementById(element).hasChildNodes() && document.getElementById(element).children[0].classList[1] == knightColor) {
            t.splice(t.indexOf(element), 1);
        }
    })
    t.forEach(element => {
        // if there is a king
        if (typeof(document.getElementById(element).children[0]) != "undefined" && document.getElementById(element).hasChildNodes() && document.getElementById(element).children[0].classList[1] == "king") {
            t.splice(t.indexOf(element), 1);
        }
    })
    console.log(t);
    return t;
}