var ponyStates = [];
var currentPonyState = null;
var ponyImg;

function changePonyTo(id) {
    ponyImg.setAttribute("src", "img/" + id + ".gif");
}

function pet() {
    currentPonyState.pet();
    changePonyTo(currentPonyState.id);
}

window.onload = function () {
    function ponyStateFactory(id, pet, eye, boop, mouth) {
        return {
            id: id,
            pet: function () { currentPonyState = ponyStates[pet - 1] },
            eye: function () { currentPonyState = ponyStates[eye - 1] },
            boop: function () { currentPonyState = ponyStates[boop - 1] },
            mouth: function () { currentPonyState = ponyStates[mouth - 1] }
        }
    }

    ponyStates.push(ponyStateFactory(1, 1, 6, 3, 13));
    ponyStates.push(ponyStateFactory(2, 3, 10, 6, 10));
    ponyStates.push(ponyStateFactory(3, 5, 11, 1, 9));
    ponyStates.push(ponyStateFactory(4, 5, 8, 3, 12));
    ponyStates.push(ponyStateFactory(5, 1, 11, 11, 13));
    ponyStates.push(ponyStateFactory(6, 7, 10, 11, 14));
    ponyStates.push(ponyStateFactory(7, 1, 10, 2, 14));
    ponyStates.push(ponyStateFactory(8, 4, 10, 11, 4));
    ponyStates.push(ponyStateFactory(9, 9, 11, 11, 1));
    ponyStates.push(ponyStateFactory(10, 2, 2, 8, 3));
    ponyStates.push(ponyStateFactory(11, 13, 13, 12, 3));
    ponyStates.push(ponyStateFactory(12, 13, 11, 11, 5));
    ponyStates.push(ponyStateFactory(13, 9, 10, 11, 5));
    ponyStates.push(ponyStateFactory(14, 13, 10, 11, 6));

    currentPonyState = ponyStates[1];

    var elem = document.createElement("img");
    elem.setAttribute("src", "img/1.gif");
    elem.setAttribute("height", "200");
    elem.setAttribute("width", "200");
    elem.setAttribute("alt", "Best Pony");
    elem.setAttribute("id", "ponyImg");

    var canvas = document.getElementById('ponypetcanvas');
    canvas.appendChild(elem);

    ponyImg = document.getElementById('ponyImg');

    changePonyTo(currentPonyState.id);
}