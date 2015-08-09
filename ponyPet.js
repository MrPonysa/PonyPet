window.onload = function () {
    //For debugging
    function log(msg) {
        console.log(msg);
    }

    function getElementsByAttribute(attribute) {
        var matchingElements = [];
        var allElements = document.getElementsByTagName('*');
        for (var i = 0, n = allElements.length; i < n; i++) {
            if (allElements[i].getAttribute(attribute) !== null) {
                // Element exists with attribute. Add to array.
                matchingElements.push(allElements[i]);
            }
        }
        return matchingElements;
    }

    function pnpoly(nvert, vertx, verty, testx, testy) {
        var i, j, c = false;
        for (i = 0, j = nvert - 1; i < nvert; j = i++) {
            if (((verty[i] > testy) != (verty[j] > testy)) &&
                (testx < (vertx[j] - vertx[i]) * (testy - verty[i]) / (verty[j] - verty[i]) + vertx[i])) {
                c = !c;
            }
        }
        return c;
    }

    function findPosition(oElement) {
        if (typeof (oElement.offsetParent) != "undefined") {
            for (var posX = 0, posY = 0; oElement; oElement = oElement.offsetParent) {
                posX += oElement.offsetLeft;
                posY += oElement.offsetTop;
            }
            return [posX, posY];
        }
        else {
            return [oElement.x, oElement.y];
        }
    }

    function getCoordinates(e, img) {
        var posX = 0;
        var posY = 0;
        var imgPos;
        imgPos = findPosition(img);
        if (!e) var e = window.event;
        if (e.pageX || e.pageY) {
            posX = e.pageX;
            posY = e.pageY;
        }
        else if (e.clientX || e.clientY) {
            posX = e.clientX + document.body.scrollLeft
              + document.documentElement.scrollLeft;
            posY = e.clientY + document.body.scrollTop
              + document.documentElement.scrollTop;
        }
        posX = posX - imgPos[0];
        posY = posY - imgPos[1];

        return { x: posX, y: posY };
    }

    var petPoly = {
        vx: [75, 87, 186, 168, 178, 199, 133, 120, 111, 66, 38, 5, 13, 33, 56, 75],
        vy: [171, 199, 200, 161, 119, 104, 2, 3, 30, 5, 73, 73, 116, 164, 155, 171]
    };
    var eyesPoly = {
        vx: [57, 68, 82, 106, 113, 120, 135, 153, 139, 131, 118, 106, 107, 81, 89, 81, 67, 54, 51, 49, 59],
        vy: [92, 94, 107, 105, 85, 79, 79, 105, 135, 141, 141, 128, 105, 107, 144, 150, 150, 136, 125, 103, 93]
    };
    var boopPoly = {
        vx: [106, 107, 80, 88, 93, 106, 107, 106],
        vy: [128, 105, 107, 143, 151, 150, 146, 128]
    };
    var mouthPoly = {
        vx: [93, 106, 125, 122, 95, 85, 93],
        vy: [151, 150, 149, 167, 170, 157, 151]
    };

    function ponyPet(canvas) {
        var ponyStates = [];
        var currentPonyState;
        var ponyImg;

        function changePonyTo(id) {
            ponyImg.setAttribute("src", "img/" + id + ".gif");
        }

        function pet() {
            currentPonyState.pet();
            changePonyTo(currentPonyState.id);
        }
        function eye() {
            currentPonyState.eye();
            changePonyTo(currentPonyState.id);
        }
        function boop() {
            currentPonyState.boop();
            changePonyTo(currentPonyState.id);
        }
        function mouth() {
            currentPonyState.mouth();
            changePonyTo(currentPonyState.id);
        }

        function ponyPet_clicked(e) {
            var coordinates = getCoordinates(e, elem);

            if (pnpoly(boopPoly.vx.length, boopPoly.vx, boopPoly.vy, coordinates.x, coordinates.y)) boop();
            else if (pnpoly(mouthPoly.vx.length, mouthPoly.vx, mouthPoly.vy, coordinates.x, coordinates.y)) mouth();
            else if (pnpoly(eyesPoly.vx.length, eyesPoly.vx, eyesPoly.vy, coordinates.x, coordinates.y)) eye();
            else if (pnpoly(petPoly.vx.length, petPoly.vx, petPoly.vy, coordinates.x, coordinates.y)) pet();
        }

        //In this Pony Factory, all your hopes and dreams come true 
        //This is not like the *other* factory you may have heard of... ;)
        function ponyStateFactory(id, pet, eye, boop, mouth) {
            return {
                id: id,
                pet: function () {
                    log("pet");
                    currentPonyState = ponyStates[pet - 1];
                    log("Now at state: " + currentPonyState.id);
                },
                eye: function () {
                    log("eye");
                    currentPonyState = ponyStates[eye - 1];
                    log("Now at state: " + currentPonyState.id);
                },
                boop: function () {
                    log("boop");
                    currentPonyState = ponyStates[boop - 1];
                    log("Now at state: " + currentPonyState.id);
                },
                mouth: function () {
                    log("mouth");
                    currentPonyState = ponyStates[mouth - 1];
                    log("Now at state: " + currentPonyState.id);
                }
            };
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

        currentPonyState = ponyStates[4];

        var elem = document.createElement("img");
        elem.setAttribute("src", "img/1.gif");
        elem.setAttribute("height", "200");
        elem.setAttribute("width", "200");
        elem.setAttribute("alt", "Best Pony");
        elem.setAttribute("id", "ponyImg");
        elem.onclick = ponyPet_clicked;

        canvas.appendChild(elem);
        ponyImg = elem;

        changePonyTo(currentPonyState.id);
    };

    //Get every ponypet on the page and initialize them
    var ponyPets = getElementsByAttribute('data-ponypet');
    for (var ponyPetIndex = 0; ponyPetIndex < ponyPets.length; ponyPetIndex++) {
        new ponyPet(ponyPets[ponyPetIndex]);
    }
};