var socket = io();

//check if element has a piece inside 
const hasPiece = (element) => {
    return element.classList.contains('piece');
}

socket.on("move_to", (data) => {
    console.log(data);
    document.getElementById(data.target).appendChild(document.getElementById(data.origin).children[0]);
    document.getElementById(data.origin).children[0].remove();
});

socket.on("capture_to", (data) => {
    console.log(data);
    document.getElementById(data.target).children[0].remove();
    document.getElementById(data.target).appendChild(document.getElementById(data.origin).children[0]);
    document.getElementById(data.origin).children[0].remove();
});

var flag = false
var origin;
var origin_id;
var rotated = false;
const rotate = () => {
    var div = document.getElementById('container'),
        deg = rotated ? 0 : 180;

    div.style.webkitTransform = 'rotate(' + deg + 'deg)';
    div.style.mozTransform = 'rotate(' + deg + 'deg)';
    div.style.msTransform = 'rotate(' + deg + 'deg)';
    div.style.oTransform = 'rotate(' + deg + 'deg)';
    div.style.transform = 'rotate(' + deg + 'deg)';

    rotated = !rotated;
}

document.addEventListener("click", (e) => {
    console.log(e.target);
    if (!(e.target.classList.contains("piece") || e.target.classList.contains("col"))) {} else if (flag && (origin.classList.contains("king") && e.target.classList.contains("king"))) {
        console.log("king");
        removePossibles();
        origin.classList.remove("selected");
        e.target.classList.remove("selected");
        flag = false;
    } else if (flag && (e.target.classList.contains("king"))) {
        console.log("king");
        origin.classList.remove("selected");
        removePossibles();
        flag = false;
    } else if (e.target.classList.contains("piece") && flag == false) {
        console.log(e.target.classList);
        if (e.target.classList.contains("pawn")) {
            checkPawnMove(e.target.parentElement.id).forEach(element => {
                if (document.getElementById(element).classList.contains("w")) {
                    document.getElementById(element).classList.add("possible");
                } else {
                    document.getElementById(element).classList.add("possible-b");
                }
            })
        }
        if (e.target.classList.contains("knight")) {
            var resu = checkKnightMove(e.target.parentElement.id)
            var k1 = document.querySelectorAll(".king")[0]
            var k2 = document.querySelectorAll(".king")[1]
            if (resu.includes(k1.parentElement.id)) {
                resu.splice(resu.indexOf(k1.parentElement.id), 1)
            }
            if (resu.includes(k2.parentElement.id)) {
                resu.splice(resu.indexOf(k2.parentElement.id), 1)
            }
            resu.forEach(element => {
                if (document.getElementById(element).classList.contains("w")) {
                    document.getElementById(element).classList.add("possible");
                } else {
                    document.getElementById(element).classList.add("possible-b");
                }
            })
        }
        if (e.target.classList.contains("bishop")) {
            checkBishopMove(e.target.parentElement.id).forEach(element => {
                if (document.getElementById(element).classList.contains("w")) {
                    document.getElementById(element).classList.add("possible");
                } else {
                    document.getElementById(element).classList.add("possible-b");
                }
            })
        }
        origin_id = e.target.parentElement.id;
        e.target.classList.add("selected");
        origin = e.target;
        flag = true;

    } else if (e.target == origin) {
        flag = false;
        origin.classList.remove("selected");
        removePossibles();
    } else if (e.target.classList.contains("piece") && origin.classList.contains(e.target.classList[1]) && flag == true) {
        flag = false;
        origin.classList.remove("selected");
        removePossibles();
    } else if (e.target.classList.contains("piece") && origin.classList[1] != e.target.classList[1] && flag == true) {
        if (document.getElementById(origin_id).children[0].classList.contains("pawn") && checkPawnMove(origin_id).includes(e.target.parentElement.id)) {
            flag = false;
            socket.emit("capture", { "origin": origin_id, "target": e.target.parentElement.id });
            origin.classList.remove("selected");
            var t = e.target.parentElement;
            removePossibles();
            e.target.parentElement.removeChild(e.target);
            origin.parentElement.removeChild(origin);
            t.appendChild(origin);
        } else if (document.getElementById(origin_id).children[0].classList.contains("knight") && checkKnightMove(origin_id).includes(e.target.parentElement.id)) {
            flag = false;
            socket.emit("capture", { "origin": origin_id, "target": e.target.parentElement.id });
            origin.classList.remove("selected");
            var t = e.target.parentElement;
            removePossibles();
            e.target.parentElement.removeChild(e.target);
            origin.parentElement.removeChild(origin);
            t.appendChild(origin);
        } else if (document.getElementById(origin_id).children[0].classList.contains("bishop") && checkBishopMove(origin_id).includes(e.target.parentElement.id)) {
            flag = false;
            socket.emit("capture", { "origin": origin_id, "target": e.target.parentElement.id });
            origin.classList.remove("selected");
            var t = e.target.parentElement;
            removePossibles();
            e.target.parentElement.removeChild(e.target);
            origin.parentElement.removeChild(origin);
            t.appendChild(origin);
        } else {
            alert("Invalid move");
        }
    } else if (!e.target.classList.contains("piece") && flag == true) {
        if (document.getElementById(origin_id).children[0].classList.contains("pawn") && checkPawnMove(origin_id).includes(e.target.id)) {
            socket.emit("move", { "origin": origin_id, "target": e.target.id });
            removePossibles();
            origin.parentElement.removeChild(origin);
            origin.classList.remove("selected");
            e.target.append(origin);
            flag = false;
        } else if (document.getElementById(origin_id).children[0].classList.contains("knight") && checkKnightMove(origin_id).includes(e.target.id)) {
            socket.emit("move", { "origin": origin_id, "target": e.target.id });
            removePossibles();
            origin.parentElement.removeChild(origin);
            origin.classList.remove("selected");
            e.target.append(origin);
            flag = false;
        } else if (document.getElementById(origin_id).children[0].classList.contains("bishop") && checkBishopMove(origin_id).includes(e.target.id)) {
            socket.emit("move", { "origin": origin_id, "target": e.target.id });
            removePossibles();
            origin.parentElement.removeChild(origin);
            origin.classList.remove("selected");
            e.target.append(origin);
            flag = false;
        } else {
            alert("Invalid move");
        }
    }
});