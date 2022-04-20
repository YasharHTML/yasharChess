const letter_to_coordinate = (letter) => {
    return letter.charCodeAt(0) - 97;
}

var o;
var q;

const coordinate_to_letter = (coordinate) => {
    return String.fromCharCode(coordinate + 97);
}

const checkPawnMove = (coordinate) => {
    console.log(coordinate);
    const pawn = document.getElementById(coordinate);
    const pawnColor = pawn.children[0].classList[1];
    const pawnRow = coordinate.charAt(1);
    const pawnColumn = coordinate.charAt(0);
    const pawnRowNumber = Number(pawnRow);
    const pawnColumnNumber = Number(letter_to_coordinate(pawnColumn));
    const pawnMove = [];
    if (pawnColor === 'white') {
        if (pawnRowNumber === 2) {
            // check if there is no piece in the way
            if (document.getElementById(`${coordinate_to_letter(pawnColumnNumber)}${pawnRowNumber + 1}`).children[0] == null) {
                pawnMove.push(`${coordinate_to_letter(pawnColumnNumber)}${pawnRowNumber + 1}`);
            }
            if (document.getElementById(`${coordinate_to_letter(pawnColumnNumber)}${pawnRowNumber + 2}`).children[0] == null && document.getElementById(`${coordinate_to_letter(pawnColumnNumber)}${pawnRowNumber + 1}`).children[0] == null) {
                pawnMove.push(`${coordinate_to_letter(pawnColumnNumber)}${pawnRowNumber + 2}`);
            }
        } else {
            var z = document.getElementById(coordinate_to_letter(pawnColumnNumber - 1) + (pawnRowNumber + 1)).children[0]
            var t = document.getElementById(coordinate_to_letter(pawnColumnNumber + 1) + (pawnRowNumber + 1)).children[0]
            o = typeof(document.getElementById(coordinate_to_letter(pawnColumnNumber - 1) + (pawnRowNumber + 1)).children[0])
            q = typeof(document.getElementById(coordinate_to_letter(pawnColumnNumber + 1) + (pawnRowNumber + 1)).children[0])
            if (o === 'undefined' && q === 'undefined') {

            } else {
                if (q != "undefined") {
                    pawnMove.push(`${coordinate_to_letter(pawnColumnNumber + 1)}${pawnRowNumber + 1}`);
                }
                if (o != "undefined") {
                    pawnMove.push(`${coordinate_to_letter(pawnColumnNumber - 1)}${pawnRowNumber + 1}`);
                }
            }
            var front = document.getElementById(coordinate_to_letter(pawnColumnNumber) + (pawnRowNumber + 1)).children[0]
            if (typeof(front) === 'undefined') {
                pawnMove.push(`${coordinate_to_letter(pawnColumnNumber)}${pawnRowNumber + 1}`);
            }
        }
    } else {
        if (pawnRowNumber === 7) {
            if (document.getElementById(`${coordinate_to_letter(pawnColumnNumber)}${pawnRowNumber - 1}`).children[0] == null) {
                pawnMove.push(`${coordinate_to_letter(pawnColumnNumber)}${pawnRowNumber - 1}`);
            }
            if (document.getElementById(`${coordinate_to_letter(pawnColumnNumber)}${pawnRowNumber - 2}`).children[0] == null && document.getElementById(`${coordinate_to_letter(pawnColumnNumber)}${pawnRowNumber - 1}`).children[0] == null) {
                pawnMove.push(`${coordinate_to_letter(pawnColumnNumber)}${pawnRowNumber - 2}`);
            }
        } else {
            var z = document.getElementById(coordinate_to_letter(pawnColumnNumber - 1) + (pawnRowNumber - 1)).children[0]
            var t = document.getElementById(coordinate_to_letter(pawnColumnNumber + 1) + (pawnRowNumber - 1)).children[0]
            o = typeof(document.getElementById(coordinate_to_letter(pawnColumnNumber - 1) + (pawnRowNumber - 1)).children[0])
            q = typeof(document.getElementById(coordinate_to_letter(pawnColumnNumber + 1) + (pawnRowNumber - 1)).children[0])
            if (o === 'undefined' && q === 'undefined') {

            } else {
                if (q != "undefined") {
                    pawnMove.push(`${coordinate_to_letter(pawnColumnNumber + 1)}${pawnRowNumber - 1}`);
                }
                if (o != "undefined") {
                    pawnMove.push(`${coordinate_to_letter(pawnColumnNumber - 1)}${pawnRowNumber - 1}`);
                }
            }
            var front = document.getElementById(coordinate_to_letter(pawnColumnNumber) + (pawnRowNumber - 1)).children[0]
            if (typeof(front) === 'undefined') {
                pawnMove.push(`${coordinate_to_letter(pawnColumnNumber)}${pawnRowNumber - 1}`);
            }
        }
    }
    return pawnMove;
}